(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_07: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_07 */ {
                  main$animate: function (bunny, renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      bunny.v.rotation = bunny.v.rotation + 0.1;
                      renderer.v.render(stage.v);
                    };
                  },
                  main: function (args) {
                    var tmp$0, tmp$1;
                    var stage = {v: new PIXI.Stage(6750105)};
                    var rendererOptions = new Object();
                    rendererOptions.transparent = true;
                    var renderer = {v: PIXI.autoDetectRenderer(400, 300, rendererOptions)};
                    ((tmp$0 = document.body) != null ? tmp$0 : Kotlin.throwNPE()).appendChild(renderer.v.view);
                    renderer.v.view.style.setProperty('position', 'absolute', '');
                    renderer.v.view.style.setProperty('top', ((tmp$1 = document.getElementById('textHolder')) != null ? tmp$1 : Kotlin.throwNPE()).getBoundingClientRect().top.toString() + 'px', '');
                    var texture = PIXI.Texture.fromImage('bunny.png');
                    var bunny = {v: new PIXI.Sprite(texture)};
                    bunny.v.anchor.x = 0.5;
                    bunny.v.anchor.y = 0.5;
                    bunny.v.position.x = 200.0;
                    bunny.v.position.y = 150.0;
                    stage.v.addChild(bunny.v);
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_07.main$animate(bunny, renderer, stage);
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
  _.net.abesto.kotlin.js.pixi.examples.example_07.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
