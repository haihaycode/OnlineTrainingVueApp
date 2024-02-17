import Vue from 'vue';
import App from './App.vue';
import router from './web/router';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, BIcon } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vuelidate from 'vuelidate';
import toastr from '@/config/toastrConfig';
import 'toastr/build/toastr.css';
import '@fortawesome/fontawesome-free/css/all.css';
import firebaseConfig from '@/config/firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/database';
import NProgress from 'nprogress';
import store from '@/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon); // Đăng ký thành phần BIcon
Vue.use(Vuelidate);
Vue.use(BootstrapVue);

Vue.prototype.$toastr = toastr;
Vue.prototype.$store = store;
Vue.config.productionTip = false;
firebase.initializeApp(firebaseConfig);

// Khởi tạo ứng dụng Vue
async function initializeApp() {
  try {
    NProgress.start();
    await store.dispatch('initializeStore'); 
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app');
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error initializing app:', error);
  }finally{
    NProgress.done();
  }
}

initializeApp();


