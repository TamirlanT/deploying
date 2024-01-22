import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import ErrorPage from '@/pages/ErrorPage.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import DetailsPage from '@/pages/DetailsPage.vue';

const routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: '/',
        name: 'Home',
        component: 'HomePage'
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsPage
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogPage
    },
    {
        path: '/details',
        name: 'Details',
        component: DetailsPage
    },
    {
        path: '/:CatchAll(.*)',
        component: ErrorPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;