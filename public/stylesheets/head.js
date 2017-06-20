$(function () {
  $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 10);

    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() < 10) {
        $('#section02').fadeIn();
    } else {
        $('#section02').fadeOut();
    }
});


$("#press").click(function(){
    $("html, body").animate({ scrollTop: 1000 }, 600);
     return false;
});

var message = "";

$(".submit").on("click", function() {
    message = $("#horizontal-form").serialize();
    $.ajax({
        url: "http://formspree.io/danielnguyen44@gmail.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, I\'ll be in touch promptly.');
    return false;
});

/*

javascript version for preloader transition

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('contents', true);
    show('loading', false);
});
*/

// jquery version for preloader
var test = document.getElementById("spinner-wrapper");


    $(window).on('load', function () {
        $('#spinner-wrapper').fadeOut(1000);
    });
