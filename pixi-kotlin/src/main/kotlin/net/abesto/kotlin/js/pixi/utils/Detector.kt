package net.abesto.kotlin.js.pixi.utils

import net.abesto.kotlin.js.pixi.renderers.Renderer
import net.abesto.kotlin.js.pixi.renderers.RendererOptions

/**
 * This helper function will automatically detect which renderer you should be using.
 * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
 * the browser then this function will return a canvas renderer
 * @param width=800 the width of the renderers view
 * @param height=600 the height of the renderers view
 * @param [options] The optional renderer parameters
 */
native("PIXI.autoDetectRenderer")
public fun autoDetectRenderer(width: Number = 800, height: Number = 600, options: RendererOptions = noImpl): Renderer = noImpl

/**
 * This helper function will automatically detect which renderer you should be using.
 * This function is very similar to the autoDetectRenderer function except that is will return a canvas renderer for android.
 * Even thought both android chrome supports webGL the canvas implementation perform better at the time of writing.
 * This function will likely change and update as webGL performance improves on these devices.
 */
native("PIXI.autoDetectRecommendedRenderer")
public fun autoDetectRecommendedRenderer(width: Number = 800, height: Number = 600, options: RendererOptions = noImpl): Renderer = noImpl

