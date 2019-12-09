var PositioncallBackGetSuccess =function(data){
    console.log(data)
    var element1 = document.getElementById("ISS_latitude");
    var element2 = document.getElementById("ISS_longitude");
    element1.innerHTML = data.iss_position.latitude;
    element2.innerHTML = data.iss_position.longitude;
}

var PeoplecallBackGetSuccess =function(data){
    console.log(data)
    var element = document.getElementById("ISS_people");
    element.innerHTML = "Il y a actuellement : "+ data.number + " personnes dans l'ISS";
}

function Position() {
    var url = "http://api.open-notify.org/iss-now.json"
    $.get(url, PositioncallBackGetSuccess).done(function(){})
}

function People() {
    var url ="http://api.open-notify.org/astros.json"
    $.get(url, PeoplecallBackGetSuccess).done(function(){})
}