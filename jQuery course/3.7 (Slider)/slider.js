(function(){

	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
		img = sliderUL.find('img'),
		imgWidth = img[0].width,
		imgLen = img.length,
		current = 1,
		totalwidth = imgLen * imgWidth;

		$('div#slider-nav').show().find('button').on('click', function(){
			var direction = $(this).data('dir'),
				loc = imgWidth;

			// (direction === 'next') ? current += 1 : current -= 1;

			if(direction === 'next'){
				current += 1;
			}
			else{
				current -= 1;
			}

			if(current === 0){
				current = imgLen;
				loc = totalwidth - imgWidth;
				direction = 'next';
			}
			else if(current -1 === imgLen){
				current = 1;
				loc = 0;
			}

			transition(sliderUL, loc, direction);
		});

		function transition( container, loc, direction ){
			var unit;

			if(direction && loc !== 0){
				unit = (direction === 'next') ? '-=' : '+=';
			}

			container.animate({
				'margin-left': unit ? (unit + loc) : loc
			});
		}
})();