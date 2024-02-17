<!-- About.vue -->
<template>
    <div>


        <section class="vh-50">
            <div class="container py-5 h-100">         
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-lg-8 mb-4 mb-lg-0">
                       
                        <div class="card mb-3" style="border-radius: .5rem;  background-color: rgba(240, 248, 255, 0.125);">
                            <div class="row g-0">
                                <div class="col-md-4 gradient-custom text-center"
                                    style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                                    <img :src="userData && userData.avatar ? userData.avatar : 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'"
                                        alt="Avatar" class="img-fluid  my-5" style="width: 200px; height: 200px; border-radius: 50%;" />

                                    <h5 class="fw-bold fw-normal text-success">{{ userData ? userData.fullname : "" }}</h5>
                               
                                    <p class="text-right fw-normal  fs-6 text-secondary">{{ userData && userData.description ? userData.description : "Đang cập nhật" }}</p>
                                    <p class="p-1"></p>

                                    <i class="far fa-edit mb-5"  @click="scrollToForm"></i>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body p-4">
                                        <h1 class="fw-bold fs-1 fw-normal text-secondary">Thông tin cá nhân</h1>
                                        <p class="fs-6 fw-light text-secondary ">Quản lí các thông tin của bạn tốt nhất</p>
                                        <hr class="mt-0 mb-4">
                                        <div class="row pt-1">
                                            <div class="col-6 mb-3">
                                                <h6>Tài khoản</h6>
                                                <p  class=" fw-normal  fs-6 text-secondary"  style="word-wrap: break-word;">{{ userData && userData.username ? userData.username : "" }}</p>
                                            </div>
                                            <div class="col-6 mb-3">
                                                <h6>Tài khoản</h6>
                                                      <p class=" fw-normal  fs-6 text-secondary" style="word-wrap: break-word;">{{ userData && userData.email ? userData.email : "" }}</p>
</div>

                                           
                                        </div>
                                        <div class="row pt-1">
                                            <div class="col-6 mb-3">
                                                <h6>Ngày sinh</h6>
                                                <p class=" fw-normal  fs-6 text-secondary">{{ userData && userData.birthdate ? userData.birthdate : "" }}</p>
                                            </div>
                                            <div class="col-6 mb-3">
                                                <h6>Sở thích</h6>
                                                <p class=" fw-normal  fs-6 text-secondary" style="word-wrap: break-word">{{ userData && userData.hobbies ? userData.hobbies : "" }}</p>
                                            </div>
                                           
                                        </div>
                                        <h6>Trạng thái</h6>
                                        <hr class="mt-0 mb-4">
                                        <div class="row pt-1">
                                            <div class="col-6 mb-3">
                                                <h6>Trạng thái</h6>
                                                <p class=" fw-normal text-success fs-6 text-secondary">{{ userData && userData.level ==1 ? "Giáo Viên" : "Học Viên"  }}</p>
                                            </div>
                                            <div class="col-6 mb-3">
                                                <h6>Đang cập nhật</h6>
                                                <p class="fw-light fs-6 text-secondary">Dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-start">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <hr>
                    </div>
                    
                </div>
            </div>

        </section>

        <section id="login">
            <div class="container fw-light fs-6 text-secondary">
                <h3 class="text-center h1 fw-bold mb-1 fs-1 fw-normal text-secondary m-0">Cập nhật thông tin cá nhân </h3>
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-lg-12 col-xl-11">
                        <div class="text-black" style="border-radius: 10px;">
                            <b-card-body class="p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                       
                                        <b-form @submit.prevent="submitForm" id="formEditInfo">
                                            <b-form-group label="UserName *" label-for="username"
                                                :state="!$v.userInfo.username.$error">
                                                <b-form-input id="username"  autocomplete="username"  disabled
                                                    v-model="userInfo.username" class="text-success"></b-form-input>
                                                <span v-if="!$v.userInfo.username.required">Tên người
                                                    dùng là trường bắt buộc</span>
                                            </b-form-group>

                                            <b-form-group label="fullname *" label-for="fullname"
                                                :state="!$v.userInfo.fullname.$error">
                                                <b-form-input id="fullname" v-model="userInfo.fullname"
                                                    placeholder="vd : Nguyen Van A"></b-form-input>
                                                <span v-if="!$v.userInfo.fullname.required">Tên người
                                                    dùng là trường bắt buộc</span>
                                            </b-form-group>

                                            <b-form-group label="Email *" label-for="email"
                                                :state="!$v.userInfo.email.$error">
                                                <b-form-input type="email" id="email" disabled
                                                    v-model="userInfo.email"></b-form-input>
                                                <span v-if="!$v.userInfo.email.required">Email là trường
                                                    bắt buộc</span>
                                            </b-form-group>
                                            <b-form-group label="Mật khẩu *" label-for="password"
                                                :state="!$v.userInfo.password.$error">
                                                <b-form-input type="password" id="password"
                                                    v-model="userInfo.password" autocomplete="current-password"></b-form-input>
                                                <span v-if="!$v.userInfo.password.required">Mật khẩu là
                                                    trường bắt buộc</span>
                                            </b-form-group>
                                            <b-form-group label="Giới tính:" label-for="gender">
                                                <b-form-radio-group id="gender" v-model="userInfo.gender">
                                                    <b-form-radio value="1" isselected>Nam</b-form-radio>
                                                    <b-form-radio value="0">Nữ</b-form-radio>
                                                </b-form-radio-group>
                                            </b-form-group>
                                            <b-form-group label="Ngày sinh:" label-for="birthdate">
                                                <b-form-datepicker id="birthdate" placeholder="Chọn ngày sinh"
                                                    v-model="userInfo.birthdate"></b-form-datepicker>
                                            </b-form-group>
                                            <b-form-group label="Địa chỉ:" label-for="address"
                                                :state="!$v.userInfo.address.$error">
                                                <b-form-textarea id="address" v-model="userInfo.address"></b-form-textarea>
                                            </b-form-group>
                                            <b-form-group label="Sở thích " label-for="hobbies">
                                                <b-form-input id="hobbies" v-model="userInfo.hobbies"
                                                    placeholder="vd : designer"></b-form-input>
                                            </b-form-group>
                                            <b-form-group label="Mô tả công việc " label-for="description">
                                                <b-form-textarea id="description" v-model="userInfo.description"
                                                    placeholder="vd : description"></b-form-textarea>
                                            </b-form-group>
                                            <b-form-group label="Hình ảnh:" label-for="avatar">
                                                <b-form-file id="avatar" @change="handleFileChange"></b-form-file>
                                            </b-form-group>
                                          <div class="">
                                            <b-button type="submit" variant="primary">Cập nhật</b-button>
                                          </div>
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
import { required, email } from 'vuelidate/lib/validators';
import { uploadInfo } from '@/utils/client/infoMethod'

