package net.abesto.kotlin.js.pixi.examples.example_4

import js.jquery.jq

import net.abesto.kotlin.js.pixi.*
import js.dom.html.document
import js.dom.html.window


fun main(args: Array<String>) {

    var w = 1024
    var h = 768

    var n = 2000
    var d = 1
    var current = 1
    var objs = 17
    var vx = 0.0
    var vy = 0.0
    var vz = 0.0
    var points1: Array<Double> = array()
    var points2: Array<Double> = array()
    var points3: Array<Double> = array()
    var tpoint1: Array<Double> = array()
    var tpoint2: Array<Double> = array()
    var tpoint3: Array<Double> = array()
    var balls: Array<PIXI.Sprite> = array()
    var renderer = PIXI.autoDetectRenderer(w, h)
    var stage = PIXI.Stage(0)


    fun makeObject ( t: Int) {
        var xd: Double = (-90 + Math.round(Math.random() * 180)).toDouble()
        val td: Double = t.toDouble()

        when (t) {
            0 -> for (i in 0..(n - 1)) {
                points1[i] = (-50 + Math.round(Math.random() * 100)).toDouble()
                points2[i] = 0.0
                points3[i] = 0.0
            }

            1 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(td * 360 / n) * 10)
                points2[i] = (Math.cos(xd) * 10) * (Math.sin(td * 360 / n) * 10)
                points3[i] = Math.sin(xd) * 100
            }

            2 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(td * 360 / n) * 10)
                points2[i] = (Math.cos(xd) * 10) * (Math.sin(td * 360 / n) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            3 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10)
                points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(xd) * 100
            }

            4 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10)
                points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            5 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10)
                points2[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            6 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }


            7 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.sin(i.toDouble() * 360 / n) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            8 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.sin(i.toDouble() * 360 / n) * 10)
                points3[i] = Math.sin(xd) * 100
            }

            9 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(xd) * 100
            }


            10 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            11 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.sin(xd) * 10) * (Math.sin(i.toDouble() * 360 / n) * 10)
                points3[i] = Math.sin(xd) * 100
            }


            12 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10)
                points2[i] = (Math.sin(xd) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            13 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.sin(i.toDouble() * 360 / n) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            14 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.sin(xd) * 10) * (Math.cos(xd) * 10)
                points2[i] = (Math.sin(xd) * 10) * (Math.sin(i.toDouble() * 360 / n) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            15 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.sin(i.toDouble() * 360 / n) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }

            16 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(i.toDouble() * 360 / n) * 10)
                points2[i] = (Math.sin(i.toDouble() * 360 / n) * 10) * (Math.sin(xd) * 10)
                points3[i] = Math.sin(xd) * 100
            }

            17 -> for (i in 0..(n - 1)) {
                points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10)
                points2[i] = (Math.cos(i.toDouble() * 360 / n) * 10) * (Math.sin(i.toDouble() * 360 / n) * 10)
                points3[i] = Math.sin(i.toDouble() * 360 / n) * 100
            }
        }

    }

    fun resize()
    {
        w = jq(window).width().toInt() - 16
        h = jq(window).height().toInt() - 16

        renderer.resize(w, h)
    }

    fun update()
    {
        var x3d: Double
        var y3d: Double
        var z3d: Double
        var tx: Double
        var ty: Double
        var tz: Double
        var ox: Double

        if (d < 250)
        {
            d++
        }

        vx += 0.0075
        vy += 0.0075
        vz += 0.0075

        for (i in 0..(n-1))
        {
            if (points1[i] > tpoint1[i]) { tpoint1[i] = tpoint1[i] + 1 }
            if (points1[i] < tpoint1[i]) { tpoint1[i] = tpoint1[i] - 1 }
            if (points2[i] > tpoint2[i]) { tpoint2[i] = tpoint2[i] + 1 }
            if (points2[i] < tpoint2[i]) { tpoint2[i] = tpoint2[i] - 1 }
            if (points3[i] > tpoint3[i]) { tpoint3[i] = tpoint3[i] + 1 }
            if (points3[i] < tpoint3[i]) { tpoint3[i] = tpoint3[i] - 1 }

            x3d = tpoint1[i]
            y3d = tpoint2[i]
            z3d = tpoint3[i]

            ty = (y3d * Math.cos(vx)) - (z3d * Math.sin(vx))
            tz = (y3d * Math.sin(vx)) + (z3d * Math.cos(vx))
            tx = (x3d * Math.cos(vy)) - (tz * Math.sin(vy))
            tz = (x3d * Math.sin(vy)) + (tz * Math.cos(vy))
            ox = tx
            tx = (tx * Math.cos(vz)) - (ty * Math.sin(vz))
            ty = (ox * Math.sin(vz)) + (ty * Math.cos(vz))

            balls[i].position.x = (512 * tx) / (d - tz) + w / 2
            balls[i].position.y = (h/2) - (512 * ty) / (d - tz)

        }

        renderer.render(stage)

        requestAnimFrame({update()})
    }

    fun nextObject () {

        current++

        if (current > objs)
        {
            current = 0
        }

        makeObject(current)

        window.setTimeout({nextObject()}, 8000)

    }

    fun start() {

        var ballTexture = PIXI.Texture.fromImage("assets/pixel.png")

        document.body.appendChild(renderer.view)

        makeObject(0)

        for (i in 0..(n-1))
        {
            tpoint1[i] = points1[i]
            tpoint2[i] = points2[i]
            tpoint3[i] = points3[i]

            var tempBall = PIXI.Sprite(ballTexture)
            tempBall.anchor.x = 0.5
            tempBall.anchor.y = 0.5
            tempBall.alpha = 0.5
            balls[i] = tempBall

            stage.addChild(tempBall)
        }

        resize()

        window.setTimeout({nextObject()}, 5000)

        requestAnimFrame({update()})

    }

    jq(window).resize({resize()})
    window.onorientationchange = {resize()}

    jq({start()})
}
