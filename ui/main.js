
var button = document.getElementById("counter");
var counter = 0;
button.onclick = function()
{
    
    //creates a a request
    var request = new XMLHttpRequest();
    
    //CAPTURE RESPONSE
    request.onreadystatechange = function ()
    {
    if (request.readyState === XMLHttpRequest.DONE)
    
    {
        //RENDER IN CORRECTT SPAN
        
        
        if(request.status === 200){
counter = 1;
counter =  request.responseText;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
    }
    
    }
};

request.open('GET','span.innerHTML = counter.toString();',true);
request.send(null);
};