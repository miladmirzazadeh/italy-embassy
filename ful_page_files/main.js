/**
  * removePreloader
  * init_header
  * ResponsiveMenu
  * fixHeight
  * consIsotope
  * ajaxContactForm
  * gmap3
  * owlcarousel
  * goTop
*/

;(function($) {

	'use strict'
/*
	var removePreloader = function() {
		setTimeout(function() {
			$('.preloader').css({ 'opacity': 0, 'visibility':'hidden' });
		}, 1000);
	};
*/

	var init_header = function() {
		// var largeScreen = matchMedia('only screen and (min-width: 768px)').matches;
		// if( largeScreen ) {
			if( $().sticky ) {
				$('header.header-sticky').sticky();
			}
		// }
	};

	var init_header04 = function() {
		if( $('.header04').length ){
			var largeScreen = matchMedia('only screen and (min-width: 768px)').matches;
			if( largeScreen ) {
				$('.header04 #mainnav > ul > li, .header04 #mainnav > ul > div').width($('#mainnav').width()/($('.header04 #mainnav > ul > li, .header04 #mainnav > ul > div').length));
			} else {
				$('.header04 #mainnav > ul > li, .header04 #mainnav > ul > div').width('auto');
			}
		}
	};

	var ResponsiveMenu =  {
		menuType: 'desktop',
		initial: function(winWidth) {
			ResponsiveMenu.menuWidthDetect(winWidth);
			ResponsiveMenu.menuBtnClick();
			ResponsiveMenu.parentMenuClick();
			ResponsiveMenu.MenuLiClick();			
		},
		menuWidthDetect: function(winWidth) {
			var currMenuType = 'desktop';
			if (matchMedia('only screen and (max-width: 767px)').matches) {
				currMenuType = 'mobile';
			}
			if ( currMenuType !== ResponsiveMenu.menuType ) {
				ResponsiveMenu.menuType = currMenuType;
				if ( currMenuType === 'mobile' ) {
					$('.mainnav li.mega a,.mainnav div.mega a').after($('.mega-wrap ul.sub-menu'));
					var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
					$('#header').find('.header-wrap').after($mobileMenu);
					var hasChildMenu = $('#mainnav-mobi').find('li:has(ul),div:has(ul)');
					hasChildMenu.children('ul').hide();
					hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
					$('.btn-menu').removeClass('active');
				} else {
					$('.mega-wrap .content.menu h3').after($('.mainnav li.mega ul.sub-menu,.mainnav div.mega ul.sub-menu').show());
					var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
					$desktopMenu.find('.sub-menu').removeAttr('style');
					$('#header').find('.btn-menu').after($desktopMenu);
					$('.btn-submenu').remove();
				}
			} // clone and insert menu
		},
		menuBtnClick: function() {
			$('.btn-menu').on('click', function() {
				$('#mainnav-mobi').slideToggle(300);
				$(this).toggleClass('active');
			});
		}, // click on moblie button
		parentMenuClick: function() {
			$(document).on('click', '#mainnav-mobi li .btn-submenu,#mainnav-mobi div .btn-submenu', function(e) {
				if ( $(this).has('ul') ) {
					e.stopImmediatePropagation();
					$(this).next('ul').slideToggle(300);
					$(this).toggleClass('active');
				}
			});
		}, // click on sub-menu button
		
		MenuLiClick: function() {
			$(document).on('click', '#mainnav-mobi ul li,#mainnav-mobi ul div', function(e) {
	
				if ( $(this).has('ul') ) {
					e.stopImmediatePropagation();
					$(this).find('ul').slideToggle(300);
					$(this).find('.btn-submenu').toggleClass('active');
				}
	
			});
		}, // click on sub-menu button		
		
	};
	var setupMegaMenu = function() {
		$('#mainnav > ul > li.mega a,#mainnav > ul > div.mega a').hover( function() {
			$('.mega-wrap').fadeIn('300');
		},function(){
			setTimeout(function(){ 
				if ($('.mega-wrap:hover').length == 0) {
				    $('.mega-wrap').fadeOut('300');
				} 
			}, 50);
		});
		$('.mega-wrap').mouseleave(function(event) {
			event.preventDefault();
		},function(event) {
			$('.mega-wrap').fadeOut('300');
		});
	};
	var leftMenu = function() {
		if( $('.left-side-menu').length ) {
			$('#header').after( $('nav.mainnav') );
			$('.btn-left-menu').on('click', function(event) {
				$('nav.mainnav').addClass('active');
				$(this).fadeOut('fast');
			});
			$('.btn-close-menu').on('click', function(event) {
				$('nav.mainnav').removeClass('active');
				$('.btn-left-menu').fadeIn('fast');
			});
		}
	};
	
	
	
	var extendfooter = function() {
	$('.footer .bottom_intro').css('margin-top',10);
    var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
	var docheightfooter=$(document).height();
    var differencefooter=$(document).height()-_docHeight;
    if (differencefooter>5)
   		{
  			$('.footer .bottom_intro').css('margin-top',differencefooter+10);
  		} 
	};
		
	

	var textScroll = function() {
        if ( $('.main-slider .text-content').hasClass('scroll') ) {
           var current = 1; 
           var height = $('.text-scroll').height(); 
           var numberDivs = $('.text-scroll').children().length; 
           var first = $('.text-scroll h1:nth-child(1)');

           setInterval(function() {
              var number = current * -height;
              first.css('margin-top', number + 'px');
              if ( current === numberDivs ) {
                first.css('margin-top', '0px');
                current = 1;
              } else current++;
           }, 2500);
        } // end if
     };

	var fixHeight = function(img,text) {
		if ( matchMedia('only screen and (min-width: 768px)').matches ) {
			/*
			$('body').imagesLoaded( function() {
				if ( $(img).length && $(text).length ) {
					$(img).height($(text).outerHeight());
				}
			});
			 */
		}
	};

	var consIsotope = function(elm) {
		if ( $().isotope ) {
			var $container = $(elm);
			$container.imagesLoaded(function(){
				$container.isotope({
					itemSelector: '.item',
					transitionDuration: '1s'
				}); // end isotope
			});
			$('.filter li').on('click',function() {
				$('.filter li').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).find("a").attr('data-filter');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	};

	var popupGallery = function() {
		if( $().magnificPopup ) {
			$('.popup-gallery').magnificPopup({
				delegate: 'a.popup',
				type: 'image',
				removalDelay: 600,
				tLoading: 'Loading image #%curr%...',
				mainClass: 'my-mfp-slide-bottom',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title');
					}
				}
			});
		}
	};

	var ajaxContactForm = function(formId) {
		$(formId).each(function() {
			$(this).validate({
				submitHandler: function( form ) {
					var $form = $(form),
						str = $form.serialize(),
						loading = $('<div />', { 'class': 'loading' });

					$.ajax({
						type: "POST",
						url:  $form.attr('action'),
						data: str,
						beforeSend: function () {
							$form.find('.send-wrap').append(loading);
						},
						success: function( msg ) {
							var result, alertClass;

							if ( msg == 'Success' ) {
								result = 'Your message has been sent. Thank you!';
								alertClass = 'msg-success';
							} else {
								result = 'Error sending email.';
								alertClass = 'msg-error';
							}

							$form.prepend(
								$('<div />', {
									'class': 'kul-alert col-md-12 ' + alertClass,
									'text' : result
								}).append(
									$('<a class="close" href="#"><i class="fa fa-close"></i></a>')
								)
							);
						},
						complete: function (xhr, status, error_thrown) {
							$form.find('.loading').remove();
						}
					});
				}
			});
		});
	};

	var googleMap = function() {
        if ( $().gmap3 ) {
        	var _draggable = true;
        	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				_draggable = false;
			}
            $("#gmap").gmap3({
                map:{
                    options:{
                        zoom: 14,
                        mapTypeId: 'consultant_style',
                        mapTypeControlOptions: {
                            mapTypeIds: ['consultant_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false,
                        draggable: _draggable
                    }
                },
                getlatlng:{
                    address:  "65A-B - Bach Dang - Tan Binh - TP HCM",
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                	icon: 'images/common/marker.png'
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "consultant_style",
                    options:{
                        name: "Consultant Map"
                    },
                },
            });
        }
    };

	var consCarousel = function(elm) {
		$(elm).each(function() {
			if ( $().owlCarousel ) {
				$(this).owlCarousel({
					items: $(this).data('items'),
					itemsDesktop: [1199,$(this).data('itemsdesktop')],
					itemsDesktopSmall:[979,$(this).data('itemsdesktopsmall')],
					itemsTablet: [768,$(this).data('itemstablet')],
					itemsMobile: [479,$(this).data('itemsmobile')],
					slideSpeed: $(this).data('slidespeed'),
					autoPlay: $(this).data('autoplay'),
					pagination: $(this).data('pagination'),
					responsive: $(this).data('responsive')
				});
			}
		});
	};

	var countTo = function(elmDetect){
		if ( $().waypoint && $(elmDetect).length ) {
			$(elmDetect).waypoint(function() {
				if ( $().countTo ) {
					$('.timer').countTo();
				}
			});
		}
	};

    var parallax = function() {
    	if($().parallax){
			$('.bg-parallax').parallax("50%", 0.5);
    	}
    };

 //	Back Top Top

  var offset = 150;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.totop').fadeIn(400);
    } else {
      $('.totop').fadeOut(400);
    }
  });

	var goTop = function() {
		$('.totop a').on('click', function() {
			$("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
			return false;
		});
	};
	
	// -- Back Top Top Finish	

	var closeAlert = function() {
		$(document).on('click', '.close', function(e) {
			$(this).closest('.kul-alert').remove();
			e.preventDefault();
		})
	}

	// Dom Ready
	$(function() {
		/* removePreloader(); */
		init_header();
		//init_header04();	
		ResponsiveMenu.initial($(window).width());
		setupMegaMenu();
		// leftMenu();
		$(window).resize(function() {

			extendfooter();
			ResponsiveMenu.menuWidthDetect($(this).width());
			init_header04();		
			fixHeight('.feature-box .image','.feature-box .text');
			fixHeight('.news-box02 .image','.news-box02 .text');
			if ( matchMedia('only screen and (min-width: 991px)').matches ) {
				fixHeight('.','.main-content');
				// leftMenu();
			}

		});
		$(window).on('load', function(event) {
			fixHeight('.feature-box .image','.feature-box .text');
			fixHeight('.news-box02 .image','.news-box02 .text');
		});

		getLanguageFlag();
		textScroll();
		consIsotope('.portfolio');
		consIsotope('.masonry main > div.content');
		popupGallery();
		ajaxContactForm('#requestForm');
		ajaxContactForm('#subscribeForm');
		ajaxContactForm('#contact-form');
		googleMap();
		countTo('.section-portfolio');
		countTo('.services-box02');
		parallax();
		goTop();
		closeAlert();	
		extendfooter();
		
	});

})(jQuery);