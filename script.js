$(function() {

	// ハンバーガーメニュー開閉
	$('.hamburger').click(function() {
		$('.ham-menu').toggleClass('open');
		$(this).toggleClass('active');
	});

	// scrollイベントは1回にまとめる
	$(window).on('scroll', function() {

		const newsTop = $('#NEWS').offset().top;
		const aboutTop = $('#ABOUT').offset().top;
		const scroll = $(window).scrollTop();
		const windowHeight = $(window).height();

		// NEWSに入ったら黒、上に戻ったら白
		if (scroll + windowHeight / 2 >= newsTop) {
			$('.hamburger').addClass('black');
		} else {
			$('.hamburger').removeClass('black');
		}

		// ABOUTを境にナビ切り替え
		if (scroll + windowHeight / 2 >= aboutTop) {
			$('body').addClass('show-hamburger');
		} else {
			$('body').removeClass('show-hamburger');
		}

	});

});
