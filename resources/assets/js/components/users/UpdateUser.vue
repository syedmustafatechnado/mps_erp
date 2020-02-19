<template>
  <!-- Start Page Content here -->
  <div class="content-page">
    <div class="content">
      <!-- Start Content-->
      <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <div class="page-title-right"></div>
              <h4 class="page-title">
                <span>Update Resource</span>
              </h4>
            </div>
          </div>
        </div>
        <div class="create-resource-wrapper">
          <div class="row create-resource-row">
            <div class="col-lg-12 col-md-12 col-sm-12"></div>
            <form
              action
              method="post"
              class="create-resource-right-form upload-file-form"
              enctype="multipart/form-data"
            >
              <div class="col-lg-5 col-md-5 col-sm-12 create-resource-left-col">
                <div class="add-image-wrapper">
                  <p>Profile Picture</p>
                  <div class="add-file-image">
                    <img class="img-fluid add-img-icon previewimg" id="profileimg" src alt="img" />
                  </div>
                  <input type="hidden" name value />
                  <label>
                    <span>
                      Choose a file
                      <i class="fa fa-upload" style="font-size:28px;" aria-hidden="true"></i>
                    </span>
                    <input class="previewinp" type="file" id name="profile_picture" />
                  </label>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-sm-12 create-resource-right-col">
                <div class="create-resource-right-wrapper">
                  <div class="form-top">
                    <div class="row m-0">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-12 create-resource-input-col">
                        <i class="far fa-user input-icon"></i>
                        <input type="text" name="name" placeholder="Name" value required />
                        <span class="text-danger"></span>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-12 create-resource-input-col">
                        <i class="fas fa-anchor input-icon"></i>
                        <input type="text" name="pseudo" value placeholder="Pseudo Name" required />
                        <span class="text-danger"></span>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-12 create-resource-input-col">
                        <i class="far fa-address-book input-icon"></i>
                        <input
                          type="text"
                          name="contact_no"
                          value
                          placeholder="Contact No"
                          required
                        />
                        <span class="text-danger"></span>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-12 create-resource-input-col">
                        <i class="fab fa-skype input-icon"></i>
                        <input type="text" name="skype" value placeholder="Skype ID" required />
                        <span class="text-danger"></span>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-12 create-resource-input-col">
                        <i class="far fa-clock input-icon"></i>
                        <input
                          type="time"
                          name="shift_start"
                          value
                          placeholder="Shift Start Time"
                          required
                        />
                        <span class="text-danger"></span>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-12 create-resource-input-col">
                        <i class="far fa-clock input-icon"></i>
                        <input
                          type="time"
                          name="shift_end"
                          value
                          placeholder="Shift End Time"
                          required
                        />
                        <span class="text-danger"></span>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12 create-resource-input-col">
                        <i class="fas fa-pen input-icon"></i>
                        <textarea name="email_signature" placeholder="Email Signature"></textarea>
                      </div>
                    </div>
                    <div class="row m-0">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-12 create-resource-btn-col">
                        <button type="submit">
                          <i class="far fa-paper-plane"></i> UPDATE PROFILE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- end page title -->
        <!-- end row -->
      </div>
      <!-- container -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
