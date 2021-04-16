<template>
    <div class="av-abouts-container">
        <h2 class='av-abouts-main-header'> ABOUT THE STUDIO </h2>
        <hr>
        <p 
            class='av-about-main-text'
        >
            Hi, you magically got to my studio. 
            This site is my portofio, as well as 
            here is a price list, which you can 
            get acquainted with by scrolling 
            through the osnavnuyu page. 
            To order, please about us.
        </p>
        <p 
            class="av-about-right-tip"
        >
            Good luck.
        </p>
    </div>
</template>

<script>
    import InstagramLogo from "../../assets/img/vector/InstagramLogo.svg";
    import EnvelopeSimple from "../../assets/img/vector/EnvelopeSimple.svg";
    import TelegramLogo from "../../assets/img/vector/TelegramLogo.svg";

    export default {
        data(){
            return {
                TelegramLogo,
                InstagramLogo,
                EnvelopeSimple
            }
        }
    }
</script>

<style scoped>
    .av-abouts-main-header {
        text-align: center;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 4.375rem;
        padding-top: 1rem;
        margin: 0;
    }

    .av-abouts-label > a {
        color: black;
        text-decoration: none;
        width: 100%;
        word-break: break-all;
        white-space: break-spaces;
    }

    .av-abouts-label {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 3rem;
        padding: 1rem;
    }

    .av-abouts-container {
        padding: 0 128px;
    }

    .av-about-icon {
        height: 4.375rem;
    }

    .av-abouts-main-table {
        margin: 3rem auto 0;
    }

    .av-about-main-text {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 2.25rem;
        text-align: center;
        margin: 10rem;
    }

    .av-about-right-tip {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 2.25rem;
        text-align: right
    }

    @media screen and (max-width: 1366px) {
        .av-about-main-text {
           margin: 5rem;
        }
    }

    @media screen and (max-width: 600px) {
        .av-about-main-text {
            margin: 5rem 0;
        }

        .av-abouts-container {
            width: calc(100% - 3rem);
            padding: 1.5rem;
        }
    }
</style>