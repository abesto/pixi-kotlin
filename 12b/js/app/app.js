(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_12b: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_12b */ {
                  main$animate: function (dragon, renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      dragon.v.update(0.01666666666667);
                      renderer.render(stage);
                    };
                  },
                  onAssetsLoaded$f: function (it) {
                    window.open('https://github.com/GoodBoyDigital/pixi.js', '_blank');
                  },
                  main$onAssetsLoaded: function (dragon, stage, animate) {
                    return function () {
                      dragon.v = new PIXI.Spine('data/dragon.json');
                      dragon.v.skeleton.setToSetupPose();
                      dragon.v.update(0);
                      dragon.v.autoUpdate = false;
                      var dragonCage = new PIXI.DisplayObjectContainer();
                      dragonCage.addChild(dragon.v);
                      var localRect = dragon.v.getLocalBounds();
                      dragon.v.position.set(-localRect.x, -localRect.y);
                      var scale = Math.min(window.innerWidth * 0.7 / dragonCage.width, window.innerHeight * 0.7 / dragonCage.height);
                      dragonCage.scale.set(scale, scale);
                      dragonCage.position.set((window.innerWidth - dragonCage.width) * 0.5, (window.innerHeight - dragonCage.height) * 0.5);
                      stage.addChild(dragonCage);
                      dragon.v.state.setAnimationByName(0, 'flying', true);
                      var logo = PIXI.Sprite.fromImage('logo_small.png');
                      stage.addChild(logo);
                      logo.anchor.x = 1.0;
                      logo.position.x = window.innerWidth;
                      logo.scale.x = 0.5;
                      logo.scale.y = logo.scale.x;
                      logo.position.y = window.innerHeight - 70;
                      logo.interactive = true;
                      logo.buttonMode = true;
                      logo.click = _.net.abesto.kotlin.js.pixi.examples.example_12b.onAssetsLoaded$f;
                      logo.tap = logo.click;
                      requestAnimFrame(animate);
                    };
                  },
                  main: function (args) {
                    var assetsToLoader = ['logo_small.png', 'data/dragon.json'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    loader.load();
                    var stage = new PIXI.Stage(16777215, true);
                    var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
                    renderer.view.style.setProperty('display', 'block', '');
                    document.body.appendChild(renderer.view);
                    var dragon = {v: null};
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_12b.main$animate(dragon, renderer, stage);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_12b.main$onAssetsLoaded(dragon, stage, animate);
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
  _.net.abesto.kotlin.js.pixi.examples.example_12b.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
