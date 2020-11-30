const coachModule = {
    namespaced: true,
    state ()
    {
        return {
            coaches:[

              ] 
        }
    },
    
    mutations: {
      addCoach(state,payload){
        const formData = payload;
        console.log(formData);
        state.coaches.push(formData);
        console.log(state.coaches);
      },
      mutateCoaches(state, payload){
        console.log(payload.coaches)
        state.coaches = payload.coaches;
      },  
    },
    
    actions: {
     async loadCoaches(context) {
       const response = await fetch("https://localhost:44394/api/coaches");
     
       if(response.ok){
        const coaches = await response.json();
        context.commit("mutateCoaches", {coaches});
       }else{
         const error = new Error(response.message || 'Failed to Load from Server !');
         throw error;
       }
       
     },
     async addCoachFromSubmit(context,payload){
        
        const newData = {
          firstName:payload.formData.first,
          lastName:payload.formData.last,
          hourlyRate:payload.formData.rate,
          description:payload.formData.desc,
          areas:payload.formData.areas
        }
        const response = await fetch("https://localhost:44394/api/coaches", {
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(newData)
        })
        if(response.ok){
          const dataResponse = await response.json();
          alert("Succeeded Register new Coach !")
          dataResponse.id = dataResponse.id.toString();
          console.log(dataResponse.id);
          context.commit("addCoach", dataResponse);
        }else {
          alert("Something went wrong with the Server, Please try again !")
        }
        
    
      }
        
    },
    getters: {
        coaches(state){
            return state.coaches
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        }
    }
}

export default coachModule