(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_03: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_03 */ {
                  animate$f: function (animate) {
                    return function () {
                      animate();
                    };
                  },
                  main$animate: function (renderer, stage) {
                    return function animate() {
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_03.animate$f(animate));
                      renderer.v.render(stage.v);
                    };
                  },
                  main$onAssetsLoaded: function (stage, animate) {
                    return function () {
                      var tmp$0, tmp$1;
                      var explosionTextures = [];
                      tmp$0 = 25;
                      for (var i = 0; i <= tmp$0; i++) {
                        var texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i + 1) + '.png');
                        explosionTextures.push(texture);
                      }
                      tmp$1 = 49;
                      for (var i_0 = 0; i_0 <= tmp$1; i_0++) {
                        var explosion = new MovieClip(explosionTextures);
                        explosion.position.x = Math.random() * 800;
                        explosion.position.y = Math.random() * 600;
                        explosion.anchor.x = 0.5;
                        explosion.anchor.y = 0.5;
                        explosion.rotation = Math.random() * Math.PI;
                        explosion.scale.x = 0.75 + Math.random() * 0.5;
                        explosion.scale.y = explosion.scale.x;
                        explosion.gotoAndPlay_3p81yu$(Math.random() * 27);
                        stage.v.addChild(explosion);
                      }
                      requestAnimFrame(animate);
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
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_03.main$animate(renderer, stage);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_03.main$onAssetsLoaded(stage, animate);
                    loader.onComplete = onAssetsLoaded;
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
  _.net.abesto.kotlin.js.pixi.examples.example_03.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
