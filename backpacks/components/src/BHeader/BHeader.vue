<script>
export default {
  name: 'b-header',

  computed: {
    classes () {
      return {
        'b-header': true
      }
    },

    styles () {
      return {}
    }
  },

  render () {
    return (
      <div class="b-header">
        {this.$slots.default}
      </div>
    )
  }
}
</script>

<style lang="stylus" src="./BHeader.styl"></style>
