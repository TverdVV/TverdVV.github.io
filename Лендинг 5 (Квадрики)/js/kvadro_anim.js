var asd = document.getElementById('asd');
var ma = document.getElementsByClassName('main-element');
var font = document.getElementsByClassName('font');
var bar = document.getElementById('bar');
var remove = document.getElementById('remove');


// asd.remove(child);

function f1() {

	asd.style.width = '0';
	remove.style.opacity = '0';

    asd.style.animationName = 'anim-menu-l';
    remove.style.animationName = 'o1';
    
    for (var i = 0; i < ma.length; i++) {
    	ma[i].style.width = '0'
    	ma[i].style.animationName = 'm1';
    }

    for (var i = 0; i < font.length; i++) {
    	font[i].style.fontSize = '0';
    	font[i].style.animationName = 'f1';
    }

  }


function f2() {

	var wd720 = window.matchMedia("(max-width:724px)");
	var wd668 = window.matchMedia("(max-width:668px)");
	var wd588 = window.matchMedia("(max-width:588px)");
	var wd499 = window.matchMedia("(max-width:499px)");
	if (wd499.matches) {
		asd.style.width = '100%';
	}else if(wd720.matches){
		asd.style.width = '40%'
	}else if(wd668.matches){
		asd.style.width = '40%'
	}else if(wd588.matches){
		asd.style.width = '40%'
	}else{
		asd.style.width = '19%';
	}


	

	
	remove.style.opacity = '1';

    asd.style.animationName = 'anim-menu-r';
    remove.style.animationName = 'o2';
    
    for (var i = 0; i < ma.length; i++) {
    	ma[i].style.width = '90%';
    	ma[i].style.animationName = 'm2';
    }

    for (var i = 0; i < font.length; i++) {
    	font[i].style.fontSize = '1.5em';
    	font[i].style.animationName = 'f2';
    }

  }


  
 //  if (matchMedia) {
	// var screen = 
	// screen.addListener(changes);
	// changes(screen);
 //  }
 //  function changes(screen) {
 //  	delete f1;
 //  	delete f2;
  	
 //  	bar.onclick = function {
 //  		asd.style.width = '0';
	// 	remove.style.opacity = '0';

 //    	asd.style.animationName = 'anim-menu-l_720';
 //    	remove.style.animationName = 'o1';
    
 //    	for (var i = 0; i < ma.length; i++) {
 //    	ma[i].style.width = '0'
 //    	ma[i].style.animationName = 'm1';
 //    	}

 //    	for (var i = 0; i < font.length; i++) {
 //    		font[i].style.fontSize = '0';
 //    		font[i].style.animationName = 'f1';
 //    	}

 //  }
 //  	}


 //  	remove.onclick = function {
 //  		asd.style.width = '30%';
	// 	remove.style.opacity = '1';

 //    	asd.style.animationName = 'anim-menu-r_720';
 //   	 	remove.style.animationName = 'o2';
    
 //    	for (var i = 0; i < ma.length; i++) {
 //    		ma[i].style.width = '90%';
 //    	ma[i].style.animationName = 'm2';
 //    	}

 //    	for (var i = 0; i < font.length; i++) {
 //    		font[i].style.fontSize = '1.5em';
 //    		font[i].style.animationName = 'f2';
 //    	}
 //  	}


 //  }