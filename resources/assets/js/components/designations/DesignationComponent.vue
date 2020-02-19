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
                <span>Designation</span>
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
                  <td>{{ designation.department.division.name }}</td>
                  <td>{{ designation.department.name }}</td>
                  <td>{{ designation.name }}</td>
                  <td>
                    <button class="btn btn-info btn-xs" data-toggle="modal">
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
                      @click.prevent="setDesignation(index)"
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
                <select v-model="selectedDivision" class="form-control">

                  <option

                    v-for="(division,ind) in divisions"
                    :value="ind"
                    :key="ind"
                  >{{ division.name }}</option>
                </select>

                <span id="division_id_err" class="text-danger form_error"></span>
              </div>

              <div class="form-group" v-if="selectedDivision !=null ">
                <label class="control-label col-md-4">Department Name</label>
                <select v-model="selectedDepartment" class="form-control"  >
                  <option
                    v-for="dept in divisions[selectedDivision].departments"
                    :value="dept.id"
                    :key="dept.id"
                  >{{dept.name}}</option>
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
              <div class="form-group" v-if="edit_designation.id">
                <label class="control-label col-md-4">Division Name</label>
                <select class="form-control" @change="chngDiv($event)">
                  <option
                    v-for="(division,ind) in divisions"
                    :value="ind"
                    :key="ind"
                    :selected="division.id == edit_designation.department.division_id"
                  >{{ division.name  }}</option>
                </select>
                <span id="division_id_err" class="text-danger form_error"></span>
              </div>

              <div class="form-group" v-if="edit_designation.id">
                <label class="control-label col-md-4">Department Name</label>
                <!-- <select  class="form-control" id="department_id">
                  <option
                    :value="edit_designation.department.id"
                    :key="edit_designation.department.id"
                  >{{ edit_designation.department.name }}</option>
                </select> -->

                <select class="form-control"  >
                  <option
                    v-for="dept in departments"
                    :value="dept.id"
                    :key="dept.id"
                  >{{dept.name}}</option>
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
      selectedDivision:null,
      selectedDepartment:null,
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
      edit_designation_index :0,
      division_name: "",
      department_name: "",
      division_id: "",
      department_id: "",
      dept: {},
      headers : {
        headers: {
          Authorization: "Bearer " + this.$store.getters.currentUser.token
        }
      }
    };
  },
  created() {
    this.getDesignations();
    this.getDivisions();
  },
  methods: {
    addDesignation() {
      let uri = "/api/designation/create";

      var form_data = new FormData();

      for (var key in this.designation) {
        var postValue = this.designation[key];
        if (key == "image") {
          postValue = this.dataURLtoFile(this.designation[key], "abc.png");
        }
        form_data.append(key, postValue);
      }
      form_data.append("action", "new");
      form_data.append("department_id", this.selectedDepartment);
      this.axios.post(uri, form_data, this.headers).then(response => {
        if(response.data.api_status){
           this.$store.commit("designationAdd", response.data.data);
        this.flag_success = true;
        this.dismissCountDown = this.dismissSecs;
        this.message = response.data.message;
        this.dismissCountDown = this.dismissSecs;
        }else{
        alert(response.data.message);
        }

      });
    },
    deleteDesignation(id) {

      var flag = confirm("Are you sure?");
      console.log(flag === true);
      if (flag) {
        let uri = `/api/designation/delete/${id}`;
        this.axios.delete(uri, this.headers).then(response => {
          console.log(response);
        });
      }
    },
    editDesignation() {

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
        .post(uri, form_data, this.headers)
        .then(response => {
          if (response.data.api_status == 0) {
            this.alert_type = "danger";
          } else {
            this.alert_type = "success";
            this.$store.commit("designationEdit", response.data.data,this.edit_designation_index);
          }

          this.flag_success = true;
          this.dismissCountDown = this.dismissSecs;
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    chngDiv(e){
      if(this.divisions[e.target.value] != null){
        this.departments = this.divisions[e.target.value].departments;
      }else{
        this.departments = [];
      }
    },
    setDesignation(i) {
      this.edit_designation = this.designations[i];
      console.log(this.edit_designation,'set designation');
      this.edit_designation_index = i;
      var div_id = this.designations[i].department.division_id;
      this.departments = this.divisions.filter(function(division){
        if(division.id == div_id){
            return  division.departments; 
        }
      })[0].departments;
    },
    getDivisions() {

      let uri = "/api/division/list";
      this.axios.get(uri, this.headers).then(response => {
        console.log("set division");
        this.divisions = response.data.data;
        this.$store.commit("divisionSet", response.data.data);
      });
    },
    getDesignations() {

      let uri = "/api/designation/list";
      this.axios.get(uri, this.headers).then(response => {
        this.designations = response.data.data;
        this.$store.commit("designationSet", response.data.data);
      });
    },
    getDepartments() {
      let uri = "/api/department/list";
      this.axios.get(uri, this.headers).then(response => {
        this.departments = response.data.data;
        this.$store.commit("designationSet", response.data.data);
      });
    }
  }
};
</script>
