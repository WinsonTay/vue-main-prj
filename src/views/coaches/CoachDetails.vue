<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ selectedCoach.hourlyRate }} / hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Intersted? Reach Out Now !</h2>
        <base-button link :to="coachContactLink"
          >Contact the Fucking Coach</base-button
        >
      </header>
    </base-card>
  </section>
  <router-view></router-view>
  <section>
    <base-card>
      <base-badge v-for="area in selectedCoach.areas" :key="area" :type="area">{{
        area
      }}</base-badge>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
    props:['id'],
    data () {
        return  {
            selectedCoach: null
        }
    },
    computed: {
        fullName (){
            return this.selectedCoach.firstName +  ' ' + this.selectedCoach.lastName
        },
        coachContactLink (){
            return `/coaches/${this.id}/contact`
        }
    },
    created() {
    
         const coach = this.$store.getters['coaches/coaches'].find(c => c.id === this.id);
         this.selectedCoach = coach
    }

}
</script>

<style></style>
