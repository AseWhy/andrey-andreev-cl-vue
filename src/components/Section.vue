<template>
    <div
        class="av-section-contaner"
        :style="{
            backgroundImage: `url(./chuncks/${background})`
        }"
    >
        <div class="av-center-text">
            <slot/>
        </div>

        <div class="av-under-section">
            <Badge> {{ price }}$ </Badge>
            <Badge
                v-if='more !== false' 
                :srcList="srcList"
                :fullsize="fullsize"
                :centered="centered"
            > 
                Show more 
            </Badge>
        </div>
    </div>
</template>

<script>
    import Badge from './Badge';

    export default {
        props: [ 'background', 'scoped', 'price', 'more', 'srcList', 'fullsize', 'centered' ],

        components: {
            Badge
        }
    }
</script>

<style scoped>
    .av-section-contaner {
        width: 100%;
        height: 400px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        position: relative;
    }

    .av-section-contaner:not(:last-child) {
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    }

    .av-center-text {
        padding: 0.5rem 0.5rem;
        background: rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 21px;
        color: white;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 4.5rem;
        text-align: center;
        letter-spacing: -0.07em;
        margin: auto;
    }

    .av-under-section {
        position: absolute;
        display: flex;
        top: calc(100% - 1.5rem - 30px);
        width: calc(100% - 400pt);
        justify-content: space-between;
        padding: 0 200pt;
    }

    @media screen and (max-width: 600px) {
        .av-under-section {
            width: calc(100% - 100pt);
            padding: 0 50pt;
        }
    }
</style>