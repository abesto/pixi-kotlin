(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_02: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_02 */ {
                  main$animate: function (aliens, count, alienContainer, renderer, stage) {
                    return function animate() {
                      var tmp$0;
                      tmp$0 = 99;
                      for (var i = 0; i <= tmp$0; i++) {
                        var alien = aliens[i];
                        alien.rotation = alien.rotation + 0.1;
                      }
                      count.v += 0.01;
                      alienContainer.scale.x = Math.sin(count.v);
                      alienContainer.scale.y = Math.sin(count.v);
                      alienContainer.rotation = alienContainer.rotation + 0.01;
                      renderer.render(stage);
                      requestAnimFrame(animate);
                    };
                  },
                  main$onAssetsLoaded: function (alienFrames, aliens, alienContainer, animate) {
                    return function () {
                      var tmp$0;
                      tmp$0 = 99;
                      for (var i = 0; i <= tmp$0; i++) {
                        var frameName = alienFrames[i % 4];
                        var alien = PIXI.Sprite.fromFrame(frameName);
                        alien.tint = Math.random() * 16777215 | 0;
                        alien.position.x = Math.random() * 800 - 400;
                        alien.position.y = Math.random() * 600 - 300;
                        alien.anchor.x = 0.5;
                        alien.anchor.y = 0.5;
                        aliens.push(alien);
                        alienContainer.addChild(alien);
                      }
                      requestAnimFrame(animate);
                    };
                  },
                  main: function (args) {
                    var tmp$0;
                    var assetsToLoader = ['SpriteSheet.json'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    loader.load();
                    var aliens = [];
                    var alienFrames = ['eggHead.png', 'flowerTop.png', 'helmlok.png', 'skully.png'];
                    var count = {v: 0.0};
                    var stage = new PIXI.Stage(16777215);
                    var renderer = PIXI.autoDetectRenderer(800, 600);
                    ((tmp$0 = document.body) != null ? tmp$0 : Kotlin.throwNPE()).appendChild(renderer.view);
                    var alienContainer = new PIXI.DisplayObjectContainer();
                    alienContainer.position.x = 400.0;
                    alienContainer.position.y = 300.0;
                    stage.addChild(alienContainer);
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_02.main$animate(aliens, count, alienContainer, renderer, stage);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_02.main$onAssetsLoaded(alienFrames, aliens, alienContainer, animate);
                    loader.onComplete = onAssetsLoaded;
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
  _.net.abesto.kotlin.js.pixi.examples.example_02.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
