<!doctype html>
<html>
<head>
    <title>MPS</title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- favicon
        ============================================ -->
    <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('public/assets/bower_components/images/favicon.png') }}">
    <!-- Bootstrap CSS ============================================ -->
    <link rel="stylesheet" href="{{ URL::asset('public/css/all.css') }}">
    <!-- style CSS ============================================ -->
    <link rel="stylesheet" href="{{ URL::asset('public/css/app.css') }}">
</head>
<body class="background-img">
<!-- Add your site or application content here -->
<div class="wrapper">
    <section class="reg-account login-account">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 login-form">
                    <div class="panel panel-default">
                        <br/>
                        <br/>
                        <div class="panel-body">
                            <h1>MPS PROFILE COMPLETE</h1>
                            <form method="POST" action="{{URL::asset('email/verification')}}" enctype="multipart/form-data">
                                {{csrf_field()}}
                                <div class="form-group">
                                    <input type="text" name="psuedo_name" class="form-control" placeholder='Psuedo Name' value="" id="psuedo_name" required>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="contact" class="form-control" placeholder='Contact' value="" id="contact" required>
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" class="form-control" placeholder='Password' value="" id="password" required>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-file" name="image">
                                        <input type="file" class="form-control text-left" placeholder='Choose a file...' />
                                        <span class="input-group-btn">
                            {{-- <button class="btn btn-default btn-choose" type="button" >Choose</button> --}}
                         </span>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <input id="user_id" name="user_id" type="hidden" value="{{$user_id}}">
                                </div>
                                <div class="form-group">

                                    <button type="submit" class="btn btn-success pull-right">Proceed</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<script src="{{ URL::asset('assets/bower_components/js/form-main.js') }}"></script>
</body>
</html>
