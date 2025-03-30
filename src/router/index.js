import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductDetail from '../components/ProductDetail.vue'

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
    }, {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/CartView.vue')
    }, {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail
    }],
})

router.beforeEach((to, from, next) => {
  console.log(`Navigation de ${from.fullPath} vers ${to.fullPath}`, to.params);
  next();
});

export default router