
<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left-side-menu">
    <div class="slimscroll-menu">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <ul class="metismenu" id="side-menu">
          <li class="menu-title">Navigation</li>
          <li class>
            <a href>
              <i class="fe-airplay"></i>
              <!-- <span class="badge badge-success badge-pill float-right">4</span> -->
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href>
              <i class="fe-briefcase"></i>
              <span>Units & Brands</span>
              <!-- <span class="menu-arrow"></span> -->
            </a>
          </li>
          <li>
            <a href>
              <i class="fe-file-text"></i>
              <span>PPC</span>
            </a>
          </li>

          <li>
            <a href>
              <i class="fe-file-text"></i>
              <span>Leads</span>
            </a>
          </li>

          <li>
            <a href>
              <i class="fe-file-text"></i>
              <span>Orders</span>
            </a>
          </li>

          <li>
            <a href>
              <i class="fe-file-text"></i>
              <span>Invoice</span>
            </a>
          </li>

          <li>
            <a href="javascript: void(0);" id="click" v-b-toggle.collapse-2 data-toggle>
              <i class="fe-pocket"></i>
              <span>Projects & Tasks</span>
              <span class="menu-arrow cli1"></span>
            </a>
            <b-collapse b-collapse id="collapse-2">
              <ul class="nav-second-level">
                <li>
                  <router-link :to="{name:'division'}" class="nav-link">Projects</router-link>
                </li>
                <li>
                  <router-link :to="{name:'division'}" class="nav-link">tasks</router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li>
            <a href>
              <i class="fe-file-text"></i>
              <span>Messages</span>
            </a>
          </li>

          <li>
            <!-- <a href>
              <i class="fe-file-text"></i>
              <span>Users</span>
            </a>-->

            <router-link :to="{name:'user'}" class="nav-link">
              <i class="fe-file-text"></i>Users
            </router-link>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              v-b-toggle.collapse-1
              data-toggle
              id="click2"
              data-target="#demo1"
            >
              <i class="fe-pocket"></i>
              <span>Divisions & Dept.</span>
              <span class="menu-arrow cli"></span>
            </a>
            <b-collapse b-collapse id="collapse-1">
              <ul class="nav-second-level mt-2" aria-expanded>
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
            </b-collapse>
          </li>
          <li></li>
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
  mounted() {
    $("#menulink").on("click", function() {
      $(".right-bar").show();
    });

    $(".right-bar-toggle").on("click", function() {
      $(".right-bar").hide();
    });

    $("#click").click(function() {
      $(".cli1").toggleClass("menu-arrow3");
    });

    $("#click2").click(function() {
      $(".cli").toggleClass("menu-arrow2");
    });
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "/login" });
    },
    created() {}
  }
};
</script>
