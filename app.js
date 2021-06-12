// const tileUrl = "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"; // tile layer
const tileUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // OSM standard tile layer
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

//coordinates for testing purpose
const uttamNagar = [28.6200403, 77.0537406];
const palam = [28.5901, 77.0888];
const dwarka5 = [28.5977029, 77.0574221];
const kapashera = [28.5214, 77.0819];
const janakpuri = [28.6219, 77.0878];
const indiaGate = [28.6129, 77.2295];
const akshardhaam = [28.6127, 77.2773];
const safdurgunjAir = [28.5835, 77.2111];
const form = document.querySelector("form");
const searchIn = document.querySelector("#search");
const searchResult = document.querySelector("#searchResults");
const myLoc = [28.606556, 77.063133];
// getting current location
// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     const { latitude, longitude } = position.coords;
//     console.log(latitude, longitude);
//     console.log([28.6051691, 77.0609258]);
//     var map = L.map("map").setView([latitude, longitude], 18);
//     // const street = L.esri.basemapLayer("Streets").addTo(map); // for streets layer

//     // settingUp Tiles On Map
//     const tiles = L.tileLayer(tileUrl, {
//       attribution: attribution,
//       maxZoom: 20, // max zoom - even if the images will get blurred
//       maxNativeZoom: 19, //  images to the particular zoom level - so that it can't be blurred
//     });
//     tiles.addTo(map);
//     // settingUp Marker On Our Current Location
//     L.marker([latitude, longitude])
//       .addTo(map)
//       .bindPopup("I am Here.")
//       .openPopup();

//     // Circle Layer
//     // const circleLayer = L.circle([latitude, longitude], {
//     //   radius: 2000,
//     //   color: "#00F0FF",
//     //   // fillColor: "transparent",
//     //   fillOpacity: 0,
//     //   stroke: 7,
//     //   opacity: 0.5,
//     // }); //draw a circle around this coordinate with radius 2000 Meter 😀 WOW.
//     // circleLayer.addTo(map);

//     // // Rectangle layer
//     // // const rectLayer = L.rectangle([palam, uttamNagar]);
//     // // rectLayer.addTo(map);

//     // // Polygon Layer
//     // const polygon = L.polygon([janakpuri, indiaGate]);
//     // polygon.addTo(map);

//     // // PolyLine
//     // const polyLine = L.polyline([palam, indiaGate, [latitude, longitude]], {
//     //   color: "orange",
//     // });
//     // polyLine.addTo(map);

//     // // Circle Marker
//     // const circleMarker = L.circleMarker(akshardhaam, { radius: 50 });
//     // circleMarker.bindPopup("<div> Akshardhaam 🛕 </div>");
//     // circleMarker.addTo(map);

//     // // Custom Marker
//     // const Icon = L.icon({
//     //   iconUrl: "pizza.jpg",
//     //   iconSize: [30, 40],
//     // });
//     // const customMarker = L.marker(safdurgunjAir, { icon: Icon });
//     // customMarker.bindPopup("<div> YumTum Franchise 😁 </div>");
//     // customMarker.addTo(map);

//     // // Layer Group {Important , Toggling Between Different Layers for ex: of we have a set of markers and we group them on the same
//     // //  layer we can then toggle it on or off}

//     // // leaflet-control-geocoder search plugin
//     // L.Control.geocoder().addTo(map);

//     // ////////////////// just finding out smallest path between two coords 😁🤣
//     // // const search = new GeoSearch.GeoSearchControl({
//     // //   provider: new GeoSearch.OpenStreetMapProvider(),
//     // // });
//     // // map.addControl(search);
//     // // const dwarka5lln = L.latLng(dwarka5);
//     // // console.log(dwarka5lln);
//     // // const uttamNagarlln = L.latLng(uttamNagar);
//     // // console.log(uttamNagarlln);
//     // // console.log((dwarka5lln.distanceTo(uttamNagarlln) / 1000).toFixed(0));
//     // /////////////////////////////////////////////////////////////////////////

//     // ////////////////////////////////////////////////////////////////////////
//     // // Using Open Source Routing Machine Plugin //
//     // // Using ESRI Routing Service with leaflet routing machine
//     // ////////////////////////////////////////////////////////////////////////
//     // // const map = L.map("map");

//     // //========== ROUTING BETWEEN TWO PLACES=========//
//     // var control = L.Routing.control({
//     //   router: L.Routing.esri({
//     //     liveTraffic: true,
//     //     profile: "Driving",
//     //     steps: true,
//     //     serviceUrl:
//     //       "https://utility.arcgis.com/usrsvcs/appservices/xgPIb7ppsXY9hzSw/rest/services/World/Route/NAServer/Route_World/",
//     //   }),

//     //   alternatives: true,
//     //   geocoder: L.Control.Geocoder.nominatim(),
//     //   routeWhileDragging: true,
//     //   reverseWaypoints: true,
//     // }).addTo(map);

//     // L.Routing.errorControl(control).addTo(map);
//     // //===============================================//
//     // // L.Routing.control({
//     // //   waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
//     // // }).addTo(map);

//     // //  Click Event listener on searchResult
//     // searchResult.addEventListener("click", function (e) {
//     //   // console.log(e.target);
//     //   const clickedElement = e.target.closest("li");

//     //   if (!clickedElement) return;
//     //   searchResult.style.opacity = 0;

