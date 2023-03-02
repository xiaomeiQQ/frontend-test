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
                    <img src="../../assets/image/quote_decorate.svg" alt="decorate dote">
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
        padding: 7% 7% 3% 7%;
        display: flex;
        @include xl{
            padding: 5%;
        }
        @include l{
            max-width: 100%;
        }
        @include s{
            height: 350px;
        }
        .quote_wrap{
            display: flex;
            @include xl{
                flex-direction: column-reverse;
            }
            .founder_intro{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-bottom: 50px;
                @include xl{
                    margin-bottom: 0;
                }
                img{
                    max-width: 100%;
                    margin-bottom: 20px;
                    @include xl{
                        width: 15%;
                        margin-bottom: 10px;
                    }
                }
                h3{
                    color: white;
                    font-size: 20px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-align: center;
                    @include s{
                        font-size: 16px;
                    }
                }
                p{
                    font-size: 16px;
                    font-style: italic;
                    font-weight: 400;
                    letter-spacing: 2px;
                    text-align: center;
                    color: white;
                    @include s{
                        font-size: 12px;
                    }
                }
            }
            .founder_words{
                margin: auto;
                width: 62%;
                position: relative;
                @include xl{
                    width: 100%;
                }
                img{
                    position: absolute;
                    top: -20%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    @include xl{
                        width: 40px;
                    }
                    @include m{
                        top: -10%;
                        width: 30px;
                    }
                }
                p{
                    font-size: 22px;
                    font-weight: 400;
                    color: white;
                    letter-spacing: 2px;
                    line-height: 48px;
                    @include xl{
                        font-size: 18px;
                        line-height: 35px;
                    }
                    @include m{
                        font-size: 16px;
                        line-height: 28px;
                    }
                    @include s{
                        font-size: 12px;
                    }
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
