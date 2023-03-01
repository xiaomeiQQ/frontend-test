<template>
    <section class="award">
        <div class="award_box">
            <div class="award_intro">
                <!-- 文字 -->
                <h2_text text="AWARDS" decorate="wave_3" />
                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
                    bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at
                    semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim
                    nunc. 
                </p>
            </div>
            <!-- 獎項圖片 -->
            <div class="award_img">
                <img src="../../assets/image/award_img.svg" alt="Asia Smart App Awards 亞洲智能應用程式大獎">
                <img src="../../assets/image/award_img.svg" alt="Asia Smart App Awards 亞洲智能應用程式大獎">
                <img src="../../assets/image/award_img.svg" alt="Asia Smart App Awards 亞洲智能應用程式大獎">
                <img src="../../assets/image/award_img.svg" alt="Asia Smart App Awards 亞洲智能應用程式大獎">
            </div>
        </div>
    </section>
</template>

<script>
import h2_text from '@/components/common/Title.vue'


export default {
    name: 'HomeAward',
    components: {
        h2_text
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
.award {
    position: relative;
    .award_box{
        position: absolute;
        max-width: 85%;
        right: 0;
        background-color: white;
        padding: 60px;
        display: flex;
        border-radius: 40px 0 40px 40px;
        gap: 8%;
        .award_intro{
            width: 47%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 35px;
            p{
                font-size: 16px;
                color: $text_black;
                font-weight: 400;
                letter-spacing: 1px;
                line-height: 28px;
                text-align: left;
            }
        }
        .award_img{
            display: flex;
            flex-wrap: wrap;
        }
    }

    // .award_box {
    //     width: 90%;
    //     right: 0;
    //     position: absolute;
    //     background-color: white;
    //     border-radius: 40px 0 40px 40px;
    //     display: flex;
    //     align-items: center;
    //     // padding: 70px;
    //     gap: 20%;
    //     .award_intro{
    //         // width: 60%;
    //         display: flex;
    //         flex-direction: column;
    //         align-items: flex-start;
    //         gap: 30px;
    //         p{
    //             font-size: 16px;
    //             color: $text_black;
    //             font-weight: 400;
    //             letter-spacing: 1px;
    //             line-height: 28px;
    //             text-align: left;
    //         }
    //     }
    //     .award_img{
    //         display: flex;
    //         flex-wrap: wrap;
    //         box-sizing: border-box;
    //         gap: 20px;
    //     }
    // }
}
</style>
