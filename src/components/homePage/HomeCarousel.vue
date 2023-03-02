<template>
    <section class="carousel">
        <!-- 背景圖 -->
        <img class="bgImg opacity" :src="require(`@/assets/image/case_${this.current}.svg`)" alt="backgroundImg">
        <div class="carousel_box">
            <!-- 順序 -->
            <div class="caseNumber">
                <p class="number">0{{ this.current }}</p>
                <p class="number">0{{ this.cases.length }}</p>
            </div>
            <!-- 輪播圖 -->
            <div class="case_wrap" v-show="this.current==i.id" v-for="i in cases" :key="i">
                <div class="case_box">
                    <div class="left">
                        <img :src="require(`@/assets/image/${i.img}`)" :alt="i.title">
                        <btn class="btn" btn="VIEW PROJECT"/>
                    </div>
                    <div class="right">
                        <h3>HIGHTLIGHTED SHOWCASE</h3>
                        <h4>{{ i.title }}</h4>
                        <p>{{ i.p }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 按鈕 -->
        <div class="slideBtn">
            <img @click="before" src="../../assets/image/slideBtn.svg" alt="slideBtn">
            <img @click="next" src="../../assets/image/slideBtn.svg" alt="slideBtn">
        </div>
    </section>
</template>

<script>
import btn from '@/components/common/Button.vue'
import {carouselCase} from '@/assets/config/settings.js'

export default{
    name:'HomeCarousel',
    props:{

    },components:{
        btn,
    },
    data() {
        return {
            cases:carouselCase,
            current:1,
            auto:null,
        }
    },
    created() {

    },
    mounted() {
        this.autoSlide();
    },
    computed: {

    },
    methods: {
        autoSlide(){
            this.auto=setInterval(()=>{
                this.next();
            },4000)
        },
        next(){
            if(this.current>=this.cases.length){
                this.current=1;
            }else{
                this.current++;
            }
        },
        before(){
            if(this.current<=1){
                this.current=this.cases.length
            }else{
                this.current--
            }
        },
    }
}
</script>

<style lang="scss" scoped>

.opacity{
    animation: opacity 4s infinite;
}
@keyframes opacity {
    from{
        opacity: 0.5;
        transform: scale(1.4);
    }to{
        opacity: 1;
        transform: scale(1.1);
    }
}
.carousel{
    position: relative;
    top: -50px;
    overflow: hidden;
    border-radius:0 0 40px 40px;
    @include s{
        top: 0;
    }
    .bgImg{
            z-index: -10;
            position: absolute;
            min-width: 100%;
            filter: blur(10px);
        }
    .carousel_box{
        display: flex;
        overflow: hidden;
        .case_wrap{
            width: 100%;
            height: 900px;
            // position: absolute;
            position: relative;
            // overflow: hidden;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
            display: flex;
            justify-content: center;
            align-items: center;
            @include m{
                height: 700px;
            }
            @include s{
                height: 650px;
            }
            .case_box{
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5%;
                @include xl{
                    gap: 8%;
                }
                @include l{
                    flex-direction: column;
                    gap: 50px;
                }
                @include s{
                    gap: 20px;
                }
                .left{
                    position: relative;
                    img{
                        cursor: pointer;
                        width: fit-content;
                        height: 540px;
                        object-fit: cover;
                        border-radius: 40px;
                        @include xl{
                            width: 360px;
                            height: 100%;
                        }
                        @include l{
                            width: 300px;
                        }
                        @include s{
                            width: 230px;
                        }
                    }
                    .btn{
                        position: absolute;
                        bottom: -40px;
                        right: -50px;
                        @include s{
                            bottom: -150px;
                            right: 0;
                            left: 0;
                        }
                    }
                }
                .right{
                    width: 33%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    color: white;
                    @include xl{
                        gap: 10px;
                    }
                    @include l{
                        width: 55%;
                    }
                    @include s{
                        width: 60%;
                        gap: 5px;
                        align-items: center;
                    }
                    h3{
                        font-size: 16px;
                        font-weight: 700;
                        letter-spacing: 2.22px;
                        @include l{
                            font-size: 14px;
                        }
                        @include s{
                            font-size: 12px;
                            text-align: center;
                        }
                    }
                    h4{
                        cursor: pointer;
                        width: fit-content;
                        font-size: 32px;
                        letter-spacing: 3.64px;
                        font-weight: 700;
                        line-height: 38.98px;
                        margin-bottom: 15px;
                        position: relative;
                        z-index: 10;
                        @include l{
                            font-size: 24px;
                            line-height: normal;
                        }
                        @include s{
                            font-size: 16px;
                            text-align: center;
                        }
                        &::before{
                            content: '';
                            position: absolute;
                            right: -10%;
                            bottom: 10%;
                            width: 10px;
                            height: 10px;
                            background-color: $second_color;
                            border-radius: 50%;
                            @include xl{
                                display: none;
                            }
                        }
                        &::after{
                            content: '';
                            z-index: -1;
                            position: absolute;
                            bottom: 18%;
                            left: -3%;
                            width: 105%;
                            height: 5px;
                            background-color: $main_color;
                            @include xl{
                                display: none;
                            }
                        }
                    }
                    p{
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 400;
                        letter-spacing: 1px;
                        line-height: 24px;
                        @include l{
                            font-size: 14px;
                            line-height: 18px;
                        }
                        @include m{
                            display: none;
                        }
                    }
                }
            }
        }
    }
    .caseNumber{
        width: 50px;
        height: 50px;
        position: absolute;
        top: 17%;
        right: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 10;
        .number{
            display: flex;
            color: white;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 2.22px;
            &:first-child{
                align-self: flex-start;
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                    width: 45px;
                    height: 1px;
                    top: 27px;
                    transform: rotate(-45deg);
                    background-color: $main_color;
                }
            }
            &:last-child{
                align-self:flex-end;
            }
        }
    }
    .slideBtn{
        z-index: 10;
        img{
            cursor: pointer;
            position: absolute;
            top: 450px;
            border-radius: 50%;
            @include s{
                width: 8%;
            }
            &:first-child{
                left: 6.5%;
                &:hover{
                    transition: all .2s linear;
                    transform: scale(0.95);
                }
            }
            &:last-child{
                transform: rotate(180deg);
                right: 6.5%;
                &:hover{
                    transition: all .2s linear;
                    transform: rotate(180deg) scale(0.95);
                }
            }
        }
    }
}
</style>