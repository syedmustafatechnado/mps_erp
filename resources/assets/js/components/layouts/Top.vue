<template>
<div>
<!-- Topbar Start -->
<div class="navbar-custom custom-dashboard-nav">
    <ul class="list-unstyled topnav-menu float-right mb-0">

        <li class="d-none d-sm-block">
            <form class="app-search">
                <div class="app-search-box">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search...">
                        <div class="input-group-append">
                            <button class="btn" type="submit">
                                <i class="fe-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </li>

        <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <i class="fe-bell noti-icon"></i>
                <span class="badge badge-danger rounded-circle noti-icon-badge">9</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-lg">

                <!-- item-->
                <div class="dropdown-item noti-title">
                    <h5 class="m-0">
                        <span class="float-right">
                            <a href="#" class="text-dark">
                                <small>Clear All</small>
                            </a>
                        </span>Notification
                    </h5>
                </div>

                <div class="slimscroll noti-scroll">

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item active">
                        <div class="notify-icon">
                            <img src="" class="img-fluid rounded-circle" alt="" /> </div>
                        <p class="notify-details">Cristina Pride</p>
                        <p class="text-muted mb-0 user-msg">
                            <small>Hi, How are you? What about our next meeting</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-primary">
                            <i class="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p class="notify-details">Caleb Flakelar commented on Admin
                            <small class="text-muted">1 min ago</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon">
                            <img src="" class="img-fluid rounded-circle" alt="" /> </div>
                        <p class="notify-details">Karen Robinson</p>
                        <p class="text-muted mb-0 user-msg">
                            <small>Wow ! this admin looks good and awesome design</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-warning">
                            <i class="mdi mdi-account-plus"></i>
                        </div>
                        <p class="notify-details">New user registered.
                            <small class="text-muted">5 hours ago</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-info">
                            <i class="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p class="notify-details">Caleb Flakelar commented on Admin
                            <small class="text-muted">4 days ago</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-secondary">
                            <i class="mdi mdi-heart"></i>
                        </div>
                        <p class="notify-details">Carlos Crouch liked
                            <b>Admin</b>
                            <small class="text-muted">13 days ago</small>
                        </p>
                    </a>
                </div>

                <!-- All-->
                <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                    View all
                    <i class="fi-arrow-right"></i>
                </a>

            </div>
        </li>

        <li class="dropdown notification-list">
            <a class="nav-link right-bar-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <img src="https://cdn1.iconfinder.com/data/icons/symbol-color-users-1/32/user_2-link-512.png" alt="user-image" class="rounded-circle">
                <span class="pro-user-name ml-1">
                    Admin <i class="mdi mdi-chevron-down"></i>
                </span>
            </a>

        </li>


    </ul>

    <!-- LOGO -->
    <div class="logo-box">
        <a href="" class="logo text-center">
            <span class="logo-lg">
                <img src="assets/images/updates/mps-logo.png" alt="" class="img-fluid" width="50%">
                <!-- <span class="logo-lg-text-light">UBold</span> -->
            </span>
            <span class="logo-sm">
                <!-- <span class="logo-sm-text-dark">U</span> -->
                <img src="" alt="" class="img-fluid" width="75%">
            </span>
        </a>
    </div>

    <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
        <li>
            <button class="button-menu-mobile waves-effect waves-light">
                <i class="fe-menu"></i>
            </button>
        </li>

        <li class="dropdown d-none d-lg-block">
            <a class="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                Create New
                <i class="mdi mdi-chevron-down"></i>
            </a>
            <div class="dropdown-menu">
                <!-- item-->
                <a href="javascript:void(0);" data-toggle="modal" data-target="#leadModal" class="dropdown-item">
                    <i class="fe-briefcase mr-1"></i>
                    <span>Lead</span>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" data-toggle="modal" data-target="#orderModal" class="dropdown-item">
                    <i class="fe-bar-chart-line- mr-1"></i>
                    <span>Order</span>
                </a>

                <!-- item-->
                <a href="" class="dropdown-item">
                    <i class="fe-settings mr-1"></i>
                    <span>Invoice</span>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item">
                    <i class="fe-headphones mr-1"></i>
                    <span>Task</span>
                </a>

            </div>
        </li>


    </ul>
</div>
<!-- end Topbar -->

<div class="modal fade new-modal" id="leadModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <img src="" class="img-fluid">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="lead_form" method="post" enctype="multipart/form-data">
                    <input type="hidden" name="" value="" />
                    <div class="brand-form-group">
                    </div>
                    <div class="brand-form-group">
                        <label for="">Brand</label>
                       <!-- <select name="brand_id" id="brand_id" class="form-control" required="">
                            <option value="">Select Brand</option>

                            <option value=""></option>

                        </select> -->
                        <span id="brand_id_err" class="text-danger form_error"></span>
                    </div>
                    <div class="brand-form-group">
                        <label for="">Name</label>
                        <input type="text" name="name" placeholder="Name">
                        <span id="leadname_err" class="text-danger form_error"></span>
                    </div>
                    <div class="brand-form-group">
                        <label for="">Contact No</label>
                        <input type="text" id="contact_no" name="contact_no" placeholder="Contact No">
                        <span id="contact_no_err" class="text-danger form_error"></span>
                    </div>
                    <div class="brand-form-group">
                        <label for="">Email</label>
                        <input type="email" id="primary_email" name="primary_email" placeholder="Email">
                        <span id="primary_email_err" class="text-danger form_error"></span>
                    </div>
                    <div class="modal-action-btns">
                        <button type="submit" id="insert" class="btn btn-primary save">Save changes</button>
                        <button type="button" class="btn btn-secondary close" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade new-modal" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <img src="" class="img-fluid">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="order_form" method="post" enctype="multipart/form-data">

                    <input type="hidden" id="orderid" name="orderid" value="" />
                    <div class="brand-form-group">
                    </div>
                    <div class="brand-form-group">
                        <label for="">Lead</label>
                        <select name="lead_id" id="lead_id" class="form-control" required="">
                            <option value="" selected disabled>Select Lead</option>

                            <option value=""></option>

                        </select>
                        <span id="lead_id_err" class="text-danger form_error"></span>
                    </div>
                    <div class="brand-form-group">
                        <label for="">Services</label>
                        <select multiple="multiple" class="select_group" id="ordername" name="name[]" required="" style="width: 100%">
                            <option value="SEO">SEO</option>
                            <option value="SMM">SMM</option>
                            <option value="Website">Website</option>
                            <option value="Logo">Logo</option>
                        </select>
                        <span id="ordername_err" class="text-danger form_error"></span>
                    </div>
                    <div class="brand-form-group">
                        <label for="">Price</label>
                        <input type="number" id="orderprice" name="price" placeholder="Price" required="">
                        <span id="orderprice_err" class="text-danger form_error"></span>
                    </div>
                    <div class="brand-form-group">
                        <label for="">Description</label>
                        <textarea class="textarea" id="orderdescription" name="description" placeholder="Description" required=""></textarea>
                        <span id="description_err" class="text-danger form_error"></span>
                    </div>
                    <div class="modal-action-btns">
                        <button type="submit" id="order_insert" class="btn btn-primary save">Save changes</button>
                        <button type="button" class="btn btn-secondary close" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</div>
  </template>
<script>
    export default {


    }
</script>
