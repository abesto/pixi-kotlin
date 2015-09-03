(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_08: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_08 */ {
                  main$animate: function (count, tilingSprite, renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      count.v += 0.005;
                      tilingSprite.v.tileScale.x = 2 + Math.sin(count.v);
                      tilingSprite.v.tileScale.y = 2 + Math.cos(count.v);
                      tilingSprite.v.tilePosition.x = tilingSprite.v.tilePosition.x + 1;
                      tilingSprite.v.tilePosition.y = tilingSprite.v.tilePosition.y + 1;
                      renderer.v.render(stage.v);
                    };
                  },
                  main: function (args) {
                    var tmp$0;
                    var stage = {v: new PIXI.Stage(9946478, true)};
                    var renderer = {v: PIXI.autoDetectRenderer(Kotlin.Long.fromNumber(window.innerWidth), Kotlin.Long.fromNumber(window.innerHeight))};
                    ((tmp$0 = document.body) != null ? tmp$0 : Kotlin.throwNPE()).appendChild(renderer.v.view);
                    renderer.v.view.style.setProperty('position', 'absolute', '');
                    renderer.v.view.style.setProperty('top', '0px', '');
                    renderer.v.view.style.setProperty('left', '0px', '');
                    var texture = PIXI.Texture.fromImage('p2.jpeg');
                    var tilingSprite = {v: new PIXI.TilingSprite(texture, window.innerWidth, window.innerHeight)};
                    var count = {v: 0.0};
                    stage.v.addChild(tilingSprite.v);
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_08.main$animate(count, tilingSprite, renderer, stage);
                    requestAnimFrame(animate);
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
  _.net.abesto.kotlin.js.pixi.examples.example_08.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
