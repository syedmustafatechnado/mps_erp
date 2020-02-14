<template>
  <div class="content-page">
    <div class="content">
      <!-- Start Content-->
      <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <div class="page-title-right">
                <form class="form-inline dashboard-top-actions leads-action-btn">
                  <button
                    type="button"
                    id="add_button"
                    data-toggle="modal"
                    data-target="#formModal"
                    class="waves-effect waves-light lead-btn create-new-lead-btn ml-2"
                  >
                    <i class="fas fa-compress-arrows-alt"></i>Create New Designations
                  </button>

                  <!-- <a href="javascript: void(0);" class="waves-effect waves-light btn btn-blue btn-sm ml-2 filter-button">
                                <i class="mdi mdi-filter-outline"></i>
                  </a>-->
                </form>
              </div>
              <h4 class="page-title">
                <span></span>
              </h4>
            </div>
          </div>
        </div>
        <div class="leads-main-table-wrapper">
          <div class="table-responsive">
            <table id="example1" class="table-bordered table-striped custom-table leads-main-table">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Division Name</th>
                  <th>Department Name</th>
                  <th>Designations Name</th>
                  <th>Permissions</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(designation,index) in designations" :key="designation.id">
                  <td>{{ designation.id }}</td>
                  <td>{{ designation.division.name }}</td>
                  <td>{{ designation.department.name }}</td>
                  <td>{{ designation.name }}</td>
                  <td>
                    <button
                      class="btn btn-info btn-xs"
                      data-toggle="modal"

                    >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-info btn-xs view">
                      <i class="fas fa-eye"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      class="btn btn-info btn-xs update"
                      data-toggle="modal"
                      data-target="#formModalEdit"
                      @click.prevent="setDesignation(index,designation.name)"
                    >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button
                      class="btn btn-danger btn-xs delete"
                      @click.prevent="deleteDesignation(designation.id)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end page title -->
      </div>
      <!-- container -->
    </div>

    <!-- content -->
    <div id="formModal" class="modal fade formModal" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form
            @submit.prevent="addDesignation"
            id="sample_form1"
            class="form-horizontal"
            enctype="multipart/form-data"
          >
            <div class="modal-header">
              <h4 class="modal-title">Add Designation</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                style="    color: #fff;"
              >&times;</button>
            </div>
            <div class="modal-body">
              <span id="form_result"></span>
              <div class="form-group">
                <label class="control-label col-md-4">Division Name</label>
                <select v-model="designation.division_id" class="form-control">
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
                <select v-model="designation.department_id" class="form-control">
                  <option>Select Department</option>
                  <option
                    v-for="department in departments"
                    :value="department.id"
                    :key="department.id"
                  >{{ department.name }}</option>
                </select>

                <span id="division_id_err" class="text-danger form_error"></span>
              </div>

              <div class="form-group">
                <label class="control-label col-md-4">Designation Name</label>
                <input
                  v-model="designation.name"
                  type="text"
                  name="designation_name"
                  id="name"
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
              <input type="submit" id="action" name="action" class="btn btn-info" value="Add" />
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <div id="formModalEdit" class="modal fade formModal" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form
            @submit.prevent="editDesignation"
            id="sample_form1"
            class="form-horizontal"
            enctype="multipart/form-data"
          >
            <div class="modal-header">
              <h4 class="modal-title">Edit Designation</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                style="    color: #fff;"
              >&times;</button>
            </div>
            <div class="modal-body">
              <span id="form_result"></span>
              <div class="form-group">
                <label class="control-label col-md-4">Division Name</label>
                <select v-model="edit_designation.division_id" class="form-control">
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
                <select v-model="edit_designation.department_id" class="form-control">
                  <option
                    v-for="department in departments"
                    :value="department.id"
                    :key="department.id"
                  >{{ department.name }}</option>
                </select>

                <span id="division_id_err" class="text-danger form_error"></span>
              </div>

              <div class="form-group">
                <label class="control-label col-md-4">Designation Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="edit_designation.name"
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
              <input type="submit" id="action" name="action" class="btn btn-info" value="Edit" />
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
      designations: [],
      departments: [],
      divisions: [],
      designation: {},
      department: {},
      message: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      name: "",
      alert_type: "success",
      edit_designation: {},
      division_name: "",
      department_name: "",
      division_id: "",
      department_id:""
    };
  },
  created() {
    this.getDesignations();
    this.getDepartments();
    this.getDivisions();
  },
  methods: {
    addDesignation() {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };
      let uri = "/api/designation/create";

      var form_data = new FormData();

      for (var key in this.designation) {
        var postValue = this.designation[key];
        console.log("" + key + " : " + postValue);
        if (key == "image") {
          postValue = this.dataURLtoFile(this.designation[key], "abc.png");
        }
        form_data.append(key, postValue);
      }
      form_data.append("action", "new");

      this.axios.post(uri, form_data, headers).then(response => {
        console.log(response);
        this.$store.commit("designationAdd", response.data.data);
        this.flag_success = true;
        this.dismissCountDown = this.dismissSecs;
        this.message = response.data.message;
        this.dismissCountDown = this.dismissSecs;
      });
    },
    deleteDesignation(id) {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };

      var flag = confirm("Are you sure?");
      console.log(flag === true);
      if (flag) {
        let uri = `/api/designation/delete/${id}`;
        this.axios.delete(uri, headers).then(response => {
          console.log(response);
        });
      }
    },
    editDesignation() {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };

      let uri = "/api/designation/create";
      var form_data = new FormData();

      for (var key in this.edit_designation) {
        var postValue = this.edit_designation[key];
        console.log("" + key + " : " + postValue);
        if (key == "image") {
          postValue = this.dataURLtoFile(this.edit_designation[key], "abc.png");
        }
        form_data.append(key, postValue);
      }

      form_data.append("action", "edit");
      this.axios
        .post(uri, form_data, headers)
        .then(response => {
            //console.log(response.data.api_status);
          if (response.data.api_status == 0) {
            this.alert_type = "danger";
          } else {
            this.alert_type = "success";
            this.$store.commit("designationEdit", response.data.data);
          }

          this.flag_success = true;
          this.dismissCountDown = this.dismissSecs;
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    setDesignation(i, name) {

    //   console.log(name);
    //   this.edit_designation.name = name;
    //   console.log(this.designations[i]);
    //   this.designation = this.designation[i];
       this.edit_designation = this.designations[i];

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
        this.$store.commit("designationSet", response.data.data);
      });
    }
  }
};
</script>
