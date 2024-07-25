import { onBeforeMount, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import getFromLocalStorage from '@/utils/getFromLocalStorage'
import { INVENTORY_KEY } from '@/utils/keys'

export interface IItem {
  id: string
  title: string
  amount: number | null
  desc?: string
}

export const useInventory = defineStore('inventory', () => {
  console.log(getFromLocalStorage(INVENTORY_KEY))

  const inventory = ref<IItem[]>([
    { id: '1', title: 'Shield', desc: 'a strong wooden shield', amount: 5 },
    { id: '2', title: 'Sword', desc: 'a strong iron sword', amount: 3 },
    { id: '3', title: '', amount: null },
    { id: '4', title: '', amount: null },
    { id: '5', title: '', amount: null },
    { id: '6', title: '', amount: null },
    { id: '7', title: '', amount: null },
    { id: '8', title: '', amount: null },
    { id: '9', title: '', amount: null },
    { id: '10', title: '', amount: null },
    { id: '11', title: '', amount: null },
    { id: '12', title: '', amount: null },
    { id: '13', title: '', amount: null },
    { id: '14', title: '', amount: null },
    { id: '15', title: '', amount: null },
    { id: '16', title: '', amount: null },
    { id: '17', title: '', amount: null },
    { id: '18', title: '', amount: null },
    { id: '19', title: '', amount: null },
    { id: '20', title: '', amount: null },
    { id: '21', title: '', amount: null },
    { id: '22', title: '', amount: null },
    { id: '23', title: '', amount: null },
    { id: '24', title: '', amount: null },
    { id: '25', title: '', amount: null },
  ])

  const removeItem = (id: string, amount: number) => {
    const item = inventory.value?.find((item: IItem) => item.id === id)
    if ((item?.amount as number) > amount && item) {
      item.amount = (item.amount as number) - amount
    } else {
      inventory.value = inventory.value?.filter((item: IItem) => item.id !== id)
    }
  }

  onBeforeMount(() => {
    if (getFromLocalStorage(INVENTORY_KEY) !== undefined) {
      console.log('it works')
      inventory.value = getFromLocalStorage(INVENTORY_KEY)
      console.log(getFromLocalStorage(INVENTORY_KEY))
    }
  })

  return { inventory, removeItem }
})
