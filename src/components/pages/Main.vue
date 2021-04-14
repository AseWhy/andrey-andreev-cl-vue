<template>
    <div class="av-page-content">
        <Section
            background='e2b0df5dc70f130bd9aca3a5cc09d1a0.png'
            :srcList="['123a596a2546aac418580f5ae46d6dc4.png', 'e2b0df5dc70f130bd9aca3a5cc09d1a0.png']"
            :fullsize='true'
            :centered="['right', 'center']"
            style="z-index: 5"
            price='5'
        > 
            OCTANE RENDER
        </Section>

        <Section 
            background='de643662268e4894e6fb915915b46197.png'
            :srcList="['c0370e5f766c3a4a1e8b7204feb8e0f1.png', 'b063996cdfa2ca1cf4787b36577e540b.png']"
            :fullsize='true'
            style="z-index: 4"
            price='10'
        > 
            DESIGN LOGO 
        </Section>

        <Section 
            background='04780f4a2b1fc5db283434f8e5f908b7.png'
            :srcList="['5ccc4586b1b491e86d523ad0bcab7ca2.png', '3490b8ddd951ce25df9b1799e91fbc79.png', '93ef1033f748715c8a2ccf97a8883c4a.png']"
            style="z-index: 3"
            price='25'
        > 
            SOCIAL DESIGN 
        </Section>

        <Section 
            background='1a957a5e10f6cca6b0b8d3bc05a008b6.png'
            :srcList="['0cd09beeeef8f3bc4e87fdd5a8337bdc.jpeg', '3ca2a247308e17e03f2e86d5cc1956f8.jpeg']"
            style="z-index: 2"
            price='5'
        > 
            VISIT CARD 
        </Section>

        <Section 
            :more="false"
            style="z-index: 1"
            class='av-two-sides-section'
            price='15'
        > 
             <div class="sides">
                 <div
                    class="left-side"
                    :style="{
                        backgroundImage: 'url(/chuncks/6b62bef7c7d356f5f053b26cc3b27330.png)'
                    }"
                >

                 </div>
                 <div
                    class="right-side"
                    :style="{
                        backgroundImage: 'url(/chuncks/0cd33edda46e50c7c54b603fb89fef55.png)'
                    }"
                >

                 </div>
             </div>

             GIF ANIMATION
        </Section>
    </div>
</template>

<script>
    import Section from '../Section';

    export default {
        components: {
            Section
        }
    }
</script>

<style scoped>
    .av-two-sides-section {
        height: 98.819444444vw;
    }

    .av-two-sides-section .sides {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        z-index: -1;
    }

    .av-two-sides-section .sides > .left-side, .av-two-sides-section .sides > .right-side {
        width: 50%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>