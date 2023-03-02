<template>
    <header :class="{'nav_bg':this.$store.state.headerColor&!this.$store.state.navActive}">
        <div class="main_nav">
            <!-- 主Logo -->
            <img class="nav_logo" src="../assets/image/logo_white_small.svg" v-show="this.$store.state.navActive" alt="DigiSalad">
            <!-- 副Logo -->
            <img class="nav_logo" src="../assets/image/logo_main_small.svg" v-show="this.$store.state.headerColor&!this.$store.state.navActive" alt="DigiSalad">
            <div class="nav_options">
                <!-- CTA -->
                <button class="nav_btn" v-show="!this.$store.state.navActive">START YOUR PROJECT</button>
                <!-- 漢堡 -->
                <div class="nav_control" @click="navChange()">
                    <span :class="{'nav_rotate':this.$store.state.navActive}" :style="{backgroundColor : this.$store.state.headerColor&!this.$store.state.navActive ? '#585880':'white'}" v-for="i in 3" :key="i"></span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            showHeader:false
        }
    },
    created() {

    },
    mounted(){
        window.addEventListener('scroll',this.scroll)
    },
    computed: {
        
    },
    methods: {
        navChange(){
            if(!this.$store.state.navActive){
                this.$store.state.navActive=true
            }else{
                this.$store.state.navActive=false
            }
        },
        scroll(){
            const header=document.documentElement.scrollTop || document.body.scrollTop || 0
            if(this.showHeader=header>50){
                this.$store.state.headerColor=true;
            }else{
                this.$store.state.headerColor=false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    width: 100%;
    margin: auto;
    z-index: 100;
    .main_nav{
        margin: auto;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        .nav_logo{
            z-index: 50;
            cursor: pointer;
        }
        .nav_options{
            display: flex;
            margin-left: auto;
            gap: 45px;
            .nav_btn{
                cursor: pointer;
                background: linear-gradient(90deg, #4EE5EA 3.94%, #26D0A8 94.73%);
                border-radius: 24px;
                width: 200px;
                height: 42px;
                color: #fff;
                border: none;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 1.14px;
                z-index: 50;
                &:hover{
                    box-shadow: 1px 1px 8px 1px #b1b1b1;
                    background: linear-gradient(90deg, #26D0A8 3.94%, #4EE5EA 94.73%);
                    transition: all .3s ease-in-out;
                    transform: scale(102%);
                }
                @include s{
                    display: none;
                }
            }
            .nav_control{
                display: flex;
                cursor: pointer;
                flex-direction: column;
                align-self: center;
                gap: 7px;
                position: relative;
                z-index: 50;
                height: 30px;
                justify-content: center;
                span{
                    width: 30px;
                    height: 3.5px;
                    border-radius: 5px;
                    background-color: white;
                    transition: .2s cubic-bezier(.17,.67,.89,.13);
                    &:last-child{
                        margin-left: auto;
                        width: 25px;
                    }
                }
                &:hover>:first-child{
                    transform: rotate(-5deg) scaleY(1.2);
                    box-shadow: 0px 1px 5px 1px #dddddd;
                }
                &:hover>:nth-child(2){
                    transform: rotate(3deg) scaleY(1.2);
                    box-shadow: 0px 1px 5px 1px #dddddd;
                }
                &:hover>:last-child{
                    transform: rotate(-5deg) scaleY(1.2);
                    box-shadow: 0px 1px 5px 1px #dddddd;
                    margin: auto;
                }
                .nav_rotate{
                    &:first-child{
                        transform: rotate(45deg);
                        position: absolute;
                        transition: .5s ease-in-out;                     
                    }
                    &:nth-child(2){
                        opacity: 0;
                    }
                    &:last-child{
                        transform: rotate(-45deg);
                        position: absolute;
                        width: 30px;
                        transition: .5s ease-in-out;
                    }
                }
            }
        }
    }
}
.nav_bg{
    background-color: #fff;
    .nav_control{
        span{
        background-color: #585880;
        }
    }
}
</style>
