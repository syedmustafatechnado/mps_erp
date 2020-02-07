// DatatableComponent.vue
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"></div>

                    <div class="card-body">
                        <datatable-dt :data="data" :columns="columns" :actions="actions"></datatable-dt>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  
  // import { Dt } from '@node_modules/bootstrap-vue-datatable/DataTable.vue';
  // const dt = require('bootstrap-vue-datatable');
    import Dt from '../../../../node_modules/bootstrap-vue-datatable/DataTable.vue';
    import moment from 'moment';
    export default {
        components: { 'datatable-dt': Dt },
        mounted() {
            console.log('Component mounted.')
        },
        created() {
        let uri = 'posts';
        this.axios.get(uri).then(response => {
          this.data = response.data.data;
        });
      },
        data() {
      return {
        // Data to be passed to component
        selectable:true,
        data: [],
 
        // Columns that should be displayed on The Table
        columns: [
          {name: "title", th: "Title"},
          {name: "body", th: "Description"},
          {name: "image", th: "Image", render(row,cell,index){
              return (row['image']) ? '<img height="100" width="100" src="'+row['image']+'"/>' : '';
          }},
          // {name: "date_of_birth", th: "Date Of Birth", show: false},
           {name: "created_at", th: "Created At", render (row, cell, index) {
            // Parse date and display difference
            return moment(row.created_at).fromNow();
          }},
        ],
        actions: [
          {text: "Delete", color: "danger", action: (row, index) => {
            // alert(`about to delete ${row.first_name} ${row.last_name}`);
            this.data.splice(index,1);
          }}
        ],
        loading:true,
        buttons:['csv']
      }
    }
  }
</script>