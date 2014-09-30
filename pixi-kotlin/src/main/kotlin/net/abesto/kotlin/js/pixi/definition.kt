/**
 * Kotlin bindings for Pixi.js
 */
package net.abesto.kotlin.js.pixi


import org.w3c.dom.Element
import kotlin.js.dom.html5.HTMLCanvasElement


native val <T> undefined: T = noImpl

native public object PIXI {
    public class Stage(backgroundColor: Int, interactive: Boolean = false): DisplayObjectContainer()

    //src/pixi/root/*.js

    /**
     * Holds all information related to an Interaction event
     */
    public class InteractionData {
        /**
         * This will return the local coordinates of the specified displayObject for this InteractionData
         * @param displayObject The DisplayObject that you would like the local coords off
         * @return A point containing the coordinates of the InteractionData position relative to the DisplayObject
         */
        public fun getLocalPosition(displayObject: DisplayObject): Point = noImpl
    }

    //core

    /**
     * the Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and
     * by its width and its height.
     * @param x The X coord of the upper-left corner of the rectangle
     * @param y The Y coord of the upper-left corner of the rectangle
     * @param width The overall width of this rectangle
     * @param height The overall height of this rectangle
     */
    public class Rectangle(x: Double, y: Double, width: Double, height: Double) {
        /**
         * Creates a clone of this Rectangle
         * @return a copy of the rectangle
         */
        public fun clone(): Rectangle = noImpl

        /**
         * Checks whether the x and y coordinates passed to this function are contained within this Rectangle
         * @param x The X coordinate of the point to test
         * @param y The y coordinate of the point to test
         * @return Whether the x/y coords are within this Rectangle
         */
        public fun contains(x: Double, y: Double): Boolean = noImpl
    }

    /**
     * The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal
     * axis and y represents the vertical axis.
     * @param x position of the point on the x axis
     * @param y position of the point on the y axis
     */
    public class Point(var x: Double, var y: Double)

    //display


    open public class DisplayObject {
        public val parent: DisplayObjectContainer = noImpl

        public var position: Point = noImpl
        public var scale: Point = noImpl
        public var rotation: Double = 0.0

        public var buttonMode: Boolean = false
        public var interactive: Boolean = false
        public var alpha: Double = 1.0

        public var click: Sprite.(InteractionData) -> Unit = undefined
        public var tap: Sprite.(InteractionData) -> Unit = undefined

        public var mousedown: Sprite.(InteractionData) -> Unit = undefined
        public var mouseup: Sprite.(InteractionData) -> Unit = undefined
        public var mouseupoutside: Sprite.(InteractionData) -> Unit = undefined

        public var mouseover: Sprite.(InteractionData) -> Unit = undefined
        public var mouseout: Sprite.(InteractionData) -> Unit = undefined

        public var touchstart: Sprite.(InteractionData) -> Unit = undefined
        public var touchend: Sprite.(InteractionData) -> Unit = undefined
        public var touchendoutside: Sprite.(InteractionData) -> Unit = undefined

        public var mousemove: Sprite.(InteractionData) -> Unit = undefined
        public var touchmove: Sprite.(InteractionData) -> Unit = undefined
    }

    open public class DisplayObjectContainer: DisplayObject() {
        public fun addChild(child: DisplayObject): Unit = noImpl
        public fun removeChild(child: DisplayObject): Unit = noImpl
    }

    open public class Sprite(texture: Texture): DisplayObjectContainer() {
        class object {
            public fun fromImage(path: String): Sprite = noImpl
            public fun fromFrame(imageId: String): Sprite = noImpl
        }
        public var anchor: Point = noImpl
        public var tint: Int = 0xFFFFFF

        public fun setTexture(texture: Texture): Unit = noImpl

        deprecated("Instead of using this function you can now simply set the interactive property to true or false")
        public fun setInteractive(interactive: Boolean): Unit = noImpl

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

