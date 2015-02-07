package net.abesto.kotlin.js.pixi.primitives

import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer
import net.abesto.kotlin.js.pixi.PIXI
import net.abesto.kotlin.js.pixi.geom.Point
import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.geom.Rectangle
import net.abesto.kotlin.js.pixi.geom.Shape

native("PIXI.Graphics")
/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and rectangles to the display, and color and fill them.
 */
public class Graphics: DisplayObjectContainer() {
    /** The alpha value used when filling the Graphics object. */
    public var fillAlpha: Number = 1.0
    
    /** The width (thickness) of any lines drawn. */
    public var lineWidth: Number = 1
    
    /** The color of any lines drawn. */
    public var lineColor: String = "0"
    
    /** The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to reset the tint. */
    public var tint: Number = 0xFFFFFF
    
    /** The blend mode to be applied to the graphic shape. Apply a value of PIXI.blendModes.NORMAL to reset the blend mode. */
    public var blendMode: Number = PIXI.blendModes.NORMAL
    
    /** Whether this shape is being used as a mask. */
    public var isMask: Boolean = false
    
    /** The bounds' padding used for bounds calculation. */
    public var boundsPadding: Number = 0

    /**
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
     *
     * @param lineWidth width of the line to draw, will update the objects stored style
     * @param color color of the line to draw, will update the objects stored style
     * @param alpha alpha of the line to draw, will update the objects stored style
     */
    public fun lineStyle(lineWidth: Number = 0, color: Number = 0, alpha: Double = 1.0): Graphics = noImpl

    /**
     * Moves the current drawing position to x, y.
     *
     * @param x the X coordinate to move to
     * @param y the Y coordinate to move to
     */
    public fun moveTo(x: Number, y: Number): Graphics = noImpl

    /**
     * Draws a line using the current line style from the current drawing position to (x, y);
     * The current drawing position is then set to (x, y).
     *
     * @param x the X coordinate to draw to
     * @param y the Y coordinate to draw to
     */
    public fun lineTo(x: Number, y: Number): Graphics = noImpl

    /**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     *
     * @param cpX Control point x
     * @param cpY Control point y
     * @param toX Destination point x
     * @param toY Destination point y
     */
    public fun quadraticCurveTo(cpX: Number, cpY: Number, toX: Number, toY: Number): Graphics = noImpl

    /**
     * Calculate the points for a bezier curve and then draws it.
     *
     * @param cpX Control point x
     * @param cpY Control point y
     * @param cpX2 Second Control point x
     * @param cpY2 Second Control point y
     * @param toX Destination point x
     * @param toY Destination point y
     */
    public fun bezierCurveTo(cpX: Number, cpY: Number, cpX2: Number, cpY2: Number, toX: Number, toY: Number): Graphics = noImpl

    /*
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     * 
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     *
     * @param x1 The x-coordinate of the beginning of the arc
     * @param y1 The y-coordinate of the beginning of the arc
     * @param x2 The x-coordinate of the end of the arc
     * @param y2 The y-coordinate of the end of the arc
     * @param radius The radius of the arc
     */
    public fun arcTo(x1: Number, y1: Number, x2: Number, y2: Number, radius: Number): Graphics = noImpl

    /**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     *
     * @param cx The x-coordinate of the center of the circle
     * @param cy The y-coordinate of the center of the circle
     * @param radius The radius of the circle
     * @param startAngle The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
     * @param endAngle The ending angle, in radians
     * @param anticlockwise Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
     */
    public fun arc(cx: Number, cy: Number, radius: Number, startAngle: Number, endAngle: Number, anticlockwise: Boolean = false): Graphics = noImpl

    /**
     * Specifies a simple one-color fill that subsequent calls to other Graphics methods
     * (such as lineTo() or drawCircle()) use when drawing.
     *
     * @param color the color of the fill
     * @param alpha the alpha of the fill
     */
    public fun beginFill(color: Number, alpha: Double = 1.0): Graphics = noImpl

    /**
     * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
     */
    public fun endFill(): Graphics = noImpl

    /**
     * @param x The X coord of the top-left of the rectangle
     * @param y The Y coord of the top-left of the rectangle
     * @param width The width of the rectangle
     * @param height The height of the rectangle
     */
    public fun drawRect(x: Number, y: Number, width: Number, height: Number): Graphics = noImpl

    /**
     * @param x The X coord of the top-left of the rectangle
     * @param y The Y coord of the top-left of the rectangle
     * @param width The width of the rectangle
     * @param height The height of the rectangle
     * @param radius Radius of the rectangle corners
     */
    public fun drawRoundedRect(x: Number, y: Number, width: Number, height: Number, radius: Number): Graphics = noImpl

    /**
     * Draws a circle.
     *
     * @param x The X coordinate of the center of the circle
     * @param y The Y coordinate of the center of the circle
     * @param radius The radius of the circle
     */
    public fun drawCircle(x: Number, y: Number, radius: Number): Graphics = noImpl

    /**
     * Draws an ellipse.
     *
     * @param x The X coordinate of the center of the ellipse
     * @param y The Y coordinate of the center of the ellipse
     * @param width The half width of the ellipse
     * @param height The half height of the ellipse
     */
    public fun drawEllipse(x: Number, y: Number, width: Number, height: Number): Graphics = noImpl

    /**
     * Draws a polygon using the given path.
     *
     * @param path The path data used to construct the polygon.
     */
    public fun drawPolygon(path: Array<Point>): Graphics = noImpl

    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     */
    public fun clear(): Graphics = noImpl

    /**
     * Useful function that returns a texture of the graphics object that can then be used to create sprites
     * This can be quite useful if your geometry is complicated and needs to be reused multiple times.
     *
     * @param resolution The resolution of the texture being generated
     * @param scaleMode Should be one of the PIXI.scaleMode consts
     * @return a texture of the graphics object
     */
    public fun generateTexture(resolution: Number, scaleMode: Number): Texture = noImpl

    /**
     * Retrieves the bounds of the graphic shape as a rectangle object
     *
     * @method getBounds
     * @return the rectangular bounding area
     */
    override public fun getBounds(): Rectangle = noImpl

    /**
     * Update the bounds of the object
     */
    public fun updateLocalBounds(): Unit = noImpl

    /**
     * Destroys a previous cached sprite.
     */
    public fun destroyCachedSprite(): Unit = noImpl

    /**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     *
     * @param shape The Shape object to draw.
     * @return The generated GraphicsData object.
     */
    public fun drawShape(shape: Shape): GraphicsData = noImpl
}

public data class GraphicsData(lineWidth: Number, lineColor: Number, lineAlpha: Number, fillColor: Number, fillAlpha: Number, fill: Boolean, shape: Shape)
