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
    <link rel="stylesheet" href="{{ URL::asset('public/assets/css/app.css') }}">
</head>
<body class="background-img">
<!-- Add your site or application content here -->
<div class="wrapper">
    <section class="reg-account login-account">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 login-form">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width: 320px;">
                                <tr>
                                    <td align="center" bgcolor="#eff3f8">
                                        <table border="0" cellspacing="0" cellpadding="0" class="table_width_100" width="100%" style="max-width: 680px; min-width: 300px;">
                                            <tr>
                                                <td align="center" bgcolor="#ffffff">
                                                    <table width="90%" border="0" cellspacing="0" cellpadding="0">
                                                        <div style="height: 30px; line-height: 30px; font-size: 10px;"></div>
                                                        <tr>
                                                            <td align="center">
                                                                <a href="#" target="_blank" style="color: #596167; font-family: Arial, Helvetica, sans-serif; float:left; width:100%; padding:20px;text-align:center; font-size: 13px;">

                                                                    <img src="{{ URL::asset('public/assets/bower_components/images/logo.png') }}" width="200" alt="Metronic" border="0"  /></a>
                                                            </td>
                                                            <td align="right">
                                                                <div style="height: 50px; line-height: 50px; font-size: 10px;">
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" bgcolor="#fbfcfd">
                                                                <table width="90%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <td align="center">
                                                                            <div style="height: 60px; line-height: 60px; font-size: 10px;"></div>
                                                                            <div style="line-height: 44px;">
                                                                                <p style="font-family:Arial, Helvetica, sans-serif; color:#57697e; font-size: 34px;">
                                                                                        <span style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">
                                                                                        Verification Code
                                                                                        </span>
                                                                                </p>
                                                                            </div>
                                                                            <div style="height: 40px; line-height: 40px; font-size: 10px;"></div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center">
                                                                            <div style="line-height: 24px;">
                                                                                <p style="font-family:Arial, Helvetica, sans-serif; color:#57697e;font-size: 15px;">
                                                                                        <span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">
                                                                                        {{ $verify_link }}
                                                                                        </span></p>
                                                                            </div>
                                                                            <div style="height: 40px; line-height: 40px; font-size: 10px;"></div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center">
                                                                            <div style="line-height: 24px;">
                                                                                <div class="form-group">
                                                                                    {{--<a href="{{ $link }}" class="btn btn-lg email-verify-btn">Click Here</a>--}}
                                                                                </div>
                                                                            </div>
                                                                            <div style="height: 60px; line-height: 60px; font-size: 10px;"></div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

</body>
</html>
