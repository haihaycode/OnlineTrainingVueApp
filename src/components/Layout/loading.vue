<template>
    <div>
        <div v-if="isLoading" class="overlay"></div>
        <div v-if="isLoading" class="loader"></div>
    </div>
</template>
<script>
export default {
    name: "loadingVue",
    data() {
      return {
        isLoading: false
      };
    }
   
  };
  </script>
  