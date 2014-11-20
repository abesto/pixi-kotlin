package net.abesto.kotlin.js.pixi

native object PIXI {
    public val WEBGL_RENDERER: Int = 0
    public val CANVAS_RENDERER: Int = 1

    /**
     * the scale modes
     */
    public object scaleModes {
        public val DEFAULT: Int = noImpl
        public val LINEAR: Int = noImpl
        public val NEAREST: Int = noImpl
    }
}

