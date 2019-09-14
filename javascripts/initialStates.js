window.bootState = {
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.state.start('load');
  }
};

window.loadState= {
  preload: function() {
    var loadingLabel = game.add.text(80, 150, 'loading...',
      {font: '30px Courier', fill: '#ffffff'});
    game.load.image('player', '/files/theme/player.png');
    game.load.image('win', '/files/theme/win.png');

  },

  create: function() {
    game.state.start('menu');
  }
};
