import { createApp } from 'vue'
import App from './App.vue'

import globalComponents from "./components/global"
import {createHead} from "@unhead/vue";

const app = createApp(App)
const head = createHead()
app.use(globalComponents)

app.use(head).mount("#app")