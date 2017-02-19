var MapWrapper = function(coords, zoom, container) {

  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom
  });

}

MapWrapper.prototype = {
addMarker: function(callback, pokemon){

  var randomId = function() {
    var id = Math.floor(Math.random()*151);
    return id;
  }

  pokemon = pokemon(randomId);
  coords = callback();

  var infowindow = new google.maps.InfoWindow({
    content: "something"
  });   

  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });

  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);

 
  var pokemonInfo = pokemon.name + "</br>";
  
  var run = "runAway()";
  var catchPokemon = "catchPokemon()";
  var runButton = "<button onclick="+run+"> run away </button>"
  var catchButton = "<button onclick="+catchPokemon+"> catch pokemon </button>"

  var pokeWindow = (pokemonInfo + catchButton + runButton );
  infowindow.setContent(pokeWindow);
  });

  }
}