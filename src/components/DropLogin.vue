<template>
    <div class="av-dropdown-login">
        <h4 class="dropdown-login-header">
            Login
        </h4>
        <p class="dropdown-login-tip">
            Not a registered user yet? 
            <RouterLink to="/">Sign Up</RouterLink>
        </p>

        <MaterialInput
            class='dropdown-login-material-input'
            label='Login'
            v-model="login"
        />

        <MaterialInput
            class='dropdown-login-material-input'
            label="Password"
            type='password'
            v-model="password"
        />

        <div class="side">
            <div class="leftside">
                <span 
                    class="checkbox"
                    @click="remember = !remember"
                >
                    {{ remember ? '✓' : ' ' }}
                </span>

                Remember me
            </div>

            <div class="right-side">
                <RouterLink to="/">
                    Forgot password?
                </RouterLink>
            </div>
        </div>

        <button class="login">
            Login
        </button>

        <div class="separator">
            <hr>
            or
            <hr>
        </div>

        <div class="variants">
            <div class="sign-up-facebook sign-up-service">
                <img
                    :src="FaceBook"
                >
                <span style='margin: auto 0'>
                    Sign Up with Facebook
                </span>
            </div>

            <div class="sign-up-google sign-up-service">
                <img
                    :src="Google"
                >
                <span style='margin: auto 0'>
                    Sign Up with Google
                </span>
            </div>
        </div>

        <p class="privacy-tip">
            By logging in, you agree to our Terms of Use and <RouterLink to="/">Privacy Policy</RouterLink>
        </p>
    </div>
</template>

<script>
    import MaterialInput from "./MaterialInput";
    import Google from "../assets/img/vector/google.svg";
    import FaceBook from "../assets/img/vector/facebook.svg";

    export default {
        data(){
            return {
                login: '',
                password: '',
                remember: false,
                FaceBook,
                Google
            }
        },
        
        components: {
            MaterialInput
        }
    }
</script>

<style scoped>
    .dropdown-login-material-input {
        margin: 1rem 0;
    }

    .dropdown-login-header {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 1.5rem;
        margin: 0 0 1rem;
    }

    .dropdown-login-tip {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 0.875rem;
        margin: 0;
    }

    .side {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        font-family: Montserrat;
        font-style: normal;
        user-select: none;
        font-weight: 300;
        font-size: 0.875rem;
    }

    .side .checkbox {
        width: 1rem;
        height: 1rem;
        display: inline-block;
        background-color: #C4C4C4;
        border-radius: 0.35rem;
    }

    .sign-up-service {
        padding: 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.5);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 1.125rem;
        display: flex;
        justify-content: center;
        margin: 0.5rem 0;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .sign-up-service:hover {
        background-color: whitesmoke;
    }

    .privacy-tip {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.5);
        margin: 2rem 0 0;
        width: min(30vw, 250pt);
        word-break: break-all;
        white-space: break-spaces;
        overflow: hidden;
    }

    .separator {
        display: flex;
        gap: 2.5rem;
    }

    .login {
        padding: 0.5rem 3.5rem;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 1.5rem;
        border: none;
        cursor: pointer;
        background-color: rgba(66, 253, 119, 0.33);
        border-radius: 4px;
        margin: .75rem;
    }

    .login:hover {
        background-color: rgba(66, 253, 119, 0.55);
    }

    .av-dropdown-login {
        position: absolute;
        top: 3.5rem;
        left: 0;
        z-index: -1;
        background: white;
        text-align: center;
        padding: 0 2.5rem 2.5rem;
        border-radius: 0 0 5rem 5rem;
        box-shadow: 0px 10px 10px gray;
        cursor: default;
    }

    .av-menu-item {
        padding: 0.5rem;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .av-menu-item:hover {
        background-color: whitesmoke;
    }

    .av-dropdown-login {
        white-space: pre;
        left: -600%;
    }

    hr {
        width: 80%;
    }
</style>