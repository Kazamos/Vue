import { createRouter, createWebHistory } from 'vue-router'

// -----------------------------
// 🔹 1. Routes automatiques
// -----------------------------
const exercicesModules = import.meta.glob('../views/Exercices/*.vue')
const lessonsModules = import.meta.glob('../views/Lessons/*.vue')
const tpModules = import.meta.glob('../views/TP/*.vue')

// Fonction utilitaire pour générer des routes
const makeRoutes = (modules, basePath) => {
  return Object.keys(modules).map((path) => {
    const name = path.split('/').pop().replace('.vue', '')
    return {
      path: `${basePath}/${name.toLowerCase()}`,
      name: name,
      component: modules[path],
    }
  })
}

// Génération automatique des groupes
const exercicesRoutes = makeRoutes(exercicesModules, '/exercices')
const lessonsRoutes = makeRoutes(lessonsModules, '/lessons')
const tpRoutes = makeRoutes(tpModules, '/tp')

// -----------------------------
// 🔹 2. Routes manuelles
// -----------------------------
const manualRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/About.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact/Contact.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile/Profile.vue'),
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/Skills/Skills.vue'),
  },
]

// -----------------------------
// 🔹 3. Fusion des routes
// -----------------------------
const routes = [
  ...manualRoutes,
  ...exercicesRoutes,
  ...lessonsRoutes,
  ...tpRoutes,
]

// -----------------------------
// 🔹 4. Création du routeur
// -----------------------------
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router