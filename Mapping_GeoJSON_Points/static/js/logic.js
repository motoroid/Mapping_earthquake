// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>")
//   }

// }).addTo(map);


// Grabbing our GeoJSON data alternative
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
   }
}).addTo(map);


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
// cityData.forEach(city =>   L.Marker(city.location, {radius:city.population/100000})
// .bindPopup("<h1>" + city.city + ","+ city.state + "</h1> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map)
// );



