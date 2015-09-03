package net.abesto.kotlin.js.pixi.examples.example_07

import kotlin.browser.*

import net.abesto.kotlin.js.pixi.*
import net.abesto.kotlin.js.extensions.*
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.renderers.Renderer
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.renderers.RendererOptions

fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    var stage = Stage(0x66FF99)

    // create a renderer instance
    val rendererOptions = RendererOptions()
    rendererOptions.transparent = true
    var renderer = autoDetectRenderer(400, 300, rendererOptions)

    // add the renderer view element to the DOM
    document.body!!.appendChild(renderer.view)
    renderer.view.style.setProperty("position", "absolute", "")
    renderer.view.style.setProperty("top",
            document.getElementById("textHolder")!!.getBoundingClientRect().top.toString() + "px",
            "")

    // create a texture from an image path
    var texture = Texture.fromImage("bunny.png")
    // create a new Sprite using the texture
    var bunny = Sprite(texture)

    // center the sprites anchor point
    bunny.anchor.x = 0.5
    bunny.anchor.y = 0.5

    // move the sprite t the center of the screen
    bunny.position.x = 200.0
    bunny.position.y = 150.0

    stage.addChild(bunny)

    fun animate() {

        requestAnimFrame(::animate)

        // just for fun, lets rotate mr rabbit a little
        bunny.rotation += 0.1

        // render the stage
        renderer.render(stage)
    }
    requestAnimFrame(::animate)
}
