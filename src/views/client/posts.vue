<template>
    <div> <br> <br>
        <section>
            <div class="p-1">
                <div class="d-flex align-items-start">
                    <ul class="nav nav-pills flex-column nav-pills border-end border-3 me-3 align-items-end" id="pills-tab"
                        role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-primary fw-semibold active position-relative" id="pills-home-tab"
                                data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"
                                aria-controls="pills-home" aria-selected="true">Home</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab"
                                data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
                                aria-controls="pills-profile" aria-selected="false">Profile</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab"
                                data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"
                                aria-controls="pills-contact" aria-selected="false">Contact</button>
                        </li>
                    </ul>
                    <div class="tab-content border rounded-3  p-3 text-danger w-100" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <h2>Home</h2>
                            <p>
                                
                            </p>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <h2>Profile</h2>
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
    name: "postsClient",


};
</script>
    
<style scoped>
.nav .nav-item button.active {
    background-color: transparent;
    color: var(--bs-danger) !important;
}

.nav .nav-item button.active::after {
    content: "";
    border-right: 4px solid var(--bs-danger);
    height: 100%;
    position: absolute;
    right: -1px;
    top: 0;
    border-radius: 5px 0 0 5px;
}</style>