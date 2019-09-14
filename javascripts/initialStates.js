window.bootState = {
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.state.start('load');
  }
};

window.loadState= {
  preload: function() {
    game.add.text(80, 150, 'loading...', { fill: '#ffffff'});
    game.load.image('cigabutt', 'assets/cigabutt_96x200.png');
  },

  create: function() {
    game.state.start('menu');
  }
};
