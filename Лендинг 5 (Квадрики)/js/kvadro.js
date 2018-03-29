var home = document.getElementById('asd');
var b = document.getElementById('bar');



function fun1() {
	home.style.display = 'block';
}


var anime = setinterval(more_wd, 10);
function more_wd() {
	var wd = 0;
	if(wd >= 19){
		clearinterval(anime);
	}else{
		wd += 1;
		home.style.width = wd + '%';
	}
}


b.addEventListener( 'click', fun1() , true);
b.addEventListener( 'click', more_wd(), true);