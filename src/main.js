import App from './App.vue'
import { PUT_CURRENT_USER } from './store/entities';
import { createApp } from 'vue'
import moment from "moment";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(store);
app.use(router);
app.config.globalProperties.moment = moment;

app.mount('#app');

window.addEventListener("load", async () => {
    if(localStorage.getItem('service-token') != null) {
        try {
            await store.dispatch("doUpdate");
        } catch (e) {
            localStorage.removeItem('service-token');
        }
    } else {
        store.commit(PUT_CURRENT_USER, null);
    }
});