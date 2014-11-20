/**
 * Kotlin bindings for Pixi.js
 */
package net.abesto.kotlin.js.pixi


native val <T> undefined: T = noImpl

native public fun requestAnimFrame(animation: () -> Unit): Unit = noImpl

// TODO add default values, check nullability
// TODO add documentation
native("Object")
public class TextStyle {
    var font: String = noImpl
    var fill: String = noImpl
    var align: String = noImpl
    var stroke: String = noImpl
    var strokeThickness: Int = noImpl
    var wordWrap: Boolean = noImpl
    var wordWrapWidth: Int = noImpl
}

