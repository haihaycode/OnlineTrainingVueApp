// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store'; // Import store từ tệp store

import ClientLayout from '../components/Layout/ClientLayout.vue';
import AdminLayout from '../components/Layout/AdminLayout.vue';
import ClientHome from '../views/client/Home.vue';
import ClientAbout from '../views/client/About.vue';
import AdminHome from '../views/admin/Home.vue';
import AdminDashboard from '../views/admin/Dashboard.vue';
import ClientHeader from '../components/client/Header.vue';
import ClientFooter from '../components/client/Footer.vue';
import AdminHeader from '../components/admin/Header.vue';
import AdminFooter from '../components/admin/Footer.vue';
import RegisterClient from '../views/client/Register.vue';
import LoginClient from '../views/client/Login.vue';
import InfoClient from '../views/client/Info.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ClientLayout,
    children: [
      {
        path: '',
        components: {
          default: ClientHome,
          header: ClientHeader,
          footer: ClientFooter
        }
      },
      {
        path: 'about',
        components: {
          default: ClientAbout,
          header: ClientHeader,
          footer: ClientFooter
        }
      },
      {
        path: 'register',
        components: {
          default: RegisterClient,
          header: ClientHeader,
          footer: ClientFooter
        }
      },
      {
        path: 'login',
        components: {
          default: LoginClient,
          header: ClientHeader,
          footer: ClientFooter
        }
      },
      {
        path: 'info',
        components: {
          default: InfoClient,
          header: ClientHeader,
          footer: ClientFooter
        }
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        components: {
          default: AdminHome,
          header: AdminHeader,
          footer: AdminFooter
        }
      },
      {
        path: 'dashboard', components: {
          default: AdminDashboard,
          header: AdminHeader,
          footer: AdminFooter
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.getUser !== null;
  const isLoginOrRegister = to.path === '/Login' || to.path === '/Register';
  const isInfoPage = to.path === '/info'; // Kiểm tra xem trang hiện tại có phải là trang info hay không
  
  if (isAuthenticated && isLoginOrRegister) {
    next({ path: '/' }); // Nếu đã đăng nhập và đang cố gắng truy cập trang đăng nhập hoặc đăng ký, chuyển hướng về trang chính
  } else if (!isAuthenticated && isInfoPage) {
    next({ path: '/' }); // Nếu chưa đăng nhập và đang cố gắng truy cập trang info, chuyển hướng về trang chính
  } else {
    next(); // Tiếp tục điều hướng
  }
});


export default router;
