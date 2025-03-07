import { ref } from "vue";

export function useDecoration() {
  const categories = ["tous", "intérieur", "extérieur"];

  const decorationItems = [
    {
      id: "deco1",
      title: "Décoration Intérieure",
      description: "Une décoration élégante pour votre intérieur.",
      category: "intérieur",
      image: "/src/assets/decoint1.jpg",
    },
    {
      id: "decoext1",
      title: "Décoration Extérieure",
      description:
        "Embellissez votre espace extérieur avec cette magnifique décoration.",
      category: "extérieur",
      image: "/src/assets/decoext1.jpg",
    },
  ];

  const filterByCategory = (category) => {
    if (category === "tous") {
      return decorationItems;
    }
    return decorationItems.filter((item) => item.category === category);
  };

  return {
    decorationItems,
    categories,
    filterByCategory,
  };
}
