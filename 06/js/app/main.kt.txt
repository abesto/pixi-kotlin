package net.abesto.kotlin.js.pixi.examples.example_06

import kotlin.js.dom.html.document
import kotlin.js.dom.html.window

import net.abesto.kotlin.js.pixi.*
import net.abesto.kotlin.js.extensions.*
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.textures.Texture


class Button : Sprite(noImpl) {
    public var isdown: Boolean = false
    public var isOver: Boolean = false
}


fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    // the second parameter is interactivity...
    var interactive = true
    var stage = Stage(0x000000, interactive)

    // create a renderer instance.
    var renderer = autoDetectRenderer(620, 400)

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view)

    // create a background..
    var background = Sprite.fromImage("button_test_BG.jpg")

    // add background to stage..
    stage.addChild(background)

    // create some textures from an image path
    var textureButton = Texture.fromImage("button.png")
    var textureButtonDown = Texture.fromImage("buttonDown.png")
    var textureButtonOver = Texture.fromImage("buttonOver.png")

    var buttons: Array<Button> = array()

    var buttonPositions = array(175, 75,
            600 - 145, 75,
            600 / 2 - 20, 400 / 2 + 10,
            175, 400 - 75,
            600 - 115, 400 - 95)


    for (i in 0..4) {
        var button = Sprite(textureButton)

        button.anchor.x = 0.5
        button.anchor.y = 0.5

        button.position.x = buttonPositions[i * 2].toDouble()
        button.position.y = buttonPositions[i * 2 + 1].toDouble()

        // make the button interactive..
        button.interactive = true

        // set the mousedown and touchstart callback..
        button.mousedown = { data ->
            this as Button
            this.isdown = true
            this.setTexture(textureButtonDown)
            this.alpha = 1.0
        }
        button.touchstart = button.mousedown

        // set the mouseup and touchend callback..
        button.mouseup = { data ->
            this as Button
            this.isdown = false

            if (this.isOver) {
                this.setTexture(textureButtonOver)
            } else {
                this.setTexture(textureButton)
            }
        }
        button.touchend = button.mousedown

        // set the mouseover callback..
        button.mouseover = { data ->
            this as Button
            this.isOver = true

            if (!this.isdown) this.setTexture(textureButtonOver)
        }

        // set the mouseout callback..
        button.mouseout = { data ->
            this as Button
            this.isOver = false
            if (!this.isdown) this.setTexture(textureButton)
        }

        button.click = { data ->
            // click!
            console.log("CLICK!")
            //	alert("CLICK!")
        }

        button.tap = { data ->
            // click!
            console.log("TAP!!")
            //this.alpha = 0.5
        }

        // add it to the stage
        stage.addChild(button)

        // add button to array
        buttons.push(button as Button)
    }

    // set some silly values..

    buttons[0].scale.x = 1.2

    buttons[1].scale.y = 1.2

    buttons[2].rotation = Math.PI / 10

    buttons[3].scale.x = 0.8
    buttons[3].scale.y = 0.8

    buttons[4].scale.x = 0.8
    buttons[4].scale.y = 1.2
    buttons[4].rotation = Math.PI
    // var button1 =
    fun animate() {

        requestAnimFrame(::animate)
        // render the stage

        // do a test..

        renderer.render(stage)
    }
    requestAnimFrame(::animate)


    // add a logo!
    var pixiLogo = Sprite.fromImage("pixi.png")
    stage.addChild(pixiLogo)

    pixiLogo.position.x = 620.0 - 56
    pixiLogo.position.y = 400.0 - 32

    pixiLogo.interactive = true

    pixiLogo.click = { data ->
        window.open("https://github.com/GoodBoyDigital/pixi.js", "_blank")
    }
    pixiLogo.tap = pixiLogo.click
}
