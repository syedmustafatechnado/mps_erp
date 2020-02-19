<template>
  <div>
    <div class="right-bar" style="right: 0;">
      <div class="rightbar-title">
        <a id="menulink" class="right-bar-toggle float-right">
          <i class="dripicons-cross noti-icon"></i>
        </a>
        <h5 class="m-0 text-white">Profile</h5>
      </div>
      <div class="slimscroll-menu">
        <!-- User box -->
        <div class="user-box">
          <div class="user-img">
            <img src alt="user-img" title="Mat Helme" class="rounded-circle img-fluid" />
            <a href class="user-edit">
              <i class="mdi mdi-pencil"></i>
            </a>
          </div>

          <h5>
            <a href="javascript: void(0);"></a>
          </h5>
          <p class="text-muted mb-0">
            <small></small>
          </p>
        </div>

        <!-- Settings -->
        <hr class="mt-0" />
        <!-- <h5 class="pl-3">Basic Settings</h5> -->
        <hr class="mb-0" />
        <div class="right-bar-menu">
          <ul class="p-3">
            <li>
              <a href="javascript: void(0);">My Timesheet</a>
            </li>
            <li>
              <a href="javascript: void(0);">My Notes/Reminders</a>
            </li>
            <li>
              Setting
              <ul class="settings-list">
                <li>
                  <div class="checkbox checkbox-primary mb-2">
                    <input id="Rcheckbox1" type="checkbox" checked />
                    <label for="Rcheckbox1">Notifications</label>
                  </div>
                </li>
                <li>
                  <a data-toggle="modal" data-target="#passwordModal">Change Password</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" @click.prevent="logout" class="nav-link">LOG OUT</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <div id="passwordModal" class="modal fade formModal" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form @submit.prevent="changePassword">
            <div class="modal-header">
              <h4 class="modal-title">Change Password</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                style="    color: #fff;"
              >&times;</button>
            </div>
            <div class="modal-body">
              <input type="hidden" name value />
              <div class="form-group">
                <label class="control-label col-md-12">Current Password</label>
                <input
                  type="password"
                  name="password"
                  v-model="user.old_password"
                  id="password"
                  class="form-control"
                  required
                />
                <span id="password_err" class="text-danger form_error"></span>
              </div>
              <div class="form-group">
                <label class="control-label col-md-12">New Password</label>
                <input
                  type="password"
                  name="new_password"
                  id="new_password"
                  class="form-control"
                  v-model="user.new_password"
                  required
                />
                <span id="new_password_err" class="text-danger form_error"></span>
              </div>
              <div class="form-group">
                <label class="control-label col-md-12">Confirm New Password</label>
                <input
                  type="password"
                  name="cn_password"
                  id="cn_password"
                  v-model="user.confirm_new_password"
                  class="form-control"
                  required
                />
                <span id="cn_password_err" class="text-danger form_error"></span>
              </div>
              <p>
                <b-alert
                  :show="dismissCountDown"
                  dismissible
                  @dismissed="dismissCountDown=0"
                  :variant="alert_type"
                >{{message}}</b-alert>
              </p>
            </div>
            <div class="modal-footer">
              <input type="hidden" name="user_id" id="user_id" value />
              <input
                type="submit"
                id="action_pass"
                name="action_pass"
                class="btn btn-info"
                value="Save Changes"
              />
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      dismissSecs: 3,
      dismissCountDown: 0,
      message: "",
      division_id: 0,
      division_name: "TEXT",
      alert_type: "",
      old_pass: "",
      new_pas: "",
      headers: {
        headers: {
          Authorization: "Bearer " + this.$store.getters.currentUser.token
        }
      }
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "/login" });
    },
    changePassword() {
      let uri = "api/user/change/password";
      let form_data = new FormData();
      for (var key in this.user) {
        var postValue = this.user[key];
        form_data.append(key, postValue);
      }

      if (this.user["new_password"] == this.user["old_password"]) {
        this.dismissCountDown = this.dismissSecs;
        this.message = "New and Current Password cannot be same";
        this.alert_type = "danger";
        return;
      }
      if (this.user["new_password"] != this.user["confirm_new_password"]) {
        this.dismissCountDown = this.dismissSecs;
        this.message = "New Password is not same as Confirm Password";
        this.alert_type = "danger";
        return;
      }

      this.axios
        .post(uri, form_data, this.headers)
        .then(response => {
          if (response.data.api_status == 0) {
            this.alert_type = "danger";
          } else {
            this.alert_type = "success";
          }

          this.dismissCountDown = this.dismissSecs;
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e.message);
        });
    }
  }
};
</script>

