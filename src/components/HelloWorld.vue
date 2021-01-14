<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Dev Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li><a href="https://bootstrap-vue.org/" target="_blank" rel="noopener"
          >bootstrap-vue</a>
      </li>
      <li><a href="https://github.com/FortAwesome/vue-fontawesome" target="_blank" rel="noopener"
          >vue-fontawesome</a></li>
    </ul>
    <h3>Design Ecosystem</h3>
    <ul>
      <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener"
          >bootstrap</a>
      </li>
      <li><a href="https://fontawesome.com/" target="_blank" rel="noopener"
          >fontawesome</a></li>
    </ul>
    <h3>Component Library</h3>
    <p><a href="http://localhost:6006/" target="_blank" rel="noopener"
          >http://localhost:6006</a></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  color: #4d307f;
}
</style>
