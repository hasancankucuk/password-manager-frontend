<template>
  <div class="homePageMain">
  </div>
</template>

<script>
import router from '../../router'

export default {
  name: 'Home',
  methods: {
    test () {
      router.push({ path: '/all-passwords' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
