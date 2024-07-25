import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInventory = defineStore('counter', () => {
  const inventory = ref<string[] | null>([])

  return { inventory }
})
