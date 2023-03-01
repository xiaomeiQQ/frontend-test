<template>
    <div class="title">
        <!-- 標題 -->
        <h2>{{text}}</h2>
        <!-- 裝飾 -->
        <img :src="require(`@/assets/image/${decorate}.svg`)" alt="decorate">
    </div>
</template>
<script>
export default{
    name:'h2_text',
    props:{
        text:String,
        decorate:String,
    },
    data(){
        return{
        }
    },
}
</script>

<style lang="scss" scoped>
.title{
    text-align: center;
    position: relative;
    
    h2{
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 3.64px;
        margin-bottom: 10px;
        @include m{
            font-size: 24px;
        }
        @include s{
            font-size: 18px;
        }
    }
    &::after{
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 50%;
        right: 2%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: $second_color;
        @include m{
            width: 8.5px;
            height: 8.5px;
            right: -8%;
            bottom: 35%;
        }
        @include s{
            width: 7px;
            height: 7px;
            right: -7%;
        }
    }
    img{
        @include m{
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 110%;
        }
        @include s{
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 120%;
        }
    }
    
    
}
</style>