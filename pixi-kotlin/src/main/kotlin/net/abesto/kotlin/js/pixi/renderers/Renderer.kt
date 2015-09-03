package net.abesto.kotlin.js.pixi.renderers

import org.w3c.dom.HTMLCanvasElement
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.PIXI

/**
 * The common interface of CanvasRenderer and WebGLRenderer
 */
public abstract class Renderer(
        /**
         * the width of the canvas view
         */
        public val width: Int = 0,

        /**
         * the height of the canvas view
         */
        public val height: Int = 0,

        /**
         * The optional renderer parameters
         */
        options: RendererOptions = RendererOptions()
) {
    public val type: Int = PIXI.WEBGL_RENDERER

    /**
     * The resolution of the renderer
     */
    public var resolution: Int = options.resolution

    /**
     * Whether the render view is transparent
     */
    public var transparent: Boolean = options.transparent

    /**
     * The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering.
     */
    public var preserveDrawingBuffer: Boolean = options.preserveDrawingBuffer

    /**
     * This sets if the Renderer will clear the context texture or not before the new render pass. If true:
     * If the Stage is NOT transparent, Pixi will clear to alpha (0, 0, 0, 0).
     * If the Stage is transparent, Pixi will clear to the target Stage's background color.
     * Disable this by setting this to false. For example: if your game has a canvas filling background image, you often don't need this set.
     */
    public var clearBeforeRender: Boolean = options.clearBeforeRender

    /**
     * The canvas element that everything is drawn to
     */
    public val view: HTMLCanvasElement = options.view

    /**
     * Renders the stage to its webGL view
     * @param stage the Stage element to be rendered
     */
    native public fun render(stage: Stage): Unit = noImpl

    /**
     * Resizes the view to the specified width and height.
     *
     * @param width the new width of the webGL view
     * @param height the new height of the webGL view
     */
    native public fun resize(width: Number, height: Number): Unit = noImpl
}
