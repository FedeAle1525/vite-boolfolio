<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {

  data() {
    return {

      // Array in cui verranno messi i dati pescati tramite API dal DB
      projects: [],
      links: []
    }
  },

  components: {
    ProjectCard
  },

  methods: {

    // Metodo che esegue chiamata al Server tramite API per recuperare tutti i Progetti dal DB
    fetchProjects(pg) {

      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {
          page: pg
        }
      })

        .then(res => {
          // console.log(res);

          // Salvo nell'Array i dati dei Progetti contenuti nella risposta mandata dal Server
          this.projects = res.data.results.data;
          this.links = res.data.results.links;
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
    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>

  <div class="container">
    <ul class="pagination">
      <li :class="[link.active ? 'active' : '', 'page-link']" v-for="link in links"
        @click="fetchProjects(parseInt(link.label))" :key="link.label" v-html="link.label"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
}

.container {
  padding: 30px 0;

  .pagination {
    display: flex;
    gap: 10px;
    justify-content: center;
    cursor: pointer;

    li.active {
      text-decoration: underline;
      color: orangered;
    }
  }
}
</style>