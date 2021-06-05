import { createRouter, createWebHashHistory } from "vue-router";

import About from '../components/pages/About.vue';
import Contacts from '../components/pages/Contacts.vue';
import Main from '../components/pages/Main.vue';
import Orders from '../components/pages/Orders.vue';
import PageNotFound from '../components/pages/PageNotFound.vue';
import Personal from '../components/pages/Personal.vue';

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
    path: "/personal",
    name: "Personal",
    component: Personal,
    meta: {
      title: 'Personal account'
    }
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    meta: {
      title: 'Orders'
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