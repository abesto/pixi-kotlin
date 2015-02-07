(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_12: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_12 */ {
                  onAssetsLoaded$f: function (spineBoy) {
                    return function (it) {
                      spineBoy.state.setAnimationByName(0, 'jump', false);
                      spineBoy.state.addAnimationByName(0, 'walk', true, 0);
                    };
                  },
                  onAssetsLoaded$f_0: function (it) {
                    window.open('https://github.com/GoodBoyDigital/pixi.js', '_blank');
                  },
                  main$onAssetsLoaded: function (stage) {
                    return function () {
                      var spineBoy = new PIXI.Spine('data/spineboy.json');
                      spineBoy.position.x = window.innerWidth / 2;
                      spineBoy.position.y = window.innerHeight;
                      spineBoy.scale.x = window.innerHeight / 400;
                      spineBoy.scale.y = spineBoy.scale.x;
                      spineBoy.stateData.setMixByName('walk', 'jump', 0.2);
                      spineBoy.stateData.setMixByName('jump', 'walk', 0.4);
                      spineBoy.state.setAnimationByName(0, 'walk', true);
                      stage.addChild(spineBoy);
                      stage.click = _.net.abesto.kotlin.js.pixi.examples.example_12.onAssetsLoaded$f(spineBoy);
                      var logo = PIXI.Sprite.fromImage('logo_small.png');
                      stage.addChild(logo);
                      logo.anchor.x = 1.0;
                      logo.position.x = window.innerWidth;
                      logo.scale.x = 0.5;
                      logo.scale.y = logo.scale.x;
                      logo.position.y = window.innerHeight - 70;
                      logo.interactive = true;
                      logo.buttonMode = true;
                      logo.click = _.net.abesto.kotlin.js.pixi.examples.example_12.onAssetsLoaded$f_0;
                      logo.tap = logo.click;
                    };
                  },
                  main$animate: function (renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      renderer.render(stage);
                    };
                  },
                  main: function (args) {
                    var assetsToLoader = ['data/spineboy.json'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    loader.load();
                    var stage = new PIXI.Stage(16777215, true);
                    var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
                    document.body.appendChild(renderer.view);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_12.main$onAssetsLoaded(stage);
                    loader.onComplete = onAssetsLoaded;
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_12.main$animate(renderer, stage);
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
  _.net.abesto.kotlin.js.pixi.examples.example_12.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
