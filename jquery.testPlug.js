(function ($) {

	$.fn.testPlug = function (opt) { //fn - позволяет запускать нашу функцию, как нативную функцию jQuery

		var options = $.extend({ // extend - совмещает 2 объекта. принимает 2 параметра ( 1 - текущий ( дефолтный ) объект, 2 - то, с чем нужно совместить/добавить )
			speed: 300
			
		}, opt);
		
		

		var make = function () {

			$(this).click(function (e) {
				e.preventDefault();
				var id = $(this).attr('href');
				var offset = $(id).offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, options.speed);
			})


			var arr = [];
			arr[0] = $(window).scrollTop();
			$(window).scroll(function () {
				arr[1] = $(window).scrollTop();
				if (arr[0] < arr[1]) {
					$(options.menu).slideUp();
				} else if (arr[0] > arr[1]) {
					$(options.menu).slideDown();
				};
				arr.unshift($(window).scrollTop());
				arr.pop();
			});



		}






		return this.each(make) // this - возвращает то, к чему применяется функция testPlug ( см. index.html )
	}

} (jQuery))