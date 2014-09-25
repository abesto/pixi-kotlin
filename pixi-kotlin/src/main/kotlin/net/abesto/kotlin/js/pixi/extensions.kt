package net.abesto.kotlin.js.pixi


import kotlin.js.dom.html.window
import kotlin.js.dom.html.Window
import jquery.JQuery

native public fun <T> Array<T>.indexOf(item: T): Int = noImpl
native public fun <T> Array<T>.push(vararg item: T): Int = noImpl

native("$") public fun jq(window: Window): JQuery = JQuery()
native public fun JQuery.resize(handler: () -> Unit): JQuery = noImpl

native public var Window.onorientationchange: () -> Unit
    get() = noImpl
    set(value) = noImpl

