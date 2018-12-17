<script>
export default {
  name: 'b-footer',

  computed: {
    classes () {
      return {
        'b-footer': true
      }
    },
    styles () {
      return {}
    }
  },

  render () {
    const data = {
      class: {
        ...this.classes
      },
      style: {
        ...this.styles
      }
    }
    return (
      <footer {...data}>
        {this.$slots.default}
      </footer>
    )
  }
}
</script>

<style lang="stylus" src="./BFooter.styl"></style>
