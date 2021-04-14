<template>
    <div class="av-contacts-container">
        <h2 class='av-contacts-main-header'> CONTACTS </h2>
        <hr>
        <table class='av-contacts-main-table'>
            <tbody>
                <tr>
                    <td>
                        <img
                            class='av-contact-icon'
                            :src="InstagramLogo"
                        />
                    </td>
                    <td class="av-contacts-label">
                        <a href="https://www.instagram.com/andreev.wht/?hl=ru">andreev.wht</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            class='av-contact-icon'
                            :src="EnvelopeSimple"
                        />
                    </td>
                    <td class="av-contacts-label">
                        <a style="text-decoration: underline" href="mailto:andrei_markov163@mail.ru">andrei_markov163@mail.ru</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            class='av-contact-icon'
                            :src="TelegramLogo"
                        />
                    </td>
                    <td class="av-contacts-label">
                        <a href="phone:+79879692697">+79879692697</a>
                    </td>
                </tr>
            </tbody>
        </table>
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
    .av-contacts-main-header {
        text-align: center;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 4.375rem;
        padding-top: 1rem;
        margin: 0;
    }

    .av-contacts-label > a {
        color: black;
        text-decoration: none;
        width: 100%;
        word-break: break-all;
        white-space: break-spaces;
    }

    .av-contacts-label {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 3rem;
        padding: 1rem;
    }

    .av-contacts-container {
        padding: 0 128px;
    }

    .av-contact-icon {
        height: 4.375rem;
    }

    .av-contacts-main-table {
        margin: 3rem auto 0;
    }

    @media screen and (max-width: 600px) {
        .av-contacts-container {
            width: calc(100% - 3rem);
            padding: 1.5rem;
        }
    }
</style>