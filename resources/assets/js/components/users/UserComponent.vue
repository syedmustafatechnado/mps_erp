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
              <tbody></tbody>
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
          <form id="user_form" class="form-horizontal" method="post" enctype="multipart/form-data">
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
              <input
                type="hidden"
                name="<?php echo $this->security->get_csrf_token_name();?>"
                value="<?php echo $this->security->get_csrf_hash();?>"
              />
              <div class="form-group">
                <label class="control-label col-md-4">Select Division</label>
                <select name="division_id" id="division_id" class="form-control" required>
                  <option value>Select Division</option>

                  <option value></option>
                </select>
                <span id="division_id_err" class="text-danger form_error"></span>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">Select Department</label>
                <select name="department_id" id="department_id" class="form-control" required>
                  <option value>Select Department</option>
                </select>
                <span id="department_id_err" class="text-danger form_error"></span>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">Select Designation</label>
                <select name="designation_id" id="designation_id" class="form-control" required>
                  <option value>Select Designation</option>
                </select>
                <span id="designation_id_err" class="text-danger form_error"></span>
              </div>
              <div class="form-group">
                <label class="control-label col-md-12">
                  Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  class="form-control"
                  placeholder="Name"
                  required
                />
                <span id="username_err" class="text-danger form_error"></span>
              </div>
              <div class="form-group">
                <label class="control-label col-md-12">
                  Email Address
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                />
                <span id="useremail_err" class="text-danger form_error"></span>
              </div>
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
    return {};
  }
};
</script>
