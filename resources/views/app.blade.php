<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>MPS</title>
        <link rel="shortcut icon" href="{{ asset('public/images/favicon.png') }}">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link href="{{ URL::asset('public/css/app.css') }}" type="text/css" rel="stylesheet" />
        <link href="{{ URL::asset('public/css/all.css') }}" type="text/css" rel="stylesheet" />
        <meta name="csrf-token" value="{{ csrf_token() }}" />
    </head>
    <body class="">
        <div id="app">

         <example-component></example-component>
        </div>

        <script src="{{ URL::asset('public/js/all.js') }}" type="text/javascript"></script>

    </body>

</html>
