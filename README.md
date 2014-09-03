# pixi-kotlin

Kotlin wrapper for Pixi.js

Currently in "no, don't use it, I'm just playing around" state. There's just enough to run one example: the port of http://www.emanueleferonato.com/2014/02/26/complete-html5-concentration-game-made-with-pixi-js/.

## Run the example

Pre-requisite: have a newish version of kotlin in `~/Library/Application Support/IdeaIC14/Kotlin`. This can probably be made more general / nicer. Sorry about the mess.

```sh
git clone https://github.com/abesto/pixi-kotlin.git
cd pixi-kotlin
gradle build
cd examples/pairs/web
python -m SimpleHTTPServer
open localhost:8000
```
