<template>
  <div class="inventory-wrapper">
    <div>
      <div class="grid-wrapper">
        <InventoryInfo />
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
          <ModalItemHandler
            v-show="selectedItem"
            @closeModal="selectedItem = null"
            :selectedItem="selectedItem"
          />
        </div>
      </div>
      <InventoryFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInventory, type IItem } from '@/stores/inventory'
import { ref } from 'vue'
import draggable from 'vuedraggable'
import setToLocalStorage from '@/utils/setToLocalStorage'
import InventoryInfo from '@/components/InventoryInfo.vue'
import InventoryFooter from '@/components/InventoryFooter.vue'
import ModalItemHandler from '@/components/modals/ModalItemHandler.vue'

const inventory = useInventory()
const selectedItem = ref<IItem | null>(null)
const selectItem = (item: IItem) => (selectedItem.value = item)
</script>
