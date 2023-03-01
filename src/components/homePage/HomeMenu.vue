<template>
    <nav class="nav_box" v-show="this.$store.state.navActive">
        <ul class="nav_content">
            <!-- 左選項 -->
            <div class="nav_left content_common">
                <li class="about card">
                    <img src="../../assets/image/nav_left_icon01.svg" alt="">
                    <div class="nav_text">
                        <p>EMPOWERING BRANDS</p>
                        <h3>ABOUT US</h3>
                    </div>
                </li>
                <li class="works card">
                    <img src="../../assets/image/nav_left_icon02.svg" alt="">
                    <div class="nav_text">
                        <p>CASE STUDIES</p>
                        <h3>WORKS</h3>
                    </div>
                </li>
            </div>
            <!-- 中選項 -->
            <div class="nav_center content_common">
                <li class="careers card">
                    <img src="../../assets/image/nav_center_icon01.svg" alt="">
                    <div class="nav_text">
                        <p>BE COOL WITH US</p>
                        <h3>CAREERS</h3>
                    </div>
                </li>
                <li class="insights card">
                    <img src="../../assets/image/nav_center_icon02.svg" alt="">
                    <div class="nav_text">
                        <p>OUR STRATEGIES</p>
                        <h3>INSIGHTS</h3>
                    </div>
                </li>
            </div>
            <!-- 右選項 -->
            <div class="nav_right content_common">
                <li class="services card">
                    <img src="../../assets/image/nav_right_icon01.svg" alt="">
                    <div class="nav_text">
                        <p>AREAS OF EXPERTISE</p>
                        <h3>SERVICES</h3>
                    </div>
                </li>
                <li class="contact card">
                    <div class="nav_text">
                        <p>START YOUR JOURNEY WITH US</p>
                        <h3>CONTACT</h3>
                    </div>
                </li>
            </div>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'HomeMenu',
    data() {
        return {
            
        }
    },
    created() {

    },
    computed: {

    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.nav_box{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 50;
    .nav_content{
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 42px;
        &::after{
            content: '';
            position: absolute;
            top: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(180deg, #585880 3.61%, #26C6D0 95.7%);
            opacity: 0.9;
            z-index: -10;
        }
        .content_common{
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
        .card{
            transition: 0.3s;
            &:hover{
            transform: translateY(-5px);
            box-shadow: 0px 1px 10px 1px #dddddd;
            }
            h3{
                &::after{
                    margin-left: 10px;
                    content:'';
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    background-color: $second_color;
                    border-radius: 50%;
                    :nth-child(2){
                        background-color: #26C6D0;
                    }
                }
            }
        }
        .nav_text{
            color: white;
            display: flex;
            flex-direction: column;
            gap: 9px;
            p{
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 1.8px;
            }
            h3{
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 3.64px;
            }
        }
        .nav_left{
            width: 350px;
            .about,.works{
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 30px;
                cursor: pointer;
                position: relative;
                gap: 20px;
            }
            .about{
                background-image: url(../../assets/image/nav_about.png);
                height: 180px;
                background-color: #26C6D0;
            }
            .works{
                background-image: url(../../assets/image/nav_works.png);
                height: 150px;
                background-color: rgba(238, 108, 138, 0.8);
                padding: 60px 30px;
                align-items: flex-end;
                justify-content: flex-start;
                h3{
                    &::after{
                        background-color: #26C6D0;
                    }
                }
            }
        }
        .nav_center{
            width: 260px;
            .careers,.insights{
                display: flex;
                flex-direction: column;
                gap: 20px;
                cursor: pointer;
                border-radius: 30px;
                img{
                    width: fit-content;
                }
            }
            .careers{
                justify-content: flex-end;
                height: 290px;
                padding: 50px 30px;
                border-radius: 30px;
                background-image: url(../../assets/image/nav_careers.png);
                background-position: center;
                background-color: #E6A94E;
            }
            .insights{
                padding: 40px 30px;
                background-image: url(../../assets/image/nav_insights.png);
                background-position: center;
                background-color: #26D0A8;
            }
        }
        .nav_right{
            width: 350px;
            .services,.contact{
                display: flex;
                flex-direction: column;
                gap: 20px;
                cursor: pointer;
                border-radius: 30px;
                img{
                    width: fit-content;
                }
            }
            .services{
                background-image: url(../../assets/image/nav_services.png);
                background-color: #585880;
                background-position: center;
                height: 150px;
                padding: 60px 30px;
            }
            .contact{
                justify-content: center;
                align-items: center;
                height: 180px;
                background-color:white;
                p{
                    color: $text_black;
                }
                h3{
                    color: $main_color;
                }
            }
        }
    }
}

</style>
