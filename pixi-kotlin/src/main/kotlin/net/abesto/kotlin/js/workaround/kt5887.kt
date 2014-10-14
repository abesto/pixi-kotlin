package net.abesto.kotlin.js.workaround

import net.abesto.kotlin.js.pixi.PIXI

/**
 * Workaround for https://youtrack.jetbrains.com/issue/KT-5887
 */
native public class WorkaroundKT5887 {
    public val interactionData: PIXI.InteractionData = noImpl
    public val rectangle: PIXI.Rectangle = noImpl
    public val sprite: PIXI.Sprite = noImpl
    public val movieClip: PIXI.MovieClip = noImpl
    public val baseTexture: PIXI.BaseTexture = noImpl
    public val texture: PIXI.Texture = noImpl
    public val assetLoader: PIXI.AssetLoader = noImpl
    public val eventTarget: PIXI.EventTarget = noImpl
    public val Spine: PIXI.Spine = noImpl
}
