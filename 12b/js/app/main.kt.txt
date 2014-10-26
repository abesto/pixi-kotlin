package net.abesto.kotlin.js.pixi.examples.example_12b

import kotlin.js.dom.html.window
import net.abesto.kotlin.js.pixi.PIXI
import kotlin.js.dom.html.document
import net.abesto.kotlin.js.pixi.requestAnimFrame


fun main(args: Array<String>) {
    // create an array of assets to load

    val assetsToLoader = array("logo_small.png", "data/dragonBones.json", "data/dragonBones.anim")

    // create a new loader
    val loader = PIXI.AssetLoader(assetsToLoader)

    // create an new instance of a pixi stage
    var stage = PIXI.Stage(0xFFFFFF, true)

    // create a renderer instance
    var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight)

    // set the canvas width and height to fill the screen
    renderer.view.style.setProperty("display", "block", "")

    // add render view to DOM
    document.body.appendChild(renderer.view)

    fun onAssetsLoaded()
    {
        var dragon = PIXI.Spine("data/dragonBones.anim")

        var scale = 1.0//window.innerHeight / 700;

        dragon.position.x = window.innerWidth/2
        dragon.position.y =	window.innerHeight/2 + (450 * scale)

        dragon.scale.x = scale
        dragon.scale.y = dragon.scale.x

        dragon.state.setAnimationByName("flying", true)

        stage.addChild(dragon)

        var logo = PIXI.Sprite.fromImage("logo_small.png")
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
        requestAnimFrame( ::animate )
        renderer.render(stage)
    }

    requestAnimFrame(::animate)

}
