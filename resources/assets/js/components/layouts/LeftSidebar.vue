
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
                    <a href="javascript: void(0);" id="click" data-toggle="collapse" data-target="#demo">
                        <i class="fe-pocket"></i>
                        <span>Projects & Tasks</span>
                        <span class="menu-arrow cli1"></span>
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

                    <a href="javascript: void(0);" id="click2" data-toggle="collapse" data-target="#demo1">
                        <i class="fe-pocket"></i>
                        <span>Divisions & Dept.</span>
                        <span class="menu-arrow cli"></span>
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

    mounted(){

            $("#menulink").on('click',function(){
                $(".right-bar").show();
            });

        $('.right-bar-toggle').on('click',function(){$('.right-bar').hide()});



  $("#click").click(function(){
    $(".cli1").toggleClass("menu-arrow3");
  });

  $("#click2").click(function(){
    $(".cli").toggleClass("menu-arrow2");
  });

    },
      methods: {
              logout(){
                  this.$store.commit('logout');
                  this.$router.push({path:'/login'});
              },
               created()
              {

              }
            }
    }
</script>
