// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);

// Get data from cities.js
let cityData = cities;
  // function drawMarker(city) {
  //   L.marker(city.location)
  //     .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
  //     .addTo(map);
  // }
  
  // // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  // for (var i = 0; i < cities.length; i++) {
  //   var city = cities[i];
  //   drawMarker(city);
  // }
  
// User forEach to Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
cityData.forEach(city =>   L.circleMarker(city.location, {radius:city.population/100000})
.bindPopup("<h1>" + city.city + ","+ city.state + "</h1> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map)
);



