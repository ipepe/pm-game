window.menuState = {

  create: function () {

    var nameLabel = game.add.text(80, 80, '50 ways to cigarette',
      { font: '50px Arial', fill: '#ffffff' });

    var startLabel = game.add.text(80, 160,
      'Choose mini game:',
      {font: '25px Arial', fill: '#ffffff' });

    for(var i=0; i<5; i++) {
      (function(n){
        var text = game.add.text(
          80 + (n * 30),
          240 ,
          i + 1,
          {align: 'center', fill: '#ffffff'}
        );
        var miniGameStateName = 'miniGame' + n;
        text.anchor.set(0.5);
        text.strokeThickness = 6;
        text.inputEnabled = true;
        text.strokeThickness = 0;
        text.events.onInputDown.add(function () {
          game.state.start(miniGameStateName)
        });
      })(i+1);
    }
  }
};
