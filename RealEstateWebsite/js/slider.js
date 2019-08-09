var position = 0;
	    var container = document.getElementById("slide-block__container");
	    var  block = document.getElementsByClassName('slide-block__item');
	    var dots = document.getElementsByClassName('dot__item');
	    var getStyle = getComputedStyle(block[0]);
	    var getStyleSize = parseInt(getStyle.width);
	    var maxSizeAllBlock = parseInt(block.length - 1) * getStyleSize;   
	    var mas = [];
	    var acum = 0;

	     for (var i = 0; i < block.length ; i++) {
	     	mas[i] = (getStyleSize * acum);
	     	acum++;
	     }

        
	     function showSlide(s){
	    	 if (s == 1) {
               if (position == maxSizeAllBlock) {
               	position = 0;
               	container.style.right = position + "px";
               } else {
               	position += getStyleSize;
               	container.style.right = position + "px";
               }
                changeDots(position / getStyleSize);

	    	 }
	    	 if (s == -1) {
	    	 	if (position == 0) {
	    	 		position = maxSizeAllBlock;
	    	 		container.style.right = position + "px";
	    	 	} else {
	    	 		position += -getStyleSize;
	    	 		container.style.right = position + "px";
	    	 	}
	    	    changeDots(position / getStyleSize );
	    	 }

	     }
	     function changeDots(n) {
	     	for (var i = 0; i < dots.length; i++) {
	     		dots[i].className = dots[i].className.replace(' activ',' no-active');
	     	}
	     
	     	dots[n].className = dots[n].className.replace('no-active','activ');


	     	
	     }
	     function changeSlideClick(n){
	     	container.style.right = mas[n] + "px";
	     	position = mas[n];
	     	changeDots(n);
	     
	     }
	 