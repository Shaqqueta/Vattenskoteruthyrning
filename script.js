let button = document.getElementById("toggle");
let body = document.body;
let header = document.getElementsByTagName("header")[0];
let navLinks = document.getElementsByClassName("navLinks")[0];

button.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  navLinks.classList.toggle("dark-mode");
});


mapboxgl.accessToken = "pk.eyJ1IjoidGphY2tlIiwiYSI6ImNsZ2x3emp4MTAwN2czaW8zZDN1enkxbmEifQ.vhDonD-wrHXexXrnTHBYpQ";
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [18.062792, 59.4401813], // starting position [lng, lat]
    zoom: 15 // starting zoom
});














