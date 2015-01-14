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

    /**
     * Various blend modes supported by pixi. IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
     */
    public object blendModes {
        public val NORMAL: Int = noImpl
        public val ADD: Int = noImpl
        public val MULTIPLY: Int = noImpl
        public val SCREEN: Int = noImpl
        public val OVERLAY: Int = noImpl
        public val DARKEN: Int = noImpl
        public val LIGHTEN: Int = noImpl
        public val COLOR_DODGE: Int = noImpl
        public val COLOR_BURN: Int = noImpl
        public val HARD_LIGHT: Int = noImpl
        public val SOFT_LIGHT: Int = noImpl
        public val DIFFERENCE: Int = noImpl
        public val EXCLUSION: Int = noImpl
        public val HUE: Int = noImpl
        public val SATURATION: Int = noImpl
        public val COLOR: Int = noImpl
        public val LUMINOSITY: Int = noImpl
    }
}

