import { createStore } from 'vuex';
import entities from './entities';

export const PUT_LOGIN_STATE = 'putLoginState';
export const PUT_LEFT_MENU_STATE = 'putLeftMenuState';

export default createStore({
    modules: {
        entities,
    },

    state(){
        return {
            leftMenu: false,
            login: false
        }
    },

    actions: {
        showLogin(context){
            context.commit(PUT_LOGIN_STATE, true);
        },

        hideLogin(context){
            context.commit(PUT_LOGIN_STATE, false);
        },

        showLeftMenu(context){
            context.commit(PUT_LEFT_MENU_STATE, true);
            console.log(1);
        },

        hideLeftMenu(context){
            context.commit(PUT_LEFT_MENU_STATE, false);
            console.log(1);
        },

        switchLeftMenu(context) {
            if(context.state.leftMenu) {
                context.dispatch('hideLeftMenu');
            } else {
                context.dispatch('showLeftMenu');
            }
        },

        switcLogin(context) {
            if(context.state.login) {
                context.dispatch('hideLogin');
            } else {
                context.dispatch('showLogin');
            }
        }
    },

    mutations: {
        [PUT_LOGIN_STATE](state, active) {
            state.login = active;
        },

        [PUT_LEFT_MENU_STATE](state, active) {
            state.leftMenu = active;
        }
    },

    getters: {
        getLeftMenuState: (state) => state.leftMenu,
        getLoginState: (state) => state.login
    }
})