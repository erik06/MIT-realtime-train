let sortedStops = [
  [-87.672892, 42.019063],
  [-87.669092, 42.015876],
  [-87.665909, 42.008362],
  [-87.661061, 42.001073],
  [-87.659202, 41.993664],
  [-87.659076, 41.990259],
  [-87.65884, 41.983504],
  [-87.658668, 41.977984],
  [-87.65853, 41.973453],
  [-87.658493, 41.969139],
  [-87.657588, 41.964273],
  [-87.654929, 41.953775],
  [-87.653626, 41.947428],
  [-87.65338, 41.939751],
  [-87.652866, 41.925051],
  [-87.649177, 41.910655],
  [-87.631412, 41.90392],
  [-87.628176, 41.896671],
  [-87.628021, 41.891665],
  [-87.627813, 41.884809],
  [-87.627696, 41.880745],
  [-87.627596, 41.878153],
  [-87.627479, 41.874039],
  [-87.627402, 41.867368],
  [-87.630968, 41.853206],
  [-87.630636, 41.831191],
  [-87.63094, 41.810318],
  [-87.631157, 41.79542],
  [-87.630952, 41.780536],
  [-87.625724, 41.768367],
  [-87.625112, 41.750419],
  [-87.624717, 41.735372],
  [-87.624342, 41.722377],
];
// let chicagoRedLineStations = [];

// // Get only the Red line stations, going in South Direction
// chicago.forEach((stop) => {
//   if (stop.RED && stop.DIRECTION_ID == "S") {
//     chicagoRedLineStations.push(stop);
//   }
// });

// // Sort stations by latitude so that they are in the correct order going N/S
// chicagoRedLineStations.sort((a, b) => b.Location[0] - a.Location[0]);
// // Push just the Lat Long into an array and reverse sorted stops
// chicagoRedLineStations.forEach((station) => {
//   let coord = [];
//   coord[0] = station.Location[1];
//   coord[1] = station.Location[0];
//   sortedStops.push(coord);
// });

// console.log(sortedStops);

// TODO: add your own access token
mapboxgl.accessToken = "";

// This is the map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-87.649177, 41.910655],
  zoom: 18,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker()
  .setLngLat([-87.672892, 42.019063])
  .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  setTimeout(() => {
    if (counter >= sortedStops.length) return;
    marker.setLngLat(sortedStops[counter]);
    map.flyTo({
      center: sortedStops[counter],
    });
    counter++;
    move();
  }, 1000);
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}
