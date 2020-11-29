import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import BaseCard from './components/UI/BaseCard.vue'
import BaseBadge from './components/UI/BaseBadge.vue'
import BaseButton from './components/UI/BaseButton.vue'

const app = createApp(App)
app.component('base-card',BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);

app.use(store)
app.use(router)

app.mount('#app')