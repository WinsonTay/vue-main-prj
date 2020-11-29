<template>
  <base-card>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </base-card>
  <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
      ></coach-item>
    </ul>
    <h4 v-else>No Coaches Found</h4>
  </base-card>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem";
import CoachFilter from "../../components/coaches/CoachFilter";

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
        const coaches = this.$store.getters["coaches/coaches"];
         const filteredCoaches = coaches.filter(c => {
              if (this.activeFilters.frontend && c.areas.includes('frontend')){
                return true;
              }
              if(this.activeFilters.backend && c.areas.includes('backend')){
                 return true;
              }
              if(this.activeFilters.career && c.areas.includes('career')){
                 return true;
              }
              return false;
         });
        return filteredCoaches;
      //return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
