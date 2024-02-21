
<template>
    <div>
        <br><br>
        <section>
            <div class="p-1">
                <div class="text-end">
                    <button @click="toggleMenu" class="btn btn-secondary ">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <div class="d-flex align-items-start">
                    <!-- Hiển thị nút hoặc danh sách nút -->

                    <ul v-if="showMenu" class="nav nav-pills flex-column nav-pills border-end border-3 me-3 align-items-end"
                        id="pills-tab" role="tablist">
                        <!-- Các nút -->
                        <li class="nav-item" role="presentation">
                            <button class="nav-link  text-secondary  fw-semibold active position-relative"
                                id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                                role="tab" aria-controls="pills-home" aria-selected="true">Thêm bài viết <span
                                    class="fa fa-edit"></span></button>
                        </li>
                        <li class="nav-item " role="presentation">
                            <button class="nav-link text-secondary fw-semibold position-relative" id="pills-profile-tab"
                                data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
                                aria-controls="pills-profile" aria-selected="false">Quản lý bài <br><span
                                    class="fa fa-bar-chart"></span></button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-secondary text-start  fw-semibold position-relative"
                                id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button"
                                role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                        </li>
                    </ul>
                    <div class="tab-content p-3  w-100" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <h2><i class="fas fa-pen"></i> Thêm bài viết mới </h2>
                            <p>Tạo các bài đăng của bạn tại đây </p>
                            <div>
                                <form @submit.prevent="handleSubmit">
                                    <div class="row mb-4">
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <input v-model.trim="post.title" type="text" id="title"
                                                    class="form-control" />
                                                <label class="form-label" for="title">Tiêu đề bài viết</label>
                                                <span v-if="!$v.post.title.required">*</span>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <input v-model.trim="post.tags" type="text" id="tags"
                                                    class="form-control" />
                                                <label class="form-label" for="tags">Thẻ (tags)</label>
                                                <span v-if="!$v.post.tags.required">*</span>
                                            </div>
                                        </div>
                                    </div>

                                    <b-form-group label="Tiêu đề Hình ảnh " class="mb-3" label-for="avatar">
                                        <b-form-file id="avatar" class="form-control"
                                            style="overflow: hidden;"></b-form-file>
                                    </b-form-group>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <select v-model="post.category" id="category" class="form-select">
                                            <option value="" disabled selected> --------- </option>
                                            <option value="address1" class="hover">Demo1</option>
                                            <option value="address2" class="hover">Demo2</option>
                                            <option value="address3" class="hover">Demo3</option>
                                        </select>
                                        <label class="form-label" for="category">Danh mục</label>
                                        <span v-if="!$v.post.category.required">*</span>
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <quill-editor v-model="post.content" :options="editorOptions"></quill-editor>
                                        <label class="form-label" for="content">Nội dung bài viết</label>
                                        <span v-if="!$v.post.content.required">*</span>
                                    </div>

                                    <div class="form-check d-flex justify-content-start mb-4">
                                        <input v-model="post.publishNow" class="form-check-input me-2" type="checkbox"
                                            value="" id="publishNow" checked />
                                        <label class="form-check-label" for="publishNow"> Đăng bài viết lên ngay </label>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-block mb-4">Thêm bài viết</button>
                                </form>

                            </div>


                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <h2>Quản lý các bài viết tại đây</h2>
                            <p>Please check our more design @ <a target="_blank"
                                    href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <h2>Contact</h2>
                            <p>Please check our more design @ <a target="_blank"
                                    href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import { required } from 'vuelidate/lib/validators';
import { quillEditor } from 'vue-quill-editor';
export default {
    name: "ClientPosts",
    components: {
        quillEditor
    },
    data() {
        return {
            showMenu: false,
            post: {
                title: '',
                tags: '',
                category: '',
                content: '',
                publishNow: false
            },
            editorOptions: {
                readOnly: true, // Đặt readOnly thành true để ngăn người dùng chỉnh sửa nội dung
                theme: 'snow', // Chọn chế độ snow (giao diện trắng) hoặc 'bubble' (giao diện nổi bật)

            },



        };
    },
    validations: {
        post: {
            title: { required },
            tags: { required },
            category: { required },
            content: { required }
        }
    },
    methods: {
        toggleMenu() {
            // Hàm để đảo ngược trạng thái hiển thị danh sách nút
            this.showMenu = !this.showMenu;
        },
        handleSubmit() {
            this.$v.$touch();

            if (!this.$v.$invalid) {
                console.log('Submitted post:', this.post);
            } else {
                this.$toastr.warning('Vui lòng nhập các trường bắt buộc', 'Thông báo');
                // Populate errors object for displaying validation errors
               
            }
        }
    }
};
</script>
  
<style scoped>
.nav .nav-item button.active {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.672) !important;
}

.nav .nav-item button.active::after {
    content: "";
    border-right: 4px solid rgba(11, 11, 38, 0.763);
    height: 100%;
    position: absolute;
    right: -1px;
    top: 0;
    border-radius: 5px 0 0 5px;
}
span{
    color: red;
}
</style>
  





















