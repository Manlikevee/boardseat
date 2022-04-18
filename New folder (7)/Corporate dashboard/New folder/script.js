$(document).ready(function() {

    $('.signup').css('display', 'block');
    
    $PopUp = $('.signup');
    
    var hide = JSON.parse(localStorage.getItem('hide'));
    
    if (hide) {
        $PopUp.hide();
    } else {
        // initialize value in case it hasn't been set already
        localStorage.setItem('hide', false);
    }
    
    $('.closebtn').click(function() {
        $('.signup' ).hide();
        // toggle the boolean by negating its value
        var hide = JSON.parse(localStorage.getItem('hide'));
        localStorage.setItem('hide', !hide);
    });
    });