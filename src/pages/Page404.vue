<script>

export default {

}
</script>

<template>
  <div class="content">
    <div class="message">
      <h1>Error 404: Page Not Found!</h1>

      <p>La pagina richiesta non e' stata trovata</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;

  .message {
    background-color: darkslategrey;
    padding: 20px;
    margin-top: 50px;

    h1 {
      color: orangered;
    }

    p {
      color: yellow;
    }
  }
}
</style>