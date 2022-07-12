<template>
  <div class="hello">
    <p>{{ users }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    async getData () {
      const url = 'http://localhost:3000/users'
      const data = await fetch(url)
      const jsonData = await data.json()
      console.log(jsonData)
      return jsonData
    }
  },
  async created () {
    this.users = await this.getData()
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
