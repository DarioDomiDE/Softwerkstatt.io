import Home from './components/Home.vue'
import WhoWeAre from './components/WhoWeAre.vue'
import Handwerk from './components/Handwerk.vue'
import Jobs from './components/Jobs.vue'
import JobDotNetDeveloper from './components/JobDotNetDeveloper.vue'
import JobFullStackDeveloper from './components/JobFullStackDeveloper.vue'
import Kontakt from './components/Kontakt.vue'
import Legal from './components/Legal.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '', desc: 'Softwareentwicklung Consulting aus Hamburg: Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle' } },
  { path: '/wer-wir-sind', name: 'whoweare', component: WhoWeAre, meta: { title: 'Wer wir sind', desc: 'Wir leben Technologie und lieben Menschen. Dafür schlägt unser Herz. Softwerkstatt – Made in Hamburg.' } },
  { path: '/handwerk', name: 'handwerk', component: Handwerk, meta: { title: 'Handwerk', desc: 'Wir leben Software Craftsmanship und lieben Programmierung. Softwerkstatt – Made in Hamburg.' } },
  { path: '/jobs', name: 'jobs', component: Jobs, meta: { title: 'Jobs', desc: 'Werde als Software Entwickler/in Teil der Hamburger Softwerkstatt! Wir freuen uns darauf, Dich persönlich kennenzulernen. » Jetzt bewerben!' } },
  { path: '/jobs/fullstack-entwickler-hamburg', name: 'fullstackdev', component: JobFullStackDeveloper, meta: { title: 'Full Stack Entwickler/in Hamburg', desc: 'Werde Full Stack Entwickler/in bei Softwerkstatt in Hamburg! Wir freuen uns darauf, Dich persönlich kennenzulernen. » Jetzt Bewerben!' } },
  { path: '/jobs/dotnet-entwickler-hamburg', name: 'dotnetdev', component: JobDotNetDeveloper, meta: { title: '.Net Entwickler/in Hamburg', desc: 'Werde .Net Entwickler/in bei Softwerkstatt in Hamburg! Wir freuen uns darauf, Dich persönlich kennenzulernen. » Jetzt Bewerben!' } },
  { path: '/kontakt', name: 'kontakt', component: Kontakt, meta: { title: 'Kontakt', desc: 'Kontakt zur Hamburger Softwerkstatt. Ihr Consulting Partner für Digitalierung und Prozessoptimierung. » Jetzt Anfragen!' } },
  { path: '/legal', name: 'legal', component: Legal, meta: { title: 'Impressum', desc: 'Impressum der Softwerkstatt aus Hamburg' } },
  { path: '/privacy-policy', name: 'privacy', component: PrivacyPolicy, meta: { title: 'Datenschutzerklärung', desc: 'Datenschutzerklärung der Hamburger Softwerkstatt' } },
  { path: "/:catchAll(.*)", name: 'notfound', component: NotFound, meta: { title: 'Not Found', desc: 'Softwerkstatt Consulting aus Hamburg' } },
];

export default routes;