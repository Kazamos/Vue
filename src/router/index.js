import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue';
import TextInterpolation from '../views/Lesson/TextInterpolation.vue'
import Exercices from '../views/Exercices.vue';
import Lessons from '../views/Lessons.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Skills from '../views/Skills.vue';
import TP from '../views/TP.vue';
import InlineTemplating from '../views/Lesson/inline-templating.vue';



const router = createRouter({
    history: createWebHistory(),
    routes:[
        // La on a une route pour notre page / (l'accueil)
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/textinterpolation',
            name: 'textinterpolation',
            component: TextInterpolation
        },
        {
            path: '/exercices',
            name: 'exercices',
            component: Exercices
        },
        {
            path: '/lessons',
            name: 'lessons',
            component: Lessons
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '/tp',
            name: 'tp',
            component: TP
        },
        {
            path: '/inline',
            name: 'inline',
            component: InlineTemplating
        }
    ]
})

export default router;