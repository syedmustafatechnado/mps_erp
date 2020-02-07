<template>
<div >
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'create'}" class="nav-link">Create Post</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'posts'}" class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'datatable'}" class="nav-link">Datatable</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'chart'}" class="nav-link">Chart</router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
          </li>
        </ul>
      </nav> 
  </div>
  </template>
<script>
    export default {
        
      methods: { 
              logout(){
                  this.$store.commit('logout');
                  this.$router.push({path:'/projects/mps/login'});
              }
            }
    }
</script>
  