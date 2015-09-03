package net.abesto.kotlin.js.pixi.examples.example_10

import kotlin.browser.*
import org.w3c.dom.*

import net.abesto.kotlin.js.pixi.requestAnimFrame
import net.abesto.kotlin.js.pixi.TextStyle
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.text.Text
import net.abesto.kotlin.js.pixi.loaders.AssetLoader
import net.abesto.kotlin.js.pixi.text.BitmapText
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.text.BitmapTextStyle

class WebFontFamilies(vararg val families: String)

class WebFontConfig(
        val google: WebFontFamilies,
        val active: () -> Unit
)

// This trick coupled with (window as WebFontWindow) allows us to set global variables on the Window object.
// In our example it's needed to configure the async webfont loader.
native interface WebFontWindow : Window {
    var WebFontConfig: WebFontConfig
}


fun main(args: Array<String>) {
    fun init() {
        // create an new instance of a pixi stage
        val stage = Stage(0x66FF99)

        // add a shiney background..
        var background = Sprite.fromImage("textDemoBG.jpg")
        stage.addChild(background)

        var count = 0
        var score = 0

        // create some white text using the Snippet webfont
        var textSample = Text("Pixi.js can has\nmultiline text!",
                {
                    val s = TextStyle()
                    s.font = "35px Snippet"
                    s.fill = "white"
                    s.align = "left"
                    s
                }())
        textSample.position.x = 20.0
        textSample.position.y = 20.0

        // create a text object with a nice stroke
        var spinningText = Text("I'm fun!", {
            val s = TextStyle()
            s.font = "bold 60px Podkova"
            s.fill = "#cc00ff"
            s.align = "center"
            s.stroke = "#FFFFFF"
            s.strokeThickness = 6
            s
        }())
        // setting the anchor point to 0.5 will center align the text... great for spinning!
        spinningText.anchor.x = 0.5
        spinningText.anchor.y = spinningText.anchor.x
        spinningText.position.x = 620.0 / 2
        spinningText.position.y = 400.0 / 2

        // create a text object that will be updated..
        var countingText = Text("COUNT 4EVAR: 0", {
            val s = TextStyle()
            s.font = "bold italic 60px Arvo"
            s.fill = "#3e1707"
            s.align = "center"
            s.stroke = "#a4410e"
            s.strokeThickness = 7
            s
        }())
        countingText.position.x = 620.0 / 2
        countingText.position.y = 320.0
        countingText.anchor.x = 0.5
        stage.addChild(textSample)
        stage.addChild(spinningText)
        stage.addChild(countingText)
        // create a new loader
        var assetsToLoader = arrayOf("desyrel.fnt")
        var loader = AssetLoader(assetsToLoader)

        // use callback
        fun onAssetsLoaded() {
            val bitmapFontText = BitmapText("bitmap fonts are\n now supported!", {
                val s = BitmapTextStyle()
                s.font = "35px Desyrel"
                s.align = "right"
                s
            }())
            bitmapFontText.position.x = 620 - bitmapFontText.width - 20
            bitmapFontText.position.y = 20.0

            stage.addChild(bitmapFontText)
        }
        loader.onComplete = ::onAssetsLoaded

        //begin load
        loader.load()


        // create a renderer instance
        var renderer = autoDetectRenderer(620, 400)
        // add the renderer view element to the DOM
        document.body!!.appendChild(renderer.view)

        fun animate() {
            requestAnimFrame(::animate)
            count++
            if (count == 50) {
                count = 0
                score++
                // update the text...
                countingText.setText("COUNT 4EVAR: " + score)
            }
            // just for fun, lets rotate the text
            spinningText.rotation += 0.03

            // render the stage
            renderer.render(stage)
        }
        requestAnimFrame(::animate)
    }

    // Load them google fonts before starting...!
    (window as WebFontWindow).WebFontConfig = WebFontConfig(
            google = WebFontFamilies("Snippet", "Arvo:700italic", "Podkova:700"),
            active = ::init
    )
    val wf = document.createElement("script")
    wf.setAttribute("src", (if ("https:" == window.location.protocol) {
        "https"
    } else {
        "http"
    }) +
            "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js")
    wf.setAttribute("type", "text/javascript")
    wf.setAttribute("async", "true")
    val s = document.getElementsByTagName("script").item(0)!!
    s.parentNode!!.insertBefore(wf, s)
}
