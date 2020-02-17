<template>
  <!-- ============================================================== -->
  <!-- Start Page Content here -->
  <!-- ============================================================== -->

  <div class="content-page">
    <div class="content">
      <!-- Start Content-->
      <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <div class="page-title-right">
                <div class="leads-action-btn">
                  <button
                    type="button"
                    id="add_button"
                    data-toggle="modal"
                    data-target="#creatUserModal"
                    class="waves-effect waves-light lead-btn create-new-lead-btn ml-2"
                  >
                    <i class="fas fa-compress-arrows-alt"></i>Create New Profile
                  </button>
                </div>
              </div>
              <h4 class="page-title">
                <span>Users</span>
              </h4>
            </div>
          </div>
        </div>

        <div class="leads-main-table-wrapper">
          <div class="table-responsive">
            <table id="example1" class="table-bordered table-striped custom-table leads-main-table">
              <thead>
                <tr>
                  <th width="15">S.NO</th>
                  <th>Profile Picture</th>
                  <th>Name</th>
                  <th>Pseudo Name</th>
                  <th>Contact No.</th>
                  <th>Skype ID</th>
                  <th>Shift Time</th>
                  <th>Email Signature</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user,index) in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button
                      class="btn btn-info btn-xs update"
                      data-toggle="modal"
                      data-target="#formModalEdit"
                      @click.prevent="setUser(index)"
                    >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button
                      class="btn btn-danger btn-xs delete"
                      @click.prevent="deleteUser(user.id)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- container -->
    </div>
    <!-- content -->

    <div id="creatUserModal" class="modal fade formModal" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form
            @submit.prevent="addUser"
            id="sample_form1"
            class="form-horizontal"
            enctype="multipart/form-data"
          >
            <div class="modal-header">
              <h4 class="modal-title">Create User</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                style="    color: #fff;"
              >&times;</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label class="control-label col-md-4">Select Division</label>
                <select v-model="user.division_id" class="form-control">
                  <option>Select Division</option>
                  <option
                    v-for="division in divisions"
                    :value="division.id"
                    :key="division.id"
                  >{{ division.name }}</option>
                </select>

                <span id="division_id_err" class="text-danger form_error"></span>
              </div>
               <div class="form-group">
                <label class="control-label col-md-4">Department Name</label>
                <select v-model="user.department_id" class="form-control">
                  <option
                    v-for="department in departments"
                    :value="department.id"
                    :key="department.id"
                  >{{ department.name }}</option>
                </select>

                <span id="division_id_err" class="text-danger form_error"></span>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">Select Designation</label>
                 <select v-model="user.designation_id" class="form-control">
                  <option
                    v-for="designation in designations"
                    :value="designation.id"
                    :key="designation.id"
                  >{{ designation.name }}</option>
                </select>
                <span id="designation_id_err" class="text-danger form_error"></span>
              </div>
             <div class="form-group">
                <label class="control-label col-md-4">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="user.name"
                  class="form-control"
                  required
                />
                <span id="name_errs" class="text-danger form_error"></span>
              </div>
                <span id="username_err" class="text-danger form_error"></span>

               <div class="form-group">
                <label class="control-label col-md-4">Email</label>
                <input
                  type="text"
                  id="name"
                  v-model="user.email"
                  class="form-control"
                  required
                />
                <span id="name_errs" class="text-danger form_error"></span>
              </div>
                <p>
                <b-alert
                  :show="dismissCountDown"
                  dismissible
                  @dismissed="dismissCountDown=0"
                  variant="success"
                >{{message}}</b-alert>
              </p>
            </div>
            <div class="modal-footer">
              <button type="submit" id="action" name="action" class="btn btn-info">Save Changes</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      users: [],
      user:{},
      designations: [],
      departments: [],
      divisions: [],
      designation: {},
      department: {},
      message: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      name: "",
      alert_type: "success"
    };
  },
  created() {
    this.getUsers();
    this.getDepartments();
    this.getDesignations();
    this.getDivisions();
  },
  methods: {
    getUsers() {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };

      let uri = "/api/user/list";
      this.axios.get(uri, headers).then(response => {
        this.users = response.data.data;
        //this.$store.commit("userSet", response.data.data);
      });
    },
    addUser(id){
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };

      let uri = "/api/user/create";

      var form_data = new FormData();

      for (var key in this.user) {
        var postValue = this.user[key];
        console.log("" + key + " : " + postValue);
        if (key == "image") {
          postValue = this.dataURLtoFile(this.user[key], "abc.png");
        }
        form_data.append(key, postValue);
      }
      form_data.append("action", "new");

      this.axios.post(uri, form_data, headers).then(response => {
        console.log(response);
        this.$store.commit("userAdd", response.data.data);
        this.flag_success = true;
        this.dismissCountDown = this.dismissSecs;
        this.message = response.data.message;
        this.dismissCountDown = this.dismissSecs;
      });

    },
    deleteUser(id) {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };

      var flag = confirm("Are you sure?");
      console.log(flag === true);
      if (flag) {
        let uri = `/api/user/delete/${id}`;
        this.axios.delete(uri, headers).then(response => {
          console.log(response);
        });
      }
    },
    getDivisions() {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };

      let uri = "/api/division/list";
      this.axios.get(uri, headers).then(response => {
        console.log("set division");
        this.divisions = response.data.data;
        this.$store.commit("divisionSet", response.data.data);
      });
    },
    getDesignations() {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };

      let uri = "/api/designation/list";
      this.axios.get(uri, headers).then(response => {
        console.log("set dessignation");
        this.designations = response.data.data;
        this.$store.commit("designationSet", response.data.data);
      });
    },
    getDepartments() {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };

      let uri = "/api/department/list";
      this.axios.get(uri, headers).then(response => {
        this.departments = response.data.data;
        this.$store.commit("departmentSet", response.data.data);
      });
    }
  }
};
</script>
