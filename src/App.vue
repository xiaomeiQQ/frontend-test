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
//
</style>
