<template>
    <button data-aos="zoom-in" data-aos-duration="1100">
        {{btn}}
        <!-- 裝飾 -->
        <span></span>
    </button>
</template>
<script>
export default{
    name:'main_button',
    props:{
        btn:String,
    },
}
</script>

<style lang="scss" scoped>
button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 35px 30px;
    background-color: $main_color;
    color: white;
    border: none;
    margin: auto;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2.22px;
    cursor: pointer;
    span{
        width: 52px;
        height: 2px;
        background-color: white;
        @include s{
            display: none;
        }
    }
    @include m{
        padding: 20px 15px;
        font-size: 14px;
    }
    @include s{
        padding: 15px 10px;
        font-size: 12px;
    }
    &:hover{
        filter: brightness(95%) drop-shadow(1px 1px 5px #939393);
    }
}
</style>