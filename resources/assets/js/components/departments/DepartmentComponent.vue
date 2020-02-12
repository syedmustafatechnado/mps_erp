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
                    @click.prevent="getDivisions"
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
                <tr>
                  <th>S.NO</th>
                  <th>Division</th>
                  <th>Name</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody></tbody>
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

                <select v-model="department.division_id"  name="division_id" id="division_id"  class="form-control" >
                  <option value selected disabled>Select Division</option>
                  <option
                    v-for="division in divisions"
                    :value="division.id"
                    :key="division.id"
                  >{{ division.name }}</option>
                </select>


                <span id="division_id_err" class="text-danger form_error"></span>
              </div>
               <p>
                <b-alert
                  :show="dismissCountDown"
                  dismissible
                  @dismissed="dismissCountDown=0"
                  variant="success"
                >{{message}}</b-alert>
              </p>
              <div class="form-group">
                <label class="control-label col-md-4">Department Name</label>
                <input v-model="department.name" type="text" name="name" id="name" class="form-control" required />
                <span id="name_errs" class="text-danger form_error"></span>
              </div>
            </div>
            <div class="modal-footer">
              <input type="submit" id="action" name="action" class="btn btn-info" value="Add" />
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

    data(){
        return{

        divisions: [],
        selectedDivision:null,
        department: {},
        message: "",
        dismissSecs: 3,
        dismissCountDown: 0,
        alert_type : "success"
        }


    },
    computed:{

    },
    created(){

    },
    methods:{

        countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
        },
        showAlert() {
        this.dismissCountDown = this.dismissSecs;
        },
        addDepartment(id){
            let uri = "/api/department/create";

            var form_data = new FormData();

            for (var key in this.department) {

                var postValue = this.department[key];
                if (key == "image") {
                postValue = this.dataURLtoFile(this.division[key], "abc.png");
                }
                form_data.append(key, postValue);
            }
            form_data.append("action", "new");
            console.log(form_data);
            this.axios.post(uri,form_data).then(response => {
                this.$store.commit("departmentAdd", response.data.data);
                this.flag_success = true;
                this.dismissCountDown = this.dismissSecs;
                this.message = response.data.message;
                this.dismissCountDown = this.dismissSecs;
                this.message = response.data.message;
            });

        },
        setDepartmentId(id,name)
        {

            this.division_id = id;
            this.division_name = name
            console.log(this.division_name);

        },

        changeDivisionTitle(event){

            this.selectedDivision = event.target.options[event.target.options.selectedIndex].text

        },
        getDivisions(){
            this.divisions = this.$store.getters.divisions;
            let uri = "/api/division/list";
            this.axios.get(uri).then(response => {
            this.divisions = response.data.data;

            });
        }

    }

}
</script>
