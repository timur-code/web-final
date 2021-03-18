function register(){
    var email = $('#inputEmail').val() + '';
    var password = $('#inputPassword').val() + '';
    var repeatPassword = $('#inputPassword2').val() + '';
    var robotCheck = document.getElementById('gridCheck');

    if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) &&
    password === repeatPassword && robotCheck.checked === true && password.length >= 8)
    {
        $('.modal-body p').text('You have been registered');
        $('.modal').show();
    }
    else{
        $('.modal-body p').text('Failed');
        $('.modal').show();
    }
    $('#inputEmail').val('')
    $('#inputPassword').val('');
    $('#inputPassword2').val('');
    $('#gridCheck').prop('checked',false);
}

function log(){
    var email = $('#inputEmail3').val() + '';
    var password = $('#inputPassword3').val() + '';
    var robotCheck = document.getElementById('gridCheck3');

    if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) &&
    robotCheck.checked === true && password.length >= 8)
    {
        $('.modal-body p').text('You have loged in');
        $('.modal').show();
    }
    else{
        $('.modal-body p').text('Failed');
        $('.modal').show();
    }
    $('#inputEmail3').val('')
    $('#inputPassword3').val('');
    $('#gridCheck3').prop('checked',false);
}

$(document).ready(function(){
    $('#xModal, #closeMod').click(function(){
        $('.modal').hide();
    })

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
})