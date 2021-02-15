import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue'
import Jobs from './components/Jobs.vue'
import JobDotNetDeveloper from './components/JobDotNetDeveloper.vue'
import Kontakt from './components/Kontakt.vue'
import Legal from './components/Legal.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '' } },
  { path: '/jobs', name: 'jobs', component: Jobs, meta: { title: 'Jobs' } },
  { path: '/jobs/fullstack-entwickler-hamburg', name: 'fullstack-dev', component: JobDotNetDeveloper, meta: { title: '.Net Developer Hamburg' } },
  { path: '/jobs/dotnet-entwickler-hamburg', name: 'dotnet-dev', component: JobDotNetDeveloper, meta: { title: '.Net Developer Hamburg' } },
  { path: '/kontakt', name: 'kontakt', component: Kontakt, meta: { title: 'Kontakt' } },
  { path: '/legal', name: 'legal', component: Legal, meta: { title: 'Impressum' } },
  { path: '/privacy-policy', name: 'privacy', component: PrivacyPolicy, meta: { title: 'Datenschutzerklärung' } },
  { path: "/:catchAll(.*)", name: 'notfound', component: NotFound, meta: { title: 'Not Found' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;