<template>
    <section class="ingradients">
        <!-- 標題 -->
        <h2_text text="OUR INGRADIENTS" decorate="wave_2" :style="{color:'white'}"/>
        <!-- 文字 -->
        <div class="ingradients_intro">
            <p class="lorem">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt
            urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus
            tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a
            dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur,
            eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie
            faucibus.</p>
            <!-- CTA -->
            <btn btn="OUR SERVICES" :style="{backgroundColor:'#585880'}"/>
        </div>
        <!-- 介紹圖卡 -->
        <div class="ingradients_box">
            <IngradientsCard />
        </div>
        <!-- CTA -->
        <button class="cta">VIEW MORE DIGISALAD'S INGRADIENTS</button>
    </section>
</template>

<script>
import h2_text from '@/components/common/Title.vue'
import btn from '@/components/common/Button.vue'
import IngradientsCard from '@/components/common/IngradientsCard.vue'

export default {
    name: 'HomeIndradients',
    components:{
        h2_text,
        btn,
        IngradientsCard,
    },
    data() {
        return {
            
        }
    },
    created() {

    },
    mounted(){
        
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.ingradients{
    margin-top: 200px;
    padding: 330px 0 380px 0;
    height: 100%;
    background-color: $main_color;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @include m{
        gap: 30px;
    }
    .ingradients_intro{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-bottom: 40px;
    }
    .cta{
        margin-top: 60px;
        position: relative;
        background-color: transparent;
        border: none;
        font-size: 18px;
        color: white;
        letter-spacing: 2px;
        font-weight: 700;
        z-index: 1;
        cursor: pointer;
        @include m{
            font-size: 14px;
        }
        &::after{
            content: '';
            position: absolute;
            width: 420px;
            height: 10px;
            bottom: -8%;
            left: 50%;
            z-index: -1;
            transform: translate(-50%,-50%);
            background-color: $forth_color;
            @include m{
                width: 340px;
                bottom: -15%;
            }
        }
    }
}
</style>
