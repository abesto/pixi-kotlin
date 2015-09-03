package net.abesto.kotlin.js.pixi.textures

import net.abesto.kotlin.js.pixi.geom.Rectangle
import net.abesto.kotlin.js.pixi.utils.EventTarget
import kotlin.js.dom.html5.HTMLCanvasElement

native("PIXI.Texture")
/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. Instead use it as the texture for a PIXI.Sprite. If no frame is provided then the whole image is used.
 */
open public class Texture(
    /** The base texture source to create the texture from */
    open public var baseTexture: BaseTexture,
    
    /** The rectangle frame of the texture to show */
    open public var frame: Rectangle,
    
    /** The area of original texture */
    open public var crop: Rectangle = noImpl,

    /** Trimmed texture rectangle */
    public var trim: Rectangle = noImpl
) : EventTarget() {
    
    /** Does this Texture have any frame data assigned to it? */
    public var noFrame: Boolean = noImpl
    
    /** This will let the renderer know if the texture is valid. If it's not then it cannot be rendered. */
    public var valid: Boolean = noImpl

    /** This will let a renderer know that a texture has been updated (used mainly for webGL uv updates) */
    public var requiresUpdate: Boolean = noImpl
    
    /** The width of the Texture in pixels. */
    open public var width: Int = noImpl
    
    /** The height of the Texture in pixels. */
    open public var height: Int = noImpl

    /**
     * Destroys this texture
     * 
     * @param destroyBase Whether to destroy the base texture as well
     */
    public fun destroy(destroyBase: Boolean): Unit = noImpl

    /**
     * Specifies the region of the baseTexture that this texture will use.
     * 
     * @param frame The frame of the texture to set it to
     */
    public fun setFrame(frame: Rectangle): Unit = noImpl
    
    companion object StaticMethods {
        /**
         * Helper function that creates a Texture object from the given image url.
         * If the image is not in the texture cache it will be  created and loaded.
         * 
         * @param imageUrl The image url of the texture
         * @param crossorigin  Whether requests should be treated as crossorigin
         * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
         */
        public fun fromImage(imageUrl: String, crossorigin: Boolean = noImpl, scaleMode: Int = noImpl): Texture = noImpl

        /**
         * Helper function that returns a Texture objected based on the given frame id.
         * If the frame id is not in the texture cache an error will be thrown.
         *
         * @param frameId The frame id of the texture
         */
        public fun fromFrame(frameId: String): Texture = noImpl

        /**
         * Helper function that creates a new a Texture based on the given canvas element.
         *
         * @param canvas The canvas element source of the texture
         * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
         */
        public fun fromCanvas(canvas: HTMLCanvasElement, scaleMode: Int): Texture = noImpl

        /**
         * Adds a texture to the global PIXI.TextureCache. This cache is shared across the whole PIXI object.
         *
         * @param texture The Texture to add to the cache.
         * @param id The id that the texture will be stored against.
         */
        public fun addTextureToCache(texture: Texture, id: String): Unit = noImpl

        /**
         * Remove a texture from the global PIXI.TextureCache.
         *
         * @param id The id of the texture to be removed
         * @return The texture that was removed
         */
        public fun removeTextureFromCache(id: String): Texture = noImpl
        
        public val emptyTexture: Texture = noImpl
    }
}