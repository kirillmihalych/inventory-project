<template>
  <div class="item-desc">
    <div class="item-desc-img"></div>
    <div>
      <h2>{{ props.selectedItem?.title }}</h2>
      <p>{{ props.selectedItem?.desc }}</p>
    </div>
    <div>
      <button
        class="delete-btn"
        @click="enterRemovalMode"
        v-if="!isRemovalMode"
      >
        Удалить предмет
      </button>
      <div v-if="isRemovalMode" class="modal-remove-container">
        <input
          type="text"
          v-model="selectedAmount"
          placeholder="Введите количество"
        />
        <div class="btns-container">
          <button @click="exitRemovalMode" class="btn-cancel">Отмена</button>
          <button
            @click="
              inventory.removeItem(
                selectedItem?.id as string,
                selectedAmount as number
              )
            "
            class="btn-confirm"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
    <div>
      <button @click="closeModal" class="close-modal-btn">x</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInventory, type IItem } from '@/stores/inventory'
import { ref } from 'vue'
interface IModalItemHandlerProps {
  selectedItem: IItem | null
}

const inventory = useInventory()

const props = defineProps<IModalItemHandlerProps>()

const emits = defineEmits(['closeModal'])

const selectedAmount = ref<number | null>(null)

const isRemovalMode = ref(false)
const enterRemovalMode = () => (isRemovalMode.value = true)
const exitRemovalMode = () => (isRemovalMode.value = false)
const closeModal = () => {
  emits('closeModal')
}
</script>
