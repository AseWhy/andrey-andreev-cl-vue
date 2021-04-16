<template>
  <div class="anrv-common-header">
    <div class="swapper">
      <div
        class="left-menu-button"
        @click="switchLeftMenu"
      >
        <img 
          class='left-menu-action'
          :src="getLeftMenuState ? LeftMenuRevert : LeftMenu"
        >

        <transition name='menu-fade'>
          <DropDown
            v-if="getLeftMenuState"
          />
        </transition>
      </div>

      <img
        :src="Logo"
        style="cursor: pointer"
        @click="$router.push('/')"
      >

      <div
        class="profile-menu-button"
        @click="showdLogin"
      >
        <img 
          class='profile-menu-action'
          :src="Login"
        >

          <transition name='menu-fade'>
            <DropLogin
              v-if="getLoginState && actionType == 0"
              @switch="actionType = 1"
            />
          </transition>
          <transition name='menu-fade'>
            <DropRegistration
              v-if="getLoginState && actionType == 1"
              @switch="actionType = 0"
            />
          </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftMenu from '../assets/img/vector/left-menu.svg';
  import LeftMenuRevert from '../assets/img/vector/left-menu-revert.svg';
  import Login from '../assets/img/vector/profile.svg';
  import Logo from '../assets/img/logo.png'
  import { mapActions, mapGetters } from 'vuex';

  import DropDown from "../components/DropDown";
  import DropLogin from "../components/DropLogin";
  import DropRegistration from "../components/DropRegistration";


  export default {
    computed: mapGetters([ 'getLeftMenuState', 'getLoginState' ]),

    methods: {
      ...mapActions([ 'showLogin', 'hideLogin', 'switchLeftMenu' ]),

      showdLogin(){
        if(!this.getLoginState) {
          setTimeout(() => {
            this.showLogin();
            
            document.addEventListener('click', this.hidedLogin)
          }, 0);
        }
      },

      hidedLogin(e){
        if(this.getLoginState && e.path.find(e => e?.classList != null && (e.classList.contains('av-dropdown-login') || e.classList.contains('av-dropdown-registration'))) == null) {
          document.removeEventListener('click', this.hideLogin);

          this.hideLogin();
        }
      }
    },

    data(){
      return {
        actionType: 0,
        LeftMenu,
        LeftMenuRevert,
        Logo,
        Login
      }
    },

    components: {
      DropDown,
      DropLogin,
      DropRegistration
    }
  }
</script>

<style scoped>
  .anrv-common-header {
    height: 5rem;
    width: 100%;
    display: flex;
    position: fixed;
    background-color: white;
    box-shadow: 0px 2px 10px gray;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .anrv-common-header > .swapper {
    width: calc(100% - 460px);
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .left-menu-button, .profile-menu-button {
    width: 2rem;
    height: 2rem;
    margin: auto 0;
    display: flex;
    cursor: pointer;
    position: relative;
  }

  .left-menu-button:hover, .profile-menu-button:hover {
    background-color: whitesmoke;
  }

  .left-menu-action {
    width: 1.15789473684rem;
    height: 1rem;
    margin: auto;
  }

  .profile-menu-action {
    width: 0.82447368421rem;
    height: 1.05210526316rem;
    margin: auto;
  }

  .menu-fade-enter-active {
      animation: menu-fade-in .25s;
  }

  .menu-fade-leave-active {
      animation: menu-fade-in .25s reverse;
  }

  @keyframes menu-fade-in {
      from {
          opacity: 0;
          transform: translateY(-100%);
      }

      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  @media screen and (max-width: 600px) {
    .anrv-common-header > .swapper {
      width: calc(100% - 128px);
    }
  }
</style>
