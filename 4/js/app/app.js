(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_4: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_4 */ {
                  Star: Kotlin.createClass(null, function (sprite, x, y) {
                    this.sprite = sprite;
                    this.x = x;
                    this.y = y;
                  }),
                  main$newWave: function (sx, sy) {
                    return function () {
                      sx.v = 1.0 + Math.random() / 20;
                      sy.v = 1.0 + Math.random() / 20;
                      document.getElementById('sx').innerHTML = 'SX: ' + sx.v + '<br />SY: ' + sy.v;
                    };
                  },
                  main$resize: function (w, h, slideX, slideY, renderer) {
                    return function () {
                      w.v = ($(window).width() | 0) - 16;
                      h.v = ($(window).height() | 0) - 16;
                      slideX.v = w.v / 2 | 0;
                      slideY.v = h.v / 2 | 0;
                      renderer.v.resize(w.v, h.v);
                    };
                  },
                  update$f: function (update) {
                    return function () {
                      update();
                    };
                  },
                  main$update: function (starCount, stars, slideX, slideY, sx, sy, w, h, renderer, stage) {
                    return function update() {
                      var tmp$0;
                      tmp$0 = starCount.v - 1;
                      for (var i = 0; i <= tmp$0; i++) {
                        stars.v[i].sprite.position.x = stars.v[i].x + slideX.v;
                        stars.v[i].sprite.position.y = stars.v[i].y + slideY.v;
                        stars.v[i].x = stars.v[i].x * sx.v;
                        stars.v[i].y = stars.v[i].y * sy.v;
                        if (stars.v[i].x > w.v) {
                          stars.v[i].x = stars.v[i].x - w.v;
                        }
                         else if (stars.v[i].x < -w.v) {
                          stars.v[i].x = stars.v[i].x + w.v;
                        }
                        if (stars.v[i].y > h.v) {
                          stars.v[i].y = stars.v[i].y - h.v;
                        }
                         else if (stars.v[i].y < -h.v) {
                          stars.v[i].y = stars.v[i].y + h.v;
                        }
                      }
                      renderer.v.render(stage.v);
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_4.update$f(update));
                    };
                  },
                  main$f: function (resize) {
                    return function () {
                      resize();
                    };
                  },
                  main$f_0: function (resize) {
                    return function () {
                      resize();
                    };
                  },
                  start$f: function (newWave) {
                    return function () {
                      newWave();
                    };
                  },
                  start$f_0: function (update) {
                    return function () {
                      update();
                    };
                  },
                  main$start: function (renderer, starCount, w, slideX, h, slideY, stars, stage, newWave, sx, sy, resize, update) {
                    return function () {
                      var tmp$0;
                      var ballTexture = PIXI.Texture.fromImage('assets/bubble_32x32.png');
                      document.body.appendChild(renderer.v.view);
                      tmp$0 = starCount.v - 1;
                      for (var i = 0; i <= tmp$0; i++) {
                        var tempBall = new PIXI.Sprite(ballTexture);
                        tempBall.position.x = Math.random() * w.v - slideX.v;
                        tempBall.position.y = Math.random() * h.v - slideY.v;
                        tempBall.anchor.x = 0.5;
                        tempBall.anchor.y = 0.5;
                        stars.v.push(new _.net.abesto.kotlin.js.pixi.examples.example_4.Star(tempBall, tempBall.position.x, tempBall.position.y));
                        stage.v.addChild(tempBall);
                      }
                      document.getElementById('rnd').onclick = _.net.abesto.kotlin.js.pixi.examples.example_4.start$f(newWave);
                      document.getElementById('sx').innerHTML = 'SX: ' + sx.v + '<br />SY: ' + sy.v;
                      resize();
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_4.start$f_0(update));
                    };
                  },
                  main$f_1: function (start) {
                    return function () {
                      start();
                    };
                  },
                  main: function (args) {
                    var w = {v: 1024};
                    var h = {v: 768};
                    var starCount = {v: 2500};
                    var sx = {v: 1.0 + Math.random() / 20};
                    var sy = {v: 1.0 + Math.random() / 20};
                    var slideX = {v: w.v / 2 | 0};
                    var slideY = {v: h.v / 2 | 0};
                    var stars = {v: []};
                    var renderer = {v: PIXI.autoDetectRenderer(w.v, h.v)};
                    var stage = {v: new PIXI.Stage(0)};
                    var newWave = _.net.abesto.kotlin.js.pixi.examples.example_4.main$newWave(sx, sy);
                    var resize = _.net.abesto.kotlin.js.pixi.examples.example_4.main$resize(w, h, slideX, slideY, renderer);
                    var update = _.net.abesto.kotlin.js.pixi.examples.example_4.main$update(starCount, stars, slideX, slideY, sx, sy, w, h, renderer, stage);
                    $(window).resize(_.net.abesto.kotlin.js.pixi.examples.example_4.main$f(resize));
                    window.onorientationchange = _.net.abesto.kotlin.js.pixi.examples.example_4.main$f_0(resize);
                    var start = _.net.abesto.kotlin.js.pixi.examples.example_4.main$start(renderer, starCount, w, slideX, h, slideY, stars, stage, newWave, sx, sy, resize, update);
                    $(_.net.abesto.kotlin.js.pixi.examples.example_4.main$f_1(start));
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
  _.net.abesto.kotlin.js.pixi.examples.example_4.main([]);
}(Kotlin));
