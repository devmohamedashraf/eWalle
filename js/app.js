$('.open-menu').click(function (e) { 
    e.preventDefault();
    $('.menu').addClass('open');
    $('.wrapper').addClass('hide');
    $('.ewalle-mobile').addClass('open');
});

$('.close-menu').click(function (e) { 
    e.preventDefault();
    $('.menu').removeClass('open');
    $('.wrapper').removeClass('hide');
    $('.ewalle-mobile').removeClass('open');
});

(localStorage.getItem('mode')) === 'darkmode' ? document.querySelector('body').classList.add('night') : document.querySelector('body').classList.remove('night')

function darkMode(){
    localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("body").classList.add("night"):document.querySelector("body").classList.remove("night")
};