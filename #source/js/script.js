	//<Fixed header>===============================================================================
	let header = $(".header");
	let intro = $("#main-screen");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function () {
		introH = intro.innerHeight() - 70;
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
	//</Fixed header>==============================================================================

	//<Smooth scroll>==============================================================================
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let $this = $(this);
		let blockId = $this.data("scroll");
		let blockOffset = $(blockId).offset().top;

		$(".menu__link").removeClass("active");
		$this.addClass("active");

		$("html, body").animate(
			{
				scrollTop: blockOffset - 69,
			},
			500
		);
	});
	//</Smooth scroll>=============================================================================

	//<Icon menu button (burger menu)>=============================================================
	$(".icon-menu").click(function (event) {
		$(this).toggleClass("active");
		$(".menu__list").toggleClass("active");
		$("body").toggleClass("lock");
	});

	$("a").click(function (event) {
		$(".icon-menu, .menu__list, .menu__link").removeClass("active");
		$("body").removeClass("lock");
	});
	//</Icon menu button (burger menu)>============================================================