import 'firebase/storage';

export default {
    name: "InfoClient",
    computed: {
        userData() {
            return this.$store.getters.getUser; // Lấy thông tin người dùng từ Vuex store
        },
    },
    data() {
        const user = this.$store.getters.getUser;
        return {
            userInfo: {
                avatar: null,
                username: user.username,
                fullname: user.fullname ? user.fullname : "",
                email: user.email ? user.email : "",
                password: "",
                gender: user.gender ? user.gender : 1,// 1: nam . 2 nữ 
                birthdate: user.birthdate ? user.birthdate : "2000-02-20",//string // năm tháng ngày
                address: user.address ? user.address : "",
                hobbies: user.hobbies ? user.hobbies : "",//sở thích
                description: user.description ? user.description : "",
            }
        };
    },
    validations: {
        userInfo: {
            username: { required },
            fullname: { required },
            email: { required, email },
            password: {},
            address: {}
        }
    },
    methods: {
        submitForm() {
            // Kiểm tra xem form có hợp lệ không trước khi gửi đi
            this.$v.$touch();
            if (!this.$v.userInfo.$invalid) {

                // Xử lý gửi thông tin đến máy chủ hoặc thực hiện các thao tác khác ở đây
                console.log("Thông tin người dùng:", this.userInfo);
                uploadInfo(this.$toastr, this.$store, this.userInfo)


            } else {
                this.$toastr.warning('Vui lòng nhập các trường bắt buộc', 'Thông báo');
            }
        },
        handleFileChange(event) {
            const selectedFile = event.target.files[0];
            // Kiểm tra dung lượng của tập tin (dưới 1MB)
            const maxFileSize = 1048576; // 1MB = 1048576 byte
            if (selectedFile.size > maxFileSize) {
                this.$toastr.error('Vui lòng chọn một file ảnh có dung lượng nhỏ hơn 1MB', 'Lỗi');
                return;
            }
            // Kiểm tra phần mở rộng của tập tin
            const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Các phần mở rộng hợp lệ
            if (!allowedExtensions.includes(fileExtension)) {
                this.$toastr.error('Vui lòng chọn một file hình ảnh hợp lệ (jpg, jpeg, png, gif)', 'Lỗi');

                return;
            }

            // Kiểm tra loại MIME của tập tin
            const allowedMIMETypes = ['image/jpeg', 'image/png', 'image/gif']; // Các loại MIME hợp lệ
            if (!allowedMIMETypes.includes(selectedFile.type)) {
                this.$toastr.error('Vui lòng chọn một file hình ảnh hợp lệ (jpg, jpeg, png, gif)', 'Lỗi');

                return;
            }

            // Nếu tập tin hợp lệ, gán vào userInfo.avatar
            this.userInfo.avatar = selectedFile;
        },
        scrollToForm() {
      // Lấy thẻ form
      const form = document.getElementById('formEditInfo');
      // Cuộn xuống dưới form bằng cách sử dụng phương thức scrollIntoView()
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    }
};
</script>

<style scoped>
/* Thêm các tùy chỉnh CSS của bạn ở đây */
.custom-file-input {
    color: transparent;
    cursor: pointer;
}

.custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
}

.custom-file-input::before {
    content: 'Chọn tệp';
    color: white;
    background-color: #007bff;
    border: 1px solid #007bff;
    border-radius: 5px;
    padding: 8px 12px;
    display: inline-block;
    cursor: pointer;
}

.custom-file-input:hover::before {
    background-color: #0056b3;
    border-color: #0056b3;
}

.custom-file-input:active::before {
    background-color: #0056b3;
    border-color: #0056b3;
}

.custom-file-input:disabled::before {
    background-color: #e9ecef;
    border-color: #adb5bd;
    cursor: not-allowed;
}

.custom-file-input:disabled:hover::before {
    background-color: #e9ecef;
    border-color: #adb5bd;
}
</style>
