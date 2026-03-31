var pokemonData = {
    "pokemon": [
        {"id": 1, "name": "Bulbasaur", "type": ["Grass", "Poison"], "num": 1},
        {"id": 2, "name": "Ivysaur", "type": ["Grass", "Poison"], "num": 2},
        {"id": 3, "name": "Venusaur", "type": ["Grass", "Poison"], "num": 3},
        {"id": 4, "name": "Charmander", "type": ["Fire"], "num": 4},
        {"id": 5, "name": "Charmeleon", "type": ["Fire"], "num": 5},
        {"id": 6, "name": "Charizard", "type": ["Fire", "Flying"], "num": 6},
    ]
}


$(document).ready(function(){
  $.fn.highlightInfo = function() {
    return this.css({
      "max-width": "200px",
      "background-color": "brown",
      "color": "white"
    });
  };
 $("#submit").click(function() {
        $("#pokemonInfo").empty();
        var randomIndex = Math.floor(Math.random() * pokemonData.pokemon.length);
        var p = pokemonData.pokemon[randomIndex];
        var card = $("<div></div>").html(
            "<h2>" + p.name + " (#" + p.num + ")</h2>" + 
            "<p><strong>Type:</strong> " + p.type.join(", ") + "</p>"
        );
      card.highlightInfo();
            $("#pokemonInfo").append(card);  
    });
});








