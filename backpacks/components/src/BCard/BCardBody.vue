<script>
export default {
  name: 'b-card-body',
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
