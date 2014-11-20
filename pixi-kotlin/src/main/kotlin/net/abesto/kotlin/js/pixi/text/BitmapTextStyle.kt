package net.abesto.kotlin.js.pixi.text

native("Object")
open public class BitmapTextStyle() {
    /** The size (optional) and bitmap font id (required) eq 'Arial' or '20px Arial' (must have loaded previously) */
    public var font: String = noImpl

    /** Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text */
    public var align: String = noImpl

    /** No documentation available in PIXI.js */
    public var fontSize: Double = noImpl

    /** No documentation available in PIXI.js */
    public var tInt: Int = noImpl
}