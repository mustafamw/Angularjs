
function getPublicholiday()
{
    var url = "./json/holiday//bank-holidays.json";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    var publicholiday = [];
    var data = JSON.parse(xmlHttp.responseText);
    for(event in data['england-and-wales'].events)
    {
        publicholiday.push(data['england-and-wales'].events[event].date);
    }
    
    return publicholiday;
}


/*
function getPublicholiday()
{
    var publicholiday = [];
    var url = "./json/holiday//bank-holidays.json";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() 
    { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            
            var data = JSON.parse(xmlHttp.responseText);
            for(event in data['england-and-wales'].events)
            {
                publicholiday.push(data['england-and-wales'].events[event].date);
            }
            return publicholiday;
        }
        
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
}
*/
console.log(getPublicholiday())