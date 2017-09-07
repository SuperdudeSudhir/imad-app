
var button = document.getElementById("counter");

button.onclick = function()
{
    
    //creates a a request
    var request = new XMLHttpRequest();
    var counter = counter +1;
    
    //CAPTURE RESPONSE
    request.onreadystatechange = function ()
    {
    if (request.readyState === XMLHttpRequest.DONE)
    {
        //RENDER IN CORRECTT SPAN
        
        
        if(request.status === 200){
counter =  request.responseText;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
    }
    
    }
};

request.open('GET','http://sdhrsingh271.imad.hasura-app.io/counter',true);
request.send(null);
};