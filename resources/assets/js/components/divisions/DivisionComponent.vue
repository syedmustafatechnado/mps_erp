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
                    <i class="fas fa-compress-arrows-alt"></i>Create New Division
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
                  <th class="th-sm sorting_asc" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" aria-label="Name" style="width: 198.4px;" aria-sort="none"> S.NO
                    <i class="fas fa-sort float-right" aria-hidden="true"></i>
                  </th>
                  <th>Name  <i class="fas fa-sort float-right" aria-hidden="true"></i></th>
                  <th>ACTIONS  <i class="fas fa-sort float-right" aria-hidden="true"></i></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="division in divisions" :key="division.id">
                  <td>{{ division.id }}</td>
                  <td>{{ division.name }}</td>
                  <td>
                    <!-- <router-link   data-toggle="modal"
                    data-target="#formModal"
                      :to="{name: 'edit', params: { id: division.id }}"
                      class="btn btn-primary"
                    >Edit</router-link>-->
                    <button
                      class="btn btn-info btn-xs update"
                      data-toggle="modal"
                      data-target="#formModalEdit"
                      @click.prevent="setDivisionId(division.id,division.name)"
                    >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button
                      class="btn btn-danger btn-xs delete"
                      @click.prevent="deleteDivision(division.id)"
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
          <form @submit.prevent="addDivision">
            <div class="modal-header">
              <h4 class="modal-title">Add Division</h4>

              <button
                type="button"
                class="close"
                data-dismiss="modal"
                style="    color: #fff;"
              >&times;</button>
            </div>
            <div class="modal-body">
              <span id="form_result"></span>
              <input type="hidden" name value />
              <div class="form-group">
                <label class="control-label col-md-4">Division Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="division.name"
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
              <input type="hidden" id="insert" name="insert" value="insert" />
              <input type="hidden" name="user_id" id="user_id" />
              <input type="submit" id="action" name="action" class="btn btn-info" value="Add" />
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Edit -->
    <div id="formModalEdit" class="modal fade formModal" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form @submit.prevent="editDivision">
            <div class="modal-header">
              <h4 class="modal-title">Edit Division</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                style="    color: #fff;"
              >&times;</button>
            </div>
            <div class="modal-body">
              <span id="form_result"></span>
              <input type="hidden" name value />
              <div class="form-group">
                <label class="control-label col-md-4">Division Name</label>
                <input
                  type="text"
                  v-model="division_name"
                  name="name"
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
                  :variant="alert_type"
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
      divisions: [],
      division: {},
      flag_success: false,
      dismissSecs: 3,
      dismissCountDown: 0,
      message: "",
      division_id: 0,
      division_name: "TEXT",
      alert_type: "success"
    };
  },
  computed: {},
  created() {
    // console.log("HI IMA");
   // this.divisions = this.$store.getters.divisions;
    // let uri = "/api/division/list";
    // this.axios.get(uri).then(response => {
    //   this.divisions = response.data.data;
    //   this.$store.commit("divisionSet", response.data.data);
    // });
    this.getDivisions();
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
      getDivisions(){

      let uri = "/api/division/list";
      console.log(this.$store.getters.currentUser.token);
      var tkn =this.$store.getters.currentUser.token;
       let headers = {
        'headers':{
          'Authorization' : "Bearer "+tkn
        }
      };

       this.axios.get(uri,headers).then(response => {
         console.log(response.data);
       this.divisions =  response.data.data;
      this.$store.commit("divisionSet", response.data.data);
    });
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    setDivisionId(id, name) {
      this.division_id = id;
      this.division_name = name;
      console.log(this.division_name);
    },
    deleteDivision(id) {
        var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };
      var flag = confirm("Are you sure?");
      if (flag) {
        let uri = `/api/division/delete/${id}`;
        this.axios.delete(uri,headers).then(response => {
          console.log(response);
        });
      }
    },
    editDivision() {
      var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };
      let uri = "/api/division/create";
      var form_data = new FormData();

      for (var key in this.division) {
        var postValue = this.division[key];
        if (key == "image") {
          postValue = this.dataURLtoFile(this.division[key], "abc.png");
        }
        form_data.append(key, postValue);
      }
      form_data.append("id", this.division_id);
      form_data.append("name", this.division_name);
      form_data.append("action", "edit");
      this.axios
        .post(uri, form_data,headers)
        .then(response => {
          console.log(response.data.message);
          console.log(response.data.status);

          if (response.data.api_status == 0) {
            console.log("I am coming in");
            this.alert_type = "danger";
          } else {
            this.alert_type = "success";
            this.$store.commit("divisionEdit", response.data.data);
          }

          this.flag_success = true;
          this.dismissCountDown = this.dismissSecs;
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    addDivision() {
        var tkn = this.$store.getters.currentUser.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + tkn
        }
      };
      let uri = "/api/division/create";

      var form_data = new FormData();

      for (var key in this.division) {
        var postValue = this.division[key];
        if (key == "image") {
          postValue = this.dataURLtoFile(this.division[key], "abc.png");
        }
        form_data.append(key, postValue);
      }
      form_data.append("action", "new");
      this.axios.post(uri, form_data,headers).then(response => {
        this.$store.commit("divisionAdd", response.data.data);
        this.flag_success = true;
        this.dismissCountDown = this.dismissSecs;
        this.message = response.data.message;
      });
    }
  }
};
</script>
