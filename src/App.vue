<template>
  <div id="app">
    <router-view></router-view>
    <foot v-show="$route.meta.navShow"></foot>
  </div>
</template>

<script>
import foot from "@/components/Foot"
export default {
  components:{
    foot
  }
}
</script>

<style>
  #app{
    background: #f2f2f2;
    width: 100vw;
    height: 100vh;
  }
</style>
