package net.abesto.kotlin.js.pixi.examples.example_01

import net.abesto.kotlin.js.pixi.*

import kotlin.js.dom.html.document
import kotlin.js.dom.html.HTMLElement


fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    val stage = PIXI.Stage(0x66FF99)

    // create a renderer instance
    val renderer = PIXI.autoDetectRenderer(400, 300)

    // create a texture from an image path
    val texture = PIXI.Texture.fromImage("bunny.png")
    // create a new Sprite using the texture
    val bunny = PIXI.Sprite(texture)

    fun animate() {
        requestAnimFrame(::animate)

        // just for fun, lets rotate mr rabbit a little
        bunny.rotation += 0.1

        // render the stage
        renderer.render(stage)
    }

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view)

    requestAnimFrame(::animate)

    // center the sprites anchor point
    bunny.anchor.x = 0.5
    bunny.anchor.y = 0.5

    // move the sprite t the center of the screen
    bunny.position.x = 200.0
    bunny.position.y = 150.0

    stage.addChild(bunny);
}
