import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView,
    }, {
        path: '/collections',
        name: 'collections',
        component: () =>
            import ('@/views/CollectionsView.vue'),
    }, {
        path: '/gallery',
        name: 'gallery',
        component: () =>
            import ('@/views/GalleryView.vue'),
    }, {
        path: '/decoration',
        name: 'decoration',
        component: () =>
            import ('@/views/DecorationView.vue'),
    }, ],
})

export default router