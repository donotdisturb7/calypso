import { ref } from 'vue'

export function useDecoration() {
  const categories = ['tous', 'intérieur', 'extérieur', 'cérémonie']
  
  const decorationItems = [
    {
      id: 'deco1',
      title: 'Décoration Intérieure',
      description: 'Une décoration élégante pour votre intérieur.',
      category: 'intérieur',
      image: '/images/decoext1.jpg'
    },
    {
      id: 'decoext1',
      title: 'Décoration Extérieure',
      description: 'Embellissez votre espace extérieur avec cette magnifique décoration.',
      category: 'extérieur',
      image: '/images/decoext1.jpg'
    },
    {
      id: 'decoceremonie1',
      title: 'Décoration de Cérémonie',
      description: 'Parfaite pour les occasions spéciales.',
      category: 'cérémonie',
      image: '/images/decoceremonie1.jpg'
    }
  ]

  const filterByCategory = (category) => {
    if (category === 'tous') {
      return decorationItems;
    }
    return decorationItems.filter(item => item.category === category);
  };

  return {
    decorationItems,
    categories,
    filterByCategory
  }
}
