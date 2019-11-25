<template>
  <div>
    Account {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: 'Alex',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
