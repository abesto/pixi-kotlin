package net.abesto.kotlin.js.pixi

import net.abesto.kotlin.js.pixi.display.DisplayObject
import net.abesto.kotlin.js.pixi.geom.Point
import kotlin.js.dom.html.Event
import net.abesto.kotlin.js.pixi.display.Sprite

/**
 * Holds all information related to an interaction event
 */
native("PIXI.InteractionData")
public class InteractionData {
    /**
     * This Point stores the global coords of where the touch/mouse event happened
     */
    public var global: Point = Point()

    /**
     * The target Sprite that was interacted with
     */
    public var target: Sprite = noImpl

    /**
     * When passed to an event handler, this will be the original DOM Event that was captured
     */
    public var originalEvent: Event = noImpl

    /**
     * This will return the local coordinates of the specified displayObject for this InteractionData
     * @param displayObject The DisplayObject that you would like the local coords off
     * @param Point A Point object in which to store the value, optional (otherwise will create a new Point)
     * @return A Point containing the coordinates of the InteractionData position relative to the DisplayObject
     */
    public fun getLocalPosition(displayObject: DisplayObject, Point: Point = Point()): Point = noImpl
}