package net.abesto.kotlin.js.pixi.loaders

import net.abesto.kotlin.js.pixi.utils.EventTarget

/**
 * A Class that loads a bunch of images / sprite sheet / bitmap font files. Once the
 * assets have been loaded they are added to the PIXI Texture cache and can be accessed
 * easily through PIXI.Texture.fromImage() and PIXI.Sprite.fromImage()
 * When all items have been loaded this class will dispatch a 'onLoaded' event
 * As each individual item is loaded this class will dispatch a 'onProgress' event
 */
native("PIXI.AssetLoader")
public class AssetLoader(
        /** An array of image/sprite sheet urls that you would like loaded
         *  supported. Supported image formats include 'jpeg', 'jpg', 'png', 'gif'. Supported
         *  sprite sheet data formats only include 'JSON' at this time. Supported bitmap font
         *  data formats include 'xml' and 'fnt'.
         */
        public val assetURLs: Array<String>,

        /** Whether requests should be treated as crossorigin */
        public val crossorigin: Boolean = false) : EventTarget() {
    /**
     * Starts loading the assets sequentially
     */
    public fun load(): Unit = noImpl

    /** Fired when all the assets have loaded */
    public var onComplete: () -> Unit = noImpl

    /** Fired when an item has loaded */
    public var onProgress: () -> Unit = noImpl
}

