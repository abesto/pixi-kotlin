package net.abesto.kotlin.js.pixi.display

import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.geom.Point
import net.abesto.kotlin.js.pixi.PIXI
import net.abesto.kotlin.js.pixi.filters.AbstractFilter
import net.abesto.kotlin.js.pixi.geom.Matrix
import net.abesto.kotlin.js.pixi.geom.Rectangle

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * A sprite can be created directly from an image like this:
 * var sprite = PIXI.Sprite.fromImage("assets/image.png")
 * yourStage.addChild(sprite)
 */
native("PIXI.Sprite")
open public class Sprite(
        /** The texture that the sprite is using */
        public var texture: Texture
) : DisplayObjectContainer() {

    companion object {
        /**
         * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
         * The frame ids are created when a Texture packer file has been loaded
         *
         * @param frameId The frame Id of the texture in the cache
         * @return A new Sprite using a texture from the texture cache matching the frameId
         */
        public fun fromFrame(frameId: String): Sprite = noImpl

        /**
         * Helper function that creates a sprite that will contain a texture based on an image url
         * If the image is not in the texture cache it will be loaded
         *
         * @param imageId The image url of the texture
         * @return A new Sprite using a texture from the texture cache matching the image id
         */
        public fun fromImage(imageId: String, crossorigin: Boolean = noImpl, scaleMode: Int = noImpl): Sprite = noImpl
    }

    /**
     * The anchor sets the origin point of the texture.
     * The default is 0,0 this means the texture's origin is the top left
     * Setting than anchor to 0.5,0.5 means the textures origin is centered
     * Setting the anchor to 1,1 would mean the textures origin points will be the bottom right corner
     */
    public var anchor: Point = noImpl

    /**
     * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
     * @default 0xFFFFFF
     */
    open public var tint: Int = 0xFFFFFF

    /**
     * The blend mode to be applied to the sprite. Set to PIXI.blendModes.NORMAL to remove any blend mode.
     * @default PIXI.blendModes.NORMAL;
     */
    open public var blendMode: Int = PIXI.blendModes.NORMAL

    /**
     * The shader that will be used to render the texture to the stage. Set to null to remove a current shader.
     * @default null
     */
    public var shader: AbstractFilter? = null

    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     */
    override public var width: Double = noImpl

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     */
    override public var height: Double = noImpl

    /**
     * Sets the texture of the sprite
     * @param texture The PIXI texture that is displayed by the sprite
     */
    public fun setTexture(texture: Texture): Unit = noImpl

    /**
     * Returns the bounds of the Sprite as a rectangle. The bounds calculation takes the worldTransform into account.
     * @param matrix the transformation matrix of the sprite
     * @return the framing rectangle
     */
    override public fun getBounds(matrix: Matrix): Rectangle = noImpl
}