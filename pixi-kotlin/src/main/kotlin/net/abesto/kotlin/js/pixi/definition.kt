package net.abesto.kotlin.js.pixi


import org.w3c.dom.Element
import kotlin.js.dom.html5.HTMLCanvasElement


native val <T> undefined: T = noImpl

native public object PIXI {
    public class Stage(backgroundColor: Int, interactive: Boolean = false): DisplayObjectContainer()
    //root

    public class InteractionData {}

    //core

    public class Rectangle(x: Double, y: Double, width: Double, height: Double)

    public class Point {
        public var x: Double = noImpl
        public var y: Double = noImpl
    }

    //display

    open public class DisplayObject

    open public class DisplayObjectContainer: DisplayObject() {
        public fun addChild(child: DisplayObject): Unit = noImpl
        public fun removeChild(child: DisplayObject): Unit = noImpl

        public var position: Point = noImpl
        public var scale: Point = noImpl
        public var rotation: Double = 0.0
    }

    open public class Sprite(texture: Texture): DisplayObjectContainer() {
        class object {
            public fun fromImage(path: String): Sprite = noImpl
            public fun fromFrame(imageId: String): Sprite = noImpl
        }

        public fun setTexture(texture: Texture): Unit = noImpl

        deprecated("Instead of using this function you can now simply set the interactive property to true or false")
        public fun setInteractive(interactive: Boolean): Unit = noImpl

        public var buttonMode: Boolean = false
        public var interactive: Boolean = false
        public var anchor: Point = noImpl
        public var tint: Int = 0xFFFFFF
        public var alpha: Double = 1.0

        public var click: Sprite.(InteractionData) -> Unit = undefined
        public var tap: Sprite.(InteractionData) -> Unit = undefined

        public var mousedown: Sprite.(InteractionData) -> Unit = undefined
        public var mouseup: Sprite.(InteractionData) -> Unit = undefined

        public var mouseover: Sprite.(InteractionData) -> Unit = undefined
        public var mouseout: Sprite.(InteractionData) -> Unit = undefined

        public var touchstart: Sprite.(InteractionData) -> Unit = undefined
        public var touchend: Sprite.(InteractionData) -> Unit = undefined
    }

    public class MovieClip(textures: Array<Texture>): Sprite(undefined) {
        public fun gotoAndPlay(frameNumber: Int): Unit = noImpl
    }

    public class Renderer {
        public val view: HTMLCanvasElement = noImpl
        public fun render(stage: Stage): Unit = noImpl
        public fun resize(width: Int, height: Int): Unit = noImpl
    }
    public fun autoDetectRenderer(width: Int, height: Int, view: HTMLCanvasElement? = null, antialias: Boolean = false, transparent: Boolean = false): Renderer = noImpl

    //textures

    public class BaseTexture

    public class Texture(baseTexture: BaseTexture, frame: Rectangle) {
        class object {
            public fun fromImage(path: String): Texture = noImpl
            public fun fromFrame(frameId: String): Texture = noImpl
        }
    }

    //loaders

    public class AssetLoader(val assetURLs: Array<String>, val crossorigin: Boolean = false): EventTarget() {
        public fun load(): Unit = noImpl

        public var onComplete: () -> Unit = undefined
        public var onProgress: () -> Unit = undefined
    }

    //utils
    public open class EventTarget {
        public fun addEventListener(`type`: String, listener: () -> Unit): Unit = noImpl
        public fun dispatchEvent(event: js.dom.html.Event): Unit = noImpl
        public fun removeAllEventListeners(`type`: String): Unit = noImpl
        public fun removeEventListener(`type`: String, listener: () -> Unit): Unit = noImpl
    }
}

native public fun requestAnimFrame(animation: () -> Unit): Unit = noImpl
