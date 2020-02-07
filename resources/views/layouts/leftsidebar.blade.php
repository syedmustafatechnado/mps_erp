<!-- ========== Left Sidebar Start ========== -->
<div class="left-side-menu">
    <div class="slimscroll-menu">
        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <ul class="metismenu" id="side-menu">
                <li class="menu-title">Navigation</li>
                <li class="">
                    <a href="<?php URL::to('/'); ?>">
                        <i class="fe-airplay"></i>
                        <!-- <span class="badge badge-success badge-pill float-right">4</span> -->
                        <span>Dashboard</span>
                    </a>

                </li>
                <li>
                    <a href="<?php URL::to('brand'); ?>">
                        <i class="fe-briefcase"></i>
                        <span>Units & Brands</span>
                        <!-- <span class="menu-arrow"></span> -->
                    </a>
                </li>
                <li>
                    <a href="<?php echo URL::to('ppc');?>">
                        <i class="fe-file-text"></i>
                        <span>PPC</span>
                    </a>
                </li>

                <li>
                    <a href="<?php echo URL::to('lead');?>">
                        <i class="fe-file-text"></i>
                        <span>Leads</span>
                    </a>
                </li>

                <li>
                    <a href="<?php echo URL::to('order');?>">
                        <i class="fe-file-text"></i>
                        <span>Orders</span>
                    </a>
                </li>

                <li>
                    <a href="<?php echo URL::to('invoice');?>">
                        <i class="fe-file-text"></i>
                        <span>Invoice</span>
                    </a>
                </li>

                <li>
                    <a href="javascript: void(0);">
                        <i class="fe-pocket"></i>
                        <span>Projects & Tasks</span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul class="nav-second-level" aria-expanded="false">
                        <li>
                            <a href="<?php echo URL::to('project');?>">Project</a>
                        </li>
                        <li>
                            <a href="<?php echo URL::to('department');?>">Task</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="<?php echo URL::to('chat');?>">
                        <i class="fe-file-text"></i>
                        <span>Messages</span>
                    </a>
                </li>

               

                <li>
                    <a href="<?php echo URL::to('resource');?>">
                        <i class="fe-file-text"></i>
                        <span>Users</span>
                    </a>
                </li>
                <li>
                    
                    <a href="javascript: void(0);">
                        <i class="fe-pocket"></i>
                        <span>Divisions & Dept.</span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul class="nav-second-level" aria-expanded="false">
                        <li>
                            <a href="<?php echo URL::to('division');?>">Division</a>
                        </li>
                        <li>
                            <a href="<?php echo URL::to('department');?>">Department</a>
                        </li>
                        <li>
                            <a href="<?php echo URL::to('designations');?>">Designations</a>
                        </li>
                    </ul>
                </li>


            </ul>

        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->

</div>
<!-- Left Sidebar End -->
