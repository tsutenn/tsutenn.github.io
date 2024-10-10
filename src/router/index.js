import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import ExperiencePage from '@/views/Experience.vue'
import PublicationsPage from '@/views/Publications.vue'
import ProjectsPage from '@/views/Projects.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {title: "Tsutenn's Page"}
    },
    {
        path: '/experience',
        name: 'Experience',
        component: ExperiencePage
    },
    {
        path: '/publications',
        name: 'Publications',
        component: PublicationsPage,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
