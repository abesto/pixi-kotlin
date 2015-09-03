package net.abesto.kotlin.js.pixi.textures

import kotlin.js.dom.html5.HTMLCanvasElement
import net.abesto.kotlin.js.pixi.PIXI

/**
 * A texture stores the information that represents an image. All textures have a base texture.
 */
native("PIXI.BaseLoader")
public class BaseTexture(
        /** the source object (image or canvas) */
        public var source: String,

        /** Should be one of the PIXI.scaleMode consts */
        public var scaleMode: Int = PIXI.scaleModes.DEFAULT
) {
    companion object {
        /**
         * Helper function that creates a base texture from the given canvas element.
         *
         * @param canvas The canvas element source of the texture
         * @param scaleMode Should be one of the PIXI.scaleMode consts
         */
        public fun fromCanvas(canvas: HTMLCanvasElement, scaleMode: Int): BaseTexture = noImpl

        /**
         * Helper function that creates a base texture from the given image url.
         * If the image is not in the base texture cache it will be created and loaded.
         *
         * @param The image url of the texture
         * @param crossorigin
         * @param scaleMode Should be one of the PIXI.scaleMode consts
         */
        public fun fromImage(imageUrl: String, crossorigin: Boolean, scaleMode: Int): BaseTexture = noImpl
    }

    /** The Resolution of the texture. */
    public var resolution: Int = 1

    /** The width of the base texture set when the image has loaded */
    public val width: Int = 100

    /** The height of the base texture set when the image has loaded */
    public val height: Int = 100

    /**  Set to true once the base texture has loaded */
    public val hasLoaded: Boolean = false

    /**
     * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
     */
    public var premultipliedAlpha: Boolean = true

    /**
     * No documentation available in PIXI.js, should probably not be used
     */
    public var imageUrl: String? = null

    /** Destroys this base texture */
    public fun destroy(): Unit = noImpl

    /** Sets all glTextures to be dirty. */
    public fun dirty(): Unit = noImpl

    /**
     * Removes the base texture from the GPU, useful for managing resources on the GPU.
     * Atexture is still 100% usable and will simply be reuploaded if there is a sprite on screen that is using it.
     */
    public fun unloadFromGPU(): Unit = noImpl

    /**
     * Changes the source image of the texture
     *
     * @param newSrc the path of the image
     */
    public fun updateSourceImage(newSrc: String): Unit = noImpl
}