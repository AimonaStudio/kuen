<script>
export default {
  name: 'BWidthWrap',

  props: {
    separation: { type: Number, default: 5 },
    side: { type: Number, default: 1 }
  },

  computed: {
    classes () {
      return {
        'b-width-wrap': true
      }
    },
    styles () {
      return {}
    },

    mainSide () {
      return this.separation - this.side
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

    const mainData = {
      class: {
        'b-width-wrap--main': true
      },
      style: {
        'flex': `${this.mainSide} 1 auto}`
      }
    }

    const sideData = {
      class: {
        'b-width-wrap--side': true
      },
      style: {
        'flex': `${this.side} 0 auto`
      }
    }

    return (
      <div {...data}>
        <div {...mainData}>
          {this.$slots.main}
        </div>
        <div {...sideData}>
          {this.$slots.side}
        </div>
      </div>
    )
  }
}
</script>

<style lang="stylus" src="./BWidthWrap.styl"></style>
