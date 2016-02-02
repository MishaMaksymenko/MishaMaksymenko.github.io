$(document).ready(function(){
	$(function() {
	$('.jcarousel')
	.on('jcarousel:createend', function() {
       	$(this).jcarousel('scroll', 1, false);
	})
	.jcarousel({
        wrap: 'circular'
		})
		.jcarouselAutoscroll({
	    interval: 6000,
	    target: '+=1',
	    autostart: true
  	});
    
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
    	$(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
    	$(this).removeClass('active');
    })
    .jcarouselPagination({
    	item: function(page) {
        return '<a href="#' + page + '" class="jc-pagination-link">' + page + '</a>';
    	}
    });
	});


    // Selectbox
    $(function () {
        $("#country_id").selectbox();
    });

    // CheckBox
    $(".CheckBox").mousedown(
    /* при клике на чекбоксе меняем его вид и значение */
    function() {
        var niceCheck = $(this).find(".niceCheckBox");
        changeCheck($(niceCheck));
        console.log($(".niceCheckBox"));
    });
    $(".niceCheckBox").each(
    /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
    function() {
        changeCheckStart($(this));
    });
           
    function changeCheck(el)
    /* 
        функция смены вида и значения чекбокса
        el - span контейнер дял обычного чекбокса
        input - чекбокс
    */
    {
         var el = el,
              input = el.find("input").eq(0);
        if(!input.attr("disabled")) {
            
         if(!input.attr("checked")) {
            el.css("background","url(img/checkbox_checked_Copy.png)");    
            input.attr("checked", true)
        } else {
            el.css("background","url(img/checkbox_unchecked_Copy.png)");    
            input.attr("checked", false)
        }
    }
         return true;
    }
     
    function changeCheckStart(el)
    /* 
        если установлен атрибут checked, меняем вид чекбокса
    */
    {
    var el = el,
            input = el.find("input").eq(0);
          if(input.attr("checked")) {
            el.css("background","url(img/checkbox_checked_Copy.png)");    
            }
            if (input.attr("disabled")) {
            el.css("background","url(img/checkbox_disabled_Copy.png)");    
            }

         return true;
    }

    // Dropdown menu
    $(".dropdown").hover(
    function () {
        $(this).find('ul:first').stop(true, true);
        $(this).find('ul:first').slideDown();
        $(this).find('ul:first').animate({
        backgroundColor:"rgb(168, 56, 41)",
        }, 500 );

        },
        function() {            
            $(this).find('ul:first').slideUp('fast'); 
        $(this).find('ul:first').animate({
        backgroundColor:"rgb(225,75,75)",
        }, 500 );
        }
    
    );
});