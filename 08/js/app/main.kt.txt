package net.abesto.kotlin.js.pixi.examples.example_08

import kotlin.js.dom.html.window
import kotlin.js.dom.html.document

import net.abesto.kotlin.js.pixi.requestAnimFrame
import net.abesto.kotlin.js.pixi.PIXI


class Bunny: PIXI.Sprite(noImpl) {
    var data: PIXI.InteractionData? = null
    var dragging: Boolean = false
}


fun main(args: Array<String>) {
    // create an new instance of a pixi stage
    var stage = PIXI.Stage(0x97c56e, true)
    // create a renderer instance
    var renderer = PIXI.autoDetectRenderer(window.innerWidth.toLong(), window.innerHeight.toLong(), null)

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view)
    renderer.view.style.setProperty("position", "absolute", "")
    renderer.view.style.setProperty("top", "0px", "")
    renderer.view.style.setProperty("left", "0px", "")

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("bunny.png")

    fun createBunny(x: Double, y: Double)
    {
        // create our little bunny friend..
        var bunny = PIXI.Sprite(texture)
        //	bunny.width = 300
        // enable the bunny to be interactive.. this will allow it to respond to mouse and touch events
        bunny.interactive = true
        // this button mode will mean the hand cursor appears when you rollover the bunny with your mouse
        bunny.buttonMode = true

        // center the bunnys anchor point
        bunny.anchor.x = 0.5
        bunny.anchor.y = 0.5
        // make it a bit bigger, so its easier to touch
        bunny.scale.x = 3.0
        bunny.scale.y = bunny.scale.x

        // use the mousedown and touchstart
        bunny.mousedown = { data -> this as Bunny
            //		data.originalEvent.preventDefault()
            // store a refference to the data
            // The reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data = data
            this.alpha = 0.9
            this.dragging = true
        }
        bunny.touchstart = bunny.mousedown

        // set the events for when the mouse is released or a touch is released
        bunny.mouseup = { data -> this as Bunny
            this.alpha = 1.0
            this.dragging = false
            // set the interaction data to null
            this.data = null
        }
        bunny.mouseupoutside = bunny.mouseup
        bunny.touchend = bunny.mouseup
        bunny.touchendoutside = bunny.mouseup

        // set the callbacks for when the mouse or a touch moves
        bunny.mousemove = { data -> this as Bunny
            if(this.dragging)
            {
                // need to get parent coords..
                var newPosition = this.data!!.getLocalPosition(this.parent)
                this.position.x = newPosition.x
                this.position.y = newPosition.y
            }
        }
        bunny.touchmove = bunny.mousemove

        // move the sprite to its designated position
        bunny.position.x = x
        bunny.position.y = y

        // add it to the stage
        stage.addChild(bunny)
    }
    for (i in 0..9)
    {
        createBunny(Math.random() * window.innerWidth, Math.random() * window.innerHeight)
    }

    fun animate() {

        requestAnimFrame(::animate)

        // just for fun, lets rotate mr rabbit a little
        //stage.interactionManager.update()
        // render the stage
        renderer.render(stage)
    }
    requestAnimFrame(::animate)

}
