import AnddraService from "../service/AnddraService"

export const PUT_CURRENT_USER = 'PUT_CURRENT_USER';
export const PUT_ORDERS = 'PUT_ORDERS';

export default {
    namespaced: false,

    state(){
        return {
            currentUser: -1, // Not loaded
            entities: {
                orders: -1 // Not loaded
            }
        }
    },

    actions: {
        async fetchOrders(context) {
            const response = await AnddraService.allOrders();

            if(response.error) {
                throw new Error(response.message);
            } else {
                console.log(response);

                context.commit(PUT_ORDERS, response.data);
            }
        },

        async doLogin(context, { login, password }) {
            const response = await AnddraService.login({ login, password });

            if(response.error) {
                throw new Error(response.message);
            } else {
                await context.dispatch("doUpdate");
            }
        },

        async doRegister(context, { login, password }) {
            const response = await AnddraService.registration({ login, password });

            if(response.error) {
                throw new Error(response.message);
            } else {
                await context.dispatch("doUpdate");
            }
        },

        async doUpdate(context) {
            const response = await AnddraService.current();
            
            if(response.error) {
                throw new Error(response.message);
            } else {
                context.commit(PUT_CURRENT_USER, response.data);
            }
        }
    },

    mutations: {
        [PUT_CURRENT_USER](state, data){
            state.currentUser = data;
        },

        [PUT_ORDERS](state, data) {
            state.entities.orders = Array.from(data);
        }
    },

    getters: {
        getCurrentUser(state){
            return state.currentUser;
        },

        getOrders(state) {
            return state.entities.orders
        }
    }
}