	console.log('Loaded!');
	//change the text of the main-text div
	var element = document.getElementById('main-text');
	element.InnerHTML = "New Value";
	//move the image

	var img = document.getElementById("madi");

	
	var marginRight = 0;
	   
	    function moveRight()
	    {
	        marginLeft = marginLeft = 10;
	img.style.marginLeft = marginLeft = 'px';        
	    }
 madi.onclick = function(){
var Interval = setInterval(moveRight,100);
	};