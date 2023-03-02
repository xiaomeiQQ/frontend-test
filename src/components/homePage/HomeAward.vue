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
        max-width: 82%;
        right: 0;
        background-color: white;
        padding: 4.5% 5%;
        display: flex;
        border-radius: 40px 0 40px 40px;
        gap: 5%;
        @include xl{
            width: auto;
            padding: 50px;
            gap: 20px;
            flex-direction: column;
        }
        @include l{
            max-width: 100%;
        }
        .award_intro{
            width: 33%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 35px;
            @include xl{
                width: 100%;
                gap: 20px;
            }
            p{
                font-size: 16px;
                color: $text_black;
                font-weight: 400;
                letter-spacing: 1px;
                line-height: 28px;
                text-align: left;
                @include l{
                    font-size: 14px;
                }
                @include m{
                    font-size: 12px;
                    line-height: 20px;
                }
            }
        }
        .award_img{
            width: 700px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            align-content: center;
            @include xl{
                width: auto;
            }
            img{
                max-width:100%;
                @include xl{
                    width: 25%;
                }
                @include m{
                    width: 35%;
                }
                @include s{
                    width: 50%;
                }
            }
        }
    }
}
</style>
