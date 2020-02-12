// App.vue
<script>

let url = "http://abc.com/";
</script>
<template>
  <div class="col-md-12">


    <app-top v-if="currentUser"></app-top>
        <app-rightsidebar v-if="currentUser"></app-rightsidebar>
        <app-leftsidebar v-if="currentUser"></app-leftsidebar>



<br/>

    <transition name="fade">
      <router-view></router-view>
    </transition>



  </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>
import Top from './components/layouts/Top.vue';
import Footer from './components/layouts/Footer.vue';
import LeftSidebar from './components/layouts/LeftSidebar.vue';
import RightSidebar from './components/layouts/RightSidebar.vue';
import DivisionComponent from './components/divisions/DivisionComponent.vue';
import DesignationComponent from  './components/designations/DesignationComponent.vue';
import DepartmentComponent from './components/departments/DepartmentComponent.vue';

    export default{
            components:{

                     'app-top':Top,
                     'app-footer':Footer,
                     'app-leftsidebar': LeftSidebar,
                     'app-rightsidebar': RightSidebar,
                     'app-division' : DivisionComponent,
                     'app-department' : DepartmentComponent,
                     'app-designation' : DesignationComponent
                 },
                 computed: {
                  currentUser(){
                    return this.$store.getters.currentUser;
                  }
                },
                created(){

                }
          }
</script>
