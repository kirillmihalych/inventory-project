<template>
  <div class="inventory-wrapper">
    <div>
      <div class="grid-wrapper">
        <div class="item-info-wrapper">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzAYAAABhAGN1a4IAAAAASUVORK5CYII="
            alt="Mock Image"
            class="item-image"
          />
          <h2>Item name</h2>
          <p>Here are some text bla-bla-bla</p>
        </div>
        <div class="items-container">
          <draggable
            v-model="inventory.inventory"
            itemKey="id"
            tag="ul"
            class="items-container"
          >
            <template #item="{ element: item }">
              <div class="item">
                <li>{{ item.title }}</li>
                <span class="item-amount" v-if="item.amount !== null">{{
                  item.amount
                }}</span>
              </div>
            </template>
          </draggable>
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
import { useInventory } from '@/stores/inventory'
import draggable from 'vuedraggable'

const inventory = useInventory()
</script>

<style lang="scss"></style>
