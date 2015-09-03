package net.abesto.kotlin.js.pixi.extras

import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer

native("PIXI.Spine")
public class Spine(val url: String) : DisplayObjectContainer() {
    // TODO Add the rest of the interface
    companion object {
        class SkeletonData {}
        
        class Skeleton {
            fun setToSetupPose(): Unit = noImpl
        }

        class AnimationStateData(val skeletonData: SkeletonData) {
            public fun setMixByName(fromName: String, toName: String, duration: Double): Unit = noImpl
        }

        class AnimationState(val data: AnimationStateData) {
            public fun setAnimationByName(trackIndex: Int, animationName: String, loop: Boolean): Unit = noImpl
            public fun addAnimationByName(trackIndex: Int, animationName: String, loop: Boolean, delay: Int): Unit = noImpl
        }
    }
    
    val skeleton: Skeleton = noImpl
    var autoUpdate: Boolean = noImpl

    val state: AnimationState = noImpl
    val stateData: AnimationStateData = noImpl
    fun update(n: Number): Unit = noImpl
}