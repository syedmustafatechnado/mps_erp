// App.vue
<script>

let url = "http://abc.com/";
</script>
<template>
  <div class="container">


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
import LeftSidebar from './components/layouts/LeftSidebar';
import RightSidebar from './components/layouts/RightSidebar';

    export default{
            components:{

                     'app-top':Top,
                     'app-footer':Footer,
                     'app-leftsidebar': LeftSidebar,
                     'app-rightsidebar': RightSidebar
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
