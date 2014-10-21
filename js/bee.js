$(document).ready(function() {
      /* smooth scrolling for scroll to top */
      $('.scroll-top').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0}, 'fast');
      });
      /* smooth scrolling for nav sections */
      $('#nav .navbar-nav li>a').click(function(e){
        e.preventDefault();
        var link = $(this).attr('href');
        var posi = $(link).offset().top;
        $('body,html').animate({scrollTop:posi}, 700);
      });
      /* affix the navbar after scroll below header */
      $('#nav').affix({
            offset: {
              top: $('header').height()-$('#nav').height()
            }
      }); 

      /* highlight the top nav as scrolling occurs */
      $('body').scrollspy({ target: '#nav' });

      /* copy loaded thumbnails into carousel */
      $('.panel .img-responsive').on('load', function() {}).each(function(i) {
        if(this.complete) {
        	var item = $('<div class="item"></div>');
          var itemDiv = $(this).parent('a');
          var title = $(this).parent('a').attr("title");
          
          item.attr("title",title);
        	$(itemDiv.html()).appendTo(item);
        	item.appendTo('#modalCarousel .carousel-inner'); 
          if (i==0){ // set first item active
           item.addClass('active');
          }
        }
      });

      /* activate the carousel */
      $('#modalCarousel').carousel({interval:false});

      /* change modal title when slide changes */
      $('#modalCarousel').on('slid.bs.carousel', function () {
        $('.modal-title').html($(this).find('.active').attr("title"));
      })

      /* when clicking a thumbnail */
      $('.panel-thumbnail>a').click(function(e){
        
          e.preventDefault();
          var idx = $(this).parents('.panel').parent().index();
        	var id = parseInt(idx);
        	
        	$('#myModal').modal('show'); // show the modal
          $('#modalCarousel').carousel(id); // slide carousel to selected
        	return false;
      });

      // isotope
      // if($('#team')){
      //   $('#team').isotope({
      //       itemSelector: '.item',
      //       masonry: {columnWidth: 50}
      //   }); 
      // }

      // magnific pop-up modal
     // if($('.zoom-gallery')){
     //    $('.zoom-gallery').magnificPopup({
     //        delegate: 'a',
     //        type: 'image',
     //        closeOnContentClick: false,
     //        closeBtnInside: false,
     //        mainClass: 'mfp-with-zoom mfp-img-mobile',
     //        image: {
     //          verticalFit: true,
     //          titleSrc: function(item) {
     //            return item.el.attr('title') + '<div class="people-description">'+ item.el.attr('description') +'</div>';
     //          }
     //        },
     //        gallery: {
     //          enabled: true
     //        },
     //        zoom: {
     //          enabled: true,
     //          duration: 300, // don't foget to change the duration also in CSS
     //          opener: function(element) {
     //            return element.find('img');
     //          }
     //        },
     //        callbacks: {
     //            open: function() {
     //              $('.mfp-img').wrap('<div class="col-xs-6 col-md-6" style="padding: 0px;"></div>');
     //              $('figcaption').wrap('<div class="col-xs-6 col-md-6"></div>');
     //              $('img.mfp-img').attr('style', 'padding: 0px;');
     //              $('.mfp-bottom-bar').attr('style', 'margin-top: 0px; position: relative; ');
     //              $('.mfp-content').attr('style', 'border: 1px solid #ccc; background-color: white;');
     //              $('.mfp-bg').attr('style', 'background-color: rgba(255, 255, 255, 0.98)');
     //              $('.mfp-title').attr('style', 'color: #333; font-size: 18px; margin-top: 15px;');
     //            }
     //        }
     //      });
     // } 


     // if($('.zoom-gallery-project')){
     //    $('img.mfp-img').attr('style', 'width: 100%;');
     //    $('.zoom-gallery-project').magnificPopup({
     //        delegate: 'a',
     //        type: 'image',
     //        closeOnContentClick: false,
     //        closeBtnInside: false,
     //        mainClass: 'mfp-with-zoom mfp-img-mobile',
     //        image: {
     //          verticalFit: true,
     //          titleSrc: function(item) {
     //            return item.el.attr('title') + '<div class="people-description">'+ item.el.attr('description') +'</div>';
     //          }
     //        },
     //        gallery: {
     //          enabled: true
     //        },
     //        zoom: {
     //          enabled: true,
     //          duration: 300, // don't foget to change the duration also in CSS
     //          opener: function(element) {
     //            return element.find('img');
     //          }
     //        },
     //        callbacks: {
     //            open: function() {
     //              $('.mfp-bottom-bar').attr('style', 'display: none;');
     //              $('.mfp-bg').attr('style', 'background-color: rgba(255, 255, 255, 0.98)');
     //            }
     //        }
     //      });
     // }       
     
  });
















