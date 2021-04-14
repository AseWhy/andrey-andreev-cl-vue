<template>
    <div
        class="av-bandge-common"
        @mouseenter="details = true"
        @mouseleave="details = false"
    >
        <slot/>


        <transition name="fade">
            <Composer
                v-if="details && srcList"
                :centered="centered"
                :fullsize='fullsize'
                :srcList="srcList"
            />
        </transition>
    </div>
</template>

<script>
    import Composer from "./Composer";

    export default {
        props: [ 'srcList', 'fullsize', 'centered' ],

        data(){
            return {
                details: false
            }
        },

        components: {
            Composer
        }
    }
</script>

<style scoped>
    .av-bandge-common {
        padding: 9px 16px 9px 16px;
        background: rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transform: translateY(0);
        border-radius: 21px;
        font-family: Montserrat;
        cursor: default;
        position: relative;
        font-weight: 300;
        color: white;
    }

    .fade-enter-active {
        animation: fade-in .25s;
    }

    .fade-leave-active {
        animation: fade-in .25s reverse;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(15px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>