package net.abesto.kotlin.js.pixi.examples.example_3

import net.abesto.kotlin.js.pixi.*

import kotlin.js.dom.html.document


fun main(args: Array<String>) {
    // create an array of assets to load
    val assetsToLoader = array("SpriteSheet.json")

    // create a new loader
    val loader = PIXI.AssetLoader(assetsToLoader)

    // holder to store aliens
    var explosions: Array<PIXI.MovieClip> = array()

    var count = 0

    // create an new instance of a pixi stage
    var stage = PIXI.Stage(0xFFFFFF)

    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(800, 600)

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);

    fun animate() {
        requestAnimFrame( { animate() } );
        renderer.render(stage);
    }

    fun onAssetsLoaded()
    {
        // create an array to store the textures
        var explosionTextures: Array<PIXI.Texture> = array()

        for (i in 0..25)
        {
            var texture = PIXI.Texture.fromFrame("Explosion_Sequence_A " + (i+1) + ".png");
            explosionTextures.push(texture);
        };

        // create a texture from an image path
        // add a bunch of aliens
        for (i in 0..49)
        {
            // create an explosion MovieClip
            var explosion = PIXI.MovieClip(explosionTextures);


            explosion.position.x = Math.random() * 800;
            explosion.position.y = Math.random() * 600;
            explosion.anchor.x = 0.5;
            explosion.anchor.y = 0.5;

            explosion.rotation = Math.random() * Math.PI;
            explosion.scale.x = 0.75 + Math.random() * 0.5
            explosion.scale.y = explosion.scale.x

            explosion.gotoAndPlay((Math.random() * 27).toInt());

            stage.addChild(explosion);
        }

        // start animating
        requestAnimFrame( { animate() } );
    }


    // use callback
    loader.onComplete = { onAssetsLoaded() }

    //begin load
    loader.load();
}
