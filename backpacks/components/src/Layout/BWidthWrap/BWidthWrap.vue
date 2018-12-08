<script>
export default {
  name: 'BWidthWrap',

  computed: {
    classes () {
      return {
        'b-width-wrap': true
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
      <div {...data}>
        <div class="b-width-wrap--side">
          {this.$slots.side}
        </div>
        <div class="b-width-wrap--main">
          {this.$slots.main}
        </div>
      </div>
    )
  }
}
</script>

<style lang="stylus"></style>
