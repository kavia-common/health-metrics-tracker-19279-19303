import { createRouter, createWebHistory } from 'vue-router'

const Dashboard = () => import('@/views/DashboardView.vue')
const Weight = () => import('@/views/WeightView.vue')
const Exercise = () => import('@/views/ExerciseView.vue')
const Wellbeing = () => import('@/views/WellbeingView.vue')
const Settings = () => import('@/views/SettingsView.vue')
const About = () => import('@/views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { title: 'Dashboard' },
    },
    {
      path: '/weight',
      name: 'weight',
      component: Weight,
      meta: { title: 'Weight' },
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise,
      meta: { title: 'Exercise' },
    },
    {
      path: '/wellbeing',
      name: 'wellbeing',
      component: Wellbeing,
      meta: { title: 'Wellbeing' },
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { title: 'Settings' },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'About' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta?.title ? `Health Tracker · ${to.meta.title}` : 'Health Tracker'
})

export default router
