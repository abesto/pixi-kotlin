package net.abesto.kotlin.js.pixi.examples.example_12b

import kotlin.browser.*

import net.abesto.kotlin.js.pixi.requestAnimFrame
import net.abesto.kotlin.js.pixi.loaders.AssetLoader
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.extras.Spine
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer


fun main(args: Array<String>) {
    // create an array of assets to load

    val assetsToLoader = array("logo_small.png", "data/dragon.json")

    // create a new loader
    val loader = AssetLoader(assetsToLoader)

    //begin load
    loader.load()

    // create an new instance of a pixi stage
    val stage = Stage(0xFFFFFF, true)

    // create a renderer instance
    val renderer = autoDetectRenderer(window.innerWidth, window.innerHeight)

    // set the canvas width and height to fill the screen
    renderer.view.style.setProperty("display", "block", "")

    // add render view to DOM
    document.body!!.appendChild(renderer.view)

    var dragon: Spine

    fun animate() {
        requestAnimFrame(::animate)
        /* update the spine animation, only needed if autoupdate is set to false */
        dragon.update(0.01666666666667) // HARDCODED FRAMERATE!
        renderer.render(stage)
    }

    fun onAssetsLoaded()
    {
        /* instantiate the spine animation */
        dragon = Spine("data/dragon.json")
        dragon.skeleton.setToSetupPose()
        dragon.update(0)
        dragon.autoUpdate = false

        /* create a container for the spine animation and add the animation to it */
        val dragonCage = DisplayObjectContainer()
        dragonCage.addChild(dragon)

        /* measure the spine animation and position it inside its container to align it to the origin */
        val localRect = dragon.getLocalBounds()
        dragon.position.set(-localRect.x, -localRect.y)

        /* now we can scale, position and rotate the container as any other display object */
        val scale = Math.min((window.innerWidth * 0.7) / dragonCage.width, (window.innerHeight * 0.7) / dragonCage.height)
        dragonCage.scale.set(scale, scale)
        dragonCage.position.set((window.innerWidth - dragonCage.width) * 0.5, (window.innerHeight - dragonCage.height) * 0.5)

        /* add the container to the stage */
        stage.addChild(dragonCage)

        /* once position and scaled, set the animation to play */
        dragon.state.setAnimationByName(0, "flying", true)

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

        requestAnimFrame(::animate)
    }
    
    // use callback
    loader.onComplete = ::onAssetsLoaded
}
