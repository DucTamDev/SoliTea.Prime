import AdminLayout from '@/layout/AdminLayout.vue';
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
                    path: 'san-pham',
                    alias: 'product',
                    name: 'Product',
                    component: () => import('@/views/pages/Product.vue'),
                    meta: { title: 'Sản phẩm' }
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
            path: '/admin',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/InputDoc.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/ButtonDoc.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/TableDoc.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/ListDoc.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/TreeDoc.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/PanelsDoc.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/OverlayDoc.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/MediaDoc.vue')
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/MessagesDoc.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/FileDoc.vue')
                },
                {
                    path: '/uikit/menu',
                    name: 'menu',
                    component: () => import('@/views/uikit/MenuDoc.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/ChartDoc.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue')
                },
                {
                    path: '/uikit/timeline',
                    name: 'timeline',
                    component: () => import('@/views/uikit/TimelineDoc.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'BlankLayout',
            component: BlankLayout,
            children: [
                {
                    path: 'auth/login',
                    alias: 'login',
                    name: 'Login',
                    component: () => import('@/views/pages/auth/Login.vue'),
                    meta: { title: 'login' }
                },
                {
                    path: 'auth/access',
                    name: 'accessDenied',
                    component: () => import('@/views/pages/auth/Access.vue')
                },
                {
                    path: 'auth/error',
                    name: 'error',
                    component: () => import('@/views/pages/auth/Error.vue')
                },
                {
                    path: 'pages/notfound',
                    alias: 'not-found',
                    name: 'NotFound',
                    component: () => import('@/views/pages/NotFound.vue'),
                    meta: { title: 'notfound' }
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

// Hàm chuẩn hóa tiêu đề (viết hoa chữ cái đầu)
function capitalizeTitle(str: string) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

router.beforeEach(async (to, from, next) => {
    const user = getUser();

    if (to.meta.requiresAuth) {
        if (!user || !hasPermission(user, to.meta.roles)) {
            return next({ name: 'home' });
        }
    }

    // const i18nInstance = await i18nPlugin.getI18n();

    const titleKey = (to.meta.title ?? '').toString().trim();
    // const translatedTitle = titleKey ? (i18nInstance.global.t as (key: string) => string)(titleKey) : titleKey;

    // document.title = translatedTitle ? `${AppConstants.AppName} - ${translatedTitle}` : AppConstants.AppName;

    document.title = titleKey;
    next();
});

export default router;
