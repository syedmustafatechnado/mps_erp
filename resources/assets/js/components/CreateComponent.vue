// CreatePost.vue

<template>
  <div>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="post.body" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="row">
            <div class="col-md-3" v-if="imagePreview">
                <img :src="imagePreview" class="img-responsive" height="70" width="90">
              </div>
            <div class="col-md-6">
                <input type="file" v-on:change="onImageChange" class="form-control">
            </div>
          </div><br/>
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
    
        data(){
          let abc;
        return {
          post:{
          },
          imagePreview : ''
        }
    },
    updated() {
            console.log('updated');
        },
    methods: {
      addPost(){
        let uri = 'post/create';
        let headers = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'boundary' : Math.random().toString().substr(2)
                }
              };
              var form_data = new FormData();
          for ( var key in this.post ) {
            var postValue = this.post[key];
            if(key == 'image'){
              postValue = this.dataURLtoFile(this.post[key],'abc.png');
            }
              form_data.append(key, postValue); 
          }
       this.axios.post(uri, form_data,headers).then((response) => {
       this.$router.push({name: 'posts'});
        });
      },
      onImageChange(e) {
        
          let files = e.target.files || e.dataTransfer.files;
          if (!files.length)
              return;
          this.createImage(files[0]);
      },
      createImage(file) {
          let reader = new FileReader();
          let vm = this;
          reader.onload = (e) => {
              vm.post.image = e.target.result; 
              vm.imagePreview = e.target.result;
          };
          reader.readAsDataURL(file);
      },
      dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }
      
    }
  }
</script>