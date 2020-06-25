	//<Fixed header>===============================================================================
	let header = $("#header");
	let mainScreen = $("#main-screen");
	let mainScreenH = mainScreen.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, mainScreenH);

	$(window).on("scroll resize", function () {
		mainScreenH = mainScreen.innerHeight() - 70;
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, mainScreenH);
	});

	function checkScroll(scrollPos, mainScreenH) {
		if (scrollPos > mainScreenH) {
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

		$("html, body").animate(
			{
				scrollTop: blockOffset - 69,
			},
			500
		);
	});
	//</Smooth scroll>=============================================================================

	//<Icon menu button (burger menu)>=============================================================
	$("#js-icon-menu").click(function (event) {
		$(this).toggleClass("active");
		$("#js-menu__list").toggleClass("active");
		$("body").toggleClass("lock");
	});

	$("a").click(function (event) {
		$("#js-icon-menu, #js-menu__list").removeClass("active");
		$("body").removeClass("lock");
	});
	//</Icon menu button (burger menu)>============================================================