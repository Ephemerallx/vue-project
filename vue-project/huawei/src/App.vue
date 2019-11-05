<template>
  <div id="app">
      <headerTop></headerTop>
      <banners></banners>
      <hw-section></hw-section>
      <footerBottom></footerBottom>
  </div>
</template>

<script>
import header from './components/header'
import footer from './components/footer'
import banner from './components/section/banner'
import sec from './components/section/sec'
export default {
  name: 'app',
  components: {
    "headerTop":header,
    "footerBottom":footer,
    "banners":banner,
    "hw-section":sec
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
