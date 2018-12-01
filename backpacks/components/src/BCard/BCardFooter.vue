<script>
export default {
  name: 'BCardFooter',
  functional: true,
  render (_, { data, children }) {
    data.staticClass = 'b-card--footer'
    return (
      <div {...data}>
        {children}
      </div>
    )
  }
}
</script>
