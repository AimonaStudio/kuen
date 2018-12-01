<script>
export default {
  name: 'BCardBody',
  functional: true,
  render (_, { data, children }) {
    // data.staticClass = 'b-card--body'
    data.staticClass = 'b-card--body'
    return (
      <div {...data}>
        {children}
      </div>
    )
  }
}
</script>

<style scoped>

</style>
