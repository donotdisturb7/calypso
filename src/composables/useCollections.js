import {
    ref,
    computed,
    onMounted
} from 'vue'

export function useCollections() {
    const selectedYear = ref(2025)
    const selectedMonth = ref(0)

    const years = [2023, 2024, 2025]
    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ]

    const collections = [{
        id: 1,
        image: '/src/assets/collection1.png',
        title: 'VETEMENT 1',
        price: 50,
        soldOut: true,
        year: 2024,
        month: 0
    }, {
        id: 2,
        image: '/src/assets/collection2.png',
        title: 'VETEMENT 2',
        price: 60,
        soldOut: false,
        year: 2024,
        month: 0
    }, {
        id: 3,
        image: '/src/assets/collection3.png',
        title: 'VETEMENT 3',
        price: 40,
        soldOut: false,
        year: 2024,
        month: 1
    }, {
        id: 4,
        image: '/src/assets/gallery/1.jpg',
        title: 'VETEMENT 4',
        price: 40,
        soldOut: false,
        year: 2024,
        month: 1
        }, {
        id: 5,
        image: '/src/assets/Collections/2025/FEV2025.1.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
        }, {
        id: 6,
        image: '/src/assets/Collections/2025/FEV2025.3.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
    }, {
        id: 7,
        image: '/src/assets/Collections/2025/FEV2025.4.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
    }, {
        id: 8,
        image: '/src/assets/Collections/2025/FEV2025.5.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
    }, {
        id: 9,
        image: '/src/assets/Collections/2025/FEV2025.6.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
    }, {
        id: 10,
        image: '/src/assets/Collections/2025/FEV2025.7.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
    }, {
        id: 11,
        image: '/src/assets/Collections/2025/FEV2025.8.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
    }, {
        id: 12,
        image: '/src/assets/Collections/2025/FEEV2025.9.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
    }, {
        id: 13,
        image: '/src/assets/Collections/2025/FEV2025.10.png',
        title: 'Maillots de bain',
        price: 24,
        soldOut: false,
        year: 2025,
        month: 1
    }]

    // Fonction pour trouver le premier mois avec des éléments pour une année donnée
    const findFirstMonthWithItems = (year) => {
        const monthsWithItems = collections
            .filter(item => item.year === year)
            .map(item => item.month)

        return monthsWithItems.length > 0 ? Math.min(...monthsWithItems) : 0
    }

    // Initialiser selectedMonth avec le premier mois contenant des éléments
    onMounted(() => {
        selectedMonth.value = findFirstMonthWithItems(selectedYear.value)
    })

    // Mettre à jour le mois sélectionné lorsque l'année change
    const updateSelectedMonth = () => {
        selectedMonth.value = findFirstMonthWithItems(selectedYear.value)
    }

    // Observer les changements d'année pour mettre à jour le mois
    const setYear = (year) => {
        selectedYear.value = year
        updateSelectedMonth()
    }

    const filteredCollections = computed(() => {
        return collections.filter(item =>
            item.year === selectedYear.value &&
            item.month === selectedMonth.value
        )
    })

    return {
        selectedYear,
        selectedMonth,
        years,
        months,
        filteredCollections,
        setYear,
        collections
    }
}