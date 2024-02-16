import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/database';
import NProgress from 'nprogress';

Vue.use(Vuex);

const USER_STORAGE_KEY = 'user';

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.id));
    },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem(USER_STORAGE_KEY);
     
    }
  },
  actions: {
    async setIdUser({ commit  }, uid) {
      try {
        NProgress.start(); // Bắt đầu hiển thị progress bar
        const userSnapshot = await firebase.database().ref('users').child(uid).once('value');
        var detailedUserData = userSnapshot.val();
        detailedUserData.id = uid;
        commit('setUser', detailedUserData);
      } catch (error) {
        console.error('Error fetching detailed user data:', error);
        throw error;
      } finally {
        // Chuyển hướng người dùng về trang chính
       
        NProgress.done(); // Kết thúc hiển thị progress bar
     
        
      }
    },
    async initializeStore() {
      try {
        NProgress.start(); // Bắt đầu hiển thị progress bar
        const uid = localStorage.getItem(USER_STORAGE_KEY);
        if (uid) {
          await store.dispatch('setIdUser', JSON.parse(uid));
        }
      } catch (error) {
        console.error('Error initializing store:', error);
      } finally {
        NProgress.done(); // Kết thúc hiển thị progress bar
      }
    },

    async logout({ commit }) {
      try {
        NProgress.start(); // Bắt đầu hiển thị progress bar
        // Thực hiện đăng xuất ở đây (ví dụ: xóa dữ liệu người dùng khỏi state và localStorage)
        commit('clearUser');
      } catch (error) {
        console.error('Error logging out:', error);
      } finally {
        NProgress.done(); // Kết thúc hiển thị progress bar
      }
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  }
});

export default store;
