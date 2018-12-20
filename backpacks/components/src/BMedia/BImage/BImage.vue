<script>
export default {
  name: 'b-image',

  props: {
    src: { type: String, default: '' }
  },

  computed: {
    classes () {
      return {
        'b-image': true
      }
    },
    styles () {
      return {
        'background-image': `url(${this.src})`
      }
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
        <img src={this.src}/>
      </div>
    )
  }
}
</script>

<style lang="stylus" src="./BImage.styl"></style>
