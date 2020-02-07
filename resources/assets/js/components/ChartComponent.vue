<script>
import { Line } from 'vue-chartjs';
import moment from 'moment';
    export default {
        extends: Line,
        mounted() {
         let uri = 'posts';
         let Years = new Array();
         let Labels = new Array();
         let Prices = new Array();
         this.axios.get(uri).then((response) => {
            let data = response.data;
            if(data) {
                var result = data.data;
                for (const key in result) {    
                    Years.push(moment(result[key].created_at).year());
                    Labels.push(result[key].title);
                }
                console.log();
               this.renderChart({
               labels: Labels,
               datasets: [{
                  label: 'Post',
                  backgroundColor: '#FC2525',
                  data: Years
            }]
         }, {responsive: true, maintainAspectRatio: false})
       }
        else {
            console.log('No data');
        }
        });
        }
    }
</script>
