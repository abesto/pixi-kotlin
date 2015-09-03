package net.abesto.kotlin.js.pixi.examples.example_pairs

import kotlin.browser.*

import net.abesto.kotlin.js.pixi.*
import net.abesto.kotlin.js.extensions.*
import net.abesto.kotlin.js.pixi.display.Sprite
import net.abesto.kotlin.js.pixi.textures.Texture
import net.abesto.kotlin.js.pixi.display.Stage
import net.abesto.kotlin.js.pixi.utils.autoDetectRenderer
import net.abesto.kotlin.js.pixi.loaders.AssetLoader
import net.abesto.kotlin.js.pixi.display.DisplayObjectContainer

class Tile(texture: Texture) : Sprite(texture) {
    var isSelected: Boolean = false
    var theVal: Int = 0
}

fun main(args: Array<String>) {
    // first tile picked up by the player
    var firstTile: Tile?
    // second tile picked up by the player
    var secondTile: Tile?
    // can the player pick up a tile?
    var canPick: Boolean = true
    // create an new instance of a pixi stage with a grey background
    var stage = Stage(0x888888)
    // create a renderer instance width=640 height=480
    var renderer = autoDetectRenderer(640, 480)
    // importing a texture atlas created with texturepacker
    var tileAtlas = arrayOf("images.json")
    // create a new loader
    var loader = AssetLoader(tileAtlas)
    // create an empty container
    var gameContainer = DisplayObjectContainer()
    // add the container to the stage

    fun animate() {
        requestAnimFrame({ animate() })
        renderer.render(stage)
    }

    fun onTilesLoaded() {
        // choose 24 random tile images
        var chosenTiles: Array<Int> = arrayOf()
        while (chosenTiles.size() < 48) {
            var candidate = Math.floor(Math.random() * 44);
            if (chosenTiles.indexOf(candidate) == -1) {
                chosenTiles.push(candidate, candidate)
            }
        }
        // shuffle the chosen tiles
        for (i in 0..95) {
            var from = Math.floor(Math.random() * 48);
            var to = Math.floor(Math.random() * 48);
            var tmp = chosenTiles[from];
            chosenTiles[from] = chosenTiles[to];
            chosenTiles[to] = tmp;
        }
        // place down tiles
        for (i in 0..7) {
            for (j in 0..5) {
                // new sprite
                var tile: Tile = Sprite.fromFrame(chosenTiles[i * 6 + j].toString()) as Tile
                // buttonmode+interactive = acts like a button
                tile.buttonMode = true
                tile.interactive = true
                // is the tile selected?
                tile.isSelected = false
                // set a tile value
                tile.theVal = chosenTiles[i * 6 + j]
                // place the tile
                tile.position.x = (7 + i * 80).toDouble()
                tile.position.y = (7 + j * 80).toDouble()
                // paint tile black
                tile.tint = 0x000000
                // set it a bit transparent (it will look grey)
                tile.alpha = 0.5
                // add the tile
                gameContainer.addChild(tile)
                // mouse-touch listener
                tile.mousedown = {
                    this as Tile  // Help Kotlin realize that here we have a Tile instead of just a Sprite
                    // can I pick a tile?
                    if (canPick) {
                        // is the tile already selected?
                        if (!this.isSelected) {
                            // set the tile to selected
                            this.isSelected = true;
                            // show the tile
                            this.tint = 0xffffff
                            this.alpha = 1.0
                            // is it the first tile we uncover?
                            if (firstTile == null) {
                                firstTile = this
                            }
                            // this is the second tile
                            else {
                                secondTile = this
                                // can't pick anymore
                                canPick = false;
                                // did we pick the same tiles?
                                if (firstTile?.theVal == secondTile?.theVal) {
                                    // wait a second then remove the tiles and make the player able to pick again
                                    window.setTimeout({
                                        if (firstTile != null) gameContainer.removeChild(firstTile!!)
                                        if (secondTile != null) gameContainer.removeChild(secondTile!!)
                                        firstTile = null
                                        secondTile = null
                                        canPick = true
                                        null
                                    }, 1000);
                                }
                                // we picked different tiles
                                else {
                                    // wait a second then cover the tiles and make the player able to pick again
                                    window.setTimeout({
                                        firstTile?.isSelected = false
                                        secondTile?.isSelected = false
                                        firstTile?.tint = 0x000000
                                        secondTile?.tint = 0x000000
                                        firstTile?.alpha = 0.5
                                        secondTile?.alpha = 0.5
                                        firstTile = null
                                        secondTile = null
                                        canPick = true
                                        null
                                    }, 1000)
                                }
                            }
                        }
                    }
                }
                tile.touchstart = tile.mousedown

            }
        }
    }

    stage.addChild(gameContainer)
    // add the renderer view element to the DOM
    document.body!!.appendChild(renderer.view)
    // use callback
    loader.onComplete = { onTilesLoaded() }
    //begin load
    loader.load()
    requestAnimFrame({ animate() })
}
