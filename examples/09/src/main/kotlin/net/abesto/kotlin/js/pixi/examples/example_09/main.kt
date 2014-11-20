package net.abesto.kotlin.js.pixi.examples.example_08

import kotlin.js.dom.html.window
import kotlin.js.dom.html.document

import net.abesto.kotlin.js.pixi.requestAnimFrame
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.display.TilingSprite


fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    var stage = Stage(0x97c56e, true)

    // create a renderer instance
    var renderer = autoDetectRenderer(window.innerWidth.toLong(), window.innerHeight.toLong())

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view)
    renderer.view.style.setProperty("position", "absolute", "")
    renderer.view.style.setProperty("top", "0px", "")
    renderer.view.style.setProperty("left", "0px", "")

    // create a texture from an image path
    var texture = Texture.fromImage("p2.jpeg")

    var tilingSprite = TilingSprite(texture, window.innerWidth, window.innerHeight)

    var count = 0.0

    stage.addChild(tilingSprite)

    fun animate() {

        requestAnimFrame(::animate)

        count += 0.005
        tilingSprite.tileScale.x = 2 + Math.sin(count)
        tilingSprite.tileScale.y = 2 + Math.cos(count)

        tilingSprite.tilePosition.x += 1
        tilingSprite.tilePosition.y += 1

        renderer.render(stage)
    }
    requestAnimFrame(::animate)

}
