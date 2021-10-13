import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'

// Import Views
// Frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'

// Backend
import Dashbaord from '@/views/backend/Dashboard.vue'
import Products from '@/views/backend/Products.vue'

// ทดสอบสร้างตัวแปรไว้เช็คว่า login หรือยัง
// let state = false

// สร้างฟังก์ชันสำหรับเช็ค route ก่อนเรียกใช้งาน (Route Auth Guard)
function authGuard(to, from, next){
  
  let isAuthenticated = false

  if(localStorage.getItem('user')){
    isAuthenticated = true // ถ้ามีข้อมูล localStorage อยู่
  }else{
    isAuthenticated = false // ถ้าไม่มี localStorage
  }

  if(isAuthenticated){
    next() // อนุญาติให้เข้าสู่ route และโหลด component ที่ต้องการได้
  }else{
    next({name: 'Login'})
  }

}

const routes = [

  /** Frontend Route */
  {
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
  },
  {
    path: '/about',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'About',
        component: About
      }
    ],
    meta: {
      title: 'เกี่ยวกับเรา',
      description: 'รายละเอียดหน้าเกี่ยวกับเรา'
    }
  },
  {
    path: '/portfolio',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: Portfolio
      }
    ],
    meta: {
      title: 'ผลงานของเรา',
      description: 'รายละเอียดหน้าผลงานของเรา'
    }
  },
  {
    path: '/service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Service',
        component: Service
      }
    ],
    meta: {
      title: 'บริการของเรา',
      description: 'รายละเอียดหน้าบริการของเรา'
    }
  },
  {
    path: '/contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Contact',
        component: Contact
      }
    ],
    meta: {
      title: 'ติดต่อเรา',
      description: 'รายละเอียดหน้าติดต่อเรา'
    }
  },
  {
    path: '/register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Register',
        component: Register
      }
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่',
      description: 'รายละเอียดสมัครสมาชิกใหม่'
    }
  },
  {
    path: '/login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'รายละเอียดหน้าเข้าสู่ระบบ'
    }
  },
  {
    path: '/forgotpassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'รายละเอียดหน้าลืมรหัสผ่าน'
    }
  },

  // Error 404 
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  },

  /** Backend Route */
  {
    path: '/backend',
    component: BackendLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashbaord,
        beforeEnter: authGuard
        // beforeEnter: (to, from, next) => {
        //   if(state){
        //     next() // ให้โหลด component ที่เรากำลังเรียกใช้
        //   }else{
        //     next({name: 'Login'})
        //   }
        // }
      }
    ],
    meta:{
      title: 'Dashboard'
    }
  },
  {
    path: '/backend',
    // name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
        beforeEnter: authGuard
        // beforeEnter: (to, from, next) => {
        //   if(state){
        //     next() // ให้โหลด component ที่เรากำลังเรียกใช้
        //   }else{
        //     next({name: 'Login'})
        //   }
        // }
      }
    ],
    meta:{
      title: 'Products'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
