# pixi-kotlin

Kotlin wrapper for Pixi.js

Currently in "no, don't use it, I'm just playing around" state. There's just enough to run a few examples: http://abesto.github.io/pixi-kotlin/

## Run the example

Pre-requisite: have a newish version of kotlin in `~/Library/Application Support/IdeaIC14/Kotlin`. This can probably be made more general / nicer. Sorry about the mess.

```sh
git clone https://github.com/abesto/pixi-kotlin.git
cd pixi-kotlin
gradle build
cd examples/pairs/web  # you can replace "pairs" with any other of the subprojects
python -m SimpleHTTPServer
open localhost:8000
```
