$(document).ready(function() {
    var interests = ['CODE', 'DATA', 'PIXEL'];
    setInterval(function(){
        $('#my-interest').text(interests[Math.floor(Math.random()*interests.length)])
    }, 500);

    var hobbies = ['COMICS', 'ILLUSTRATION', 'STREE ART', 'COOKING', 'HIKING', 'ANIMATION'];
    setInterval(function(){
        $('#my-hobby').text(hobbies[Math.floor(Math.random()*interests.length)])
    }, 500);

    // /* smooth scrolling for scroll to top */
    // $('.scroll-top').click(function(e){
    //   e.preventDefault();
    //   $('html,body').animate({scrollTop:0}, 'fast');
    // });
    // /* smooth scrolling for nav sections */
    // $('#nav .navbar-nav li>a').click(function(e){
    //   e.preventDefault();
    //   var link = $(this).attr('href');
    //   var posi = $(link).offset().top;
    //   $('body,html').animate({scrollTop:posi}, 700);
    // });
    /* affix the navbar after scroll below header */
    $('#nav').affix({
          offset: {
            top: $('header').height()-$('#nav').height()
          }
    }); 

    // /* highlight the top nav as scrolling occurs */
    // $('body').scrollspy({ target: '#nav' });
    // 
    
      var nav_href, home_section_offset, main_nav_offset;
      var main_nav_height = $('#nav').height();
      var window_width = $(window).width();
      $('.nav-item a').click(function(e){
        e.preventDefault();
        nav_href = $(this).attr('href');
        home_section_offset = $(nav_href).offset().top;
        main_nav_offset = $('#nav').position().top;
        if(window_width>767){
          if(main_nav_offset==0){
            $('html,body').animate({scrollTop:home_section_offset-main_nav_height}, 'slow');
          }else{
            $('html,body').animate({scrollTop:home_section_offset-main_nav_height-90}, 'slow');
          }
        }else{
          var dropdown_height = $('.navbar-header').height();
          if(main_nav_offset==0){
            $('html,body').animate({scrollTop:home_section_offset-main_nav_height-dropdown_height}, 'slow');
          }else{
            $('html,body').animate({scrollTop:home_section_offset-main_nav_height-dropdown_height-220}, 'slow');
          }
        }
      });
  });
















