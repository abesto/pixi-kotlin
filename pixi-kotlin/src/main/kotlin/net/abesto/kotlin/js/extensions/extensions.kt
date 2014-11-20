package net.abesto.kotlin.js.extensions


import kotlin.js.dom.html.Window
import org.w3c.dom.Element

import jquery.JQuery

native public fun <T> Array<T>.indexOf(item: T): Int = noImpl
native public fun <T> Array<T>.push(vararg item: T): Int = noImpl

native("$") public fun jq(window: Window): JQuery = JQuery()
native public fun JQuery.resize(handler: () -> Unit): JQuery = noImpl

native public var Window.onorientationchange: () -> Unit
    get() = noImpl
    set(value) = noImpl


native public class ClientRect {
    public var bottom: Double = noImpl
    public var height: Double = noImpl
    public var left: Double = noImpl
    public var right: Double = noImpl
    public var top: Double = noImpl
    public var width: Double = noImpl
}

native public fun Element.getBoundingClientRect(): ClientRect = noImpl