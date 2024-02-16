

<template>
  <div id="app">
  
    <component :is="currentLayout">
      <router-view />
    </component>
    
  </div>
</template>

<script>
import AdminLayout from './components/Layout/AdminLayout.vue';
import ClientLayout from './components/Layout/ClientLayout.vue';



export default {
  name: 'App',
  components: {
  
    ClientLayout,
    AdminLayout,
   
  },
  computed: {
    currentLayout() {
      return this.$route.path.startsWith('/admin') ? AdminLayout : ClientLayout;
    }
    
  }
}
</script>
