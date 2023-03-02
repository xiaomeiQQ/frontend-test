<template>
    <section class="banner">
        <!-- 橫幅影片 -->
        <video src="../../assets/video/banner_video.mp4" autoplay loop muted></video>
        <div class="banner_box">
            <p class="side_text">DIGITAL AGENCY</p>
            <!-- 橫幅敘述 -->
            <div class="banner_content">
                <img src="../../assets/image/logo_white_big.svg" alt="DigiSalad Logo">
                <!-- 標題 -->
                <h2 class="banner_title">
                    <span>WE CREATE</span>
                    <span>AMAZING</span>
                    <span>DIGITAL EXPERIENCES</span>
                </h2>
            </div>
            <img id="salad" class="salad_img" src="../../assets/image/salad.gif" alt="DigiSalad Salad" @click="scrollTo()">
            <img class="fork" src="../../assets/image/fork.svg" alt="fork">
            <img class="knife" src="../../assets/image/knife.svg" alt="knife">
            <p @click="scrollTo()" class="banner_cta">TASTE US NOW!</p>
        </div>
    </section>
</template>

<script>

export default {
    name: 'HomeBanner',
    data() {
        return {
            salad_img:'1',
        }
    },
    created() {

    },
    mounted(){

    },
    computed: {
        
    },
    methods: {
        scrollTo(){
            window.scrollTo({
                top:700,
                behavior:"smooth"
            })
        },
    }
}

</script>

<style lang="scss" scoped>
.banner{
    position: relative;
    overflow: hidden;
    border-radius: 0 0 40px 40px;
    video{
        object-fit: cover;
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: -10;
    }
    .banner_box{
        max-width: 1340px;
        height: 100vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        .side_text{
            transform: rotate(270deg);
            position: absolute;
            left: -69px;
            top: 40%;
            color: white;
            letter-spacing: 2.22px;
            font-size: 16px;
            font-weight: 700;
            &::after{
                content: '';
                position: absolute;
                top: 50%;
                left: -90%;
                width: 112px;
                height: 2px;
                background-color: white;
            }
            @include xl{
                display: none;
            }
        }
        .banner_content{
            position: absolute;
            display: flex;
            flex-direction: column;
            top: 20%;
            left: 10%;
            gap: 50px;
            @include s{
                gap: 40px;
                top: 40%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            img{
                width: fit-content;
                cursor: pointer;
                animation: scale 1s linear;
                @include s{
                    align-self: center;
                    width: 50%;
                }
            }
            @keyframes scale{
                0%{transform: scale(1.2);}
                5%{transform: scale(1);}
                10%{transform: scale(0.8);}
                15%{transform: scale(0.6);}
                20%{transform: scale(0.5);}
                25%{transform: scale(0.6);}
                30%{transform: scale(0.8);}
                35%{transform: scale(1);}
                40%{transform: scale(1.2);}
                45%{transform: scale(1.4);}
                50%{transform: scale(1.5);}
                55%{transform: scale(1.4);}
                60%{transform: scale(1.3);}
                65%{transform: scale(1.2);}
                70%{transform: scale(1.3);}
                75%{transform: scale(1.4);}
                80%{transform: scale(1.3);}
                85%{transform: scale(1.2);}
                90%{transform: scale(1.1);}
                95%{transform: scale(1.2);}
                100%{transform: scale(1);}
            }
            .banner_title{
                display: flex;
                flex-direction: column;
                gap: 30px;
                font-size: 38px;
                letter-spacing: 9.17px;
                font-weight: 700;
                color: white;
                span:first-child{
                    animation: opacity1 0.5s ease-in-out;
                }
                span:nth-child(2){
                    animation: opacity2 0.8s ease-in-out;
                }
                span:last-child{
                    animation: opacity3 1.4s ease-in-out;
                }
                
                @keyframes opacity1 {
                    from{
                        transform: translateX(-10%) translateY(5%) scale(0.6);
                    }to{
                        transform: scale(1);
                    }
                }
                @keyframes opacity2 {
                    from{
                        transform: translateX(-10%) translateY(5%) scale(0.6);
                    }to{
                        transform: scale(1);
                    }
                }
                @keyframes opacity3 {
                    from{
                        transform: translateX(-5%) translateY(5%) scale(0.6);
                    }to{
                        transform: scale(1);
                    }
                }
                &::after{
                    content: '';
                    position: absolute;
                    z-index: -1;
                    left: -1.5%;
                    bottom: 0.5%;
                    width: 580px;
                    height: 8px;
                    background-color: $main_color;
                    @include m{
                        display: none;
                    }
                }
                @include m{
                    font-size: 30px;
                }
                @include s{
                    font-size: 24px;
                    text-align: center;
                    letter-spacing: 6px;
                    gap: 0;
                }
                &:last-child>span{
                    @include s{
                        line-height: 35px;
                    }
                }
            }
            &::after{
                content: '';
                position: absolute;
                bottom: 1%;
                right: -2.5%;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: $second_color;
                @include m{
                    display: none;
                }
            }
        }
        .salad_img{
            width: 80px;
            cursor: pointer;
            position: absolute;
            bottom: 8%;
            left: 50%;
            transform: translate(-50%,-50%);
            animation: pulse 1.3s infinite;
            border-radius: 50%;
            @include m{
                width: 70px;
            }
            @include s{
                width: 60px;
            }
            @keyframes pulse {
                0% {
                box-shadow: 0 0 0 0 #FFEFDC;
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(204, 204, 204, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(195, 195, 195, 0);
                }
            }
            &:hover~.fork{
                animation: fork 1.5s ease infinite;
            }
            &:hover~.knife{
                bottom: 12.5%;
                animation: knife 1.5s ease infinite;
            }
            &:hover~.banner_cta{
                text-shadow: 2px 2px 5px white;
            }
        }
        .fork{
            cursor: pointer;
            position: absolute;
            left: 47%;
            bottom: 13%;
            transform: scale(3);
            @include l{
                left: 46%;
            }
            @include m{
                display: none;
            }
        }
        .knife{
            cursor: pointer;
            position: absolute;
            left: 52.5%;
            bottom: 13%;
            transform: scale(3);
            @include l{
                left: 53.5%;
            }
            @include m{
                display: none;
            }
        }
        @keyframes fork{
            0%{transform: translate(0px,0px) rotate(0deg) scale(3) ;}
            25%{transform: translate(5px,0px) rotate(5deg) scale(3) ;}
            50%{transform: translate(15px,-5px) rotate(20deg) scale(3) ;}
            75%{transform: translate(10px,-10px) rotate(30deg) scale(3) ;}
            100%{transform: translate(20px,-15px) rotate(45deg scale(3));}
        }
        @keyframes knife{
            0%{transform: translate(2px,-10px) rotate(-30deg) scale(3) ;}
            25%{transform: translate(3px,-8px) rotate(-25deg) scale(3) ;}
            50%{transform: translate(2px,-10px) rotate(-20deg) scale(3) ;}
            75%{transform: translate(3px,-8px) rotate(-15deg) scale(3) ;}
            100%{transform: translate(1px,-10px) rotate(-10deg) scale(3);}
        }
        .banner_cta{
            cursor: pointer;
            position: absolute;
            bottom: 7%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 14px;
            color: white;
            font-weight: 700;
            letter-spacing: 2px;
            &:hover{
                text-shadow: 2px 2px 5px white;
            }
        }
        &::after{
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 1px;
            height: 40px;
            background-color: white;
        }
    }
}
</style>
