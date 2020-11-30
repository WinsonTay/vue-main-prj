const coachModule = {
    namespaced: true,
    state ()
    {
        return {
            coaches:[
                {
                  id: 'c1',
                  firstName: 'Maximilian',
                  lastName: 'Schwarzmüller',
                  areas: ['frontend', 'backend'],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Julie',
                  lastName: 'Jones',
                  areas: ['frontend'],
                  description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                }
              ] 
        }
    },
    
    mutations: {
      addCoach(state,payload){
        const formData = payload;
        console.log(formData);
        state.coaches.push(formData);
        console.log(state.coaches);
      }
    },
    
    actions: {
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