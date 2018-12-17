import { genComponentStyles } from './utils/styles'

export default function (conf) {
  const {
    scpNonce = 'himself65',
    components,
    theme,
    minify
  } = conf
  return {
    name: 'appable',
    data () {
      return {
        options: {
          cspNonce: scpNonce
        },
        generatedStyles: undefined
      }
    },

    watch: {
      generatedStyles () {
        this.applyTheme()
      }
    },

    async created () {
      this.generatedStyles = await this.genTheme()
      await this.genStyle()
      this.applyTheme()
    },

    methods: {
      async genTheme () {
        let css = ''
        const componentsStyle = await genComponentStyles(components, theme, minify)
        css = `${css} ${componentsStyle}`
        return css
      },

      async genStyle () {
        let style = document.getElementById('kuen-theme-stylesheet')

        if (!style) {
          style = document.createElement('style')
          style.type = 'text/css'
          style.id = 'kuen-theme-stylesheet'
          if (this.options.cspNonce) {
            style.setAttribute('nonce', this.options.cspNonce)
          }
          document.head.appendChild(style)
        }
        this.style = style
      },

      applyTheme () {
        if (this.style) this.style.innerHTML = this.generatedStyles
      }
    }
  }
}
