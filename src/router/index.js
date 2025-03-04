import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: 'import.meta.env.BASE_URL',
  routes: [
    {
      path: "/", 
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: App
    }
  ],
});

export default router;