<template>
  <div id="app">
    <Playground />
  </div>
</template>

<script>
  import Playground from './components/Playground'

  export default {
    name: 'App',
    components: {
      Playground
    }
  }
</script>

<style lang="stylus">
  @import "../backpacks/components/src/stylus/app.styl"
  @import "../backpacks/components/src/stylus/settings/_theme.styl"

  body {
    margin 0
  }

  #app {
    font-family $font-size-default
    text-align center
    color #2c3e50
  }
</style>
