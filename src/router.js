import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue'
import Jobs from './components/Jobs.vue'
import JobDotNetDeveloper from './components/JobDotNetDeveloper.vue'
import Legal from './components/Legal.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import Feedback from './components/Feedback.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/jobs', name: 'Jobs', component: Jobs },
  { path: '/jobs/fullstack-entwickler-hamburg', name: '.Net Developer Hamburg', component: JobDotNetDeveloper },
  { path: '/jobs/dotnet-entwickler-hamburg', name: '.Net Developer Hamburg', component: JobDotNetDeveloper },
  { path: '/legal', name: 'Legal', component: Legal },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
  { path: '/feedback', name: 'Feedback', component: Feedback },
  { path: "/:catchAll(.*)", component: NotFound, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;