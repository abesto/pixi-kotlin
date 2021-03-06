package net.abesto.kotlin.js.pixi.examples.example_13

import kotlin.browser.*

import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.primitives.Graphics
import net.abesto.kotlin.js.pixi.requestAnimFrame


fun main(args: Array<String>) {

    // create an new instance of a pixi stage
    val stage = Stage(0xFFFFFF, true)

    stage.interactive = true

    val renderer = autoDetectRenderer(620, 380)

    // add render view to DOM
    document.body!!.appendChild(renderer.view)

    val graphics = Graphics()

    // set a fill and line style
    graphics.beginFill(0xFF3300)
    graphics.lineStyle(10, 0xffd900, 1.0)

    // draw a shape
    graphics.moveTo(50,50)
    graphics.lineTo(250, 50)
    graphics.lineTo(100, 100)
    graphics.lineTo(250, 220)
    graphics.lineTo(50, 220)
    graphics.lineTo(50, 50)
    graphics.endFill()

    // set a fill and line style again
    graphics.lineStyle(10, 0xFF0000, 0.8)
    graphics.beginFill(0xFF700B, 1.0)

    // draw a second shape
    graphics.moveTo(210,300)
    graphics.lineTo(450,320)
    graphics.lineTo(570,350)
    graphics.quadraticCurveTo(600, 0, 480,100)
    graphics.lineTo(330,120)
    graphics.lineTo(410,200)
    graphics.lineTo(210,300)
    graphics.endFill()

    // draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1.0)
    graphics.drawRect(50, 250, 100, 100)

    // draw a circle
    graphics.lineStyle(0)
    graphics.beginFill(0xFFFF0B, 0.5)
    graphics.drawCircle(470, 200,100)
    graphics.endFill()
    graphics.lineStyle(20, 0x33FF00)
    graphics.moveTo(30,30)
    graphics.lineTo(600, 300)

    stage.addChild(graphics)

    // let's create moving shape
    val thing = Graphics()
    stage.addChild(thing)
    thing.position.x = 620.0/2
    thing.position.y = 380.0/2

    var count = 0.0

    // Just click on the stage to draw random lines
    stage.click = {
        graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1.0)
        graphics.moveTo(Math.random() * 620,Math.random() * 380)
        graphics.bezierCurveTo(Math.random() * 620,Math.random() * 380,
            Math.random() * 620,Math.random() * 380,
            Math.random() * 620,Math.random() * 380)
    }
    stage.tap = stage.click
    // run the render loop
    fun animate() {

        thing.clear()

        count += 0.1

        thing.clear()
        thing.lineStyle(10, 0xff0000, 1.0)
        thing.beginFill(0xffFF00, 0.5)

        thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20)
        thing.lineTo( 120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20)
        thing.lineTo( 120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20)
        thing.lineTo( -120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20)
        thing.lineTo( -120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20)

        thing.rotation = count * 0.1
        renderer.render(stage)
        requestAnimFrame(::animate)
    }
    requestAnimFrame(::animate)

}
