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
                    <i class="fas fa-compress-arrows-alt"></i>Create New Department
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
                <tr role="row">
                  <th>S.NO</th>
                  <th>Division</th>
                  <th>Name</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="(department,index) in departments" :key="department.id">

                  <td>{{ department.id }}</td>
                  <td>{{ department.division.name }}</td>
                  <td>{{ department.name }}</td>
                  <td>
                    <button
                      class="btn btn-info btn-xs update"
                      data-toggle="modal"
                      data-target="#formModalEdit"
                      @click.prevent="setDepartment(index)"
                    >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button
                      class="btn btn-danger btn-xs delete"
                      @click.prevent="deleteDepartment(department.id)"
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
            @submit.prevent="addDepartment"
            id="sample_form1"
            class="form-horizontal"
            enctype="multipart/form-data"
          >
            <div class="modal-header">
              <h4 class="modal-title">Add Department</h4>
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
                <select v-model="department.division_id" class="form-control">
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
                <input
                  v-model="department.name"
                  type="text"
                  name="department_name"
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
    <!-- content -->
    <div id="formModalEdit" class="modal fade formModal" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form
            @submit.prevent="editDepartment"
            id="sample_form1"
            class="form-horizontal"
            enctype="multipart/form-data"
          >
            <div class="modal-header">
              <h4 class="modal-title">Edit Department</h4>
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

            <!-- :selected="division.id == edit_department.division.id" -->
                <select ref="my_input" id="division_id" class="form-control">
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
                <input
                  v-model="edit_department.name"
                  type="text"
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
              <input type="submit" id="action" name="action" class="btn btn-info" value="Update" />
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
      departments: [],
      divisions: [],
      selectedDivision: null,
      department: {},
      message: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      alert_type: "success",
      edit_department: {},
      division_name: "",
      department_name: "",
      division_id: ""
    };
  },
  computed: {},
  created() {

    this.getDepartments();
    this.getDivisions();
  },
  mounted() {
    //this.departments = this.$store.getters.departments;
  },

  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    addDepartment() {

      var tkn =this.$store.getters.currentUser.token;
      let uri = "/api/department/create";

      var form_data = new FormData();

      for (var key in this.department) {
        var postValue = this.department[key];
        if (key == "image") {
          postValue = this.dataURLtoFile(this.department[key], "abc.png");
        }
        form_data.append(key, postValue);
      }
      form_data.append("action", "new");

      this.axios.post(uri, form_data).then(response => {
        console.log(response);
        this.$store.commit("departmentAdd", response.data.data);
        this.flag_success = true;
        this.dismissCountDown = this.dismissSecs;
        this.message = response.data.message;
        this.dismissCountDown = this.dismissSecs;
        this.message = response.data.message;
      });
    },
    editDepartment() {

        var tkn =this.$store.getters.currentUser.token;
        let headers = {
        'headers':{
          'Authorization' : "Bearer "+tkn
        }
      };

      let uri = "/api/department/create";
      var form_data = new FormData();
      console.log("Printing");
      console.log(this.$refs.my_input.value);
      for (var key in this.edit_department) {
        console.log("KEY: " + key);
        var postValue = this.edit_department[key];
        console.log("VAL: " + postValue);
        if (key == "image") {
          postValue = this.dataURLtoFile(this.edit_department[key], "abc.png");
        }
        form_data.append(key, postValue);
      }
      // form_data.append("id", this.department_id);
      // form_data.append("name", this.department_name);
      // form_data.append("division_id", this.division_id);
      form_data.append("action", "edit");
      this.axios
        .post(uri, form_data,headers)
        .then(response => {
          console.log(response.data.message);
          console.log(response.data.status);

          if (response.data.api_status == 0) {
            // console.log("I am coming in");
            this.alert_type = "danger";
          } else {
            this.alert_type = "success";
            this.$store.commit("departmentEdit", response.data.data);
          }

          this.flag_success = true;
          this.dismissCountDown = this.dismissSecs;
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    setDepartment(i) {

      console.log(this.departments[i]);
      this.edit_department = this.departments[i];
      console.log(this.edit_department);
    },
    deleteDepartment(id) {
         var tkn =this.$store.getters.currentUser.token;
         let headers = {
        'headers':{
          'Authorization' : "Bearer "+tkn
        }
      };

      var flag = confirm("Are you sure?");
      if (flag) {
        let uri = `/api/department/delete/${id}`;
        this.axios.delete(uri,headers).then(response => {
          console.log(response);
        });
      }
    },

    changeDivisionTitle(event) {
      this.selectedDivision =
        event.target.options[event.target.options.selectedIndex].text;
    },
    getDivisions() {
         var tkn =this.$store.getters.currentUser.token;
         let headers = {
        'headers':{
          'Authorization' : "Bearer "+tkn
        }
      };

      let uri = "/api/division/list";
      this.axios.get(uri,headers).then(response => {
        console.log("set division");
        this.divisions = response.data.data;
        this.$store.commit("divisionSet", response.data.data);
      });
    },
    getDepartments() {
         var tkn =this.$store.getters.currentUser.token;
         let headers = {
        'headers':{
          'Authorization' : "Bearer "+tkn
        }
      };

      let uri = "/api/department/list";
      this.axios.get(uri,headers).then(response => {
        this.departments = response.data.data;
        this.$store.commit("departmentSet", response.data.data);
      });
    }
  }
};
</script>
