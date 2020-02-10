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
                            <button type="button" id="add_button" data-toggle="modal" data-target="#formModal" class="waves-effect waves-light lead-btn create-new-lead-btn ml-2">
                            <i class="fas fa-compress-arrows-alt"></i>Create New Designations</button>

                            <!-- <a href="javascript: void(0);" class="waves-effect waves-light btn btn-blue btn-sm ml-2 filter-button">
                                <i class="mdi mdi-filter-outline"></i>
                                </a> -->
                        </form>
                    </div>
                    <h4 class="page-title"><span></span></h4>
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
            <form method="post" id="sample_form" class="form-horizontal" enctype="multipart/form-data">
                <div class="modal-header">
                    <h4 class="modal-title">Add Designations</h4>
                    <button type="button" class="close" data-dismiss="modal" style="    color: #fff;">&times;</button>
                </div>
                <div class="modal-body">
                    <span id="form_result"></span>
                   <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>" />
                   <div class="form-group">
                        <label class="control-label col-md-4">Select Division</label>
                        <select name="division_id" id="division_id" class="form-control" required="">
                            <option value="">Select Division</option>

                        </select>
                        <span id="division_id_err" class="text-danger form_error"></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-4">Select Department</label>
                        <select name="department_id" id="department_id" class="form-control" required="">
                            <option value="">Select Department</option>
                        </select>
                        <span id="department_id_err" class="text-danger form_error"></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-4">Designation Name</label>
                        <input type="text" name="name" id="name" class="form-control" required="">
                        <span id="namess_err" class="text-danger form_error"></span>
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="hidden" id="insert" name="insert" value="insert">
                    <input type="hidden" name="user_id" id="user_id">
                    <input type="submit" id="action" name="action" class="btn btn-info" value="Add">
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

}
</script>
