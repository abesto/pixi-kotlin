package net.abesto.kotlin.js.pixi.examples.example_03

import net.abesto.kotlin.js.pixi.*
import net.abesto.kotlin.js.extensions.*

import kotlin.js.dom.html.document
import net.abesto.kotlin.js.pixi.loaders.AssetLoader
import net.abesto.kotlin.js.pixi.display.MovieClip
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.textures.Texture


fun main(args: Array<String>) {
    // create an array of assets to load
    val assetsToLoader = array("SpriteSheet.json")

    // create a new loader
    val loader = AssetLoader(assetsToLoader)

    // holder to store aliens
    var explosions: Array<MovieClip> = array()

    var count = 0

    // create an new instance of a pixi stage
    var stage = Stage(0xFFFFFF)

    // create a renderer instance.
    var renderer = autoDetectRenderer(800, 600)

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);

    fun animate() {
        requestAnimFrame({ animate() });
        renderer.render(stage);
    }

    fun onAssetsLoaded() {
        // create an array to store the textures
        var explosionTextures: Array<Texture> = array()

        for (i in 0..25) {
            var texture = Texture.fromFrame("Explosion_Sequence_A " + (i + 1) + ".png");
            explosionTextures.push(texture);
        };

        // create a texture from an image path
        // add a bunch of aliens
        for (i in 0..49) {
            // create an explosion MovieClip
            var explosion = MovieClip(explosionTextures);


            explosion.position.x = Math.random() * 800;
            explosion.position.y = Math.random() * 600;
            explosion.anchor.x = 0.5;
            explosion.anchor.y = 0.5;

            explosion.rotation = Math.random() * Math.PI;
            explosion.scale.x = 0.75 + Math.random() * 0.5
            explosion.scale.y = explosion.scale.x

            explosion.gotoAndPlay(Math.random() * 27)

            stage.addChild(explosion);
        }

        // start animating
        requestAnimFrame(::animate);
    }


    // use callback
    loader.onComplete = ::onAssetsLoaded

    //begin load
    loader.load();
}
