           <!-- Footer Start -->
           <footer class="footer">
               <div class="container-fluid">
                   <div class="row">
                       <div class="col-md-6 index-copyright">
                           Copyright © 2019 My Project Status. All rights reserved.
                       </div>

                   </div>
               </div>
           </footer>
           <!-- end Footer -->

           </div>

           <!-- ============================================================== -->
           <!-- End Page content -->
           <!-- ============================================================== -->
           @include('layouts/rightsidebar')
           
           <script src="<?php echo URL::to('/'); ?>/assets/js/vendor.min.js"></script>
           <script src="<?=!empty($flot_js)?$flot_js:''?>"></script>     
           <script src="<?php // echo !empty($dashboard_js)?$dashboard_js:''?>"></script>     
           <script src="<?php echo URL::to('/'); ?>/assets/js/app.min.js"></script>
           <script src="<?php echo URL::to('/'); ?>/assets/js/owl.carousel.min.js"></script>
           <script src="<?=!empty($dataTables_min_js)?$dataTables_min_js:''?>"></script>
           <script src="<?=!empty($dataTables_responsive_js)?$dataTables_responsive_js:''?>"></script> 
           <script src="<?=!empty($multiselect_js)?$multiselect_js:''?>"></script>
           <script src="<?php echo !empty($flatpickr_js)?$flatpickr_js:''?>"></script>
           <script src="<?=!empty($chat_js)?$chat_js:''?>"></script>
           <script src="<?php echo URL::to('/'); ?>/assets/summernote/summernote-bs4.min.js"></script>
           <script src="<?php echo URL::to('/'); ?>/assets/libs/select2/dist/js/select2.full.min.js"></script>
           <script src="<?php echo URL::to('/'); ?>/assets/js/sweetalert.min.js"></script>
           <script src="<?php echo URL::to('/'); ?>/assets/js/alert.js"></script>
           <script src="<?php echo URL::to('/'); ?>/assets/js/custom.js"></script>
           <!-- <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
           <script src="https://cdn.datatables.net/responsive/2.2.3/js/responsive.bootstrap4.min.js"></script> -->
           <!-- <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script> -->
           

           
           <script>js_success("")</script>
         
           
           <script>alert_success("")</script>
       

         
           <script type="text/javascript">
            $(document).ready(function(){
              $(window).on('load',function(){
            //  $('#passwordModal').modal('show');
              })
            })
           </script>
         

           <script>
            // Summernote
            $('.textarea').summernote();
                //preview image, on image change 
                function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('.previewimg').attr('src', e.target.result);
                        }
                        reader.readAsDataURL(input.files[0]);
                    }
                }
                $(document).ready(function(){

                  $(".previewinp").change(function() {
                      readURL(this);
                  });


                  $(document).on('submit','#lead_form',function(e){
                    e.preventDefault();
                    $('.form_error').html('');
                    $.ajax({
                        type:"ajax",
                        url:"<?php echo URL::to('lead/storeLead') ?>",
                        method:"post",
                        data: new FormData(this),
                        contentType: false,
                        processData: false,
                        beforeSend: function(){
                            $('#insert').attr('disabled',true);
                        },
                        success: function(data){
                            var res = JSON.parse(data);
                            if (res.status == true) {
                                window.location.href = ""
                            }
                            else {
                                $('#insert').attr('disabled',false);
                                $('#brand_id_err').html(res.error.brand_id);
                                $('#leadname_err').html(res.error.name);
                                $('#contact_no_err').html(res.error.contact_no);
                                $('#primary_email_err').html(res.error.primary_email);
                            }
                        }
                    });
                  })

                  $(document).on('submit','#order_form',function(e){
                    e.preventDefault();
                    $('.form_error').html('');
                    $.ajax({
                        type:"ajax",
                        url:"<?php echo URL::to('Order/storeOrder') ?>",
                        method:"post",
                        data: new FormData(this),
                        contentType: false,
                        processData: false,
                        beforeSend: function(){
                            $('#order_insert').attr('disabled',true);
                        },
                        success: function(data){
                            var res = JSON.parse(data);
                            if (res.status == true) {
                                window.location.href = ""
                            }
                            else {
                                $('#order_insert').attr('disabled',false);
                                $('#lead_id_err').html(res.error.lead_id);
                                $('#ordername_err').html(res.error.name);
                                $('#orderprice_err').html(res.error.price);
                                $('#description_err').html(res.error.description);
                            }
                        }
                    });
                  })

                  // Update Password
                  $(document).on('submit','#sample_form',function(e){
                    e.preventDefault();
                    $('.form_error').html('');
                    $.ajax({
                      type:"ajax",
                      url:"<?php echo URL::to('users/changepassword') ?>",
                      method:"post",
                      data: new FormData(this),
                      contentType:false,
                      processData:false,
                      success: function(data){
                        var res = JSON.parse(data);
                        if (res.status == true) {
                          window.location.href = '';
                        }
                        else if (res.status == false) {
                          js_error(res.msg);
                        }
                        else {
                          $('#password_err').html(res.error.password);
                          $('#new_password_err').html(res.error.new_password);
                          $('#cn_password_err').html(res.error.cn_password);
                        }
                      }
                    })
                  })

                })
           </script>



           </body>

           </html>