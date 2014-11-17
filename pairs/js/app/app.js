(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_pairs: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_pairs */ {
                  Tile: Kotlin.createClass(function () {
                    return [PIXI.Sprite];
                  }, function $fun(texture) {
                    $fun.baseInitializer.call(this, texture);
                    this.isSelected = false;
                    this.theVal = 0;
                  }),
                  animate$f: function (animate) {
                    return function () {
                      animate();
                    };
                  },
                  main$animate: function (renderer, stage) {
                    return function animate() {
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_pairs.animate$f(animate));
                      renderer.v.render(stage.v);
                    };
                  },
                  f: function (firstTile, gameContainer, secondTile, canPick) {
                    return function () {
                      var tmp$0, tmp$1;
                      if (firstTile.v != null)
                        gameContainer.v.removeChild((tmp$0 = firstTile.v) != null ? tmp$0 : Kotlin.throwNPE());
                      if (secondTile.v != null)
                        gameContainer.v.removeChild((tmp$1 = secondTile.v) != null ? tmp$1 : Kotlin.throwNPE());
                      firstTile.v = null;
                      secondTile.v = null;
                      canPick.v = true;
                    };
                  },
                  f_0: function (firstTile, secondTile, canPick) {
                    return function () {
                      var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5;
                      (tmp$0 = firstTile.v) != null ? (tmp$0.isSelected = false) : null;
                      (tmp$1 = secondTile.v) != null ? (tmp$1.isSelected = false) : null;
                      (tmp$2 = firstTile.v) != null ? (tmp$2.tint = Kotlin.Long.ZERO) : null;
                      (tmp$3 = secondTile.v) != null ? (tmp$3.tint = Kotlin.Long.ZERO) : null;
                      (tmp$4 = firstTile.v) != null ? (tmp$4.alpha = 0.5) : null;
                      (tmp$5 = secondTile.v) != null ? (tmp$5.alpha = 0.5) : null;
                      firstTile.v = null;
                      secondTile.v = null;
                      canPick.v = true;
                    };
                  },
                  onTilesLoaded$f: function (canPick, firstTile, secondTile, gameContainer) {
                    return function (it) {
                      var tmp$0, tmp$1;
                      this;
                      if (canPick.v) {
                        if (!this.isSelected) {
                          this.isSelected = true;
                          this.tint = Kotlin.Long.fromInt(16777215);
                          this.alpha = 1.0;
                          if (firstTile.v == null) {
                            firstTile.v = this;
                          }
                           else {
                            secondTile.v = this;
                            canPick.v = false;
                            if (((tmp$0 = firstTile.v) != null ? tmp$0.theVal : null) === ((tmp$1 = secondTile.v) != null ? tmp$1.theVal : null)) {
                              window.setTimeout(_.net.abesto.kotlin.js.pixi.examples.example_pairs.f(firstTile, gameContainer, secondTile, canPick), 1000);
                            }
                             else {
                              window.setTimeout(_.net.abesto.kotlin.js.pixi.examples.example_pairs.f_0(firstTile, secondTile, canPick), 1000);
                            }
                          }
                        }
                      }
                    };
                  },
                  main$onTilesLoaded: function (gameContainer, canPick, firstTile, secondTile) {
                    return function () {
                      var tmp$0, tmp$1, tmp$2;
                      var chosenTiles = [];
                      while (_.kotlin.get_size_eg9ybj$(chosenTiles) < 48) {
                        var candidate = Math.floor(Math.random() * 44);
                        if (chosenTiles.indexOf(candidate) === -1) {
                          chosenTiles.push(candidate, candidate);
                        }
                      }
                      tmp$0 = 95;
                      for (var i = 0; i <= tmp$0; i++) {
                        var from = Math.floor(Math.random() * 48);
                        var to = Math.floor(Math.random() * 48);
                        var tmp = chosenTiles[from];
                        chosenTiles[from] = chosenTiles[to];
                        chosenTiles[to] = tmp;
                      }
                      tmp$1 = 7;
                      for (var i_0 = 0; i_0 <= tmp$1; i_0++) {
                        tmp$2 = 5;
                        for (var j = 0; j <= tmp$2; j++) {
                          var tile = PIXI.Sprite.fromFrame(chosenTiles[i_0 * 6 + j].toString());
                          tile.buttonMode = true;
                          tile.interactive = true;
                          tile.isSelected = false;
                          tile.theVal = chosenTiles[i_0 * 6 + j];
                          tile.position.x = 7 + i_0 * 80;
                          tile.position.y = 7 + j * 80;
                          tile.tint = Kotlin.Long.ZERO;
                          tile.alpha = 0.5;
                          gameContainer.v.addChild(tile);
                          tile.mousedown = _.net.abesto.kotlin.js.pixi.examples.example_pairs.onTilesLoaded$f(canPick, firstTile, secondTile, gameContainer);
                          tile.touchstart = tile.mousedown;
                        }
                      }
                    };
                  },
                  main$f: function (onTilesLoaded) {
                    return function () {
                      onTilesLoaded();
                    };
                  },
                  main$f_0: function (animate) {
                    return function () {
                      animate();
                    };
                  },
                  main: function (args) {
                    var firstTile = {v: null};
                    var secondTile = {v: null};
                    var canPick = {v: true};
                    var stage = {v: new PIXI.Stage(Kotlin.Long.fromInt(8947848))};
                    var renderer = {v: PIXI.autoDetectRenderer(Kotlin.Long.fromInt(640), Kotlin.Long.fromInt(480))};
                    var tileAtlas = ['images.json'];
                    var loader = new PIXI.AssetLoader(tileAtlas);
                    var gameContainer = {v: new PIXI.DisplayObjectContainer()};
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_pairs.main$animate(renderer, stage);
                    var onTilesLoaded = _.net.abesto.kotlin.js.pixi.examples.example_pairs.main$onTilesLoaded(gameContainer, canPick, firstTile, secondTile);
                    stage.v.addChild(gameContainer.v);
                    document.body.appendChild(renderer.v.view);
                    loader.onComplete = _.net.abesto.kotlin.js.pixi.examples.example_pairs.main$f(onTilesLoaded);
                    loader.load();
                    requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_pairs.main$f_0(animate));
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
  _.net.abesto.kotlin.js.pixi.examples.example_pairs.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
