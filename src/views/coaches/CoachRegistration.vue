<template>
    <base-card>   
        <h2>Register as a coach now !</h2>
        <coach-form @submit-form ="submitForm"> </coach-form>
    </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm'
export default {
    components:{
        CoachForm
    },

    methods :{  
        submitForm(formData) {
            this.$store.dispatch('coaches/addCoachFromSubmit', {
                formData
            })
            this.$router.push('/coaches');
        }
    }
}
</script>

<style>

</style>