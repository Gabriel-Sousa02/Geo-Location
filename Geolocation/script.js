function localizar(){
  navigator.geolocation.getCurrentPosition(showPosition);

}
function showPosition(pos){
  console.log(pos);
  var lat = pos.coords.latitude;
  var long = pos.coords.longitude;
  document.getElementById("geo").innerText = "LAT: " + lat + ", LONG: " + long;
  
  var mymap = L.map('mapid').setView([lat, long], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ2FiaWJvc3RhIiwiYSI6ImNrcDQyZzhkZDFseTAyd3FpZ2tmZnU3OGcifQ.pTSKCZevUElEdlkUA9ro-g'
}).addTo(mymap);

 var marker = L.marker([lat, long]).addTo(mymap);
}
