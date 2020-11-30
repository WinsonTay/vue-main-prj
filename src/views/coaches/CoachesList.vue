<template>
  <!-- Error Modal -->
  <base-dialog :show="!!error" @close="clearError">
    <p>{{ error }}</p>
  </base-dialog>
  <!-- Main Section -->
  <base-card>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </base-card>
  <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button v-if="!isLoading" link to="/register">Register as Coach</base-button>
    </div>
    <base-spinner v-if="isLoading" />
    <ul v-else-if="!isLoading && hasCoaches">
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
      isLoading:false,
      error:null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  created () {
    this.fetchCoaches();
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
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    clearError(){
      this.error = null;
    },
    async fetchCoaches() {
      this.isLoading = true;
      try {
          await this.$store.dispatch('coaches/loadCoaches');
      } catch (error) {
         this.error = error.message || 'Something went wrong !';
      }
     
      this.isLoading = false;
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
