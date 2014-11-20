package net.abesto.kotlin.js.pixi.utils

/**
 * Creates an homogenous object for tracking events so users can know what to expect.
 */
native("PIXI.Event")
public class Event(
        /** The target object that the event is called on */
        public val target: Any,

        /** The string name of the event that was triggered */
        public val type: String,

        /** Arbitrary event data to pass aInt */
        public val data: Any
) {
    /** backwards compat with older version of events */
    public val content: Any = data

    /** The timestamp when the event occurred. */
    public val timeStamp: Int = noImpl

    /** Stops the propagation of events up the scene graph (prevents bubbling). */
    public fun stopPropagation(): Unit = noImpl

    /** Stops the propagation of events to sibling listeners (no Inter calls any listeners). */
    public fun stopImmediatePropagation(): Unit = noImpl
}