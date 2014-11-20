package net.abesto.kotlin.js.pixi.geom

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal
 * axis and y represents the vertical axis.
 */
native("PIXI.Point")
public class Point(
        /** position of the Point on the x axis */
        public var x: Double = 0.0,

        /** position of the Point on the y axis */
        public var y: Double = 0.0
) {
    /**
     * Creates a clone of this Point
     * @return a copy of the Point
     */
    public fun clone(): Point = noImpl

    /**
     * Sets the Point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @method set
     * @param [x=0] position of the Point on the x axis
     * @param [y=x] position of the Point on the y axis
     */
    public fun set(x: Double = 0.0, y: Double = x): Unit = noImpl
}