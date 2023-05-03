<script>

export default {

}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- Link alla Rotta 'home' -->
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <!-- Link alla Rotta 'portfolio.index' -->
          <router-link :to="{ name: 'portfolio.index' }">PortFolio</router-link>
        </li>
        <li>Chi Sono</li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 30px 0;

  nav {
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      gap: 20px;
      cursor: pointer;
    }
  }
}
</style>