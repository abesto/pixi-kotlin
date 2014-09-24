(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_1: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_1 */ {
                  animate$f: function (animate) {
                    return function () {
                      animate();
                    };
                  },
                  main$animate: function (bunny, renderer, stage) {
                    return function animate() {
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_1.animate$f(animate));
                      bunny.rotation = bunny.rotation + 0.1;
                      renderer.render(stage);
                    };
                  },
                  main$f: function (animate) {
                    return function () {
                      animate();
                    };
                  },
                  main: function (args) {
                    var stage = new PIXI.Stage(6750105);
                    var renderer = PIXI.autoDetectRenderer(400, 300);
                    var texture = PIXI.Texture.fromImage('bunny.png');
                    var bunny = new PIXI.Sprite(texture);
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_1.main$animate(bunny, renderer, stage);
                    document.body.appendChild(renderer.view);
                    requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_1.main$f(animate));
                    bunny.anchor.x = 0.5;
                    bunny.anchor.y = 0.5;
                    bunny.position.x = 200.0;
                    bunny.position.y = 150.0;
                    stage.addChild(bunny);
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
  _.net.abesto.kotlin.js.pixi.examples.example_1.main([]);
}(Kotlin));
