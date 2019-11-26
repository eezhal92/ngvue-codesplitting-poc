<template>
  <div>
    <div>Account {{ name }}</div>

    <Users />
  </div>
</template>

<script>
export default {
  components: {
    Users: () => import(/* webpackChunkName: "users" */ '../../components/Users.vue'),
  },

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
