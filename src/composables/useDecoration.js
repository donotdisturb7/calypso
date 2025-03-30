import { ref } from "vue";

export function useDecoration() {
  const categories = ["tous", "intérieur", "extérieur"];

  const decorationItems = [
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
