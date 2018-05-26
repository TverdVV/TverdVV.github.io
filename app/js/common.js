$(function() {
	$('a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	        && location.hostname == this.hostname) {
	            var $target = $(this.hash);
	            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	       	if ($target.length) {
	            var targetOffset = $target.offset().top;
	            $('html,body').animate({scrollTop: targetOffset}, 1000);//скорость прокрутки
	            return false;
	        }
	    }
	});
	$('.katishka').click(function() {
		$('.hide_cont').toggleClass("hide_cont-active");
	});
	$('#close').click(function() {
		$('.hide_cont').removeClass("hide_cont-active");
	});
	$('#phone').on('click', function() {
		$('.ph_number').addClass("ph_number-active");
	});
	$('.ph_number').on('click', function() {
		$('.ph_number').removeClass("ph_number-active");
	});
});
window.clearIntervalID = setInterval(timer, 1000);
function timer() {
	
	var hours = document.getElementById('hours').innerHTML,
		minutes = document.getElementById('minutes').innerHTML,
		seconds = document.getElementById('seconds').innerHTML,
		end = false;
		if (seconds > 0) {
			seconds--;
			if (seconds < 10) {seconds = '0' + seconds;};

			
		}else{
			
			seconds = 60;
			

			if (minutes > 0) {
				minutes--;
				if (minutes < 10) {minutes = '0' + minutes;};

				
			}else{
				
				minutes = 60;
				

				if (hours > 0) {
					hours--;
					if (hours < 10) {hours = '0' + hours;};

					
				}else{
					
					end = true;
				}
			}
		}
		if (end) {
			clearInterval(intervalID);
			alert('Таймер сработал!!! УРА!');
		}else{
			
			document.getElementById('hours').innerHTML = hours;
        	document.getElementById('minutes').innerHTML = minutes;
        	document.getElementById('seconds').innerHTML = seconds;
		}

};
window.clearIntervaуID = setInterval(timer1, 1000);
function timer1() {
	var hours1 = document.getElementById('hours1').innerHTML,
		minutes1 = document.getElementById('minutes1').innerHTML,
		seconds1 = document.getElementById('seconds1').innerHTML,
		end1 = false;
		if (seconds1 > 0) {
			seconds1--;
			if (seconds1 < 10) {seconds1 = '0' + seconds1;};

			
		}else{
			
			seconds1 = 60;
			

			if (minutes1 > 0) {
				minutes1--;
				if (minutes1 < 10) {minutes1 = '0' + minutes1;};

				
			}else{
				
				minutes1 = 60;
				

				if (hours1 > 0) {
					hours1--;
					if (hours1 < 10) {hours1 = '0' + hours1;};

					
				}else{
					
					end1 = true;
				}
			}
		}
		if (end1) {
			clearInterval(intervaуID);
			alert('Таймер сработал!!! УРА!');
		}else{
			document.getElementById('hours1').innerHTML = hours1;
        	document.getElementById('minutes1').innerHTML = minutes1;
        	document.getElementById('seconds1').innerHTML = seconds1;
		}

};