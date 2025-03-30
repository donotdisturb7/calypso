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
        // Handle different price formats: number, string with €, or string without €
        let price = item.price;
        if (typeof price === 'string') {
          // Remove the € symbol and any non-numeric characters except decimal point
          price = parseFloat(price.replace(/[^\d.-]/g, ''));
        }
        return total + (price * item.quantity);
      }, 0);
    }
  },
  
  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += product.quantity || 1;
      } else {
        this.items.push({
          ...product,
          quantity: product.quantity || 1
        });
      }
      
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
        try {
          this.items = JSON.parse(savedCart);
          console.log('Cart loaded from localStorage:', this.items);
        } catch (error) {
          console.error('Error parsing cart from localStorage:', error);
          this.items = [];
          localStorage.removeItem('cart');
        }
      }
    },
    
    clearCart() {
      this.items = [];
      this.saveCart();
    }
  }
}); 