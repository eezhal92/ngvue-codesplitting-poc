<template>
  <div>
    <h3>Users</h3>
    <div v-for="user in users" :key="user">
      {{ user }}
    </div>
  </div>
</template>

<script>
import { getUsers } from '../services/users';

export default {
  data () {
    return {
      users: []
    };
  },

  mounted() {
    this.fetchUsers()
  },

  methods: {
    fetchUsers () {
      getUsers()
        .then((users) => {
          this.users = users;
        })
    }
  }
}
</script>
