<!--
 * @Author: your name
 * @Date: 2021-08-10 15:42:33
 * @LastEditTime: 2021-08-12 10:39:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {FooterGuide}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f
</style>
