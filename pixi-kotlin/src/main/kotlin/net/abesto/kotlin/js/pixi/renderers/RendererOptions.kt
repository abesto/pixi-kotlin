package net.abesto.kotlin.js.pixi.renderers

import kotlin.js.dom.html5.HTMLCanvasElement

native("Object")
open public class RendererOptions {
    /**
     * the canvas to use as a view, optional
     */
    var view: HTMLCanvasElement = noImpl

    /**
     * If the render view is transparent, default false
     */
    var transparent: Boolean = false

    /**
     * sets antialias (only applicable in chrome at the moment)
     */
    var antialias: Boolean = false

    /**
     * enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context
     */
    var preserveDrawingBuffer: Boolean = false

    /**
     * the resolution of the renderer retina would be 2
     */
    var resolution: Int = 1

    /**
     * This sets if the Renderer will clear the context texture or not before the new render pass. If true:
     * If the Stage is NOT transparent, Pixi will clear to alpha (0, 0, 0, 0).
     * If the Stage is transparent, Pixi will clear to the target Stage's background color.
     * Disable this by setting this to false. For example: if your game has a canvas filling background image, you often don't need this set.
     */
    var clearBeforeRender: Boolean = false
}