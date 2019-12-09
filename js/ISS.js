var positioncallBackGetSuccess = function(data) {
  console.log(data);
  var element1 = document.getElementById("ISS_latitude");
  var element2 = document.getElementById("ISS_longitude");

  element1.innerHTML = data.iss_position.latitude + "°";
  element2.innerHTML = data.iss_position.longitude + "°";



  var lat = parseFloat(data.iss_position.latitude);
  var lng = parseFloat(data.iss_position.longitude);

  console.log(lat)
  console.log(lng)

  var pos = {lat: lat, lng: lng};
  
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: pos});


  var marker = new google.maps.Marker({position: pos, map: map, animation: google.maps.Animation.DROP });



};

var peoplecallBackGetSuccess = function(data) {
  console.log(data);
  var element = document.getElementById("ISS_people");
  var nb = data.number;
  element.innerHTML = "Il y a actuellement : " + nb + " personnes dans l'ISS";

  //   for (var i = 0; i < nb ; i++) {
  // var element = document.getElementById("people_" + i);
  // element.innerHTML = data.people.i;
  // console.log(data.people.i);
  //   }
};

function position() {
  var url = "http://api.open-notify.org/iss-now.json";
  $.get(url, positioncallBackGetSuccess).done(function() {});
  var url2 = "http://api.open-notify.org/astros.json";
  $.get(url2, peoplecallBackGetSuccess).done(function() {});
}


