<template>
    <section class="about">
        <!-- 標題 -->
        <h2_text text="ABOUT DIGISALAD" decorate="wave_1"/>
        <!-- 影片 -->
        <div class="video_card">
            <div class="video_box">
                <video id="video" src="../../assets/video/DigiSalad為您創造驚喜的用戶體驗.mp4" poster="../../assets/image/about_digiSalad_video.svg"></video>
                <img id="play" src="../../assets/image/play_btn.svg" @click="videoActive()" alt="video play button">
                <img id="pause" v-show="this.$store.state.videoActive" src="../../assets/image/pause_btn.svg" @click="videoActive()" alt="video pause button">
            </div>
            <p class="lorem">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt
            urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus
            tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a
            dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur,
            eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie
            faucibus.</p>
            <!-- CTA -->
            <btn btn="VIEW MORE"></btn>
        </div>
    </section>
</template>

<script>

import h2_text from '@/components/common/Title.vue'
import btn from '@/components/common/Button.vue'

export default {
    name: 'HomeAbout',
    components:{
        h2_text,
        btn,
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
        videoActive(){
            const video=document.getElementById('video')
            const play=document.getElementById('play')
            if(!this.$store.state.videoActive){
                video.play();
                play.style.display='none';
                this.$store.state.videoActive=true;
                video.classList.remove('cover');
            }else{
                video.pause();
                play.style.display='block';
                this.$store.state.videoActive=false;
                video.classList.add('cover');
                play.classList.add('shadow');
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.about{
    position: relative;
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: $bg_color;
    @include m{
        gap: 30px;
        height: 1000px;
    }
    @include s{
        height: 900px;
    }
    &::before{
        content: '';
        position: absolute;
        top: 43px;
        left: 50%;
        width: 1px;
        height: 86px;
        transform: translate(-50%,-50%);
        background-color: #808080;
    }
    .video_card{
        display: flex;
        flex-direction: column;
        gap: 40px;
        @include m{
            gap: 30px;
        }
        .video_box{
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            &>:nth-child(2){
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                @include m{
                    width: 15%;
                }
                @include s{
                    width: 10%;
                }
            }
            &>:last-child{
                width: 70px;
                border-radius: 50%;
                bottom: 5%;
                left: 5%;
                @include m{
                    width: 8%;
                }
                @include s{
                    width: 6%;
                }
            }
            img{
                cursor: pointer;
                position: absolute;
                border-radius: 50%;
                &:hover{
                    box-shadow: 1px 1px 10px 1px #a0a0a0;
                }
            }
            video{
                width: 100%;
                // height: 544px;
                object-fit: cover;
                margin: auto;
            }
            .cover{
                filter: blur(3px);
            }
        }
        .shadow{
            box-shadow: 1px 1px 10px 1px #808080;
        }
    }
}
</style>