//     //   console.log(clickedElement.textContent);
//     //   searchIn.value = clickedElement.textContent;

//     //   // searchIn.setAttribute("value", clickedElement.innerText);
//     //   // console.log(searchIn);

//     //   console.log(clickedElement);
//     //   const lat = clickedElement.dataset.lat;
//     //   const lon = clickedElement.dataset.lon;
//     //   console.log(lat, lon);

//     //   // pan to location
//     //   // map.setView([lat, lon], 18, {
//     //   //   animate: true,
//     //   //   pan: {
//     //   //     duration: 2,
//     //   //   },
//     //   // });

//     //   // fly to location
//     //   map.flyTo([lat, lon], 18, {
//     //     animate: true,
//     //     pan: {
//     //       duration: 2,
//     //     },
//     //   });

//     //   L.marker([lat, lon]).addTo(map);

//     //   searchResult.innerHTML = "";
//     // });

//     // // USING NOMINATIM SEARCH API
//     // form.addEventListener("submit", function (e) {
//     //   e.preventDefault();

//     //   // fetching data from naminatim search api
//     //   fetch(
//     //     "http://nominatim.openstreetmap.org/search?format=json&limit=11&q=" +
//     //       searchIn.value
//     //   )
//     //     .then(function (response) {
//     //       return response.json();
//     //     })
//     //     .then(function (json) {
//     //       // document.getElementById("address").innerHTML = json.display_name;
//     //       let html = "";
//     //       for (const result of json.values()) {
//     //         console.log(result);
//     //         html += `<li data-lat='${result.lat}' data-lon='${result.lon}'><p> ${result.display_name}
//     //       </p></li><hr>`;
//     //         console.log(html);
//     //       }

//     //       searchResult.insertAdjacentHTML("afterbegin", html);
//     //       searchResult.style.opacity = 1;
//     //       searchResult.style.overflowY = "auto";
//     //       // searchResult.style.overflowY = "scroll";
//     //     });
//     // });

//     // // USING NOMINATIM REVERSE GEOLOCATION API
//     // map.on("click", function (mapEvent) {
//     //   const { lat, lng } = mapEvent.latlng;
//     //   fetch(
//     //     "http://nominatim.openstreetmap.org/reverse?format=json&lon=" +
//     //       lng +
//     //       "&lat=" +
//     //       lat
//     //   )
//     //     .then(function (response) {
//     //       return response.json();
//     //     })
//     //     .then(function (json) {
//     //       // document.getElementById("address").innerHTML = json.display_name;
//     //       console.log(json);
//     //     });
//     // });

//     // // Trying To Implement Live Tracking
//     // // let markerL = "";
//     // // map
//     // //   .locate({
//     // //     watch: true,
//     // //     setView: true,
//     // //     maxZoom: 18,
//     // //   })
//     // //   .on("locationfound", (e) => {
//     // //     console.log(e);
//     // //     if (!markerL) {
//     // //       markerL = L.marker([e.latitude, e.longitude], { icon: Icon }).addTo(
//     // //         map
//     // //       );
//     // //     } else {
//     // //       markerL.setLatLng([e.latitude, e.longitude]);
//     // //     }
//     // //   });

//   },
//   (error) => console.error(error),
//   {
//     enableHighAccuracy: true,
//     timeout: 20000,
//   }
// );

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
let map;
// Our Users Lat Lng
let target = {
  latitude: 28.5977029,
  longitude: 77.0574221,
};

navigator.geolocation.watchPosition((pos) => {
  map = L.map("map").setView([pos.coords.latitude, pos.coords.longitude], 18);
  // const street = L.esri.basemapLayer("Streets").addTo(map); // for streets layer

  // settingUp Tiles On Map
  const tiles = L.tileLayer(tileUrl, {
    attribution: attribution,
    maxZoom: 20, // max zoom - even if the images will get blurred
    maxNativeZoom: 19, //  images to the particular zoom level - so that it can't be blurred
  });
  tiles.addTo(map);

  // routing
  var control = L.Routing.control({
    router: L.Routing.esri({
      liveTraffic: true,
      profile: "Driving",
      serviceUrl:
        "https://utility.arcgis.com/usrsvcs/appservices/xgPIb7ppsXY9hzSw/rest/services/World/Route/NAServer/Route_World/",
    }),
    waypoints: [
      L.latLng(pos.coords.latitude, pos.coords.longitude),
      L.latLng(target.latitude, target.longitude),
    ],
    geocoder: L.Control.Geocoder.nominatim(),
    autoRoute: true,
    fitSelectedRoutes: true,
    show: false,
  }).addTo(map);
  L.Routing.errorControl(control).addTo(map);
});

// var id, target, options;

// function success(pos) {
//   var crd = pos.coords;
//   // var latitude = 28.606556;
//   // var longitude = 77.063133;
//   // console.log("Google : ", myLoc);
//   // console.log("Browser : ", [pos.coords.latitude, pos.coords.longitude]);

//   if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
//     console.log("Congratulations, you reached the target");
//     navigator.geolocation.clearWatch(id);
//   } else {
//     // console.log("comming");
//     // Delivery Boys Lat and Long
//   }
// }

// function error(err) {
//   console.warn("ERROR(" + err.code + "): " + err.message);
// }

// let options = {
//   enableHighAccuracy: true,
//   timeout: 50000,
//   maximumAge: 30000,
// };

// id = navigator.geolocation.watchPosition(success, error, options);
