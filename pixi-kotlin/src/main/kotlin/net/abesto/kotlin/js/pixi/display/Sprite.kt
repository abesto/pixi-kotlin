package net.abesto.kotlin.js.pixi.display

import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.geom.Point

native("PIXI.Sprite")
open public class Sprite(texture: Texture) : DisplayObjectContainer() {
    // TODO
    class object {
        public fun fromImage(path: String): Sprite = noImpl
        public fun fromFrame(imageId: String): Sprite = noImpl
    }
    public var anchor: Point = noImpl
    public var tint: Int = 0xFFFFFF

    public fun setTexture(texture: Texture): Unit = noImpl
}