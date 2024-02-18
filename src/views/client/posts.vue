
<template>
    <div>
        <br><br>
        <section>
            <div class="p-1">
                <div class="d-flex align-items-start">
                    <!-- Hiển thị nút hoặc danh sách nút -->
                    <button @click="toggleMenu" class="btn btn-secondary">
                        ..
                    </button>
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
                    <div class="tab-content   p-3  w-100" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <h2>Thêm bài viết mới </h2>
                            <p>Tạo các bài đăng của bạn tại đây </p>
                            <form action="">


                            </form>
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
export default {
    name: "ClientPosts",
    data() {
        return {
            showMenu: false // Khởi tạo biến để điều khiển hiển thị danh sách nút
        };
    },
    methods: {
        toggleMenu() {
            // Hàm để đảo ngược trạng thái hiển thị danh sách nút
            this.showMenu = !this.showMenu;
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

</style>
  





















