$(document).ready(function() {
    var interests = ['CODE', 'DATA', 'PIXEL'];
    setInterval(function(){
        $('#my-interest').text(interests[Math.floor(Math.random()*interests.length)])
    }, 500);

    var hobbies = ['COMICS', 'ILLUSTRATION', 'STREE ART', 'ANIMATION', 'COOKING', 'HIKING', 'SWIMMING'];
    setInterval(function(){
        $('#my-hobby').text(hobbies[Math.floor(Math.random()*hobbies.length)])
    }, 500);

    /* smooth scrolling for scroll to top */
    $('.scroll-top').click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0}, 'fast');
    });
    /* smooth scrolling for nav sections */
    $('#nav .navbar-nav li>a').click(function(e){
      e.preventDefault();
      var link = $(this).attr('href');
      var posi = $(link).offset().top-40;
      $('body,html').animate({scrollTop:posi}, 700);
    });
    /* affix the navbar after scroll below header */
    $('#nav').affix({
        offset: {
          top: $('header').height()-$('#nav').height()
        }
    }); 
  });
















