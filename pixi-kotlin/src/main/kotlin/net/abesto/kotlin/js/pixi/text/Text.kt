package net.abesto.kotlin.js.pixi.text

import net.abesto.kotlin.js.pixi.TextStyle
import net.abesto.kotlin.js.pixi.display.Sprite

native("PIXI.Text")
public class Text(text: String, style: TextStyle = noImpl) : Sprite(noImpl) {
    // TODO
    public fun setText(text: String): Unit = noImpl
}