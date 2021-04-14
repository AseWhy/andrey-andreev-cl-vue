import { createRouter, createWebHistory } from "vue-router";

import Contacts from '../components/pages/Contacts.vue';
import Main from '../components/pages/Main.vue';
import PageNotFound from '../components/pages/PageNotFound.vue';

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
        title: 'Home'
    }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: {
        title: 'Contacts'
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
    meta: {
        title: 'Whoops!'
    } 
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router;