package net.abesto.kotlin.js.pixi.extras

import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer

native("PIXI.Spine")
public class Spine(val url: String) : DisplayObjectContainer() {
    // TODO
    class object {
        class AnimationSkeletonData {

        }

        class AnimationStateData(val skeletonData: AnimationSkeletonData) {
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