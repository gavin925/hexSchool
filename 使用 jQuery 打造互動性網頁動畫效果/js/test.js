$(document).ready(function () {
    $("#test").click(function (e) { 
        e.preventDefault();
        $("h1").slideUp(10000);
        $("p").fadeOut(10000);  
    });
});