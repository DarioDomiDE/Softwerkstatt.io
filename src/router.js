import { createWebHistory, createRouter } from 'vue-router';
import { routes } from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  var postfix = 'Softwerkstatt | Software Entwicklung Consulting Hamburg '
  var title = to.meta.title || ''
  if(title != '') {
    title += ' | '
  }
  title += postfix;
  document.title = title
  document.querySelector('meta[name="description"]').setAttribute("content", to.meta.desc || '')
  next()
})

export default router;