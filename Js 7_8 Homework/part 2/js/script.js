$(document).ready(function(){
    function showHint() {
        $(this).parent().find("em").stop(true, true).animate({opacity: "show"}, "slow");
        var hoverText = $(this).attr("title");
        $(this).parent().find("em").text(hoverText);
        $(this).removeAttr("title");
    };

    $(".line").append("<em></em>");
    $("input").hover(showHint, function() {
        $(this).parent().find("em").stop(true, true).animate({opacity: "hide"}, "slow");
    });

    $("button").click(function() {
    	$("input").each(showHint);
    });
});
