package net.abesto.kotlin.js.pixi.examples.example_4

import js.dom.html.window
import js.dom.html.document
import js.dom.html.HTMLElement

import js.jquery.jq

import net.abesto.kotlin.js.pixi.*


class Star(var sprite: PIXI.Sprite, var x: Double, var y: Double)


fun main(args: Array<String>) {
    //	Globals, globals everywhere and not a drop to drink
    var w = 1024
    var h = 768
    var starCount = 2500
    var sx = 1.0 + (Math.random() / 20)
    var sy = 1.0 + (Math.random() / 20)
    var slideX = w / 2
    var slideY = h / 2
    var stars: Array<Star> = array()
    var renderer = PIXI.autoDetectRenderer(w, h)
    var stage = PIXI.Stage(0)


    fun newWave () {
        sx = 1.0 + (Math.random() / 20)
        sy = 1.0 + (Math.random() / 20)
        (document.getElementById("sx") as HTMLElement).innerHTML = "SX: " + sx + "<br />SY: " + sy
    }

    fun resize()
    {
        w = jq(window).width().toInt() - 16
        h = jq(window).height().toInt() - 16

        slideX = w / 2
        slideY = h / 2

        renderer.resize(w, h)
    }

    fun update()
    {
        for (i in 0..(starCount-1))
        {
            stars[i].sprite.position.x = stars[i].x + slideX
            stars[i].sprite.position.y = stars[i].y + slideY
            stars[i].x = stars[i].x * sx
            stars[i].y = stars[i].y * sy

            if (stars[i].x > w)
            {
                stars[i].x = stars[i].x - w
            }
            else if (stars[i].x < -w)
            {
                stars[i].x = stars[i].x + w
            }

            if (stars[i].y > h)
            {
                stars[i].y = stars[i].y - h
            }
            else if (stars[i].y < -h)
            {
                stars[i].y = stars[i].y + h
            }
        }

        renderer.render(stage)

        requestAnimFrame({update()})
    }

    jq(window).resize({resize()})
    window.onorientationchange = ({resize()})

    fun start() {

        var ballTexture = PIXI.Texture.fromImage("assets/bubble_32x32.png")

        document.body.appendChild(renderer.view)

        for (i in 0..(starCount-1))
        {
            var tempBall = PIXI.Sprite(ballTexture)

            tempBall.position.x = (Math.random() * w) - slideX
            tempBall.position.y = (Math.random() * h) - slideY
            tempBall.anchor.x = 0.5
            tempBall.anchor.y = 0.5

            stars.push(Star(tempBall, tempBall.position.x, tempBall.position.y))
            stage.addChild(tempBall)
        }

        (document.getElementById("rnd") as HTMLElement).onclick = {newWave()}
        (document.getElementById("sx") as HTMLElement).innerHTML = "SX: " + sx + "<br />SY: " + sy
        resize()
        requestAnimFrame({update()})
    }
    jq({start()})
}
