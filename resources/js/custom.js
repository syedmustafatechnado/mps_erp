// $('.status-carousel').owlCarousel({
//     loop:true,
//     auto: false,
//     margin:10,
//     nav:false,
//     dots: false,
//     responsive:{
//         0:{
//             items:1
//         },
//         480:{
//             items:2
//         },
//         700:{
//             items:3
//         },
//         768:{
//             items:4
//         },
//         1000:{
//             items:5
//         }
//     }
// });



// PAYMENT SELECT DROPDOWN
$(function() {
        $('.payment-method-list').change(function(){
            $('.payment-select-row').hide();
            $('#' + $(this).val()).show(300);
        });
    });


  $(document).ready(function(){
    $(".select_group").select2();
    // $('.timepicker').mdtimepicker({
    //     theme:'teal'
    // }); //Initializes the time picker



    $("leads-main-table-wrapper tr").addClass("leads-active");
  });

function datetimepicker() {

     $(".DateTime").flatpickr({
        enableTime: true,
        dateFormat: "Y-m-d h:i:S"
    });
}

'use strict';
        ;(
 function ( document, window, index ){
            var inputs = document.querySelectorAll( '.upload-input' );
            Array.prototype.forEach.call( inputs, function( input ){
                var label    = input.nextElementSibling,
                labelVal = label.innerHTML;
                input.addEventListener( 'change', function( e )
                {
                    var fileName = '';
                    if( this.files && this.files.length > 1 )
                        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                    else
                        fileName = e.target.value.split( '\\' ).pop();
                    if( fileName )
                        label.querySelector( 'span' ).innerHTML = fileName;
                    else
                        label.innerHTML = labelVal;
                });
                input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
                input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
            });
        }
        ( document, window, 0 ));
