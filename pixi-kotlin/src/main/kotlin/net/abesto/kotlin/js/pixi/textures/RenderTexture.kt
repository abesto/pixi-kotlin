package net.abesto.kotlin.js.pixi.textures

import net.abesto.kotlin.js.pixi.display.Stage

native("PIXI.RenderTexture")
public class RenderTexture(width: Int, height: Int) : Texture(noImpl, noImpl) {
    // TODO
    public fun render(stage: Stage, clear: Boolean): Unit = noImpl
}