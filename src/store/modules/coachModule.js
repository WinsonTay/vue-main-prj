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
        const formData = payload.formData;
        console.log(formData);
        state.coaches.push({
           id: Date.now().toISOString,
           firstName:formData.first,
           lastName:formData.last,
           hourlyRate:formData.rate,
           description:formData.desc,
           areas:formData.areas
        });

      }
    },
    
    actions: {
      addCoachFromSubmit(context,payload){
        context.commit("addCoach", payload);
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