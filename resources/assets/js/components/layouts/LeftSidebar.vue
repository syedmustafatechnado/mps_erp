
<template>


<!-- ========== Left Sidebar Start ========== -->
<div class="left-side-menu">
    <div class="slimscroll-menu">
        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <ul class="metismenu" id="side-menu">
                <li class="menu-title">Navigation</li>
                <li class="">
                    <a href="">
                        <i class="fe-airplay"></i>
                        <!-- <span class="badge badge-success badge-pill float-right">4</span> -->
                        <span>Dashboard</span>
                    </a>

                </li>
                <li>
                    <a href="">
                        <i class="fe-briefcase"></i>
                        <span>Units & Brands</span>
                        <!-- <span class="menu-arrow"></span> -->
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="fe-file-text"></i>
                        <span>PPC</span>
                    </a>
                </li>

                <li>
                    <a href="">
                        <i class="fe-file-text"></i>
                        <span>Leads</span>
                    </a>
                </li>

                <li>
                    <a href="">
                        <i class="fe-file-text"></i>
                        <span>Orders</span>
                    </a>
                </li>

                <li>
                    <a href="">
                        <i class="fe-file-text"></i>
                        <span>Invoice</span>
                    </a>
                </li>

                <li>
                    <a href="javascript: void(0);" data-toggle="collapse" data-target="#demo">
                        <i class="fe-pocket"></i>
                        <span>Projects & Tasks</span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul class="nav-second-level collapse" id="demo"  >
                        <li>
                            <a href="">Project</a>
                        </li>
                        <li>
                            <a href="">Task</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="">
                        <i class="fe-file-text"></i>
                        <span>Messages</span>
                    </a>
                </li>



                <li>
                    <a href="">
                        <i class="fe-file-text"></i>
                        <span>Users</span>
                    </a>
                </li>
                <li>

                    <a href="javascript: void(0);" data-toggle="collapse" data-target="#demo1">
                        <i class="fe-pocket"></i>
                        <span>Divisions & Dept.</span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul class="nav-second-level collapse" id="demo1" aria-expanded="false">
                        <li>
                             <router-link :to="{name:'division'}" class="nav-link">Division</router-link>
                            <!-- <a href="">Division</a> -->
                        </li>
                        <li>
                            <router-link :to="{name:'department'}" class="nav-link">Department</router-link>
                            <!-- <a href="">Department</a> -->
                        </li>
                        <li>
                            <router-link :to="{name:'designation'}" class="nav-link">Designation</router-link>
                            <!-- <a href="">Designations</a> -->
                        </li>
                         <li class="nav-item">
                            <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
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

</template>

<script>

export default {

      methods: {
              logout(){
                  this.$store.commit('logout');
                  this.$router.push({path:'/projects/mps_erp/login'});
              },
               created()
              {

              }
            }
    }
</script>
