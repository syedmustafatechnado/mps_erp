// HomeComponent.vue

<template>
  <div class="row justify-content-center">
      <!-- Modal Start -->
    <div class="modal" id="myModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
    <!-- Modal End -->
      <div class="col-md-8">
          <div class="card card-default">
              <button type="button" @click="showModal" data-toggle="modal" data-target="#myModal" class="btn btn-primary">Open Modal</button>
              <div class="card-header">Home Component</div>

              <div class="card-body">
                 {{ welcome}}
                 <p ref="dom-element">{{counter}}</p>
              </div>
          </div>
      </div>
  </div>
  </template> 
<script>

    export default {
        data(){
            return {
                counter:0
            }
        },
        beforeCreate() {
            // console.log('beforeCreate')
        },
        created() {
            // console.log('created')
            // setInterval(() => {
            //     this.counter++
            //     }, 1000)
        },
        beforeMount() {
            // console.log(`beforeMount`)
        },
        mounted() {
            // console.log('mounted')
        },
        beforeUpdate() {
        //    console.log(this.counter,"beforeUpdate")
        },
        updated() {
            // Fired every second, should always be true
            // console.log('updated');
            this.$refs['dom-element'].textContent = 'testing';
            // console.log(this.$refs['dom-element'].textContent === this.counter,"updated")
        },
        beforeDestroy: function(){ 
            // alert('Before Destroy');
        },
        destroyed: function(){ 
            // alert('Destroyed');
        },
        computed:{
          welcome(){
            //   console.log("computed property");
          return this.$store.getters.welcome; 
          }
          
        },
        methods: {
            showModal() {
                // console.log('open Modal');
                this.counter = 1;
                //$('#myModal').modal('show')
            },
            hideModal() {
                this.$ref['my-modal'].hide()
            },
            toggleModal() {
                // We pass the ID of the button that we want to return focus to
                // when the modal has hidden
                this.$ref['my-modal'].toggle('#toggle-btn')
            }
        }
    }
</script>