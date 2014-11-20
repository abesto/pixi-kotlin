package net.abesto.kotlin.js.pixi.textures

import net.abesto.kotlin.js.pixi.geom.Rectangle

native("PIXI.Texture")
open public class Texture(baseTexture: BaseTexture, frame: Rectangle) {
    // TODO
    class object {
        public fun fromImage(path: String): Texture = noImpl
        public fun fromFrame(frameId: String): Texture = noImpl
    }
}