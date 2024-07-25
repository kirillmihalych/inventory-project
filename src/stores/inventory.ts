import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

interface IItem {
  id: string
  title: string
  amount: number | null
}

export const useInventory = defineStore('counter', () => {
  const inventory = ref<IItem[] | null>([
    { id: '1', title: 'Shield', amount: 5 },
    { id: '2', title: 'Sword', amount: 3 },
    { id: '3', title: 'Bow', amount: 1 },
    { id: '4', title: 'Potion', amount: 2 },
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

  // const fillEmptySlots = () => {
  //   let id = 26

  //   while (inventory.value && inventory.value.length < 25) {
  //     inventory.value?.push({
  //       id: id.toString(),
  //       title: '',
  //       amount: null,
  //     })

  //     id += 1
  //   }
  // }

  // onMounted(() => {
  //   console.log('it fills')
  //   fillEmptySlots()
  // })

  return { inventory }
})
