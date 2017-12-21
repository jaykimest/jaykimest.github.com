$(document).ready(function() {
	$('iframe[src*="youtube"]').parent().fitVids();
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['Cover', 'Locations', 'Users', 'Transfering', 'Demographics', 'Files', 'Updates', 'Reviews', 'Downloads', 'Partners', 'Team', 'SAA'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: [],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#1A1A1A', '#fff'],
		paddingTop: '0',
		paddingBottom: '0',
		fixedElements: '',
		responsiveWidth: 1,
		responsiveHeight: 1,
		responsiveSlides: true,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			jQuery('.animo-path').animate({"opacity": 0});
			jQuery('.lineAnimo').removeClass('lineAnimo');
			jQuery('.horizon_graph li').removeClass('active');
			jQuery('.symbol').removeClass('white');
			jQuery('.language').removeClass('white');
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				animo('#section-1-shape-2',1500, 0);
				CSSanimo('.section-1-line-1',0);
				CSSanimo('.section-1-line-2',1200);
				jQuery('.symbol').addClass('white');
				jQuery('.language').addClass('white');
			} else if(index == 2){
				CSSanimo('.section-2 .line_1',0);
				CSSanimo('.section-2 .line_2',800);
				CSSanimo('.section-2 .line_3',1200);
				CSSanimo('.section-2 .line_4',1000);
				CSSanimo('.section-2 .line_5',2400);
			} else if(index == 3){
				animo('#graph01-animo1',800, 0);
				animo('#graph01-animo2',1500, 500);
				CSSanimo('.section-3 .line_1',0);
				CSSanimo('.section-3 .line_2',2600);
				CSSanimo('.section-3 .line_3',1200);
				CSSanimo('.section-3 .line_4',3000);
			} else if(index == 4){
				animo('#graph02-animo1',900, 0);
				animo('#graph02-animo2',200, 0);
				animo('#graph02-animo3',200, 250);
				animo('#graph02-animo4',200, 500);
				CSSanimo('.section-4 .line_1',0);
				CSSanimo('.section-4 .line_3',2000);
				CSSanimo('.section-4 .line_2',3000);
				CSSanimo('.section-4 .line_4',1200);
			} else if(index == 5){
				animo('#graph04-animo1',400, 400);
				animo('#graph04-animo2',400, 800);
				animo('#graph04-animo3',400, 1200);
				animo('#graph04-animo4',400, 1600);
				animo('#graph04-animo5',400, 2000);
				animo('#graph04-animo6',400, 2400);
			} else if(index == 6){
				LineAnimo('.horizon_graph_1 .value_1', 400);
				LineAnimo('.horizon_graph_1 .value_2', 800);
				LineAnimo('.horizon_graph_1 .value_3', 1200);
				LineAnimo('.horizon_graph_1 .value_4', 1600);
				LineAnimo('.horizon_graph_1 .value_5', 2000);
				LineAnimo('.section-6 .horizon_graph .value_1', 2400);
				LineAnimo('.section-6 .horizon_graph .value_2', 2600);
				LineAnimo('.section-6 .horizon_graph .value_3', 2800);
				LineAnimo('.section-6 .horizon_graph .value_4', 3000);
				LineAnimo('.section-6 .horizon_graph .value_5', 3200);
			} else if(index == 7){
				CSSanimo('.section-7 .line_1',0);
				CSSanimo('.section-7 .line_2',1600);
			} else if(index == 8){
				CSSanimo('.section-8 .line_1',0);
				CSSanimo('.section-8 .line_2',1600);
				CSSanimo('.section-8 .line_3',2500);
			} else if(index == 9){
				CSSanimo('.section-9 .line_1',0);
				CSSanimo('.section-9 .line_5',800);
				CSSanimo('.section-9 .line_2',1600);
				CSSanimo('.section-9 .line_3',2500);
				CSSanimo('.section-9 .line_4',2100);
			} else if(index == 10){
				animo('#graph05-animo1',800, 0);
				animo('#graph05-animo2',1500, 500);
			} else if(index == 11){
				CSSanimo('.section-11 .line_1',0);
				CSSanimo('.section-11 .line_2',1600);
				CSSanimo('.section-11 .line_3',800);
				CSSanimo('.section-11 .line_4',2400);
			} else if(index == 12){
				CSSanimo('.section-12 .line_1',0);
				CSSanimo('.section-12 .line_2',1600);
				CSSanimo('.section-12 .line_3',800);
			}
		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	function animo(element, time, delay){
		(function($){
				var pathes = $(element).find('path');
				pathes.each(function( i, path ) {
						$(path).animate({"opacity": 0});
						var total_length = path.getTotalLength();
						path.style.strokeDasharray = total_length + " " + total_length;
						path.style.strokeDashoffset = total_length;
						$(path).delay(delay).animate({
								"strokeDashoffset" : 0,
								"opacity": 1
						}, time);
				});
		})(jQuery);
	};

	function CSSanimo(element, delay){
		setTimeout(function(){
			jQuery(element).addClass('lineAnimo');
		}, delay);
	};

	function LineAnimo(element, delay){
		setTimeout(function(){
			jQuery(element).addClass('active');
		}, delay);
	};

	// var circle = document.getElementById('graph03-circle-2');
	// var radius = circle.getAttribute("r");
	// var circleLength = 2 * Math.PI * radius;
	// document.getElementById("length-container").innerHTML = circleLength;

});
