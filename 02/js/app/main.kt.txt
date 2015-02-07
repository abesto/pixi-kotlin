package net.abesto.kotlin.js.pixi.examples.example_02

import net.abesto.kotlin.js.pixi.*
import net.abesto.kotlin.js.extensions.*

import kotlin.js.dom.html.document
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.loaders.AssetLoader
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer


fun main(args: Array<String>) {
    // create an array of assets to load, in the form of json files generated from TexturePacker
    val assetsToLoader = array("SpriteSheet.json")

    // create a new loader
    val loader = AssetLoader(assetsToLoader)

    //begin load
    loader.load()

    // holder to store aliens
    val aliens: Array<Sprite> = array()
    val alienFrames = array("eggHead.png", "flowerTop.png", "helmlok.png", "skully.png")

    var count = 0.0

    // create an new instance of a pixi stage
    val stage = Stage(0xFFFFFF)

    // create a renderer instance.
    val renderer = autoDetectRenderer(800, 600)

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view)

    // create an empty container
    val alienContainer = DisplayObjectContainer()
    alienContainer.position.x = 400.0
    alienContainer.position.y = 300.0

    stage.addChild(alienContainer)

    fun animate() {
        // just for fun, lets rotate mr rabbit a little
        for (i in 0 .. 99)
        {
            val alien = aliens[i]
            alien.rotation += 0.1
        }

        count += 0.01
        alienContainer.scale.x = Math.sin(count)
        alienContainer.scale.y = Math.sin(count)

        alienContainer.rotation += 0.01

        // render the stage
        renderer.render(stage)

        requestAnimFrame(::animate)
    }
    
    fun onAssetsLoaded()
    {
        // add a bunch of aliens with textures from image paths
        for (i in 0 .. 99)
        {
            val frameName = alienFrames[i % 4]

            // create an alien using the frame name..
            val alien = Sprite.fromFrame(frameName)
            alien.tint = (Math.random() * 0xFFFFFF).toInt()

            /*
             * fun fact for the day :)
             * another way of doing the above would be
             * val texture = Texture.fromFrame(frameName)
             * val alien = Sprite(texture)
             */
            alien.position.x = Math.random() * 800 - 400
            alien.position.y = Math.random() * 600 - 300
            alien.anchor.x = 0.5
            alien.anchor.y = 0.5
            aliens.push(alien)
            alienContainer.addChild(alien)
        }

        // start animating
        requestAnimFrame(::animate)
    }
    
    // use callback
    loader.onComplete = ::onAssetsLoaded
}
