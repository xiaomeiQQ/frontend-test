<template>
    <section class="quote">
        <div class="quote_box">
            <div class="quote_wrap">
                <!-- 人物 -->
                <div class="founder_intro">
                    <img src="../../assets/image/Tony_Ng.svg" alt="Tony Ng DigiSalad Founder&Creative Director">
                    <h3>TONY NG</h3>
                    <p>Founder & Creative Director</p>
                </div>
                <!-- 引文 -->
                <div class="founder_words">
                    <img src="../../assets/image/quote_decorate.svg" alt="">
                    <p>
                        A great digital work isn’t about designing beautiful pages purely. It is about context - how do we
                        deliver the <span>right experience to the right person at the right time</span>. The most important thing is that
                        your work can engage customers at anytime, anywhere and let users experience an entire amazing digital
                        journey.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'HomeQuote',
    components: {

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
.quote{
    position: relative;
    .quote_box{
        height: 400px;
        max-width: 78%;
        position: absolute;
        top: -250px;
        background-image: url(../../assets/image/quote_bg.png);
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        border-radius: 0 40px 40px 40px;
        padding: 110px 30px 30px 160px;
        display: flex;
        .quote_wrap{
            display: flex;
            .founder_intro{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-bottom: 50px;
                img{
                    margin-bottom: 20px;
                }
                h3{
                    color: white;
                    font-size: 20px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-align: center;
                }
                p{
                    font-size: 16px;
                    font-style: italic;
                    font-weight: 400;
                    letter-spacing: 2px;
                    text-align: center;
                    color: white;
                }
            }
            .founder_words{
                margin: auto;
                width: 62%;
                position: relative;
                img{
                    position: absolute;
                    top: -20%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
                p{
                    font-size: 22px;
                    font-weight: 400;
                    color: white;
                    letter-spacing: 2px;
                    line-height: 48px;
                    span{
                        color: $forth_color;
                        font-weight: 700;
                    }
                }
            }
        }
        
    }
}
</style>
