package net.abesto.kotlin.js.pixi.text

import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer

/**
 * A BitmapText object will create a line or multiple lines of text using bitmap font. To split a line you can use '\n', '\r' or '\r\n' in your string.
 * You can generate the fnt files using
 * http://www.angelcode.com/products/bmfont/ for windows or
 * http://www.bmglyph.com/ for mac.
 */
native("PIXI.BitmapText")
public class BitmapText(
        /** The copy that you would like the text to display */
        text: String,

        /** The style parameters */
        style: BitmapTextStyle
) : DisplayObjectContainer() {

    /**
     * The width of the overall text, different from fontSize,
     * which is defined in the style object
     */
    public val textWidth: Double = noImpl

    /**
     * The height of the overall text, different from fontSize,
     * which is defined in the style object
     */
    public val textHeight: Double = noImpl

    /**
     * The dirty state of this object.
     */
    public var dirty: Boolean = noImpl

    /**
     * Set the text string to be rendered.
     * @param text The text that you would like displayed
     */
    public fun setText(text: String): Unit = noImpl

    /**
     * Set the style of the text
     */
    public fun setStyle(style: BitmapTextStyle): Unit = noImpl
}
