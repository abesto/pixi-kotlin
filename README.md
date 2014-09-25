# pixi-kotlin

Kotlin wrapper for Pixi.js

Currently in "no, don't use it, I'm just playing around" state. There's just enough to run a few examples: http://abesto.github.io/pixi-kotlin/

## Getting started

How to get hacking depends on whether you're working with IntelliJ IDEA on OSX or not.

### Using IDEA on OSX

This is the simplest case.

 - Install IDEA 14 Community Edition EAP from http://confluence.jetbrains.com/display/IDEADEV/IDEA+14+EAP
 - Preferences -> Appearance and Behavior -> Plugins -> Browse repositeries... -> Manage repositories -> add `http://teamcity.jetbrains.com/guestAuth/repository/download/bt345/.lastSuccessful/updatePlugins.xml. This will let you use snapshot builds of the Kotlin plugin.
 - Install the snapshot Kotlin plugin - you want something like `0.8.1356`, definitely not the stable version like `0.8.11`.

### Not on OSX

The path to the Kotlin compiler won't be correct; at the moment it's hard-coded in `build.gradle` to `${System.env.HOME}/Library/Application Support/IdeaIC14/Kotlin`. You can either change that to point to where your plugin is installed, create a symlink, or (ideally) patch `build.gradle` to be more aware of its environment.

### Not using IDEA

You can compile the project with Gradle and hack on it using your favorite editor. The only requirement is that the Kotlin compiler should be found by Gradle. No more instructions here for now, if you need help, I'm happy to provide it. If not, have fun figuring things out (Not sarcasm. I mean it. You use Emacs to write Kotlin for a reason.)


## Running an example
```sh
git clone https://github.com/abesto/pixi-kotlin.git
cd pixi-kotlin
gradle build
cd examples/pairs/web  # you can replace "pairs" with any other of the subprojects
python -m SimpleHTTPServer
open localhost:8000
```

Alternately, if you're using IntelliJ, you can move your mouse to the top-right of the editor when a generated `index.html` is open in it, and click the icon of your chosen browser; IntelliJ runs a web server, so things will "just work".
