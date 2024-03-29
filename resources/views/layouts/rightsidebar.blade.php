</div>
        <!-- END wrapper -->

        <!-- Right Sidebar -->
        <div class="right-bar">
            <div class="rightbar-title">
                <a href="javascript:void(0);" class="right-bar-toggle float-right">
                    <i class="dripicons-cross noti-icon"></i>
                </a>
                <h5 class="m-0 text-white">Profile</h5>
            </div>
            <div class="slimscroll-menu">
                <!-- User box -->
                <div class="user-box">
                    <div class="user-img">
                        <img src="<?php echo URL::to('/'); ?>/public/uploads/images/userprofiles/user.png" alt="user-img" title="Mat Helme" class="rounded-circle img-fluid">
                        <a href="" class="user-edit"><i class="mdi mdi-pencil"></i></a>
                    </div>
            
         
                    <h5><a href="javascript: void(0);"></a> </h5>
                    <p class="text-muted mb-0"><small></small></p>
                </div>

                <!-- Settings -->
                <hr class="mt-0" />
                <!-- <h5 class="pl-3">Basic Settings</h5> -->
                <hr class="mb-0" />
                <div class="right-bar-menu">
                    <ul class="p-3">
                        <li><a href="javascript: void(0);">My Timesheet</a></li>
                        <li><a href="javascript: void(0);">My Notes/Reminders</a></li>
                        <li>Setting
                            <ul class="settings-list">
                                <li>
                                    <div class="checkbox checkbox-primary mb-2">
                                        <input id="Rcheckbox1" type="checkbox" checked>
                                        <label for="Rcheckbox1">
                                            Notifications
                                        </label>
                                    </div>
                                </li>
                                <li><a data-toggle="modal" data-target="#passwordModal">Change Password</a></li>
                            </ul>    
                        </li>
                        <li><a href="<?php echo URL::to('logout'); ?>">LOG OUT</a></li>
                    </ul>                    
                </div>        
                
            </div> <!-- end slimscroll-menu-->
        </div>
        <div id="passwordModal" class="modal fade formModal" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <form id="sample_form" method="post" class="form-horizontal" enctype="multipart/form-data">
                <div class="modal-header">
                    <h4 class="modal-title">Change Password</h4>
                    <button type="button" class="close" data-dismiss="modal" style="    color: #fff;">&times;</button>
                </div>
                <div class="modal-body">
                   <input type="hidden" name="" value="" />
                    <div class="form-group">
                        <label class="control-label col-md-12">Current Password</label>
                        <input type="password" name="password" id="password" class="form-control" required="">
                        <span id="password_err" class="text-danger form_error"></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-12">New Password</label>
                        <input type="password" name="new_password" id="new_password" class="form-control" required="">
                        <span id="new_password_err" class="text-danger form_error"></span>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-12">Confirm New Password</label>
                        <input type="password" name="cn_password" id="cn_password" class="form-control" required="">
                        <span id="cn_password_err" class="text-danger form_error"></span>
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="hidden" name="user_id" id="user_id" value="">
                    <input type="submit" id="action_pass" name="action_pass" class="btn btn-info" value="Save Changes">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>
        <!-- /Right-bar -->

        <!-- Right bar overlay-->
        <div class="rightbar-overlay"></div>