import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        // Convertir le prix de '99€' en nombre
        const price = parseInt(item.price.replace('€', ''));
        return total + (price * item.quantity);
      }, 0);
    }
  },
  
  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({
          ...product,
          quantity: 1
        });
      }
      
      // Vous pourriez également sauvegarder le panier dans localStorage ici
      this.saveCart();
    },
    
    removeItem(index) {
      this.items.splice(index, 1);
      this.saveCart();
    },
    
    updateQuantity(index, quantity) {
      if (quantity < 1) return;
      this.items[index].quantity = quantity;
      this.saveCart();
    },
    
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },
    
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.items = JSON.parse(savedCart);
      }
    }
  }
}); 