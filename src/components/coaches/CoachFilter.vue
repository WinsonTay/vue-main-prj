<template>
  <section>
    <h2>Find your coach</h2>
    <span class="filter-option">
        <input type="checkbox" id ="frontend" checked @change="setFilter">
        <label for="frontend">Front End</label>
    </span>
      <span class="filter-option">
        <input type="checkbox" id ="backend" checked @change="setFilter">
        <label for="backend">Back End</label>
    </span>
      <span class="filter-option">
        <input type="checkbox" id ="career" checked @change="setFilter">
        <label for="career">Career</label>
    </span>
  </section>
</template>

<script>
export default {

    data (){
        return {
            filters :{
                frontend:true,
                backend:true,
                career:true,
            }
        }
    },
    emits:['change-filter'],
    methods: {
        setFilter(event) {
                const inputId = event.target.id
                const isActive = event.target.checked
                const updatedFilters = {
                    ...this.filters,
                    [inputId]: isActive
                }
                this.filters = updatedFilters
                this.$emit('change-filter', updatedFilters)
        },
    }

};
</script>

<style></style>
