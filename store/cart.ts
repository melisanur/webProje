import { defineStore } from 'pinia';
import { getDatabase, ref, set } from 'firebase/database';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { id: string; name: string; price: number; image: string; quantity: number }[],
  }),
  actions: {
    async addToCart(item: { id: string; name: string; price: number; image: string; quantity: number }) {
      const db = getDatabase();
      const cartRef = ref(db, `cart/${item.id}`);
      try {
        await set(cartRef, item);
        this.items.push(item);
      } catch (error) {
        console.error("Sepete ekleme sırasında hata oluştu:", error);
      }
    },
  },
});