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
                      spineBoy.v.state.setAnimationByName('jump', false);
                      spineBoy.v.state.addAnimationByName('walk', true);
                    };
                  },
                  onAssetsLoaded$f_0: function (it) {
                    window.open('https://github.com/GoodBoyDigital/pixi.js', '_blank');
                  },
                  main$onAssetsLoaded: function (stage) {
                    return function () {
                      var spineBoy = {v: new PIXI.Spine('data/spineboy.anim')};
                      spineBoy.v.position.x = window.innerWidth / 2;
                      spineBoy.v.position.y = window.innerHeight;
                      spineBoy.v.scale.x = window.innerHeight / 400;
                      spineBoy.v.scale.y = spineBoy.v.scale.x;
                      spineBoy.v.stateData.setMixByName('walk', 'jump', 0.2);
                      spineBoy.v.stateData.setMixByName('jump', 'walk', 0.4);
                      spineBoy.v.state.setAnimationByName('walk', true);
                      stage.v.addChild(spineBoy.v);
                      stage.v.click = _.net.abesto.kotlin.js.pixi.examples.example_12.onAssetsLoaded$f(spineBoy);
                      var logo = PIXI.Sprite.fromImage('../../logo_small.png');
                      stage.v.addChild(logo);
                      logo.anchor.x = 1.0;
                      logo.position.x = window.innerWidth;
                      logo.scale.x = 0.5;
                      logo.scale.y = logo.scale.x;
                      logo.position.y = window.innerHeight - 70;
                      logo.setInteractive(true);
                      logo.buttonMode = true;
                      logo.click = _.net.abesto.kotlin.js.pixi.examples.example_12.onAssetsLoaded$f_0;
                      logo.tap = logo.click;
                    };
                  },
                  main$animate: function (renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      renderer.v.render(stage.v);
                    };
                  },
                  main: function (args) {
                    var stage = {v: new PIXI.Stage(Kotlin.Long.fromInt(16777215), true)};
                    var renderer = {v: PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight)};
                    renderer.v.view.style.setProperty('display', 'block', '');
                    document.body.appendChild(renderer.v.view);
                    var assetsToLoader = ['data/spineboy.json', 'data/spineboy.anim'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_12.main$onAssetsLoaded(stage);
                    loader.onComplete = onAssetsLoaded;
                    loader.load();
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
