package net.abesto.kotlin.js.pixi.utils

/**
 * Mixins event emitter functionality to a class
 */
native("PIXI.EventTarget")
public open class EventTarget {
    /**
     * Return a list of assigned event listeners.
     *
     * @param eventName The events that should be listed.
     * @returns An array of listener functions
     */
    public fun listeners(eventName: String): Array<(Event) -> Any> = noImpl

    /**
     * Emit an event to all registered event listeners.
     *
     * @param eventName The name of the event.
     * @returns Indication if we've emitted an event.
     */
    public fun emit(eventName: String, data: Any): Boolean = noImpl

    /**
     * Emit an event to all registered event listeners.
     * Alias of `emit`.
     *
     * @param eventName The name of the event.
     * @returns Indication if we've emitted an event.
     */
    public fun dispatchEvent(eventName: String, data: Any): Unit = noImpl

    /**
     * Register a new EventListener for the given event.
     *
     * @param eventName Name of the event.
     * @param fn Callback function.
     */
    public fun on(eventName: String, fn: (Event) -> Any): Unit = noImpl

    /**
     * Add an EventListener that's only called once.
     *
     * @param eventName Name of the event.
     * @param fn Callback function.
     */
    public fun once(eventName: String, fn: (Event) -> Any): Unit = noImpl

    /**
     * Register a new EventListener for the given event.
     * Alias of `on`.
     *
     * @param eventName Name of the event.
     * @param fn Callback function.
     */
    public fun addEventListener(eventName: String, fn: (Event) -> Any): Unit = noImpl

    /**
     * Remove event listeners.
     *
     * @param eventName The event we want to remove.
     * @param callback The listener that we need to find.
     */
    public fun off(eventName: String, fn: (Event) -> Any): Unit = noImpl

    /**
     * Remove event listeners.
     * Alias of `off`.
     *
     * @param eventName The event we want to remove.
     * @param callback The listener that we need to find.
     */
    public fun removeEventListener(eventName: String, fn: (Event) -> Any): Unit = noImpl

    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @param eventName The event you want to remove all listeners for.
     */
    public fun removeAllEventListeners(eventName: String): Unit = noImpl
}