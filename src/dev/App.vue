<template>
  <div id="app">
    <playground />
  </div>
</template>

<script>
import Playground from './Playground'

export default {
  name: 'App',
  components: {
    Playground
  }
}
</script>

<style lang="stylus">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
