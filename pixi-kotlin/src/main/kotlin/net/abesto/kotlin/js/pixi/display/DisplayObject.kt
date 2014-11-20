package net.abesto.kotlin.js.pixi.display

import net.abesto.kotlin.js.pixi.geom.Point
import net.abesto.kotlin.js.pixi.InteractionData
import net.abesto.kotlin.js.pixi.geom.Geometry
import net.abesto.kotlin.js.pixi.geom.Rectangle
import net.abesto.kotlin.js.pixi.primitives.Graphics
import net.abesto.kotlin.js.pixi.filters.AbstractFilter
import net.abesto.kotlin.js.pixi.geom.Matrix
import net.abesto.kotlin.js.pixi.renderers.Renderer
import net.abesto.kotlin.js.pixi.textures.Texture

/**
 * The base class for all objects that are rendered on the screen.
 * This is an abstract class and should not be used on its own rather it should be extended.
 */
native("PIXI.DisplayObject")
abstract public class DisplayObject {
    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     */
    public var position: Point = Point()

    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     */
    public var x: Number = noImpl

    /**
     * The position of the displayObject on the y axis relative to the local coordinates of the parent.
     */
    public var y: Number = noImpl

    /**
     * The scale factor of the object.
     */
    public var scale: Point = Point(1.0, 1.0)

    /**
     * The pivot Point of the displayObject that it rotates around
     */
    public var pivot: Point = Point(0.0, 0.0)

    /**
     * The rotation of the object in radians.
     */
    public var rotation: Double = 0.0

    /**
     * The opacity of the object.
     */
    public var alpha: Double = 1.0

    /**
     * The visibility of the object.
     */
    public var visible: Boolean = true

    /**
     * Indicates if the sprite is globally visible.
     */
    public val worldVisible: Boolean = noImpl

    /**
     * This is the defined area that will pick up mouse / touch events. It is null by default.
     * Setting it is a neat way of optimising the hitTest function that the InteractionManager will use (as it will not need to hit test all the children)
     */
    public var hitArea: Geometry? = null

    /**
     * This is used to indicate if the displayObject should display a mouse hand cursor on rollover
     */
    public var buttonMode: Boolean = false

    /**
     * Can this object be rendered
     */
    public var renderable: Boolean = false

    /**
     * The display object container that contains this display object.
     */
    public val parent: DisplayObjectContainer? = noImpl

    /**
     * The stage the display object is connected to, or undefined if it is not connected to the stage.
     */
    public val stage: Stage? = noImpl

    /**
     * The multiplied alpha of the displayObject
     */
    public val worldAlpha: Double = 1.0

    /**
     * This is the cursor that will be used when the mouse is over this object. To enable this the element must have Interaction = true and buttonMode = true
     */
    public var defaultCursor: String = "Pointer"

    /**
     * The area the filter is applied to like the hitArea this is used as more of an optimisation
     * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
     */
    public var filterArea: Rectangle? = null

    /**
     * Indicates if the sprite will have touch and mouse Interactivity. It is false by default
     */
    public var interactive: Boolean = false

    /**
     * Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it.
     * In PIXI a regular mask must be a PIXI.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping.
     * To remove a mask, set this property to null.
     */
    public var mask: Graphics? = noImpl

    /**
     * Sets the filters for the displayObject.
     * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
     * To remove filters simply set this property to 'null'
     */
    public var filters: Array<AbstractFilter> = noImpl

    /**
     * Set if this display object is cached as a bitmap.
     * This basically takes a snap shot of the display object as it is at that moment. It can provide a performance benefit for complex static displayObjects.
     * To remove simply set this property to false
     */
    public var cacheAsBitmap: Boolean = noImpl

    /**
     * A callback that is used when the users mouse rolls over the displayObject
     */
    public var mouseover: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the users mouse leaves the displayObject
     */
    public var mouseout: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * Is called when the mouse moves across the renderer element
     * Defined by PIXI.InteractionManager
     */
    public var mousemove: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * Is called when a touch is moved across the renderer element
     * Defined by PIXI.InteractionManager
     */
    public var touchmove: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the users clicks on the displayObject with their mouse's left button
     */
    public var click: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user clicks the mouse's left button down over the sprite
     */
    public var mousedown: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user releases the mouse's left button that was over the displayObject
     * for this callback to be fired, the mouse's left button must have been pressed down over the displayObject
     */
    public var mouseup: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user releases the mouse's left button that was over the displayObject but is no Inter over the displayObject
     * for this callback to be fired, the mouse's left button must have been pressed down over the displayObject
     */
    public var mouseupoutside: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the users clicks on the displayObject with their mouse's right button
     */
    public var rightclick: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user clicks the mouse's left button down over the sprite
     */
    public var rightdown: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user releases the mouse's right button that was over the displayObject
     * for this callback to be fired, the mouse's right button must have been pressed down over the displayObject
     */
    public var rightup: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user releases the mouse's right button that was over the displayObject but is no Inter over the displayObject
     * for this callback to be fired, the mouse's right button must have been pressed down over the displayObject
     */
    public var rightuseupoutside: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the users taps on the sprite with their finger
     * basically a touch version of click
     */
    public var tap: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user touches over the displayObject
     */
    public var touchstart: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user releases a touch over the displayObject
     */
    public var touchend: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * A callback that is used when the user releases the touch that was over the displayObject
     * for this callback to be fired, The touch must have started over the sprite
     */
    public var touchendoutside: DisplayObject.(InteractionData) -> Unit = noImpl

    /**
     * Retrieves the bounds of the displayObject as a rectangle object
     */
    public fun getBounds(matrix: Matrix): Rectangle = noImpl

    /**
     * Retrieves the local bounds of the displayObject as a rectangle object
     */
    open public fun getLocalBounds(): Rectangle = noImpl

    /**
     * Sets the object's stage reference, the stage this object is connected to
     *
     * @param stage The stage that the object will have as its current stage reference
     */
    open public fun setStageReference(stage: Stage): Unit = noImpl

    /**
     * Useful function that returns a texture of the displayObject object that can then be used to create sprites
     * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
     *
     * @param resolution The resolution of the texture being generated
     * @param scaleMode Should be one of the PIXI.scaleMode consts
     * @param renderer The renderer used to generate the texture.
     * @return a texture of the graphics object
     */
    public fun generateTexture(resolution: Int, scaleMode: Int, renderer: Renderer): Texture = noImpl

    /**
     * Generates and updates the cached sprite for this object
     */
    public fun updateCache(): Unit = noImpl

    /**
     * Calculates the global position of the display object
     *
     * @param position The world origin to calculate from
     * @return A Point object representing the position of this object
     */
    public fun toGlobal(position: Point): Point = noImpl

    /**
     * Calculates the local position of the display object relative to another Point
     *
     * @param position The world origin to calculate from
     * @param [from] The DisplayObject to calculate the global position from
     * @return A Point object representing the position of this object
     */
    public fun toLocal(position: Point, from: DisplayObject? = null): Point = noImpl
}