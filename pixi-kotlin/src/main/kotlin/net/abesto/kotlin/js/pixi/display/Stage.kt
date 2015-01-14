package net.abesto.kotlin.js.pixi.display

import net.abesto.kotlin.js.pixi.InteractionManager
import kotlin.js.dom.html.HTMLElement
import net.abesto.kotlin.js.pixi.geom.Point

/**
 * A Stage represents the root of the display tree. Everything connected to the stage is rendered
 *
 * Creating a stage is a mandatory process when you use Pixi, which is as simple as this :
 * var stage = PIXI.Stage(0xFFFFFF)
 * where the parameter given is the background colour of the stage, in hex
 * you will use this stage instance to add your sprites to it and therefore to the renderer
 * Here is how to add a sprite to the stage :
 * stage.addChild(sprite);
 */
native("PIXI.Stage")
public class Stage(
        /**
         * the background color of the stage, you have to pass this in is in hex format
         * like: 0xFFFFFF for white
         */
        backgroundColor: Int,

        /** Whether or not the stage is interactive */
        override public var interactive: Boolean = false)
: DisplayObjectContainer() {
        /**
         * The interaction manage for this stage, manages all interactive activity on the stage
         */
        public var interactionManager: InteractionManager = noImpl

        /**
         * Sets another DOM element which can receive mouse/touch interactions instead of the default Canvas element.
         * This is useful for when you have other DOM elements on top of the Canvas element.
         *
         * @param domElement This new domElement which will receive mouse/touch events
         */
        public fun setInteractionDelegate(domElement: HTMLElement): Unit = noImpl

        /**
         * Sets the background color for the stage
         *
         * @method setBackgroundColor
         * @param backgroundColor the color of the background, easiest way to pass this in is in hex format
         *      like: 0xFFFFFF for white
         */
        public fun setBackgroundColor(backgroundColor: Int): Unit = noImpl

        /**
         * This will return the point containing global coordinates of the mouse.
         *
         * @return A point containing the coordinates of the global InteractionData position.
         */
        public fun getMousePosition(): Point = noImpl
}
