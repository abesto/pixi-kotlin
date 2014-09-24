(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_3: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_3 */ {
                  animate$f: function (animate) {
                    return function () {
                      animate();
                    };
                  },
                  main$animate: function (renderer, stage) {
                    return function animate() {
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_3.animate$f(animate));
                      renderer.v.render(stage.v);
                    };
                  },
                  onAssetsLoaded$f: function (animate) {
                    return function () {
                      animate();
                    };
                  },
                  main$onAssetsLoaded: function (stage, animate) {
                    return function () {
                      var explosionTextures = [];
                      var tmp$0, tmp$1;
                      tmp$0 = 25;
                      for (var i = 0; i <= tmp$0; i++) {
                        var texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i + 1) + '.png');
                        explosionTextures.push(texture);
                      }
                      tmp$1 = 49;
                      for (var i_0 = 0; i_0 <= tmp$1; i_0++) {
                        var explosion = new PIXI.MovieClip(explosionTextures);
                        explosion.position.x = Math.random() * 800;
                        explosion.position.y = Math.random() * 600;
                        explosion.anchor.x = 0.5;
                        explosion.anchor.y = 0.5;
                        explosion.rotation = Math.random() * Math.PI;
                        explosion.scale.x = 0.75 + Math.random() * 0.5;
                        explosion.scale.y = explosion.scale.x;
                        var tmp$2;
                        explosion.gotoAndPlay((tmp$2 = Math.random() * 27) - tmp$2 % 1);
                        stage.v.addChild(explosion);
                      }
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_3.onAssetsLoaded$f(animate));
                    };
                  },
                  main$f: function (onAssetsLoaded) {
                    return function () {
                      onAssetsLoaded();
                    };
                  },
                  main: function (args) {
                    var assetsToLoader = ['SpriteSheet.json'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    var explosions = [];
                    var count = 0;
                    var stage = {v: new PIXI.Stage(16777215)};
                    var renderer = {v: PIXI.autoDetectRenderer(800, 600)};
                    document.body.appendChild(renderer.v.view);
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_3.main$animate(renderer, stage);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_3.main$onAssetsLoaded(stage, animate);
                    loader.onComplete = _.net.abesto.kotlin.js.pixi.examples.example_3.main$f(onAssetsLoaded);
                    loader.load();
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
  _.net.abesto.kotlin.js.pixi.examples.example_3.main([]);
}(Kotlin));
