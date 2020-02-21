<template>
  <div class="account-pages mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-12 col-xl-12 login-card">
          <div class="card bg-pattern">
            <div class="card-left-side">
              <div class="card-left-side-inner">
                <div class="card-left-side-text">
                  <p>Hello, Friends!</p>
                  <p>
                    Enter your personal details
                    and start journey with us
                  </p>
                  <p>- Suspendisse porta vehicula risus.</p>
                  <p>- Fermentum. Integer quis justo.</p>
                  <p>- Mentum, auctor erat id</p>
                  <button
                    class="btn get-started-button mt-2 waves-effect waves-light"
                    type="submit"
                  >GET STARTED</button>
                </div>
              </div>
            </div>
            <div class="card-body forgot-password-card-body p-4">
              <div class="login-card-head">
                <a href="index.html">
                  <span>
                    <img src="assets/images/updates/mps-logo.png" alt class="img-fluid" />
                  </span>
                </a>
                <p
                  class="mb-2.5 mt-0.5"
                >Enter your email address and we'll send you an email with instructions to reset your password.</p>
              </div>

              <form @submit.prevent="forgotPassword">
                <div class="form-group mb-3">
                  <i class="fe-lock noti-icon"></i>
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    name="email"
                    v-model="user.email"
                    required
                    placeholder="Enter Your Email"
                  />
                </div>

                <div class="form-group mb-0">
                  <button
                    class="btn btn-primary btn-block login-button waves-effect waves-light"
                    type="submit"
                  >Get Email</button>
                </div>
              </form>

              <div class="text-left">
                <router-link :to="{name:'login'}" class="nav-link">
                  <h5 class="mt-3 text-muted">
                    <a href class="forgot-password">Back To Login</a>
                  </h5>
                </router-link>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->

          <!-- end row -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
      <p class="copyright-text">Copyright © 2019 My Project Status. All rights reserved.</p>
    </div>
    <!-- end container -->
  </div>
</template>
<script>
export default {
  mounted() {
    $("body").addClass("authentication-bg authentication-bg-pattern");
  },
  data() {
    return {
        user :{}
    };
  },
  methods: {
    forgotPassword() {
      let uri = "/api/user/reset/password";
      var form_data = new FormData();

      for (var key in this.user) {
        var postValue = this.user[key];

        form_data.append(key, postValue);
      }
      this.axios
        .post(uri, form_data, this.headers)
        .then(response => {
          if (response.data.api_status == 0) {

          } else {

              alert('Password Link Sent');
          }

        })
        .catch(e => {
          console.log(e.message);
        });
    }
  }
};
</script>
