<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input v-model="firstName" type="text" id="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input v-model="lastName" type="text" id="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description </label>
      <textarea v-model="description" id="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input v-model.number="hourlyRate" type="number" id="rate" />
    </div>
     <div class="form-control">
         <h2>Areas of Expertise</h2>
         <div>
             <input v-model="areas" type="checkbox" id="frontend" value="frontend">
             <label for="frontend">Front End Development</label>
         </div>
          <div>
             <input v-model="areas" type="checkbox" id="backend" value="backend">
             <label for="backend">Back End Development</label>
         </div>
          <div>
             <input v-model="areas" type="checkbox" id="career" value="career">
             <label for="career">Career Development</label>
         </div>
    </div>
    <base-button>Register now !</base-button>
  </form>
</template>

<script>
export default {
    data () {
        return {
            firstName:null,
            lastName:null,
            description:null,
            hourlyRate:null,
            areas:[]
        }
    },
    emits:['submit-form'],
    methods : {
        submitForm() {
            const formData= {
                first:this.firstName,
                last:this.lastName,
                desc:this.description,
                rate:this.hourlyRate,
                areas:this.areas
            }
            this.$emit("submit-form", formData);

        }
    }

};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

</style>
