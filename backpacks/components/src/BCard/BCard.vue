<!-- TODO: merge this to LCard -->
<template>
  <div class="b-card">
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
export default {}
</script>

<style lang="stylus" scoped>
  @import "../../../../stylus/_settings.styl"

  .b-card
    display flex
    flex-direction column
    flex-wrap nowrap
    padding 0
    margin 0 16px 0 16px
    border 1px solid rgba(0, 0, 0, .125)
    border-radius .25rem

  .b-card > .header
    display flex
    flex-direction row
    flex-wrap nowrap
    align-items center
    padding: 16px 20px 16px 20px
    background-color rgba(0, 0, 0, .03)
    border-bottom 1px solid rgba(0, 0, 0, .125)

  .b-card > .body
    padding 20px

  @media $display-breakpoints.xs-only
    .b-card
      margin: 0
</style>
