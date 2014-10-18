# pixi-kotlin

Kotlin wrapper for Pixi.js

Currently in "no, don't use it, I'm just playing around" state. A few examples are already implemented: http://abesto.github.io/pixi-kotlin/

## Getting started

```sh
git clone https://github.com/abesto/pixi-kotlin.git
cd pixi-kotlin
./gradlew build
cd examples/pairs/web  # you can replace "pairs" with any other of the subprojects
python -m SimpleHTTPServer
open localhost:8000
```

Alternately, if you're using IntelliJ, you can move your mouse to the top-right of the editor when a generated `index.html` is open in it, and click the icon of your chosen browser; IntelliJ runs a web server, so things will "just work".

### Why can't I just open an .html file directly?

Because (for security reasons) WebGL doesn't work when the webpage is opened over the `file://` protocol. So you
need a webserver to check out the examples.

## Roadmap

 - contribute a proper gradle kotlin->js plugin to kotlin
 - implement all examples from http://www.pixijs.com/examples/
 - create skeleton project to get started with pixi-kotlin
