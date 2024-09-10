$(function(){
	gsap.registerPlugin(ScrollTrigger);

	$(window).on("scroll mousemove", function(e){
		const x = e.pageX;
		const y = e.pageY;

		$(".cursor").css("top", y).css("left", x);
	});

	$(".cursor-active").hover(function(){
		$(".cursor").addClass("active");
	}, function(){
		$(".cursor").removeClass("active");
	});

	//visual
	let headerDown = false;
	$("#visual .text-box").clone().appendTo("#visual .hidden");
	ScrollTrigger.matchMedia({
		"(min-width: 1000px)": function() {
			//데스크탑
			$(window).on("load scroll", function(){
				const ws = $(window).scrollTop();
				const concerrt = $("#concert").offset().top;
				const header = $("#header").outerHeight(true);
				const offset = 3000 - ((3000 / 100) * header);

				if(ws >= offset - header && ws < concerrt){
					$("#header").addClass("scroll");
				}else{
					$("#header").removeClass("scroll");
				}

				if(ws <= concerrt){
					$("#header").removeClass("bg").removeClass("wide");
				}else{
					$("#header").addClass("bg").addClass("wide");
				}
			});

			const visual = $("#visual");
			const startClip = `inset(44% 34% 0% 34% round 500px 500px 0px 0px)`;
			const endClip = `inset(-50% -50% 0% -50% round 500px 500px 0px 0px)`;

			let timeline_v = gsap.timeline({
				scrollTrigger: {
					trigger: visual,
					start: "top top",
					end: "+=3000 bottom",
					pin: true,
					scrub: 3,
					//markers: true,
					onLeave: function(){
						$("html, body").on("mousewheel DOMMouseScroll", function(e){
							const delta = e.originalEvent.deltaY;
							const detail = e.originalEvent.detail;
							
							if(delta < 0 || detail < 0){
								//아래로 스크롤
								$("#header").removeClass("down");
							}else{ 
								//위로 스크롤
								$("#header").addClass("down");
							}
						});
					},
					onEnterBack: function(){
						$("html, body").on("mousewheel DOMMouseScroll", function(e){
							$("#header").removeClass("down");
						});
					},
				},
				ease: Power0.easeNone,
			})
			
			timeline_v.fromTo("#visual .visual-box",
				{ clipPath: startClip },
				{ clipPath: endClip }
			, "a")
			.fromTo("#visual .visual-box .cover",
				{ clipPath: startClip },
				{ clipPath: endClip }
			, "a")
			.fromTo("#visual .text",
				{ top: 0, yPercent: 0, }, 
				{ top: `calc(100% - 125px)`, yPercent: -100, }
			, "a")
			.fromTo("#visual .text > div",
				{ left: 0, xPercent: 0, }, 
				{ left: `-50%`, xPercent: 50	}
			, "a")
			.fromTo("#visual .circle", 
				{ opacity: 0 },
				{ opacity: 1 }
			, "b");	

		},
		"(max-width: 999px)": function() {
			//모바일
			$(window).on("load scroll", function(){
				const ws = $(window).scrollTop();
				const concerrt = $("#concert").offset().top;
				const header = $("#header").outerHeight(true);

				if(ws < concerrt - header){
					$("#header").addClass("scroll").removeClass("wide");
					$("#header").removeClass("bg");
				}else{
					$("#header").removeClass("scroll").addClass("wide");
					$("#header").addClass("bg");
				}
			});
		}
	});

	//visual visual-wrap
	$(".visual-wrap").on("init", function(){
			$("#visual .text-box ul").each(function(i){
				const li = $(this).find("li");
				li.eq(0).addClass("animated");
			});
		}).slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		fade: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
	}).on("beforeChange", function(e, slick, current, next){
		$("#visual .text-box ul li").removeClass("animated");
	}).on("afterChange", function(e, slick, current, next){
		$("#visual .text-box ul").each(function(i){
			const li = $(this).find("li");
			li.eq(current).addClass("animated");
		});
	});

	//Concerrt day-wrap
	$("#concert .day-wrap").on("init", function(){
		$("#concert .day").each(function(i){
			const ul = $(this).find("ul");
			ul.find("li").each(function(k){
				$(this).css("transition-delay", k * 100 + "ms");
			})
		});
	}).slick({
		variableWidth: true,
		dots: false,
		arrows: false,
		swipeToSlide: true,
		infinite: false,
		touchThreshold: 50,
	}).on("beforeChange", function(e, slick, current, next){
		$("#concert .day ul").fadeOut().removeClass("on");
	});

	$("#concert .day").on("click", function(){
		$(this).find("ul").fadeToggle();
		$(this).find("ul").toggleClass("on");
	});

	//Concerrt poster-wrap
	$("#concert .poster-wrap").slick({
		slidesToShow: 4,
		swipeToSlide: true,
		dots: false,
		arrows: false,
		touchThreshold: 100,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
				}
			},{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	//academy
	const academy = $("#academy");

	ScrollTrigger.matchMedia({
		"(min-width: 1000px)": function() {
			//데스크탑
			let timeline_a = gsap.timeline({
				scrollTrigger: {
					trigger: academy,
					start: "top top",
					end: "+=5000 bottom",
					pin: true,
					scrub: 3,
					//markers: true,
					onLeave: function(){
						//alert("true");

					}
				}
			})

			timeline_a.fromTo("#academy .odd",
				{ bottom: 140, yPercent: 100 },
				{ bottom: 0, yPercent: 0 }
			, "a")
			.fromTo("#academy .even",
				{ top: 0 , yPercent: -100 },
				{ top: 140, yPercent: 0 }
			, "a")
			.fromTo("#academy ul", 
				{ opacity: 1 },
				{ opacity: 0.25 }
			, "b")
			/* .fromTo("#academy .link", 
				{ opacity: 0 },
				{ opacity: 1,
					onStart: function(){
						$("#academy .link").addClass("on");
					},
					onReverseComplete: function(){
						$("#academy .link").removeClass("on");
					}
				}
			, "b"); */
		},"(max-width: 999px)": function() {
			//모바일
			let timeline_a = gsap.timeline({
				scrollTrigger: {
					trigger: academy,
					start: "top top",
					end: "+=3000 bottom",
					pin: true,
					scrub: 3,
					//markers: true,
					onLeave: function(){
						//alert("true");

					}
				}
			})

			timeline_a.fromTo("#academy .odd",
				{ bottom: 140, yPercent: 100 },
				{ bottom: 0, yPercent: 0 }
			, "a")
			.fromTo("#academy .even",
				{ top: 0 , yPercent: -100 },
				{ top: 140, yPercent: 0 }
			, "a")
			.fromTo("#academy ul", 
				{ opacity: 1 },
				{ opacity: 0.25 }
			, "b")
			/* .fromTo("#academy .link", 
				{ opacity: 0 },
				{ opacity: 1,
					onStart: function(){
						$("#academy .link").addClass("on");
					},
					onReverseComplete: function(){
						$("#academy .link").removeClass("on");
					}
				}
			, "b");  */
		}
	})
	

	//logo slide
	$("#logo .origin").clone().appendTo("#logo");
	$("#logo .origin").last().removeClass("origin").addClass("clone");
	$("#logo .origin").clone().appendTo("#logo");
	$("#logo .clone").clone().appendTo("#logo");
});