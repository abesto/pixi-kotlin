package net.abesto.kotlin.js.pixi.examples.example_07

import kotlin.js.dom.html.document

import net.abesto.kotlin.js.pixi.*
import net.abesto.kotlin.js.extensions.*

fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    var stage = PIXI.Stage(0x66FF99)

    // create a renderer instance
    var renderer = PIXI.autoDetectRenderer(400, 300, null, true)

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view)
    renderer.view.style.setProperty("position", "absolute", "")
    renderer.view.style.setProperty("top",
            document.getElementById("textHolder").getBoundingClientRect().top.toString() + "px",
            "")

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("bunny.png")
    // create a new Sprite using the texture
    var bunny = PIXI.Sprite(texture)

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
