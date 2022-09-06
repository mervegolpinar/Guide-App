import { createApp } from 'vue';
import App from './App.vue';
import { loadFonts } from './plugins/webfontloader';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import store from './store';
import router from "./router";
import axios from "axios";

loadFonts()
const vuetify = createVuetify()
const app = createApp(App);

app.use(vuetify)
app.use(store)
app.use(router)
app.config.globalProperties.$axios = axios

app.mount('#app')
