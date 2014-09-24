package net.abesto.kotlin.js.pixi.examples.example2

import net.abesto.kotlin.js.pixi.*
import js.dom.html.document


fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    val stage = PIXI.Stage(0xFFFFFF);

    // create a renderer instance.
    val renderer = PIXI.autoDetectRenderer(800, 600)

    // create an array of assets to load
    val assetsToLoader = array("SpriteSheet.json")

    // create a new loader
    val loader = PIXI.AssetLoader(assetsToLoader)

    // holder to store aliens
    val aliens: Array<PIXI.Sprite> = array()
    val alienFrames = array("eggHead.png", "flowerTop.png", "helmlok.png", "skully.png")

    // create an empty container
    val alienContainer = PIXI.DisplayObjectContainer()
    alienContainer.position.x = 400.0
    alienContainer.position.y = 300.0

    var count: Double = 0.0

    fun animate() {
        requestAnimFrame( { animate() } )

        // just for fun, lets rotate mr rabbit a little
        for (i in 0..99)
        {
            var alien = aliens[i]
            alien.rotation += 0.1
        }

        count += 0.01;
        alienContainer.scale.x = Math.sin(count)
        alienContainer.scale.y = Math.sin(count)

        alienContainer.rotation += 0.01
        // render the stage
        renderer.render(stage);
    }

    fun onAssetsLoaded() {
        // create a texture from an image path
        // add a bunch of aliens
        for (i in 0..99)
        {
            var frameName = alienFrames[i % 4];

            // create an alien using the frame name..
            var alien = PIXI.Sprite.fromFrame(frameName);

            /*
             * fun fact for the day :)
             * another way of doing the above would be
             * var texture = PIXI.Texture.fromFrame(frameName);
             * var alien = new PIXI.Sprite(texture);
             */

            alien.position.x = Math.random() * 800 - 400;
            alien.position.y = Math.random() * 600 - 300;
            alien.anchor.x = 0.5;
            alien.anchor.y = 0.5;
            aliens.push(alien);
            alienContainer.addChild(alien);
        }

        // start animating
        requestAnimFrame( { animate() } );
    }
    // use callback
    loader.onComplete = { onAssetsLoaded() }

    //begin load
    loader.load();

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);

    stage.addChild(alienContainer);
}
