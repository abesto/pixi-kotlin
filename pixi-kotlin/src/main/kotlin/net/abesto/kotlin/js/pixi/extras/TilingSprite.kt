package net.abesto.kotlin.js.pixi.extras

import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.geom.Point
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.geom.Rectangle

/**
 * A tiling sprite is a fast way of rendering a tiling image
 */
native("PIXI.TilingSprite")
open public class TilingSprite(
        /** the texture of the tiling sprite */
        texture: Texture,

        /** The width of the tiling sprite, setting this will actually modify the scale to achieve the value set */
        override public var width: Double,

        /** The height of the tiling sprite, setting this will actually modify the scale to achieve the value set */
        override public var height: Double
) : Sprite(texture) {
    /** The scaling of the image that is being tiled */
    public var tileScale: Point = noImpl

    /** A point that represents the scale of the texture object */
    public var tileScaleOffset: Point = noImpl

    /** The offset position of the image that is being tiled */
    public var tilePosition: Point = noImpl

    /**
     * Whether this sprite is renderable or not
     * @default true
     */
    override public var renderable: Boolean = noImpl

    /**
     * The tint applied to the sprite. This is a hex value
     * @default 0xFFFFFF
     */
    override public var tint: Int = noImpl

    /**
     * The blend mode to be applied to the sprite
     * @default PIXI.blendModes.NORMAL
     */
    override public var blendMode: Int = noImpl

    /**
     * Returns the framing rectangle of the sprite as a PIXI.Rectangle object
     * @return the framing rectangle
     */
    override public fun getBounds(): Rectangle
}