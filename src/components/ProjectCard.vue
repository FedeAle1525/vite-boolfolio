<script>

export default {

  data() {
    return {

    }
  },

  props: {

    project: {
      type: Object,
      required: true
    }
  }

}

</script>

<template>
  <div class="card">
    <p> {{ project.name }}</p>
  </div>
</template>

<style lang="scss" scoped></style>