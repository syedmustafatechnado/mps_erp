<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>MPS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="" name="description" />
    <meta content="" name="" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="<?php echo URL::to('/');; ?>assets/images/updates/favicon.png">

    <!-- App css -->
    <link href="<?php echo URL::to('/'); ?>/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo URL::to('/'); ?>/assets/css/icons.min.css" rel="stylesheet" type="text/css" />

    <!-- CUSTOM CSS -->
    <link href="<?php echo URL::to('/'); ?>/assets/css/custom.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo URL::to('/'); ?>/assets/css/responsive.css" rel="stylesheet" type="text/css" />
    <link href="<?=URL::to('/')?>/assets/css/sweetalert.css" rel="stylesheet" type="text/css" />
    <link href="<?=URL::to('/')?>/assets/css/alert.css" rel="stylesheet" type="text/css" />

</head>

<body class="authentication-bg authentication-bg-pattern">
    <div class="account-pages mt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12 col-xl-12 login-card">
                    <div class="card bg-pattern">
                        <div class="card-left-side">
                            <div class="card-left-side-inner">
                                <div class="card-left-side-text">
                                    <p>Hello, Friends!</p>
                                    <p>Enter your personal details
                                        and start journey with us</p>
                                    <p>- Suspendisse porta vehicula risus.</p>
                                    <p>- Fermentum. Integer quis justo.</p>
                                    <p>- Mentum, auctor erat id</p>
                                    <button class="btn get-started-button mt-2 waves-effect waves-light" type="submit"> GET STARTED </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4">

                            <div class="login-card-head">
                                <a href="index.html">
                                    <span><img src="<?php echo URL::to('/'); ?>assets/images/updates/mps-logo.png" alt="" class="img-fluid"></span>
                                </a>
                                <p class="mb-2.5 mt-0.5">Log In</p>
                            </div>

                            <form action="<?php echo URL::to('/login'); ?>" method="post">

                                <input type="hidden" >

                                <div class="form-group mb-3">
                                    <i class="fe-user noti-icon"></i>
                                    <input class="form-control" type="" name="username" id="emailaddress" required="" placeholder="Email Address" size="50"  value="">
                                   
                                    <div class="help-block"></div>
                                </div>

                                <div class="form-group mb-3">
                                    <i class="fe-lock noti-icon"></i>
                                    <input class="form-control" type="password" required="" name="password" id="password" placeholder="Password" size="50" value="">
                                    
                                    <div class="help-block"></div>
                                </div>

                                <div class="form-group mb-3">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value="yes" class="custom-control-input" name="remember" id="checkbox-signin" checked>
                                        <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                    </div>
                                </div>

                                <div class="form-group mb-0">
                                    <button class="btn btn-primary btn-block login-button waves-effect waves-light" type="submit"> Sign In </button>
                                </div>
                            </form>

                            <div class="text-left">
                                <h5 class="mt-3 text-muted"><a href="<?=('login/forgot-password')?>" class="forgot-password">Forgot Password?</a></h5>
                            </div>

                        </div> <!-- end card-body -->
                    </div>
                    <!-- end card -->


                    <!-- end row -->

                </div> <!-- end col -->
            </div>
            <!-- end row -->
            <p class="copyright-text">Copyright © 2019 My Project Status. All rights reserved.</p>
        </div>
        <!-- end container -->
    </div>
    <!-- end page -->


    <footer class="footer footer-alt">

    </footer>

    <script src="<?=URL::to('/')?>assets/js/sweetalert.min.js"></script>
    <script src="<?=URL::to('/')?>assets/js/alert.js"></script>

</body>

</html>