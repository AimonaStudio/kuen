<script>
import BImage from './BImage'
import BVideo from './BVideo'

export default {
  name: 'BMedia',

  components: {
    BImage,
    BVideo
  },

  props: {
    type: { type: String, default: 'BMedia' }
  },

  computed: {
    classes () {
      return {
        'b-media': true
      }
    },
    styles () {
      return {}
    }
  },

  render (createElement) {
    // todo

    const data = {
      class: {
        ...this.classes
      },
      style: {
        ...this.styles
      }
    }
    const ele = this.type === 'BMedia'
      ? (
        <b-video>
        </b-video>
      )
      : (
        <b-image>
        </b-image>
      )
    return (
      <div {...data}>
        {ele}
      </div>
    )
  }
}
</script>

<style lang="stylus" src="./BMedia.styl"></style>
