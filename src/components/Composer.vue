<template>
    <div
        class="av-composer-container"
        :style="{
            height: list.length * (fullsize ? 35 : 17.5) + 'vw'
        }"
    >
        <img
            class='av-upper-arrow'
            :src="UpperSwap"
        />

        <div class="av-row-wrapper">
            <div
                v-for="(sample, index) in list"
                :class="{
                    [`av-composer-row`]: true,
                    double: sample.length >= 2,
                    fullsize
                }"
                :key="index"
            >
                <img
                    v-for="(current, index) in sample"
                    class='av-composer-column'
                    :centered="centered[index] != null ? centered[index] : 'center'"
                    :key="index + current"
                    :src="'./chuncks/show-more/' + current"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import UpperSwap from "../assets/img/vector/UpperSwap.svg";

    export default {
        props: [ 'srcList', 'fullsize', 'centered' ],

        data(){
            const list = new Array();

            for(let i = 0, length = this.srcList?.length ?? 0;i < length;i += 2) {
                list.push(this.srcList.slice(i, i + 2));
            }

            return {
                list,
                UpperSwap
            }
        }
    }
</script>

<style scoped>
    .av-upper-arrow {
        position: absolute;
        left: calc(100% - 275px);
        z-index: -1;
        top: -25px;
    }

    .av-composer-container {
        width: 60vw;
        position: absolute;
        left: calc(-60vw + 200%);
        z-index: 100;
        top: 50pt;
        height: 17.5vw;
    }

    .av-row-wrapper {
        overflow: hidden;
        border-radius: 5rem;
        height: 100%;
    }

    .av-composer-row {
        height: 17.5vw;
    }

    .av-composer-row.fullsize {
        height: 35vw;
    }

    .av-composer-row > img[centered="right"] {
        object-position: right;
    }

    .av-composer-row > img[centered="left"] {
        object-position: left;
    }

    .av-composer-column {
        width: 30vw;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .av-composer-row:not(.double) > .av-composer-column {
        width: 60vw;
    }
</style>