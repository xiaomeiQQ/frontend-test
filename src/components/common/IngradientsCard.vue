<template>
    <div class="card">
        <div class="card_box" v-for="card in cards" :key="card">
            <!-- 圖 -->
            <img :src="require(`@/assets/image/Ingradients_${card.img}.svg`)" :alt="card.title">
            <!-- 文字 -->
            <h3>{{ card.title }}</h3>
            <p class="text">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis
                tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
            </p>
            <!-- CTA -->
            <button>VIEW MORE</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ingradientsCard',
    props: {

    },
    data() {
        return {
            cards:[
                {img:'1',title:'UX DESIGN'},
                {img:'2',title:'UI DESIGN'},
                {img:'3',title:'WEBSITE DEVELOPMENT'},
                {img:'4',title:'MOBILE APP DEVELOPMENT'},
                {img:'5',title:'ECOMMERCE'},
                {img:'6',title:'CUSTOMER LOYALTY'},
                {img:'7',title:'DIGITAL TRANSFORMATION'},
                {img:'8',title:'DIGITAL MARKETING'},
                {img:'9',title:'BRANDING'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1340px;
    gap: 50px;
    .card_box{
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 345px;
        gap: 20px;
        @include m{
            width: 200px;
            gap: 10px;
        }
        img{
            @include m{
                width: 25%;
            }
        }
        h3{
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 2px;
            text-align: center;
            color: white;
            @include m{
                font-size: 16px;
            }
        }
        .text {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 1px;
            text-align: center;
            color: white;
            line-height: 28px;
            @include m{
                font-size: 12px;
                line-height: 16px;
            }
        }
        button{
            color: white;
            border: 2px solid white;
            border-radius: 30px;
            padding: 15px 30px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2.22px;
            background-color: transparent;
            transition: all 0.2s ease-in-out;
            &:hover{
                background-color: $second_color;
            }
            @include m{
                padding: 8px 15px;
                font-size: 12px;
            }
        }
    }
}
</style>