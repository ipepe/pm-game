// whack-a-mole klik na 9

var interval = 1000;
var id;

var coordinates = [];

var all_fajas = [];
var visible_fajas = [];

window.miniGame3 = {

  create: function() {

    let w = game.width;
    let h = game.height;

    let x = 3;
    let y = 3;   

    for(let i=0; i<3; i++) {
      for(let j=0; j<3; j++) {
        coordinates.push({x: w/x*i, y: h/y*j})    
      }
    }

    game.stage.backgroundColor = "#4488AA";

    coordinates.forEach(function(value, index, array) {
      var p = game.add.sprite(value['x'], value['y'], 'cigabutt');
      p.inputEnabled = true;
      p.visible = false;
      p.events.onInputDown.add(function () {p.visible = false;
                              }) 
      all_fajas.push(p);
    })

    all_fajas[Math.floor(Math.random()*all_fajas.length)].visible = true;

    id = setInterval(showRandomFaja, interval);
  },

  update: function() {
    if (all_fajas.every(function (el) {return el.visible === false})) {
          alert("Brawo, wygrałeś! Spróbuje jeszcze raz szybciej.")
          all_fajas[0].visible = true;
          clearInterval(id)
          if (interval > 100) {
            interval -= 100;
            console.log("Setting interval")
            console.log(interval)
            id = setInterval(showRandomFaja, interval);
          }
        }

  }
}

function showRandomFaja() {
  var new_faja = all_fajas[Math.floor(Math.random()*all_fajas.length)];
  new_faja.visible = true;
}
