<template>
    <HomeMenu></HomeMenu>
    <HomeBanner></HomeBanner>
    <HomeAbout></HomeAbout>
    <HomeAward></HomeAward>
    <HomeIngradients></HomeIngradients>
    <HomeQuote></HomeQuote>
    <HomeExperience></HomeExperience>
    <HomeCarousel></HomeCarousel>
</template>

<script>

import HomeMenu from '@/components/homePage/HomeMenu.vue'
import HomeBanner from '@/components/homePage/HomeBanner.vue'
import HomeAbout from '@/components/homePage/HomeAbout.vue'
import HomeAward from '@/components/homePage/HomeAward.vue'
import HomeIngradients from '@/components/homePage/HomeIngradients.vue'
import HomeQuote from '@/components/homePage/HomeQuote.vue'
import HomeExperience from '@/components/homePage/HomeExperience.vue'
import HomeCarousel from '@/components/homePage/HomeCarousel.vue'

export default {
    name: 'HomeView',
    components: {
        HomeMenu,
        HomeBanner,
        HomeAbout,
        HomeAward,
        HomeIngradients,
        HomeQuote,
        HomeExperience,
        HomeCarousel,
    },
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


</style>

