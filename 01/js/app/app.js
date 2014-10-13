(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_01: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_01 */ {
                  main$animate: function (bunny, renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      bunny.rotation = bunny.rotation + 0.1;
                      renderer.render(stage);
                    };
                  },
                  main: function (args) {
                    var stage = new PIXI.Stage(Kotlin.Long.fromInt(6750105));
                    var renderer = PIXI.autoDetectRenderer(Kotlin.Long.fromInt(400), Kotlin.Long.fromInt(300));
                    var texture = PIXI.Texture.fromImage('bunny.png');
                    var bunny = new PIXI.Sprite(texture);
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_01.main$animate(bunny, renderer, stage);
                    document.body.appendChild(renderer.view);
                    requestAnimFrame(animate);
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
  _.net.abesto.kotlin.js.pixi.examples.example_01.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
