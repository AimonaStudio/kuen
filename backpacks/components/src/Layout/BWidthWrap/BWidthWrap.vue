<script>
export default {
  name: 'BWidthWrap',

  props: {
    separation: { type: Number, default: 10 },
    side: { type: Number, default: 3 }
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
        'flex': `${this.mainSide} 0 auto}`
      }
    }

    const sideData = {
      class: {
        'b-width-wrap--side': true
      },
      style: {
        'flex': `${this.side} 1 auto`
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
