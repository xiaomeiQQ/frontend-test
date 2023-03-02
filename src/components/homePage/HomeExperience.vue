<template>
    <section class="experience">
        <!-- 文字 -->
        <h2_text class="h2" text="OUR BRAND EXPERIENCE" decorate="wave_4" />
        <p class="lorem">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt
        urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus
        tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a
        dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur,
        eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie
        faucibus.</p>
        <!-- 客戶 -->
        <img src="../../assets/image/DigiSalad_Client_List.svg" alt="DigiSalad customer">
    </section>
</template>

<script>
import h2_text from '@/components/common/Title.vue'

export default {
    name: 'HomeExperience',
    components: {
        h2_text,
    },
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .experience{
        position: relative;
        padding-top: 500px;
        top: -50px;
        z-index: -10;
        height: 1000px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        @include xl{
            padding-top: 450px;
            height: 850px;
            gap: 40px;
        }
        @include l{
            position: relative;
            padding-top: 380px;
            height: 750px;
            top: 0;
            gap: 30px;
        }
        @include m{
            padding-top: 280px;
            height: 700px;
        }
        @include s{
            padding-top: 200px;
            height: 600px;
        }
        img{
            max-width: 100%;
            @include l{
                width: 80%;
            }
            @include m{
                width: 100%;
            }
        }
    }
</style>
