import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Root.vue'),
        redirect: '/discover',
        children: [
            {
                path: 'discover',
                name: 'discover',
                component: () => import("@/views/discover/index.vue"),
            },
            {
                path: 'music',
                name: 'music',
                component: () => import("@/views/music/index.vue"),
            },
            {
                path: 'video',
                name: 'video',
                component: () => import("@/views/video/index.vue"),
            },
            {
                name: 'dj',
                path: 'dj',
                component: () => import("@/views/dj/index.vue"),
            },
            {
                name: 'like',
                path: 'like',
                component: () => import("@/views/like/index.vue"),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    linkExactActiveClass: 'active', // 精准匹配到，匹配到的项 class新增 active 属性
    routes
})

export default router