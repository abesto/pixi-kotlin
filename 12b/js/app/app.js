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
                  onAssetsLoaded$f: function (it) {
                    window.open('https://github.com/GoodBoyDigital/pixi.js', '_blank');
                  },
                  main$onAssetsLoaded: function (stage) {
                    return function () {
                      var dragon = new PIXI.Spine('data/dragonBones.anim');
                      var scale = 1.0;
                      dragon.position.x = window.innerWidth / 2;
                      dragon.position.y = window.innerHeight / 2 + 450 * scale;
                      dragon.scale.x = scale;
                      dragon.scale.y = dragon.scale.x;
                      dragon.state.setAnimationByName('flying', true);
                      stage.v.addChild(dragon);
                      var logo = PIXI.Sprite.fromImage('logo_small.png');
                      stage.v.addChild(logo);
                      logo.anchor.x = 1.0;
                      logo.position.x = window.innerWidth;
                      logo.scale.x = 0.5;
                      logo.scale.y = logo.scale.x;
                      logo.position.y = window.innerHeight - 70;
                      logo.interactive = true;
                      logo.buttonMode = true;
                      logo.click = _.net.abesto.kotlin.js.pixi.examples.example_12b.onAssetsLoaded$f;
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
                    var assetsToLoader = ['logo_small.png', 'data/dragonBones.json', 'data/dragonBones.anim'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    var stage = {v: new PIXI.Stage(Kotlin.Long.fromInt(16777215), true)};
                    var renderer = {v: PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight)};
                    renderer.v.view.style.setProperty('display', 'block', '');
                    document.body.appendChild(renderer.v.view);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_12b.main$onAssetsLoaded(stage);
                    loader.onComplete = onAssetsLoaded;
                    loader.load();
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_12b.main$animate(renderer, stage);
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
  _.net.abesto.kotlin.js.pixi.examples.example_12b.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
