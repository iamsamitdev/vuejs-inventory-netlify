import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Tailwind CSS มาใช้งาน
import '@/styles/tailwind.css'

// Import Sweet Alert มาใช้งาน
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// สร้างตัวแปรมาเก็บ Constant ของ Vue
const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueSweetalert2)

app.mount('#app')