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
                  animate$f: function (animate) {
                    return function () {
                      animate();
                    };
                  },
                  main$animate: function (aliens, count, alienContainer, renderer, stage) {
                    return function animate() {
                      var tmp$0;
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_02.animate$f(animate));
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
                    };
                  },
                  main$onAssetsLoaded: function (alienFrames, aliens, alienContainer, animate) {
                    return function () {
                      var tmp$0;
                      tmp$0 = 99;
                      for (var i = 0; i <= tmp$0; i++) {
                        var frameName = alienFrames[i % 4];
                        var alien = PIXI.Sprite.fromFrame(frameName);
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
                    var stage = new PIXI.Stage(Kotlin.Long.fromInt(16777215));
                    var renderer = PIXI.autoDetectRenderer(Kotlin.Long.fromInt(800), Kotlin.Long.fromInt(600));
                    var assetsToLoader = ['SpriteSheet.json'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    var aliens = [];
                    var alienFrames = ['eggHead.png', 'flowerTop.png', 'helmlok.png', 'skully.png'];
                    var alienContainer = new PIXI.DisplayObjectContainer();
                    alienContainer.position.x = 400.0;
                    alienContainer.position.y = 300.0;
                    var count = {v: 0.0};
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_02.main$animate(aliens, count, alienContainer, renderer, stage);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_02.main$onAssetsLoaded(alienFrames, aliens, alienContainer, animate);
                    loader.onComplete = onAssetsLoaded;
                    loader.load();
                    document.body.appendChild(renderer.view);
                    stage.addChild(alienContainer);
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
