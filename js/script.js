//Hide #what article
   // when click on #what-ilyo button
        //toggle content
    // when click on #why-ilyo button
        //toggle content   
    
$(document).ready(function(){
    $("#what").hide();
    $("#what-ilyo").click(function(event){
        event.preventDefault();
        $("#what").slideToggle("slow");
    })

    $("#why").hide();
    $("#why-ilyo").click(function(event){
        event.preventDefault();
        $("#why").slideToggle("slow");
    })
    
    $("#menu").click(function(event){
        event.preventDefault();
        $("nav").slidetoggle('slow')
    });
});
