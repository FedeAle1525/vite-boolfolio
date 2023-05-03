<script>
import Projects from './../components/Projects.vue';

export default {

  components: {
    Projects
  }
}
</script>

<template>
  <div class="container">
    <h1>Progetti</h1>
  </div>

  <Projects />
</template>

<style lang="scss" scoped>
.container {
  padding: 20px 0;

  h1 {
    text-align: center;
  }

}
</style>