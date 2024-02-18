<template>
  <div>
    <b-navbar type="light" variant="light" toggleable="md" class="fixed-top">
      <b-navbar-brand href="#" style="margin-left: 10px">
        <img src="image/logoApp.png" width="50px" rounded="circle" alt="logo" />
      </b-navbar-brand>
      <b-navbar-brand to="/" class="text-sm-start  fw-semibold mb-1 fs-4  text-secondary ">Online Training</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="mr-4"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="text-sm-start  fw-normal  fs-6  text-secondary " is-nav style="padding-left: 20px; padding-right: 20px">
        <b-navbar-nav class="mr-auto ml-3">
          <b-nav-item to="news">Tin tức</b-nav-item>
          <b-nav-item to="about"> Giới thiệu</b-nav-item>
          <b-nav-item to="faq">Hỏi đáp</b-nav-item>
          <b-nav-item to="category">Danh mục bài thi</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Tài Khoản" right>
            <div v-if="userData" class="text-amber">
              <b-dropdown-item>
             Xinn chào :    {{ userData.level === 1 ?  userData.username+" (Giảng Viên)" :  userData.username+" (Học Viên)" }}
              </b-dropdown-item>
              <hr>
            </div>
            <div v-else>
              <b-dropdown-item to="login">Đăng nhập</b-dropdown-item>
              <b-dropdown-item to="register">Đăng ký</b-dropdown-item>
            </div>

            <b-dropdown-item to="info">Quản lí thông tin</b-dropdown-item>
            <b-dropdown-item href="#">Lịch sử bài thi</b-dropdown-item>
            <b-dropdown-item href="#">Quản lí bài đăng</b-dropdown-item>

            <div v-if="userData && userData.level === 1">
              <b-dropdown-item href="#">Quản lí bài thi</b-dropdown-item>
            </div>

            <div v-if="userData">
              <b-dropdown-item @click="logoutUser">Đăng Xuất</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    userData() {
      return this.$store.getters.getUser; // Lấy thông tin người dùng từ Vuex store
    },
  },
  methods: {
    async logoutUser() {
      try {
        await this.$store.dispatch("logout");

        const currentPath = this.$route.path;
        const newPath = "/"; // Địa chỉ URL mới bạn muốn chuyển hướng đến
        if (currentPath !== newPath) {
          this.$router.push(newPath);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
button.navbar-toggler.mr-4.collapsed {
    margin-right: 20px;
}
</style>