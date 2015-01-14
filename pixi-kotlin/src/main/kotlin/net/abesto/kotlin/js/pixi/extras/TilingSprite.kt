package net.abesto.kotlin.js.pixi.extras

import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer
import net.abesto.kotlin.js.pixi.geom.Point

native("PIXI.TilingSprite")
open public class TilingSprite(var texture: Texture, width: Double, height: Double) : DisplayObjectContainer() {
    // TODO
    var tileScale: Point = noImpl
    var tilePosition: Point = noImpl
}