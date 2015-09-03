package net.abesto.kotlin.js.pixi.examples.example_12

import kotlin.browser.*

import net.abesto.kotlin.js.pixi.requestAnimFrame
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.loaders.AssetLoader
import net.abesto.kotlin.js.pixi.extras.Spine
import net.abesto.kotlin.js.pixi.display.Sprite


fun main(args: Array<String>) {
    // create an array of assets to load

    val assetsToLoader = arrayOf("data/spineboy.json")

    // create a new loader
    val loader = AssetLoader(assetsToLoader)

    //begin load
    loader.load()


    // create an new instance of a pixi stage
    val stage = Stage(0xFFFFFF, true)

    // create a renderer instance
    val renderer = autoDetectRenderer(window.innerWidth, window.innerHeight)

    // add render view to DOM
    document.body!!.appendChild(renderer.view)

    fun onAssetsLoaded()
    {
        // create a spine boy
        val spineBoy = Spine("data/spineboy.json")

        // set the position
        spineBoy.position.x = window.innerWidth/2
        spineBoy.position.y = window.innerHeight

        spineBoy.scale.x = window.innerHeight / 400
        spineBoy.scale.y = spineBoy.scale.x

        // set up the mixes!
        spineBoy.stateData.setMixByName("walk", "jump", 0.2)
        spineBoy.stateData.setMixByName("jump", "walk", 0.4)

        // play animation
        spineBoy.state.setAnimationByName(0, "walk", true)


        stage.addChild(spineBoy)

        stage.click =  {
            spineBoy.state.setAnimationByName(0, "jump", false)
            spineBoy.state.addAnimationByName(0, "walk", true, 0)
        }

        val logo = Sprite.fromImage("logo_small.png")
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

    fun animate() {
        requestAnimFrame(::animate)
        renderer.render(stage)
    }
    requestAnimFrame(::animate)
}
