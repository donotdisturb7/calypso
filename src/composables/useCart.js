import { useCartStore } from '../stores/cartStore';
import { ref, computed } from 'vue';

// Import decoration data for suggested products
const decorationItems = ref([
  {
      id: "deco1",
      title: "Assiettes",
      description: "Le soleil du Maroc avec de nouvelles assiettes à la boutique et les créations",
      category: "intérieur",
      image: "/src/assets/decoint1.jpg",
      price: 49.99
    },
    {
      id: "decoext1",
      title: "Set de tables",
      description:
        "Nos jolies sirènes, table à café, set de table coquillage, et petits tabourets ",
      category: "extérieur",
      image: "/src/assets/decoext1.jpg",
      price: 99.99
    },
    // {
    //   id: "deco2",
    //   title: "Vase Moderne",
    //   description: "Un vase design pour sublimer votre salon.",
    //   category: "intérieur",
    //   image: "/src/assets/decoint2.jpg",
    //   price: 79.99
    // },
    // {
    //   id: "deco3",
    //   title: "Cadre Photo Vintage",
    //   description: "Un cadre photo au style rétro pour vos souvenirs précieux.",
    //   category: "intérieur",
    //   image: "/src/assets/decoint3.jpg",
    //   price: 59.99
    // },
    {
      id: "decoext2",
      title: "Lanterne de Jardin",
      description: "Illuminez vos soirées en extérieur avec cette lanterne élégante.",
      category: "extérieur",
      image: "/src/assets/decoext2.jpg",
      price: 89.99
    },
    {
      id: "decoext3",
      title: "Pot de Fleurs Design",
      description: "Un pot de fleurs contemporain pour sublimer votre terrasse.",
      category: "extérieur",
      image: "/src/assets/decoext3.jpg",
      price: 69.99
    }
]);

export function useCart() {
  const cartStore = useCartStore();

  // Ajouter un article au panier
  const addItem = (item) => {
    cartStore.addItem(item);
  };

  // Supprimer un article du panier
  const removeItem = (itemId) => {
    const index = cartStore.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cartStore.removeItem(index);
    }
  };

  // Mettre à jour la quantité d'un article
  const updateItemQuantity = (itemId, quantity) => {
    const index = cartStore.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cartStore.updateQuantity(index, quantity);
    }
  };

  // Vider le panier
  const clearCart = () => {
    cartStore.items = [];
    cartStore.saveCart();
  };

  // Suggested products
  const suggestedProducts = computed(() => {
    return decorationItems.value;
  });

  return {
    get cartItems() {
      return cartStore.items;
    },
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    get totalItems() {
      return cartStore.itemCount;
    },
    get totalPrice() {
      return cartStore.totalPrice;
    },
    suggestedProducts
  };
} 