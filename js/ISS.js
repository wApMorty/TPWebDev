var positioncallBackGetSuccess = function (data) {
  console.log(data);
  var element1 = document.getElementById("ISS_latitude");
  var element2 = document.getElementById("ISS_longitude");
  var element3 = document.getElementById("ISS_altitude");
  var element4 = document.getElementById("ISS_vitesse");

  element1.innerHTML = Math.round(data.latitude * 100) / 100 + "\ °";
  element2.innerHTML = Math.round(data.longitude * 100) / 100 + "\ °";
  element3.innerHTML = Math.round(data.altitude * 10) / 10 + "\ km";
  element4.innerHTML = Math.round(data.velocity * 10) / 10 + "\ km/h";

  var lat = parseFloat(data.latitude);
  var lng = parseFloat(data.longitude);

  console.log(lat);
  console.log(lng);

  var pos = { lat: lat, lng: lng };

  var map1 = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: pos
  });

  var marker = new google.maps.Marker({
    position: pos,
    map: map1,
    animation: google.maps.Animation.DROP
  });

  // var url3 = "https://api.wheretheiss.at/v1/coordinates/" + lat + "," + lng;
  var url3 = "https://api.wheretheiss.at/v1/coordinates/48.8,2.34";
  $.get(url3, infocallBackGetSuccess).done(function () { });

};

var infocallBackGetSuccess = function (data) {
  console.log(data);
  var code = data.country_code;
  var url4 = "https://restcountries.eu/rest/v2/alpha/"+code
  $.get(url4, infoPayscallBackGetSuccess).done(function () { });
}

var infoPayscallBackGetSuccess =function(data) {
  console.log(data);
  var name = data.name;
  var capital = data.capital;
  var monnaie = data.currencies[0].name;
  var monnaie_sym = data.currencies[0].symbol;
  var population = data.population;
  var region = data.region;
}

var peoplecallBackGetSuccess = function (data) {
  console.log(data);
  var element = document.getElementById("ISS_people");
  var nb = data.number;
  element.innerHTML = nb + "\ personnes dans l'ISS";

  for (var i = 0; i < nb; i++) {
    var element = document.getElementById("people_" + i);
    element.innerHTML = data.people[i].name;
  }
};

function position() {
  var url = "https://api.wheretheiss.at/v1/satellites/25544";
  $.get(url, positioncallBackGetSuccess).done(function () { });
  var url2 = "http://api.open-notify.org/astros.json";
  $.get(url2, peoplecallBackGetSuccess).done(function () { });
}
