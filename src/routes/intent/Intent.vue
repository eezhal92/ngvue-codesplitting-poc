<template>
  <div>Intent Page {{ result }} <button @click="increment">Add</button> </div>
</template>

<script>
export default {
  data () {
    return {
      result: 0
    };
  },

  methods: {
    increment() {
      this.result += 1;
    }
  }
}
</script>
