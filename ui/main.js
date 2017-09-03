
var button = document.getElementById("counter");
var counter=0;

button.onclick = function(){
    
    
    //FIRST MAKES A REQUEST TO  COUNTER POINT
    
    //CAPTURE RESPONSE
    
    //RENDER IN CORRECTT SPAN
    
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}