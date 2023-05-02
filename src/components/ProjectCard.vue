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
    <h4> "{{ project.name }}" </h4>
    <span class="type"> {{ project.type ? project.type.name : "Nessuna" }}</span>
    <ul v-if="project.technologies.length > 0">
      <li v-for="tech in project.technologies">
        {{ tech.name }}
      </li>
    </ul>
    <span class="no-tag" v-else> Nessun TAG</span>
  </div>
</template>

<style lang="scss" scoped>
.card {

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid blueviolet;
  border-radius: 20px;

  h4 {
    font-style: italic;
  }

  .type {
    font-size: 14px;
    line-height: 24px;
    padding: 0 10px;
    background-color: cornflowerblue;
    color: white;
    border-radius: 999px;
    width: max-content;
    align-self: flex-end;
  }

  .no-tag {
    text-decoration: underline;
  }
}
</style>