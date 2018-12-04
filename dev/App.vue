<template>
  <div id="app">
    <playground />
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

  #app {
    font-family $font-size-default
    text-align center
    color #2c3e50
  }
</style>
