import {
    ref,
    computed
} from 'vue'

export function useCollections() {
    const selectedYear = ref(2024)
    const selectedMonth = ref(0)

    const years = [2023, 2024]
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
    }, ]

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
        filteredCollections
    }
}