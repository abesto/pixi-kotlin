package net.abesto.kotlin.js.pixi.examples.example_12c

import kotlin.browser.*

import net.abesto.kotlin.js.pixi.requestAnimFrame
import net.abesto.kotlin.js.pixi.loaders.AssetLoader
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.extras.Spine


fun main(args: Array<String>) {
    // create an array of assets to load

    val assetsToLoader = arrayOf("logo_small.png", "data/Pixie.json", "data/iP4_BGtile.jpg", "data/iP4_ground.png")

    // create a new loader
    val loader = AssetLoader(assetsToLoader)

    //begin load
    loader.load()

    // create an new instance of a pixi stage
    val stage = Stage(0xFFFFFF, true)

    // create a renderer instance
    val renderer = autoDetectRenderer(1024, 640)

    // set the canvas width and height to fill the screen
    renderer.view.style.setProperty("display", "block", "")
    renderer.view.style.setProperty("width", "100%", "")
    renderer.view.style.setProperty("height", "100%", "")

    // add render view to DOM
    document.body!!.appendChild(renderer.view)

    var postition = 0.0
    var background: Sprite
    var background2: Sprite
    var foreground: Sprite
    var foreground2: Sprite

    fun animate() {
        postition += 10

        background.position.x = -(postition * 0.6)
        background.position.x %= 1286 * 2
        if(background.position.x<0)background.position.x += 1286 * 2
        background.position.x -= 1286

        background2.position.x = -(postition * 0.6) + 1286
        background2.position.x %= 1286 * 2
        if(background2.position.x<0)background2.position.x += 1286 * 2
        background2.position.x -= 1286

        foreground.position.x = -postition
        foreground.position.x %= 1286 * 2
        if(foreground.position.x<0)foreground.position.x += 1286 * 2
        foreground.position.x -= 1286

        foreground2.position.x = -postition + 1286
        foreground2.position.x %= 1286 * 2
        if(foreground2.position.x<0)foreground2.position.x += 1286 * 2
        foreground2.position.x -= 1286

        requestAnimFrame(::animate)

        renderer.render(stage)
    }
    
    fun onAssetsLoaded()
    {
        background = Sprite.fromImage("data/iP4_BGtile.jpg")
        background2 = Sprite.fromImage("data/iP4_BGtile.jpg")
        stage.addChild(background)
        stage.addChild(background2)

        foreground = Sprite.fromImage("data/iP4_ground.png")
        foreground2 = Sprite.fromImage("data/iP4_ground.png")
        stage.addChild(foreground)
        stage.addChild(foreground2)
        foreground.position.y = 640 - foreground.height
        foreground2.position.y = 640 - foreground2.height

        val pixie = Spine("data/Pixie.json")

        val scale = 0.3//window.innerHeight / 700

        pixie.position.x = 1024.0/3
        pixie.position.y =    500.0

        pixie.scale.x = scale
        pixie.scale.y = scale


        //dragon.state.setAnimationByName("running", true)

        stage.addChild(pixie)

        pixie.stateData.setMixByName("running", "jump", 0.2)
        pixie.stateData.setMixByName("jump", "running", 0.4)

        pixie.state.setAnimationByName(0, "running", true)



        stage.mousedown = {
            pixie.state.setAnimationByName(0, "jump", false)
            pixie.state.addAnimationByName(0, "running", true, 0)
        }
        stage.touchstart = stage.mousedown

        val logo = Sprite.fromImage("logo_small.png")
        stage.addChild(logo)


        logo.anchor.x = 1.0
        logo.position.x = 1024.0
        logo.scale.x = 0.5
        logo.scale.y = 0.5
        logo.position.y = 640.0 - 70
        logo.interactive = true
        logo.buttonMode = true
        logo.click = { window.open("https://github.com/GoodBoyDigital/pixi.js", "_blank") }
        logo.tap = logo.click

        requestAnimFrame(::animate)
    }

    // use callback
    loader.onComplete = ::onAssetsLoaded
}
