(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_11: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_11 */ {
                  main$animate: function (bunnys, count, count2, renderTexture, renderTexture2, bunnyContainer, stage, outputSprite, renderer) {
                    return function animate() {
                      var tmp$0;
                      requestAnimFrame(animate);
                      tmp$0 = bunnys.v.length - 1;
                      for (var i = 0; i <= tmp$0; i++) {
                        var bunny = bunnys.v[i];
                        bunny.rotation = bunny.rotation + 0.1;
                      }
                      count.v += 0.01;
                      count2.v++;
                      var temp = renderTexture.v;
                      renderTexture.v = renderTexture2.v;
                      renderTexture2.v = temp;
                      bunnyContainer.v.rotation = bunnyContainer.v.rotation - 0.01;
                      renderTexture.v.render(stage.v, true);
                      outputSprite.v.setTexture(renderTexture.v);
                      outputSprite.v.scale.x = 1 + Math.sin(count.v) * 0.2;
                      outputSprite.v.scale.y = outputSprite.v.scale.x;
                      renderTexture2.v.render(stage.v, false);
                      renderer.v.render(stage.v);
                    };
                  },
                  main: function (args) {
                    var tmp$0;
                    var stage = {v: new PIXI.Stage(0)};
                    var renderer = {v: PIXI.autoDetectRenderer(800, 600)};
                    renderer.v.view.style.setProperty('width', window.innerWidth.toString() + 'px', '');
                    renderer.v.view.style.setProperty('height', window.innerHeight.toString() + 'px', '');
                    renderer.v.view.style.setProperty('display', 'block', '');
                    document.body.appendChild(renderer.v.view);
                    var renderTexture = {v: new PIXI.RenderTexture(800, 600)};
                    var renderTexture2 = {v: new PIXI.RenderTexture(800, 600)};
                    var currentTexture = renderTexture.v;
                    var outputSprite = {v: new PIXI.Sprite(currentTexture)};
                    outputSprite.v.position.x = 800.0 / 2;
                    outputSprite.v.position.y = 600.0 / 2;
                    outputSprite.v.anchor.x = 0.5;
                    outputSprite.v.anchor.y = 0.5;
                    stage.v.addChild(outputSprite.v);
                    var bunnyContainer = {v: new PIXI.DisplayObjectContainer()};
                    bunnyContainer.v.position.x = 800.0 / 2;
                    bunnyContainer.v.position.y = 600.0 / 2;
                    stage.v.addChild(bunnyContainer.v);
                    var fruits = ['spinObj_01.png', 'spinObj_02.png', 'spinObj_03.png', 'spinObj_04.png', 'spinObj_05.png', 'spinObj_06.png', 'spinObj_07.png', 'spinObj_08.png'];
                    var bunnys = {v: []};
                    tmp$0 = 19;
                    for (var i = 0; i <= tmp$0; i++) {
                      var bunny = PIXI.Sprite.fromImage(fruits[i % fruits.length]);
                      bunny.position.x = Math.random() * 400 - 200;
                      bunny.position.y = Math.random() * 400 - 200;
                      bunny.anchor.x = 0.5;
                      bunny.anchor.y = 0.5;
                      bunnyContainer.v.addChild(bunny);
                      bunnys.v.push(bunny);
                    }
                    var count = {v: 0.0};
                    var count2 = {v: 0};
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_11.main$animate(bunnys, count, count2, renderTexture, renderTexture2, bunnyContainer, stage, outputSprite, renderer);
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
  _.net.abesto.kotlin.js.pixi.examples.example_11.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
