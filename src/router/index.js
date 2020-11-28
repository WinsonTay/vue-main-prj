import { createRouter, createWebHistory } from "vue-router";
import CoachDetails from '../views/coaches/CoachDetails.vue';
import CoachesList from '../views/coaches/CoachesList.vue';
import CoachRegistration from '../views/coaches/CoachRegistration.vue';
import ContactCoach from '../views/requests/ContactCoach.vue';
import RequestReceived from '../views/requests/RequestReceived.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: "/", redirect: "/coaches" },
  {
    path: "/coaches",
    component: CoachesList,
  },
  {
    path: "/coaches/:id",
    component: CoachDetails,
    children: [{ path: "contact", component: ContactCoach }],
  },
  {
    path: "/register",
    component: CoachRegistration,
  },
  {
    path: "requests",
    component: RequestReceived,
  },
  //Not found page
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
