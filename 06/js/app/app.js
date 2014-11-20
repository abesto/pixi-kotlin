(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_06: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_06 */ {
                  Button: Kotlin.createClass(function () {
                    return [PIXI.Sprite];
                  }, function $fun() {
                    $fun.baseInitializer.call(this, noImpl);
                    this.isdown = false;
                    this.isOver = false;
                  }),
                  main$f: function (textureButtonDown) {
                    return function (data) {
                      this;
                      this.isdown = true;
                      this.setTexture(textureButtonDown.v);
                      this.alpha = 1.0;
                    };
                  },
                  main$f_0: function (textureButtonOver, textureButton) {
                    return function (data) {
                      this;
                      this.isdown = false;
                      if (this.isOver) {
                        this.setTexture(textureButtonOver.v);
                      }
                       else {
                        this.setTexture(textureButton.v);
                      }
                    };
                  },
                  main$f_1: function (textureButtonOver) {
                    return function (data) {
                      this;
                      this.isOver = true;
                      if (!this.isdown)
                        this.setTexture(textureButtonOver.v);
                    };
                  },
                  main$f_2: function (textureButton) {
                    return function (data) {
                      this;
                      this.isOver = false;
                      if (!this.isdown)
                        this.setTexture(textureButton.v);
                    };
                  },
                  main$f_3: function (data) {
                    console.log('CLICK!');
                  },
                  main$f_4: function (data) {
                    console.log('TAP!!');
                  },
                  main$animate: function (renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      renderer.v.render(stage.v);
                    };
                  },
                  main$f_5: function (data) {
                    window.open('https://github.com/GoodBoyDigital/pixi.js', '_blank');
                  },
                  main: function (args) {
                    var tmp$0;
                    var interactive = true;
                    var stage = {v: new PIXI.Stage(0, interactive)};
                    var renderer = {v: PIXI.autoDetectRenderer(620, 400)};
                    document.body.appendChild(renderer.v.view);
                    var background = PIXI.Sprite.fromImage('button_test_BG.jpg');
                    stage.v.addChild(background);
                    var textureButton = {v: PIXI.Texture.fromImage('button.png')};
                    var textureButtonDown = {v: PIXI.Texture.fromImage('buttonDown.png')};
                    var textureButtonOver = {v: PIXI.Texture.fromImage('buttonOver.png')};
                    var buttons = [];
                    var buttonPositions = [175, 75, 600 - 145, 75, (600 / 2 | 0) - 20, (400 / 2 | 0) + 10, 175, 400 - 75, 600 - 115, 400 - 95];
                    tmp$0 = 4;
                    for (var i = 0; i <= tmp$0; i++) {
                      var button = new PIXI.Sprite(textureButton.v);
                      button.anchor.x = 0.5;
                      button.anchor.y = 0.5;
                      button.position.x = buttonPositions[i * 2];
                      button.position.y = buttonPositions[i * 2 + 1];
                      button.interactive = true;
                      button.mousedown = _.net.abesto.kotlin.js.pixi.examples.example_06.main$f(textureButtonDown);
                      button.touchstart = button.mousedown;
                      button.mouseup = _.net.abesto.kotlin.js.pixi.examples.example_06.main$f_0(textureButtonOver, textureButton);
                      button.touchend = button.mousedown;
                      button.mouseover = _.net.abesto.kotlin.js.pixi.examples.example_06.main$f_1(textureButtonOver);
                      button.mouseout = _.net.abesto.kotlin.js.pixi.examples.example_06.main$f_2(textureButton);
                      button.click = _.net.abesto.kotlin.js.pixi.examples.example_06.main$f_3;
                      button.tap = _.net.abesto.kotlin.js.pixi.examples.example_06.main$f_4;
                      stage.v.addChild(button);
                      buttons.push(button);
                    }
                    buttons[0].scale.x = 1.2;
                    buttons[1].scale.y = 1.2;
                    buttons[2].rotation = Math.PI / 10;
                    buttons[3].scale.x = 0.8;
                    buttons[3].scale.y = 0.8;
                    buttons[4].scale.x = 0.8;
                    buttons[4].scale.y = 1.2;
                    buttons[4].rotation = Math.PI;
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_06.main$animate(renderer, stage);
                    requestAnimFrame(animate);
                    var pixiLogo = PIXI.Sprite.fromImage('pixi.png');
                    stage.v.addChild(pixiLogo);
                    pixiLogo.position.x = 620.0 - 56;
                    pixiLogo.position.y = 400.0 - 32;
                    pixiLogo.interactive = true;
                    pixiLogo.click = _.net.abesto.kotlin.js.pixi.examples.example_06.main$f_5;
                    pixiLogo.tap = pixiLogo.click;
                  }
                })
              })
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('app', _);
  _.net.abesto.kotlin.js.pixi.examples.example_06.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
