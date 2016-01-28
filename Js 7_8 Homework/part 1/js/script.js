$(document).ready(function(){
    $("p:not(:first)").hide();
    $("a").click(function(){
     	event.preventDefault();
     	var box = this.hash + " p";
        $("p").hide();
        $(box).show();
        $("a").removeClass("active");
        $(this).addClass("active");
    });
});