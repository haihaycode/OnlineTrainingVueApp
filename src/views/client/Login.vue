<template>
  <div>
    <section id="login">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-12 col-xl-11">
            <div class="text-black" style="border-radius: 10px;">
              <b-card-body class="p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Đăng Nhập</p>

                    <b-form @submit.prevent="handleLogin">
                      <b-form-group id="login-username-group" label="Tên người dùng:" label-for="login-username">
                        <b-form-input id="login-username" v-model.trim="loginForm.username"></b-form-input>
                        <div v-if="!$v.loginForm.username.required" class="error">Vui lòng nhập tên người dùng.</div>
                        <div v-else-if="!$v.loginForm.username.usernameFormat" class="error">Tên đăng nhập không dấu và
                          dính liền.</div>
                      </b-form-group>
                      <b-form-group id="login-password-group" label="Mật khẩu:" label-for="login-password">
                        <b-form-input id="login-password" v-model.trim="loginForm.password"
                          type="password"></b-form-input>
                        <div v-if="!$v.loginForm.password.required" class="error">Vui lòng nhập mật khẩu.</div>
                      </b-form-group>
                      <b-form-checkbox id="remember-me" v-model="rememberMe">Nhớ tài khoản</b-form-checkbox>
                      <div class="text-center">
                        <b-button class="btn" type="submit">Đăng nhập</b-button>
                        <b-button class="btn" @click="signInWithGoogle" variant="danger">Google <i
                            class="bx bxl-google"></i></b-button>
                      </div>
                      <h3 class="text-center h1 fw-bold mb-5 fs-6 fw-normal text-secondary m-0">Bạn chưa có tài khoản ?
                        <b-link class="text-primary" to="register">Đăng kí Ngay</b-link> <br> <b-link class="text-primary"
                          to="forgotpassword">Quên Mật Khẩu</b-link>
                      </h3>
                    </b-form>

                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="image/loginlogo.png" class="img-fluid" alt="Sample image">
                  </div>
                </div>
              </b-card-body>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>


import { signInWithGoogle, handleLogin } from '@/utils/client/loginMethods.js';

import { required } from 'vuelidate/lib/validators';
// import { hashPassword } from '@/config/encryptionUtils';
const usernameFormat = value => /^[a-zA-Z0-9]+$/.test(value);//không dấu , dính liền
export default {
  name: "LoginClient",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rememberMe: false // Thêm trường rememberMe và khởi tạo giá trị mặc định là false
    };
  },
  validations: {
    loginForm: {
      username: { required, usernameFormat },
      password: { required }
    }
  },
  methods: {
  async signInWithGoogle() {
    try {
      await signInWithGoogle(this.$toastr, this.$store); // Chờ đợi cho hàm signInWithGoogle hoàn thành
      this.$router.push('/'); // Sau khi hoàn thành, chuyển hướng đến trang '/'
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  },
  async handleLogin() {
    try {
      if (this.$v.loginForm.$invalid) {
        this.$toastr.warning('Vui lòng nhập các trường bắt buộc', 'Thông báo');
        return;
      }
      await handleLogin(this.loginForm, this.$toastr, this.$store); // Chờ đợi cho hàm handleLogin hoàn thành
      this.$router.push('/'); // Sau khi hoàn thành, chuyển hướng đến trang '/'
    } catch (error) {
      console.error('Error handling login:', error);
    }
  }
}

};
</script>
  
<style>
.error {
  color: red;
}

.btn {
  margin: 5px;
}
</style>