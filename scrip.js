
$(document).ready(function () {


    $( "#reg" ).click(
        function() {
            $("#modal").css("visibility", "visible");
        }
    );

    


    $( "#contactForm" ).on( "submit", function( event ) {

        event.preventDefault();
        
        

            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: '¡Gracias por preferirnos!',
                timer: 2000
              }).then(function() {
                $("#modal").css("visibility", "hidden");
            });
            
        }
    );
    

});