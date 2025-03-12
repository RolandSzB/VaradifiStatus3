import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BuyShirt from "../views/BuyShirt.vue";
import CheckChart from "../views/CheckChart.vue";
import EventAdmin from "../views/EventAdmin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/buy",
      name: "buy",
      component: BuyShirt,
    },
    {
      path: "/chart",
      name: "chart",
      component: CheckChart,
    },
    {
      path: "/admin",
      name: "admint",
      component: EventAdmin,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
