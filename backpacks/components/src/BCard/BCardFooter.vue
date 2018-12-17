<script>
export default {
  name: 'b-card-footer',
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
