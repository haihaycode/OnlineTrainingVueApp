<template>
  <div>
    <section id="register">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-12 col-xl-11">
            <div class="text-black" style="border-radius: 10px;">
              <b-card-body class="p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Đăng Kí Tài Khoản</p>
                    <h3 class="text-center h1 fw-bold mb-5 fs-6 fw-normal text-secondary m-0">Đăng Kí ngay bây giờ để thi
                      các bài thi mới nhất</h3>
                    <b-form @submit.prevent="handleSubmit">
                      <b-form-group id="username-group" label="Tên người dùng:" label-for="username">
                        <b-form-input id="username" v-model.trim="form.username"></b-form-input>
                        <div v-if="!$v.form.username.required" class="error">Vui lòng nhập tên người dùng.</div>
                        <div v-else-if="!$v.form.username.usernameFormat" class="error">Tên đăng nhập không dấu và dính
                          liền.</div>
                      </b-form-group>
                      <b-form-group id="email-group" label="Email:" label-for="email">
                        <b-form-input id="email" v-model.trim="form.email" autocomplete="username" type="email"></b-form-input>
                        <div v-if="!$v.form.email.required" class="error">Vui lòng nhập email.</div>
                        <div v-else-if="!$v.form.email.email" class="error">Email không hợp lệ.</div>
                      </b-form-group>
                      <b-form-group id="password-group" label="Mật khẩu:" label-for="password">
                        <b-form-input id="password" v-model.trim="form.password" autocomplete="new-password" type="password"></b-form-input>
                        <div v-if="!$v.form.password.required" class="error">Vui lòng nhập mật khẩu.</div>
                      </b-form-group>
                      <b-form-group id="confirmPassword-group" label="Xác nhận mật khẩu:" label-for="confirmPassword">
                        <b-form-input id="confirmPassword" autocomplete="new-password" v-model.trim="form.confirmPassword"
                          type="password"></b-form-input>
                        <div v-if="!$v.form.confirmPassword.required" class="error">Vui lòng xác nhận mật khẩu.</div>
                        <div v-else-if="!$v.form.confirmPassword.sameAsPassword" class="error">Mật khẩu không khớp.</div>
                      </b-form-group>
                      <div class="text-center">
                        <b-button class="btn" type="submit">Đăng ký</b-button>
                        <b-button class="btn" variant="danger" @click="signInWithGoogle">Google <i
                            class="fa fa-user"></i></b-button>
                      </div>
                      <h3 class="text-center h1 fw-bold mb-5 fs-6 fw-normal text-secondary m-0">Bạn đã có tài khoản ?
                        <b-link class="text-primary" to="login">Đăng Nhập</b-link> </h3>
                    </b-form>

                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="image/6343825.jpg" class="img-fluid " style="border-radius: 20px;" alt="Sample image">
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

import { signInWithGoogle, handleSubmit } from '@/utils/client/registerMethods.js';
import { required, email, sameAs } from 'vuelidate/lib/validators';
const usernameFormat = value => /^[a-zA-Z0-9]+$/.test(value);//không dấu , dính liền

export default {

  name: "ClientRegister",

  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      isLoading: false
    };
  },
  validations: {
    form: {
      username: { required, usernameFormat },
      email: { required, email },
      password: { required },
      confirmPassword: { required, sameAsPassword: sameAs('password') }
    }
  },
  methods: {
    handleSubmit() {
      if (this.$v.form.$invalid) {
        this.$toastr.warning('Vui lòng nhập thông tin hợp lệ', 'Thông báo');
        return;
      }
      handleSubmit(this.form, this.$toastr);
    },
    signInWithGoogle() {
      signInWithGoogle(this.$toastr);
    }
  }
};
</script>

<style scoped>
.error {
  color: red;

}

.btn {
  margin: 5px;
}
</style>