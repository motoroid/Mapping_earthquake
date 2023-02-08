// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([33.1733, -120.1794], 7);
// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6214, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-streets-v11",
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
cityData.forEach(city =>   L.Marker(city.location, {radius:city.population/100000})
.bindPopup("<h1>" + city.city + ","+ city.state + "</h1> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map)
);



