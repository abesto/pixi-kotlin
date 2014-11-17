(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_12c: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_12c */ {
                  main$animate: function (postition, background, background2, foreground, foreground2, renderer, stage) {
                    return function animate() {
                      postition.v += 10.0;
                      background.v.position.x = -(postition.v * 0.6);
                      background.v.position.x = background.v.position.x % (1286 * 2);
                      if (background.v.position.x < 0)
                        background.v.position.x = background.v.position.x + 1286 * 2;
                      background.v.position.x = background.v.position.x - 1286;
                      background2.v.position.x = -(postition.v * 0.6) + 1286;
                      background2.v.position.x = background2.v.position.x % (1286 * 2);
                      if (background2.v.position.x < 0)
                        background2.v.position.x = background2.v.position.x + 1286 * 2;
                      background2.v.position.x = background2.v.position.x - 1286;
                      foreground.v.position.x = -postition.v;
                      foreground.v.position.x = foreground.v.position.x % (1286 * 2);
                      if (foreground.v.position.x < 0)
                        foreground.v.position.x = foreground.v.position.x + 1286 * 2;
                      foreground.v.position.x = foreground.v.position.x - 1286;
                      foreground2.v.position.x = -postition.v + 1286;
                      foreground2.v.position.x = foreground2.v.position.x % (1286 * 2);
                      if (foreground2.v.position.x < 0)
                        foreground2.v.position.x = foreground2.v.position.x + 1286 * 2;
                      foreground2.v.position.x = foreground2.v.position.x - 1286;
                      requestAnimFrame(animate);
                      renderer.v.render(stage.v);
                    };
                  },
                  onAssetsLoaded$f: function (pixie) {
                    return function (it) {
                      pixie.state.setAnimationByName('jump', false);
                      pixie.state.addAnimationByName('running', true);
                    };
                  },
                  onAssetsLoaded$f_0: function (it) {
                    window.open('https://github.com/GoodBoyDigital/pixi.js', '_blank');
                  },
                  main$onAssetsLoaded: function (background, background2, stage, foreground, foreground2, animate) {
                    return function () {
                      background.v = PIXI.Sprite.fromImage('data/iP4_BGtile.jpg');
                      background2.v = PIXI.Sprite.fromImage('data/iP4_BGtile.jpg');
                      stage.v.addChild(background.v);
                      stage.v.addChild(background2.v);
                      foreground.v = PIXI.Sprite.fromImage('data/iP4_ground.png');
                      foreground2.v = PIXI.Sprite.fromImage('data/iP4_ground.png');
                      stage.v.addChild(foreground.v);
                      stage.v.addChild(foreground2.v);
                      foreground.v.position.y = 640 - foreground2.v.height;
                      foreground2.v.position.y = foreground.v.position.y;
                      var pixie = new PIXI.Spine('data/PixieSpineData.json');
                      var scale = 0.3;
                      pixie.position.x = 1024.0 / 3;
                      pixie.position.y = 500.0;
                      pixie.scale.x = scale;
                      pixie.scale.y = scale;
                      stage.v.addChild(pixie);
                      pixie.stateData.setMixByName('running', 'jump', 0.2);
                      pixie.stateData.setMixByName('jump', 'running', 0.4);
                      pixie.state.setAnimationByName('running', true);
                      stage.v.mousedown = _.net.abesto.kotlin.js.pixi.examples.example_12c.onAssetsLoaded$f(pixie);
                      stage.v.touchstart = stage.v.mousedown;
                      var logo = PIXI.Sprite.fromImage('../../logo_small.png');
                      stage.v.addChild(logo);
                      logo.anchor.x = 1.0;
                      logo.position.x = 1024.0;
                      logo.scale.x = 0.5;
                      logo.scale.y = logo.scale.y;
                      logo.position.y = 640.0 - 70;
                      logo.interactive = true;
                      logo.buttonMode = true;
                      logo.click = _.net.abesto.kotlin.js.pixi.examples.example_12c.onAssetsLoaded$f_0;
                      logo.tap = logo.click;
                      requestAnimFrame(animate);
                    };
                  },
                  main: function (args) {
                    var assetsToLoader = ['logo_small.png', 'data/PixieSpineData.json', 'data/Pixie.json', 'data/iP4_BGtile.jpg', 'data/iP4_ground.png'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    loader.load();
                    var stage = {v: new PIXI.Stage(Kotlin.Long.fromInt(16777215), true)};
                    var renderer = {v: PIXI.autoDetectRenderer(Kotlin.Long.fromInt(1024), Kotlin.Long.fromInt(640))};
                    renderer.v.view.style.setProperty('display', 'block', '');
                    renderer.v.view.style.setProperty('width', '100%', '');
                    renderer.v.view.style.setProperty('height', '100%', '');
                    document.body.appendChild(renderer.v.view);
                    var postition = {v: 0.0};
                    var background = {v: null};
                    var background2 = {v: null};
                    var foreground = {v: null};
                    var foreground2 = {v: null};
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_12c.main$animate(postition, background, background2, foreground, foreground2, renderer, stage);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_12c.main$onAssetsLoaded(background, background2, stage, foreground, foreground2, animate);
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
  _.net.abesto.kotlin.js.pixi.examples.example_12c.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
