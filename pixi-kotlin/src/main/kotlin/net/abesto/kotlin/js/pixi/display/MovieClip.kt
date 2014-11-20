package net.abesto.kotlin.js.pixi.display

import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.utils.Event

/**
 * A MovieClip is a simple way to display an animation depicted by a list of textures.
 */
native("PIXI.MovieClip")
public class MovieClip(
        /** The array of textures that make up the animation */
        public var textures: Array<Texture>
) : Sprite(textures[0]) {

    class object {
        /**
         * A short hand way of creating a movieclip from an array of frame ids
         *
         * @param frames the array of frames ids the movieclip will use as its texture frames
         */
        public fun fromFrames(frames: Array<Int>): MovieClip = noImpl

        /**
         * A short hand way of creating a movieclip from an array of image ids
         *
         * @param frames the array of image ids the movieclip will use as its texture frames
         */
        public fun fromImages(images: Array<Int>): MovieClip = noImpl
    }

    /**
     * The speed that the MovieClip will play at. Higher is faster, lower is slower
     */
    public var animationSpeed: Double = 1.0

    /**
     * Whether or not the movie clip repeats after playing.
     */
    public var loop: Boolean = true

    /**
     * Function to call when a MovieClip finishes playing
     */
    public var onComplete: (Event) -> Any = noImpl

    /**
     * The MovieClips current frame index (this may not have to be a whole number)
     */
    public val currentFrame: Double = noImpl

    /**
     * Indicates if the MovieClip is currently playing
     */
    public val playing: Boolean = false

    /**
     * totalFrames is the total number of frames in the MovieClip. This is the same as number of textures
     * assigned to the MovieClip.
     */
    public val totalFrames: Int = noImpl

    /**
     * Stops the MovieClip
     */
    public fun stop(): Unit = noImpl

    /**
     * Plays the MovieClip
     */
    public fun play(): Unit = noImpl

    /**
     * Stops the MovieClip and goes to a specific frame
     *
     * @param frameNumber frame index to stop at
     */
    public fun gotoAndPlay(frameNumber: Number): Unit = noImpl
}