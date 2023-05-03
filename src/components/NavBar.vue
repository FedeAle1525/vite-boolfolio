<script>

export default {

}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <route-link :to="{ name: 'home' }">Home</route-link>
        </li>
        <li>PortFolio</li>
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