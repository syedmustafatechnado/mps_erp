
        @include('layouts/header')
        @include('layouts/top')
        @include('layouts/leftsidebar')
        

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="content-page">
        

<?php 
    $content['flot_js'] = URL::to('/').'/assets/js/flot.js';
    $content['dashboard_js'] = URL::to('/').'/assets/js/pages/dashboard-1.init.js';
?>

        @include('layouts/footer')
