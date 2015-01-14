package net.abesto.kotlin.js.pixi.extras

import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer

native("PIXI.Spine")
public class Spine(val url: String) : DisplayObjectContainer() {
    // TODO Add the rest of the interface
    class object {
        class SkeletonData {}

        class AnimationStateData(val skeletonData: SkeletonData) {
            public fun setMixByName(fromName: String, toName: String, duration: Double): Unit = noImpl
        }

        class AnimationState(val data: AnimationStateData) {
            public fun setAnimationByName(animationName: String, loop: Boolean): Unit = noImpl
            public fun addAnimationByName(animationName: String, loop: Boolean): Unit = noImpl
        }
    }

    val state: AnimationState = noImpl
    val stateData: AnimationStateData = noImpl
}