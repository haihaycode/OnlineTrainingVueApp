<!-- About.vue -->
<template>
  <div>
    <!-- About 1 - Bootstrap Brain Component -->
    <b-container class="py-3 py-md-5">
      <b-row class="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
        <b-col cols="12" lg="6" xl="5">
          <b-img fluid rounded src="image/features-3.png" alt="About 1" lazy></b-img>
        </b-col>
        <b-col cols="12" lg="6" xl="7">
          <b-row justify="xl-center">
            <b-col cols="12" xl="11">
              <h2 class="mb-3">Công Nghệ Thông Tin và Truyền Thông: Sức Mạnh Trong Thi Trắc Nghiệm</h2>
              <p class="lead fs-4 text-secondary mb-3">Phương án thi trắc nghiệm đã trở thành một phần quan trọng trong hệ
                thống giáo dục hiện nay, mang lại nhiều lợi ích như đánh giá tổng quát kiến thức và khả năng phản ánh
                nhanh chóng kết quả học tập của học sinh.</p>
              <p class="mb-5">Tuy nhiên, việc ứng dụng Công nghệ thông tin và truyền thông (CNTT) trong việc soạn đề thi
                cũng như làm bài thi vẫn còn đang phát triển.

                Để cải thiện tình hình này, có thể áp dụng CNTT để tạo ra hệ thống ngân hàng câu hỏi linh hoạt và đa dạng,
                giúp giáo viên tạo ra các bài thi trắc nghiệm một cách hiệu quả. Ngoài ra, việc áp dụng công nghệ vào quá
                trình chấm điểm và phản hồi sẽ giúp tối ưu hóa quá trình đánh giá và cung cấp thông tin chi tiết, giúp học
                sinh hiểu rõ hơn về kết quả của mình.

                Đồng thời, việc đào tạo giáo viên và học sinh về cách sử dụng CNTT trong thi cũng đóng vai trò quan trọng.
                Điều này cần sự hỗ trợ từ phía các cơ quan quản lý giáo dục và tổ chức đào tạo để đảm bảo rằng việc ứng
                dụng CNTT trong thi trắc nghiệm sẽ mang lại hiệu quả cao nhất</p>
              <b-row class="gy-4 gy-md-0 gx-xxl-5X">
                <b-col cols="12" md="6">
                  <div class="d-flex">
                    <div class="me-4 text-primary">
                      <b-icon icon="bx bxl-angular" scale="1.5"></b-icon>
                    </div>
                    <div>
                      <h2 class="h4 mb-3">AngularJS</h2>
                      <p class="text-secondary mb-0">Sử dụng AngularJS và Bootstrap để tạo trang web thi trắc nghiệm trực
                        tuyến cung cấp trải nghiệm người dùng tốt và giao diện thân thiện. </p>
                    </div>
                  </div>
                </b-col>
                <b-col cols="12" md="6">
                  <div class="d-flex">
                    <div class="me-4 text-primary">
                      <b-icon icon="bx bxl-bootstrap" scale="1.5"></b-icon>
                    </div>
                    <div>
                      <h2 class="h4 mb-3">Bootstrap 5</h2>
                      <p class="text-secondary mb-0">Công nghệ AngularJS và Bootstrap giúp tối ưu hóa tính năng tương tác
                        và thiết kế linh hoạt trên nhiều thiết bị cho trang web thi trắc nghiệm trực tuyến.</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <!-- Giới Thiệu về admin -->
    <b-container class="bsb-author-2">
      <b-row class="justify-content-center" style="margin: 0px;">
        <b-col cols="12" lg="10" xl="8" xxl="7">
          <div class="">
            <b-row class="gy-3 align-items-center">
              <b-col md="4">
                <b-img fluid rounded src="image/logo-fpt-polytechnic.png" alt="Iris Henry" class="bsb-hover-image bsb-scale bsb-hover-scale-up"></b-img>
              </b-col>
              <b-col md="8">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-body-secondary">Trang web được lập trình bởi Haihaycode(PD07906)</h6>
                  <h3 class="card-title mb-2">
                    <b-link class="card-link link-dark text-decoration-none" href="#!">HaiHayCode</b-link>
                  </h3>
                  <p class="card-text mb-3">Tôi là một lập trình viên fullstack JavaWeb </p>
                  <b-nav class="bsb-social-media">
                    <b-nav-item href="https://www.facebook.com/dylan.1907" class="link-dark"><i class="bx bxl-facebook-circle"></i> 𝑯𝒂𝒊 𝑷𝒉𝒂𝒎  (Coding and Coffee)</b-nav-item>
                    <b-nav-item href="https://github.com/haihaycode" class="link-dark"><i class="bx bxl-github"></i> https://github.com/haihaycode</b-nav-item>
                    <b-nav-item href="#!" class="link-dark"><i class="bx bx-location-plus"></i> FPT Polytechnic Đà Nẵng</b-nav-item>
                    <b-nav-item href="#!" class="link-dark"><i class="bx bx-mail-send"></i> Haippd0790@fpt.edu.vn</b-nav-item>
                  </b-nav>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  // Component's logic here
  name: "AboutClient"
}
</script>

<style scoped>
/* Component's styles here */
</style>
