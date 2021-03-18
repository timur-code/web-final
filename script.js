function hideModal(){
    //$('#modal').animate({top:'55%'}).animate({top:'45%'}).delay(1500).animate({top:'110%'});
    //setTimeout(()=>showBody(), 3000);
    showBody();
}

function showBody(){
    $('#modal').hide();
    $('body').css({"height":"1000px","min-height":"1000px","display":"block"});
    $('.myNavbar, #homepage').fadeIn(1000);
    $('.myNavbar').css("display","flex");
    $('#homepage').css("display","grid")
}

function submitMessage(){
    $('#contactEmail').val('');
    $('#contactMessage').val('');
}

$(document).ready(function(){
    //$('#home-body').css({"min-height":"0px","height":"100vh","display":"flex","justify-content":"center","align-items":"center"});

    $('.myNav-link').mouseenter(function(){
        $(this).css("background-color", "rgb(66, 65, 65)");
    });
    
    $('.myNav-link').mouseleave(function(){
        $(this).css("background-color", "rgb(37, 36, 36)");
    });

    $('#nav-drop').click(function(){
        $('#nav-drop-menu').slideToggle(200);
    });

    $(document).on('click', function (e) { //Hides dropdown menu if click is detected outside of div 
        var el = '#nav-drop';
        if ($(e.target).closest(el).length) return;
        $('#nav-drop-menu').slideUp(200);
    });

    $('.myDrop-link').mouseenter(function(){
        $(this).css("background-color", "rgb(37, 36, 36)")
    });

    $('.myDrop-link').mouseleave(function(){
        $(this).css("background-color", "rgb(63, 63, 63)")
    });

    /** Zoom on review cards */
    $('.card a').mouseenter(function(){
        $(this).siblings('.card-img').css({"transform":"scale(1.1)",
        "-webkit-transform":"scale(1.1)",
        "-moz-transform":"scale(1.1)",
        "-o-transform":"scale(1.1)"});
    });

    $('.card a').mouseleave(function(){
        $(this).siblings('.card-img').css({"transform":"scale(1)",
        "-webkit-transform":"scale(1)",
        "-moz-transform":"scale(1)",
        "-o-transform":"scale(1)"});
    });

    /** Effects on news cards */
    $('.news a').mouseenter(function(){
        $(this).siblings("div").find(".news-heading").css("color","rgb(233, 124, 35)");
    });

    $('.news a').mouseleave(function(){
        $(this).siblings("div").find(".news-heading").css("color","black");
    });

    $('#articles .review-wrapper').hide();

    $('#news-tab').css("border-bottom","solid 5px #fbfbfb");

    /** Effect on tabs in articles */
    $('.article-tabs button').click(function(){
        if($(this).attr('id') + '' === 'news-tab'){
            $('#articles .news-wrapper').show();
            $('#articles .review-wrapper').hide();
        }
        else if($(this).attr('id') + '' === 'reviews-tab'){
            $('#articles .news-wrapper').hide();
            $('#articles .review-wrapper').show();
        }
        $(this).css("border-bottom","solid 5px #fbfbfb");
        $(this).siblings().css("border-bottom","solid 1px darkgray");
    })
});