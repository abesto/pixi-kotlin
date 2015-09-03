package net.abesto.kotlin.js.pixi.examples.example_11

import kotlin.browser.*

import net.abesto.kotlin.js.pixi.requestAnimFrame
import net.abesto.kotlin.js.extensions.*
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.textures.RenderTexture
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer


fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    var stage = Stage(0x000000)


    // create a renderer instance
    var renderer = autoDetectRenderer(800, 600)

    renderer.view.style.setProperty("width", "${window.innerWidth}px", "")
    renderer.view.style.setProperty("height", "${window.innerHeight}px", "")

    renderer.view.style.setProperty("display", "block", "")

    document.body!!.appendChild(renderer.view)

    var renderTexture = RenderTexture(800, 600)
    var renderTexture2 = RenderTexture(800, 600)

    var currentTexture = renderTexture

    var outputSprite = Sprite(currentTexture)
    outputSprite.position.x = 800.0 / 2
    outputSprite.position.y = 600.0 / 2

    outputSprite.anchor.x = 0.5
    outputSprite.anchor.y = 0.5

    stage.addChild(outputSprite)

    var bunnyContainer = DisplayObjectContainer()

    bunnyContainer.position.x = 800.0 / 2
    bunnyContainer.position.y = 600.0 / 2

    stage.addChild(bunnyContainer)
    var fruits = arrayOf("spinObj_01.png", "spinObj_02.png",
            "spinObj_03.png", "spinObj_04.png",
            "spinObj_05.png", "spinObj_06.png",
            "spinObj_07.png", "spinObj_08.png")

    var bunnys: Array<Sprite> = arrayOf()

    for (i in 0..19) {
        var bunny = Sprite.fromImage(fruits[i % fruits.size()])
        bunny.position.x = Math.random() * 400 - 200
        bunny.position.y = Math.random() * 400 - 200

        bunny.anchor.x = 0.5
        bunny.anchor.y = 0.5

        bunnyContainer.addChild(bunny)
        bunnys.push(bunny)
    }


    var count = 0.0

    var count2 = 0

    fun animate() {

        requestAnimFrame(::animate)

        for (i in 0..bunnys.size() - 1) {
            var bunny = bunnys[i]
            bunny.rotation += 0.1
        }

        count += 0.01
        count2++

        var temp = renderTexture
        renderTexture = renderTexture2
        renderTexture2 = temp

        bunnyContainer.rotation -= 0.01
        renderTexture.render(stage, true)
        outputSprite.setTexture(renderTexture)
        outputSprite.scale.x = 1 + Math.sin(count) * 0.2
        outputSprite.scale.y = outputSprite.scale.x
        renderTexture2.render(stage, false)
        renderer.render(stage)
    }
    requestAnimFrame(::animate)
}
