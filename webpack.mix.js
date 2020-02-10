const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([


'resources/assets/js/app.js',
   'resources/js/aos.js',
    'resources/js/app.min.js',
//    'resources/js/moment-with-locales.min.js',
   'resources/js/bootstrap-datetimepicker.min.js',
   'resources/js/bootstrap-table.js',

   'resources/js/multiselect.js',
   'resources/js/multiselect-2.js',
'resources/js/owl.carousel.min.js',
'resources/js/chat.js',
   'resources/js/custom.js',
   'resources/js/flatpickr.min.js',
   'resources/js/flot.js',
    'resources/js/alert.js',
    'resources/js/sweetalert.min.js',


   'resources/js/vendor.min.js',


],
'public/js/all.js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .styles([
      'resources/assets/css/alert.css',
      'resources/assets/css/aos.css',
      'resources/assets/css/app.min.css',
      'resources/assets/css/bootstrap-datetimepicker.min.css',
      'resources/assets/css/bootstrap.min.css',
      'resources/assets/css/chat.css',
      'resources/assets/css/custom.css',
      'resources/assets/css/flatpickr.min.css',
      'resources/assets/css/font-awesome.css',
      'resources/assets/css/icons.min.css',
      'resources/assets/css/multiselect.css',
      'resources/assets/css/owl.carousel.min.css',
      'resources/assets/css/owl.theme.default.min.css',
      'resources/assets/css/responsive.css',
      'resources/assets/css/sweetalert.css',
      'resources/assets/css/timeline.css'
   ],
   'public/css/all.css');
