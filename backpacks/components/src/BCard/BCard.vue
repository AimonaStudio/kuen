<template>
  <div :class="classes" :style="styles">
    <div v-if="this.$slots.header" class="header">
      <slot name="header" />
    </div>
    <div class="body">
      <slot />
    </div>
    <div v-if="this.$slots.footer" class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 320 }
  },
  computed: {
    classes () {
      return {
        'b-card': true
      }
    },
    styles () {
      return {
        'width': `${this.width}px`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../stylus/settings/_variables.styl"

  .b-card {
    display flex
    flex-direction column
    flex-wrap nowrap
    padding 0
    margin 0 16px 0 16px
    border 1px solid rgba(0, 0, 0, .125)
    border-radius .25rem
  }

  .b-card > .header {
    display flex
    flex-direction row
    flex-wrap nowrap
    align-items center
    padding: 16px 20px 16px 20px
    background-color rgba(0, 0, 0, .03)
    border-bottom 1px solid rgba(0, 0, 0, .125)
  }

  .b-card > .body {
    padding 20px
    text-align: left
  }

  @media $display-breakpoints.xs-only{
    .b-card {
      margin: 0
    }
  }
</style>
