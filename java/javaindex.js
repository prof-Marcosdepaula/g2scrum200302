let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.120850),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
<script src="https://maps.app.goo.gl/aQ2kxWCiLwT2AFr97"></script>
var marker = new google.maps.Marker({
  position: myCenter,
  icon: 'pinkball.png'
});

marker.setMap(map);
google.maps.event.addListener(marker, 'click', function () {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_locatorplus_v7_cABD" async defer></script>
});


