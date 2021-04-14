<template>
    <div class="container">
        <div class="mask">
            <hr>
            <div class="sides">
                <div class="side-block">REVIEWS</div>
                <div class="side-block">
                    <a href="https://vk.com/andreev_wht">
                        PORTFOLIO
                    </a>
                </div>
                <div class="side-block">
                    <RouterLink to='/contacts'>
                        CONTACTS
                    </RouterLink>
                </div>
            </div>
            <div class="copiryght">
                Everything that has been done on this site. Not College-trained. This is my experience. My labors and sufferings, blood and sweat.
            </div>
            <hr>
            <div class="dates">
                2019-2021 DESIGN STUDIO “AV PROD.”
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: calc(100% - 256px);
        height: auto;
        padding: 86px 128px
    }

    .sides {
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
    }

    .sides > .side-block, .sides > .side-block a {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        color: #838383;
    }

    .copiryght {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        text-decoration-line: underline;
        width: 470px;
        color: #838383;
        margin: 1.5rem auto 0;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .dates {
        text-align: center;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 0.75rem;
    }

    hr {
        color: rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 600px) {
        .container {
            width: calc(100% - 3rem);
            height: auto;
            padding: 1.5rem;
            overflow: hidden;
        }

        .sides {
            flex-direction: column;
        }

        .sides > .side-block {
            width: 100%;
            text-align: center;
        }

        .copiryght {
            width: 100%;
        }
    }
</style>