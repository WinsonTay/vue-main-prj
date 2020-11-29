import { createStore } from 'vuex'
import coachModule from './modules/coachModule';

const store = createStore({
  modules:{
    coaches:coachModule
  },
})

export default store
