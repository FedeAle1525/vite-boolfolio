<script>

import axios from 'axios'

export default {

  data() {
    return {

      project: null
    }
  },

  // Indico che il Parametro 'slug' passatto alla Rotta viene usato come Proprietà
  props: ['slug'],

  methods: {

    fetchProject(slug) {

      // Recupero la Proprietà 'slug' e la passo come Parametro al Query Builder che farà la chiamata all'API
      axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)

        .then(res => {

          const success = res.data.success

          if (success) {

            // In caso di successo recupero i dati
            this.project = res.data.results

          } else {

            // In caso di 'errore' faccio Redirect a una Rotta che mostra errore
            // Acceddo al Router per fare un Redirect
            // this.$router.replace({ name: '404' });
          }
        })

        .catch(err => {
          console.log(err);
        })

    }
  },

  created() {

    // Posso recuperare le Proprietà solo dopo che il componente è montato
    this.fetchProject(this.slug);
  }

}
</script>

<template>
  <template v-if="project">
    <div class="container">

      <div class="header">
        <h1> {{ project.name }}</h1>

        <span class="type"> {{ project.type ? project.type.name : "Nessuna" }}</span>
      </div>

      <div class="main">
        <p> "{{ project.description ? project.description : "Nessuna descrizione" }}" </p>

        <span> {{ project.client }}</span>
      </div>

      <div class="footer">
        <ul v-if="project.technologies.length > 0">
          <li v-for="tech in project.technologies">
            {{ tech.name }}
          </li>
        </ul>
        <span class="no-tag" v-else> Nessun TAG</span>
      </div>

    </div>
  </template>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
  }

  .type {
    font-size: 18px;
    line-height: 28px;
    padding: 0 10px;
    background-color: cornflowerblue;
    color: white;
    border-radius: 999px;
    width: max-content;
  }
}

.main {
  margin: 40px 0;

  p {
    margin-bottom: 30px;
  }

  span {
    text-decoration: underline;
    font-style: italic;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
    gap: 10px;
    color: gray;
  }
}
</style>