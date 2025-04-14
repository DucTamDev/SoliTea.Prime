import { AppConstants } from '@/core/constants/app.constants';
import BlankLayout from '@/layout/BlankLayout.vue';
import MainLayout from '@/layout/MainLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'MainLayout',
            component: MainLayout,
            children: [
                {
                    path: '',
                    alias: ['trang-chu', 'home'],
                    name: 'home',
                    component: () => import('@/views/pages/Home.vue'),
                    meta: { title: 'Trang chủ' }
                },
                {
                    path: 'gioi-thieu',
                    alias: 'about',
                    name: 'About',
                    component: () => import('@/views/pages/About.vue'),
                    meta: { title: 'Giới thiệu' }
                },
                {
                    path: '/san-pham',
                    children: [
                        {
                            path: '',
                            name: 'Product',
                            component: () => import('@/views/pages/Product.vue'),
                            meta: { title: 'Sản Phẩm' }
                        },
                        {
                            path: ':id',
                            name: 'ProductDetail',
                            component: () => import('@/components/product/ProductDetail.vue'),
                            meta: { breadcrumb: 'Chi tiết Sản Phẩm' }
                        }
                    ]
                },
                {
                    path: 'nhuong-quyen',
                    alias: 'franchise',
                    name: 'Franchise',
                    component: () => import('@/views/pages/Franchise.vue'),
                    meta: { title: 'Nhượng quyền' }
                },
                {
                    path: 'chi-nhanh',
                    alias: 'store-branch',
                    name: 'StoreBranches',
                    component: () => import('@/views/pages/StoreBranches.vue'),
                    meta: { title: 'Chi Nhánh' }
                },
                {
                    path: 'lien-he',
                    alias: 'contact',
                    name: 'Contact',
                    component: () => import('@/views/pages/Contact.vue'),
                    meta: { title: 'Liên hệ' }
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'BlankLayout',
            component: BlankLayout,
            children: [
                {
                    path: 'pages/notfound',
                    alias: 'not-found',
                    name: 'NotFound',
                    component: () => import('@/views/pages/NotFound.vue'),
                    meta: { title: 'notfound' }
                },
                {
                    path: 'pages/empty',
                    alias: 'empty',
                    name: 'Empty',
                    component: () => import('@/views/pages/Empty.vue'),
                    meta: { title: 'empty' }
                },
                {
                    path: '',
                    alias: 'not-found',
                    name: 'NotFound',
                    component: () => import('@/views/pages/NotFound.vue'),
                    meta: { title: 'notfound' }
                }
            ]
        }
    ]
});

function getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
}

function hasPermission(user: any, roles: any) {
    if (!user || !user.role) return false;
    if (!roles) return true;
    return roles.includes(user.role);
}

router.beforeEach(async (to, from, next) => {
    const user = getUser();

    if (to.meta.requiresAuth) {
        if (!user || !hasPermission(user, to.meta.roles)) {
            return next({ name: 'home' });
        }
    }

    const titleKey = (to.meta.title ?? '').toString().trim();

    document.title = titleKey ? `${AppConstants.AppName} - ${titleKey}` : AppConstants.AppName;
    next();
});

export default router;
