<template>
  <div id="app">
    <router-view/>
    
    <van-tabbar route v-show="istabbar">
      <van-tabbar-item
        replace
        to="/index"
        icon="home-o"
      >
        标签
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/my"
        icon="contact"
      >
        标签
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      istabbar: true
    }
  },
  mounted() {
    this.fontSizeAuto();
    window.onresize = this.fontSizeAuto;
  },
  methods: {
    fontSizeAuto() {
        var viewportWidthRate = document.documentElement.clientWidth / 3.75;
        document.documentElement.style.fontSize = viewportWidthRate +'px';
    },
  },
  watch:{
      $route:{
          handler(newRouter){
              console.log(newRouter )
              if(newRouter.name == 'login'){
                this.istabbar = false
              }else{
                this.istabbar = true
              }
          },
          immediate: true
      }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
