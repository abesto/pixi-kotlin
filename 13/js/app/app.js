(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_13: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_13 */ {
                  main$f: function (graphics) {
                    return function (it) {
                      graphics.lineStyle(Math.random() * 30, Math.random() * 16777215, 1.0);
                      graphics.moveTo(Math.random() * 620, Math.random() * 380);
                      graphics.bezierCurveTo(Math.random() * 620, Math.random() * 380, Math.random() * 620, Math.random() * 380, Math.random() * 620, Math.random() * 380);
                    };
                  },
                  main$animate: function (thing, count, renderer, stage) {
                    return function animate() {
                      thing.clear();
                      count.v += 0.1;
                      thing.clear();
                      thing.lineStyle(10, 16711680, 1.0);
                      thing.beginFill(16776960, 0.5);
                      thing.moveTo(-120 + Math.sin(count.v) * 20, -100 + Math.cos(count.v) * 20);
                      thing.lineTo(120 + Math.cos(count.v) * 20, -100 + Math.sin(count.v) * 20);
                      thing.lineTo(120 + Math.sin(count.v) * 20, 100 + Math.cos(count.v) * 20);
                      thing.lineTo(-120 + Math.cos(count.v) * 20, 100 + Math.sin(count.v) * 20);
                      thing.lineTo(-120 + Math.sin(count.v) * 20, -100 + Math.cos(count.v) * 20);
                      thing.rotation = count.v * 0.1;
                      renderer.render(stage);
                      requestAnimFrame(animate);
                    };
                  },
                  main: function (args) {
                    var tmp$0;
                    var stage = new PIXI.Stage(16777215, true);
                    stage.interactive = true;
                    var renderer = PIXI.autoDetectRenderer(620, 380);
                    ((tmp$0 = document.body) != null ? tmp$0 : Kotlin.throwNPE()).appendChild(renderer.view);
                    var graphics = new PIXI.Graphics();
                    graphics.beginFill(16724736);
                    graphics.lineStyle(10, 16767232, 1.0);
                    graphics.moveTo(50, 50);
                    graphics.lineTo(250, 50);
                    graphics.lineTo(100, 100);
                    graphics.lineTo(250, 220);
                    graphics.lineTo(50, 220);
                    graphics.lineTo(50, 50);
                    graphics.endFill();
                    graphics.lineStyle(10, 16711680, 0.8);
                    graphics.beginFill(16740363, 1.0);
                    graphics.moveTo(210, 300);
                    graphics.lineTo(450, 320);
                    graphics.lineTo(570, 350);
                    graphics.quadraticCurveTo(600, 0, 480, 100);
                    graphics.lineTo(330, 120);
                    graphics.lineTo(410, 200);
                    graphics.lineTo(210, 300);
                    graphics.endFill();
                    graphics.lineStyle(2, 255, 1.0);
                    graphics.drawRect(50, 250, 100, 100);
                    graphics.lineStyle(0);
                    graphics.beginFill(16776971, 0.5);
                    graphics.drawCircle(470, 200, 100);
                    graphics.endFill();
                    graphics.lineStyle(20, 3407616);
                    graphics.moveTo(30, 30);
                    graphics.lineTo(600, 300);
                    stage.addChild(graphics);
                    var thing = new PIXI.Graphics();
                    stage.addChild(thing);
                    thing.position.x = 620.0 / 2;
                    thing.position.y = 380.0 / 2;
                    var count = {v: 0.0};
                    stage.click = _.net.abesto.kotlin.js.pixi.examples.example_13.main$f(graphics);
                    stage.tap = stage.click;
                    var animate = _.net.abesto.kotlin.js.pixi.examples.example_13.main$animate(thing, count, renderer, stage);
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
  _.net.abesto.kotlin.js.pixi.examples.example_13.main([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
