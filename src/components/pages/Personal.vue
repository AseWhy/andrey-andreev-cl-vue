<template>
    <div class="av-personal">
        <div class="av-personal-avatar-container">
            <img
                :src="Avatar"
                class="av-personal-avatar"
            >

            <div class="av-button-container">
                <button
                    @click="logout"
                    class='av-personal-avbutton'
                >
                    Logout
                </button>

                <button
                    @click="$router.push('/orders')"
                    class='av-personal-avbutton'
                >
                    Go orders
                </button>

                <div class="av-personal-avlabel">
                    Balance <strong>{{ getCurrentUser.balance }}$</strong>
                </div>
            </div>
        </div>

        <div class="av-personal-data-container">
            <div class="av-personal-login-name">
                {{ getCurrentUser.login }}
            </div>

            <div class="av-personal-login-desc">
                <div class="av-description">
                    {{ getCurrentUser.description ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }}
                </div>
                
                All your orders in the amount of <strong>0</strong>, amounting to <strong>0$</strong>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import Avatar from '../../assets/img/vector/user.svg';
    import { PUT_CURRENT_USER } from '../../store/entities';


    export default {
        data(){
            return {
                Avatar
            }
        },

        computed: mapGetters([ 'getCurrentUser' ]),

        methods: {
            logout(){
                localStorage.removeItem('service-token');

                this.$store.commit(PUT_CURRENT_USER, null);
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .av-personal {
        width: calc(100% - 256px);
        padding: 3.5rem 128px;
        display: flex;
    }

    .av-personal-avatar {
        width: 250px;
        border-radius: 50%;
        border: 1px solid;
    }

    .av-personal-data-container {
        padding: 0.5rem 2.5rem;
        font-family: Montserrat;
    }

    .av-personal-login-name {
        font-size: 2rem;
    }

    .av-description {
        font-size: 1.25rem;
        padding: 0.75rem 0;
        width: 100%;
    }

    .av-personal-avlabel, .av-personal-avbutton {
        width: 100%;
        border: none;
        background-color: white;
        font-family: Montserrat;
        padding: 0.25rem;
        font-size: 1.15rem;
        text-align: center;
    }

    .av-personal-avbutton {
        cursor: pointer;
    }
    
    .av-personal-avbutton:hover {
        background: whitesmoke;
    }

    .av-button-container {
        margin: 0.5rem 0;
    }
</style>