import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { id: string; name: string; quantity: number }[],
  }),
  actions: {
    addToCart(item: { id: string; name: string; quantity: number }) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push(item);
      }
    },
  },
});
