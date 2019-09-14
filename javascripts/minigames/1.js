// rybka do jedzenia pomiedzy petami

window.miniGame1 = {

  create: function() {
    // player sprite around
    this.keyboard = game.input.keyboard;

    game.stage.backgroundColor = "#4488AA";

    // Create the player sprite and enable physics
    this.player = game.add.sprite(96, 200, 'cigabutt');
    game.physics.enable(this.player, Phaser.Physics.ARCADE);

  },

  update: function() {

    if (this.keyboard.isDown(Phaser.Keyboard.A)) {
      this.player.body.velocity.x = -175;
    } else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
      this.player.body.velocity.x = 175;
    } else {
      this.player.body.velocity.x = 0;
    }
    // Enabling movement along the y axis
    if (this.keyboard.isDown(Phaser.Keyboard.W)) {
      this.player.body.velocity.y = -175;
    } else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
      this.player.body.velocity.y = 175;
    } else{
      this.player.body.velocity.y = 0;
    }
  }

}
