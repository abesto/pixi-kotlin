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
                  Bunny: Kotlin.createClass(function () {
                    return [PIXI.Sprite];
                  }, function $fun() {
                    $fun.baseInitializer.call(this, noImpl);
                    this.data = null;
                    this.dragging = false;
                  }),
                  createBunny$f: function (data) {
                    this;
                    this.data = data;
                    this.alpha = 0.9;
                    this.dragging = true;
                  },
                  createBunny$f_0: function (data) {
                    this;
                    this.alpha = 1.0;
                    this.dragging = false;
                    this.data = null;
                  },
                  createBunny$f_1: function (data) {
                    var tmp$0;
                    this;
                    if (this.dragging) {
                      var newPosition = ((tmp$0 = this.data) != null ? tmp$0 : Kotlin.throwNPE()).getLocalPosition(this.parent);
                      this.position.x = newPosition.x;
                      this.position.y = newPosition.y;
                    }
                  },
                  main$createBunny: function (texture, stage) {
                    return function (x, y) {
                      var bunny = new PIXI.Sprite(texture.v);
                      bunny.interactive = true;
                      bunny.buttonMode = true;
                      bunny.anchor.x = 0.5;
                      bunny.anchor.y = 0.5;
                      bunny.scale.x = 3.0;
                      bunny.scale.y = bunny.scale.x;
                      bunny.mousedown = _.net.abesto.kotlin.js.pixi.examples.example_08.createBunny$f;
                      bunny.touchstart = bunny.mousedown;
                      bunny.mouseup = _.net.abesto.kotlin.js.pixi.examples.example_08.createBunny$f_0;
                      bunny.mouseupoutside = bunny.mouseup;
                      bunny.touchend = bunny.mouseup;
                      bunny.touchendoutside = bunny.mouseup;
                      bunny.mousemove = _.net.abesto.kotlin.js.pixi.examples.example_08.createBunny$f_1;
                      bunny.touchmove = bunny.mousemove;
                      bunny.position.x = x;
                      bunny.position.y = y;
                      stage.v.addChild(bunny);
                    };
                  },
                  main$animate: function (renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      renderer.v.render(stage.v);
                    };
                  },
                  main: function (args) {
                    var tmp$0;
                    var stage = {v: new PIXI.Stage(Kotlin.Long.fromInt(9946478), true)};
                    var renderer = {v: PIXI.autoDetectRenderer(Kotlin.Long.fromNumber(window.innerWidth), Kotlin.Long.fromNumber(window.innerHeight))};
                    document.body.appendChild(renderer.v.view);
                    renderer.v.view.style.setProperty('position', 'absolute', '');
                    renderer.v.view.style.setProperty('top', '0px', '');
                    renderer.v.view.style.setProperty('left', '0px', '');
                    var texture = {v: PIXI.Texture.fromImage('bunny.png')};
                    var createBunny = _.net.abesto.kotlin.js.pixi.examples.example_08.main$createBunny(texture, stage);
                    tmp$0 = 9;
                    for (var i = 0; i <= tmp$0; i++) {
                      createBunny(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
                    }
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_08.main$animate(renderer, stage);
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
