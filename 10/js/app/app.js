(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_10: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_10 */ {
                  WebFontFamilies: Kotlin.createClass(null, function (families) {
                    this.families = families;
                  }),
                  WebFontConfig: Kotlin.createClass(null, function (google, active) {
                    this.google = google;
                    this.active = active;
                  }),
                  init$f: function () {
                    var s = new Object();
                    s.font = '35px Snippet';
                    s.fill = 'white';
                    s.align = 'left';
                    return s;
                  },
                  init$f_0: function () {
                    var s = new Object();
                    s.font = 'bold 60px Podkova';
                    s.fill = '#cc00ff';
                    s.align = 'center';
                    s.stroke = '#FFFFFF';
                    s.strokeThickness = Kotlin.Long.fromInt(6);
                    return s;
                  },
                  init$f_1: function () {
                    var s = new Object();
                    s.font = 'bold italic 60px Arvo';
                    s.fill = '#3e1707';
                    s.align = 'center';
                    s.stroke = '#a4410e';
                    s.strokeThickness = Kotlin.Long.fromInt(7);
                    return s;
                  },
                  onAssetsLoaded$f: function () {
                    var s = new Object();
                    s.font = '35px Desyrel';
                    s.align = 'right';
                    return s;
                  },
                  init$onAssetsLoaded: function (stage) {
                    return function () {
                      var bitmapFontText = new PIXI.BitmapText('bitmap fonts are\n now supported!', _.net.abesto.kotlin.js.pixi.examples.example_10.onAssetsLoaded$f());
                      bitmapFontText.position.x = 620 - bitmapFontText.width - 20;
                      bitmapFontText.position.y = 20.0;
                      stage.addChild(bitmapFontText);
                    };
                  },
                  init$animate: function (count, score, countingText, spinningText, renderer, stage) {
                    return function animate() {
                      requestAnimFrame(animate);
                      count.v++;
                      if (count.v === 50) {
                        count.v = 0;
                        score.v++;
                        countingText.v.setText('COUNT 4EVAR: ' + score.v);
                      }
                      spinningText.v.rotation = spinningText.v.rotation + 0.03;
                      renderer.v.render(stage);
                    };
                  },
                  main$init: function () {
                    var stage = new PIXI.Stage(Kotlin.Long.fromInt(6750105));
                    var background = PIXI.Sprite.fromImage('textDemoBG.jpg');
                    stage.addChild(background);
                    var count = {v: 0};
                    var score = {v: 0};
                    var textSample = new PIXI.Text('Pixi.js can has\nmultiline text!', _.net.abesto.kotlin.js.pixi.examples.example_10.init$f());
                    textSample.position.x = 20.0;
                    textSample.position.y = 20.0;
                    var spinningText = {v: new PIXI.Text("I'm fun!", _.net.abesto.kotlin.js.pixi.examples.example_10.init$f_0())};
                    spinningText.v.anchor.x = 0.5;
                    spinningText.v.anchor.y = spinningText.v.anchor.x;
                    spinningText.v.position.x = 620.0 / 2;
                    spinningText.v.position.y = 400.0 / 2;
                    var countingText = {v: new PIXI.Text('COUNT 4EVAR: 0', _.net.abesto.kotlin.js.pixi.examples.example_10.init$f_1())};
                    countingText.v.position.x = 620.0 / 2;
                    countingText.v.position.y = 320.0;
                    countingText.v.anchor.x = 0.5;
                    stage.addChild(textSample);
                    stage.addChild(spinningText.v);
                    stage.addChild(countingText.v);
                    var assetsToLoader = ['desyrel.fnt'];
                    var loader = new PIXI.AssetLoader(assetsToLoader);
                    var onAssetsLoaded = _.net.abesto.kotlin.js.pixi.examples.example_10.init$onAssetsLoaded(stage);
                    loader.onComplete = onAssetsLoaded;
                    loader.load();
                    var renderer = {v: PIXI.autoDetectRenderer(Kotlin.Long.fromInt(620), Kotlin.Long.fromInt(400))};
                    document.body.appendChild(renderer.v.view);
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_10.init$animate(count, score, countingText, spinningText, renderer, stage);
                    requestAnimFrame(animate);
                  },
                  main: function (args) {
                    var tmp$0;
                    var init = _.net.abesto.kotlin.js.pixi.examples.example_10.main$init;
                    window.WebFontConfig = new _.net.abesto.kotlin.js.pixi.examples.example_10.WebFontConfig(new _.net.abesto.kotlin.js.pixi.examples.example_10.WebFontFamilies(['Snippet', 'Arvo:700italic', 'Podkova:700']), init);
                    var wf = document.createElement('script');
                    if (Kotlin.equals('https:', window.location.protocol)) {
                      tmp$0 = 'https';
                    }
                     else {
                      tmp$0 = 'http';
                    }
                    wf.setAttribute('src', tmp$0 + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
                    wf.setAttribute('type', 'text/javascript');
                    wf.setAttribute('async', 'true');
                    var s = document.getElementsByTagName('script').item(0);
                    s.parentNode.insertBefore(wf, s);
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
  _.net.abesto.kotlin.js.pixi.examples.example_10.main([]);
}(Kotlin));
