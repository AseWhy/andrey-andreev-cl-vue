import { createRouter, createWebHashHistory } from "vue-router";

import Contacts from '../components/pages/Contacts.vue';
import Main from '../components/pages/Main.vue';
import About from '../components/pages/About.vue';
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
    path: "/about",
    name: "About-the-studio",
    component: About,
    meta: {
        title: 'About the studio'
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
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router;