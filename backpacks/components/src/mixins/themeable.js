export default {
  name: 'themeable',

  provide () {
    return {
      theme: this.themeableProvide
    }
  },

  inject: {
    theme: {
      default: {
        isDark: false
      }
    }
  },

  props: {
    dark: { type: Boolean, default: false },
    light: { type: Boolean, default: true }
  },

  data () {
    return {
      themeableProvide: {
        isDark: false
      }
    }
  },

  computed: {
    isDark () {
      if (this.dark === true) {
        // dark has high priority
        return true
      } else if (this.light === true) {
        return false
      } else {
        // check parent
        return this.theme.isDark
      }
    },
    themeClasses () {
      return {
        'theme--dark': this.isDark,
        'theme--light': !this.isDark
      }
    },
    rootIsDark () {
      if (this.dark === true) {
        return true
      } else if (this.light === true) {
        return false
      } else {
        // todo: add root component
        return this.$bff.dark
      }
    },
    rootThemeClasses () {
      return {
        'theme--dark': this.rootIsDark,
        'theme--light': !this.rootIsDark
      }
    }
  },

  watch: {
    isDark: {
      handler (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.themeableProvide.isDark = this.isDark
        }
      },
      immediate: true
    }
  }
}
