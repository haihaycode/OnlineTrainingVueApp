<template>
  <div>
    <b-container fluid class="vh-100" id="register">
      <b-row class="justify-content-center align-items-center h-100">
        <b-col cols="12" xl="11">
          <div bg-variant="light" class="text-black" style="border-radius: 10px;">
            <div class="p-md-3">
              <b-row class="justify-content-center">
                <b-col md="12" lg="7" xl="7" order-lg="1">
                  <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Hệ Thống Thi Trắc Nghiệm
                    <code> Lập Trình </code> Miễn Phí Mới Nhất 2024
                  </p>
                  <h3 class="text-center h1 fw-bold mb-1 fs-6 fw-normal text-secondary m-0">Kiến Thức - Kinh Nghiệm - Trải
                    Nghiệm </h3>
                  <div class="text-center fw-bold mb-5 fs-6 fw-normal text-secondary m-0">
                    <b-link class="text-primary mb-3 " to="info" v-if="userData">
                      Hi ! {{ userData.fullname }} <i class="fa fa-hill-avalanche"></i>
                    </b-link>

                    <div v-if="!userData">
                      <b-button variant="secondary" to="register">Đăng Kí Ngay</b-button>
                      <b-button variant="text" to="login">Đăng Nhập</b-button>
                    </div>
                    <div v-else>
                      <b-button variant="light" >Bài thi mới nhất</b-button>
                      <b-button variant="text" @click="logoff()">Đăng Xuất</b-button>
                    </div>
                  </div>
                </b-col>
                <b-col md="8" lg="5" xl="5" order-lg="2" class="d-flex align-items-center">
                  <b-img src="image/features-2.png" fluid alt="Sample image"></b-img>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeClient',
  computed: {
    userData() {
      return this.$store.getters.getUser; // Lấy thông tin người dùng từ Vuex store
    }
  },
  methods: {
    async logoff() {
      try {

        await this.$store.dispatch('logout');

        const currentPath = this.$route.path;
        const newPath = '/'; // Địa chỉ URL mới bạn muốn chuyển hướng đến
        if (currentPath !== newPath) {
          this.$router.push(newPath);
        }
      } catch (error) {
        console.error(error);
      }

    },

  }
}
</script>

<style scoped>
/* Thêm các kiểu scoped styles nếu cần */
</style>
