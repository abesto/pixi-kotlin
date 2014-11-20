package net.abesto.kotlin.js.pixi.examples.example_12

import kotlin.js.dom.html.window
import kotlin.js.dom.html.document
import net.abesto.kotlin.js.pixi.requestAnimFrame
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.loaders.AssetLoader
import net.abesto.kotlin.js.pixi.extras.Spine
import net.abesto.kotlin.js.pixi.display.Sprite


fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    var stage = Stage(0xFFFFFF, true)

    // create a renderer instance
    var renderer = autoDetectRenderer(window.innerWidth, window.innerHeight)

    // set the canvas width and height to fill the screen
    renderer.view.style.setProperty("display", "block", "")

    // add render view to DOM
    document.body.appendChild(renderer.view)

    // create an array of assets to load
    val assetsToLoader = array("data/spineboy.json", "data/spineboy.anim")

    // create a new loader
    val loader = AssetLoader(assetsToLoader)

    fun onAssetsLoaded() {
        var spineBoy = Spine("data/spineboy.anim")

        spineBoy.position.x = window.innerWidth / 2
        spineBoy.position.y = window.innerHeight

        spineBoy.scale.x = window.innerHeight / 400
        spineBoy.scale.y = spineBoy.scale.x
        // set up the mixes!
        spineBoy.stateData.setMixByName("walk", "jump", 0.2)
        spineBoy.stateData.setMixByName("jump", "walk", 0.4)

        spineBoy.state.setAnimationByName("walk", true)


        stage.addChild(spineBoy)

        stage.click = {
            spineBoy.state.setAnimationByName("jump", false)
            spineBoy.state.addAnimationByName("walk", true)
        }

        var logo = Sprite.fromImage("logo_small.png")
        stage.addChild(logo)


        logo.anchor.x = 1.0
        logo.position.x = window.innerWidth
        logo.scale.x = 0.5
        logo.scale.y = logo.scale.x
        logo.position.y = window.innerHeight - 70
        logo.interactive = true
        logo.buttonMode = true
        logo.click = { window.open("https://github.com/GoodBoyDigital/pixi.js", "_blank") }
        logo.tap = logo.click
    }
    // use callback
    loader.onComplete = ::onAssetsLoaded

    //begin load
    loader.load()

    fun animate() {
        requestAnimFrame(::animate)
        renderer.render(stage)
    }
    requestAnimFrame(::animate)
}
