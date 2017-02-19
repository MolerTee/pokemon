  var allPokemon;
  var pokemonArray = [];

  var makeRequest = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  };

  var requestComplete = function() {
    if(this.status != 200) {
      return;
    }
    var jsonString = this.responseText;
    allPokemon = JSON.parse(jsonString);
}

  var randomId = function() {
    var id = Math.floor(Math.random()*151);
    return id;
  }

  var getAllPokemon = function(){
    
      var url = "http://pokeapi.co/api/v2/pokemon/?limit=150";
      var pokemon = makeRequest(url, requestComplete);
      allPokemon = pokemon;
    
  }


  var getRandomPokemon = function(callback){
    var id = callback();
    var pokemon = pokemonArray[id];
    return pokemon;
  }

  var getPokemonName = function(pokemon){
    var name = this.name;
  }
    

  var catchPokemon = function(){
    var Ptag = document.getElementById("ptag");
    var roll = Math.floor(Math.random() * 11);
    if (roll >= 6 ) {
      Ptag.innerText = ("You caught the " + pokemon.name);
      
    } else {
      Ptag.innerText = ("The " +pokemon.name+ " ran away");
    }
};

  var runAway = function(){
    var Ptag = document.getElementById("ptag");
    Ptag.innerText = ("You ran away, must have been a weedle...");
  }

  var displayMap = function(latitude, longitude) {
    var container = document.getElementById('main-map');
    console.log(container);
    var centre = {
        lat:latitude, 
        lng:longitude
      };
    var zoom = 10;
    var mainmap = new MapWrapper(centre, zoom, container);
    var randomLocation = function(){
      coords = {
      lat: (Math.random() * (55.939345 - 55.875145) + 55.875145),
      lng: (Math.random() * (-3.257545 -  -3.154345) +  -3.154345)
    }
      return coords;
    };
    mainmap.addMarker(randomLocation, getRandomPokemon);
    mainmap.addMarker(randomLocation, getRandomPokemon);  
    mainmap.addMarker(randomLocation, getRandomPokemon);
    mainmap.addMarker(randomLocation, getRandomPokemon);
    mainmap.addMarker(randomLocation, getRandomPokemon);
    mainmap.addMarker(randomLocation, getRandomPokemon);
    mainmap.addMarker(randomLocation, getRandomPokemon);
    mainmap.addMarker(randomLocation, getRandomPokemon);
    mainmap.addMarker(randomLocation, getRandomPokemon);
}

var app = function(){
 getAllPokemon();
 
 console.log(allPokemon);
 displayMap(55.9533, -3.1883);

}

window.onload = app;