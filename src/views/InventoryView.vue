<template>
  <div class="inventory-wrapper">
    <div>
      <div class="grid-wrapper">
        <div class="item-info-wrapper">
          <div class="item-image"></div>
          <h2>Item name</h2>
          <p>Here are some text bla-bla-bla</p>
        </div>
        <div class="items-container">
          <draggable
            v-model="inventory.inventory"
            itemKey="id"
            tag="ul"
            class="items-container"
            :move="
              setToLocalStorage(
                'inventory',
                JSON.stringify(inventory.inventory)
              )
            "
          >
            <template #item="{ element: item }">
              <div class="item" @click="selectItem(item)">
                <li>{{ item.title }}</li>
                <span class="item-amount" v-if="item.amount !== null">{{
                  item.amount
                }}</span>
              </div>
            </template>
          </draggable>
          <div
            class="item-desc"
            v-show="selectedItem"
            @blur="selectedItem = null"
          >
            <div class="item-desc-img"></div>
            <div>
              <h2>{{ selectedItem?.title }}</h2>
              <p>{{ selectedItem?.desc }}</p>
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
                  <button @click="exitRemovalMode" class="btn-cancel">
                    Отмена
                  </button>
                  <button
                    @click="
                      inventory.removeItem(
                        selectedItem?.id as string,
                        selectedAmount
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
        </div>
      </div>
      <footer class="inventory-footer">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          reprehenderit numquam explicabo recusandae libero fugiat, ad obcaecati
          dicta voluptatibus dignissimos sint ipsum fugit autem architecto
          eligendi harum, assumenda inventore ratione!
        </p>
        <button class="btn footer-btn">x</button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInventory, type IItem } from '@/stores/inventory'
import { ref } from 'vue'
import draggable from 'vuedraggable'
import setToLocalStorage from '@/utils/setToLocalStorage'

const inventory = useInventory()

const selectedItem = ref<IItem | null>(null)
const selectedAmount = ref<number | null>(null)

const isRemovalMode = ref(false)
const enterRemovalMode = () => (isRemovalMode.value = true)
const exitRemovalMode = () => (isRemovalMode.value = false)

const closeModal = () => (selectedItem.value = null)

const selectItem = (item: IItem) => (selectedItem.value = item)
</script>

<style lang="scss"></style>
