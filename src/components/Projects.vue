<script>
import axios from 'axios';

export default {

  data() {
    return {

      // Array in cui verranno messi i dati pescati tramite API dal DB
      projects: [],
    }
  },

  methods: {

    // Metodo che esegue chiamata al Server tramite API per recuperare tutti i Progetti dal DB
    fetchProjects() {

      axios.get('http://127.0.0.1:8000/api/projects')

        .then(res => {
          // console.log(res);

          // Salvo nell'Array i dati dei Progetti contenuti nella risposta mandata dal Server
          this.projects = res.data.results;
        })

        .catch(err => {
          console.log(err)
        })

    }
  },

  mounted() {

    this.fetchProjects();
  }

}
</script>

<template>
  <div class="container">
    <p v-for="project in projects" :key="project.id">
      {{ project.id }} - {{ project.name }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>