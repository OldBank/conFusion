
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


document.getElementById("revfrmbtn").addEventListener("click", myFunction);
function myFunction() {
  
      $("#reserveform").modal("show");   
    };


    document.getElementById("lgnfrmbtn").addEventListener("click", myFunction2);
    function myFunction2() {
      
          $("#loginModal").modal("show");   
        };
      
  
  
  
        document.getElementById("carouselButton").addEventListener("click", myFunction3);

            function myFunction3 () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) 
        {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play'))
        {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    };