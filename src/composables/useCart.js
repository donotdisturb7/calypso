import { ref, computed, watch } from 'vue';
import { useDecoration } from './useDecoration';

// Récupération des produits de décoration
const { decorationItems } = useDecoration();

// Récupération du panier depuis le localStorage au démarrage
const savedCart = localStorage.getItem('cart');
const initialCart = savedCart ? JSON.parse(savedCart) : [];

// Utilisation d'une référence partagée pour le panier
const cartItems = ref(initialCart);

// Sauvegarde du panier dans localStorage chaque fois qu'il change
watch(
  cartItems,
  (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    console.log('Panier sauvegardé dans localStorage:', newCart);
  },
  { deep: true } // Important pour détecter les changements dans les objets imbriqués
);

export function useCart() {
  // Ajouter un article au panier
  const addItem = (item) => {
    console.log('Tentative d\'ajout au panier:', item);

    const existingItemIndex = cartItems.value.findIndex(
      cartItem => cartItem.id === item.id
    );

    if (existingItemIndex >= 0) {
      // L'article existe déjà dans le panier, mettre à jour la quantité
      console.log('Article existant, mise à jour de la quantité');
      cartItems.value[existingItemIndex].quantity += item.quantity;
    } else {
      // Ajouter un nouvel article
      console.log('Nouvel article ajouté au panier');
      cartItems.value.push({ ...item });
    }

    // La sauvegarde dans localStorage se fait automatiquement grâce au watcher
  };

  // Supprimer un article du panier
  const removeItem = (itemId) => {
    const index = cartItems.value.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cartItems.value.splice(index, 1);
    }
  };

  // Mettre à jour la quantité d'un article
  const updateItemQuantity = (itemId, quantity) => {
    const item = cartItems.value.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  };

  // Vider le panier
  const clearCart = () => {
    cartItems.value = [];
  };

  // Calculer le nombre total d'articles
  const totalItems = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.quantity || 1), 0);
  });

  // Calculer le prix total
  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
      return total + (item.price || 99.99) * (item.quantity || 1);
    }, 0);
  });

  // Produits suggérés pour la section "Vous pourriez aimer"
  const suggestedProducts = computed(() => {
    // Prendre jusqu'à 4 produits de décoration pour les suggestions
    return decorationItems.slice(0, 4);
  });

  return {
    cartItems,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    totalItems,
    totalPrice,
    suggestedProducts
  };
} 