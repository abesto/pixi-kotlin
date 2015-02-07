package net.abesto.kotlin.js.pixi.geom

/**
 * the Rectangle object is an area defined by its position, as indicated by its top-left corner Point (x, y) and
 * by its width and its height.
 */
native("PIXI.Rectangle")
public class Rectangle(
        /** The X coord of the upper-left corner of the rectangle */
        public var x: Double = 0.0,

        /** The Y coord of the upper-left corner of the rectangle */
        public var y: Double = 0.0,

        /** The overall width of this rectangle */
        public var width: Double = 0.0,

        /** The overall height of this rectangle */
        public var height: Double = 0.0
): Shape {
    /**
     * Creates a clone of this Rectangle
     * @return a copy of the rectangle
     */
    public fun clone(): Rectangle = noImpl

    /**
     * Checks whether the x and y coordinates passed to this function are contained within this Rectangle
     * @param x The X coordinate of the Point to test
     * @param y The y coordinate of the Point to test
     * @return Whether the x/y coords are within this Rectangle
     */
    public fun contains(x: Double, y: Double): Boolean = noImpl
}
