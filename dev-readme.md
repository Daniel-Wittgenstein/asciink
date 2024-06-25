Run:
> live-server

Build (only needed so that the export functionality syncs. You do not have to run
this during development):
> node ./builder/build.js

* If the game runs fine inside the editor but the export is broken, you did not
run "node ./builder/build.js"! Always run it before deployment, or the
exported runtime won't be synced with the editor runtime.

* The node modules are not involved in the app at all. We only use npm
for "live-server" because it's simple and nice. There is no building
via npm. All building just happens by running "node ./builder/build.js".
The required dependencies (code-mirror and inkjs's full version with compiler) are
just put into subfolders.