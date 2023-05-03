<script>
import NavBar from './components/NavBar.vue';

export default {

  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar />

  <!-- TAG che permette al Router di Montare i Componenti Radice indicati nelle Rotte -->
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
.container {
  padding: 20px 0;

  h1 {
    text-align: center;
  }

}
</style>
