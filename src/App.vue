<template>
  <Header></Header>
  <router-view/>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'app',
  components: {
    Header
  },
}
</script>
<style lang="scss">
// body,input,select,button {
//   font-family: $main_font;
//   background-color: $bg_color;
//   // ::selection{
//   //   color: $main_color;
//   // }
// }
// html{
//   scroll-behavior: smooth;
// }
</style>
