# Examples

Below is a sample script that shows off the primary features of Cotton Scripting.

## JavaScript
```js
// Loads the Java class for ScriptTools, for raytracing and grabbing other executors.
var ScriptTools = Java.type('io.github.cottonmc.cotton_scripting.api.ScriptTools');

// Loads the Java class for Scorebase, for persistent data storage
var WorldStorage = Java.type('io.github.cottonmc.cotton_scripting.api.WorldStorage');

// prints "Hello world!" to the console whenever the script, or a function in the script, is run.
print('Hello world!');

//all scripts are passed a CottonScriptContext on eval as "cotton_context",
//and a fresh copy for any function calls in case the script-local version is modified.
//this prints to the console how many times this script has been run in the world's history,
//then saves the new number back to world storage.
var runs = WorldStorage.getGlobalValue(cotton_context.getCommandWorld(), "cotton:test_script_runs_js");
print("This script has been run " + runs + " time(s)!");
runs++;
WorldStorage.setGlobalValue(cotton_context.getCommandWorld(), "cotton:test_script_runs_js", runs);

//sets the block below the runner's feet to a block they specify.
var placeAtFeet = function(context) {
    var arguments = context.getArguments();
    return context.runCommand("/setblock ~ ~-1 ~ " + arguments[0]);
};

//prints the ID and name of the block the runner is looking at.
//also sets the "cotton:last_seen_block" entity value for the runner to the ID of the block.
var waila = function(context) {
    var result = ScriptTools.rayTraceFromLook(context.getCommandSource(), 5);
    WorldStorage.setEntityValue(context.getCommandSource(), "cotton:last_seen_block", result.getBlockId());
    context.sendFeedback(result.getBlockId() + ": " + ScriptTools.getTranslatedName(result.getBlockId(), "block"), false)
};

//also known as "what did I look at"
//reads the "cotton:last_seen_block" entity value for the runner and prints the ID and name.
var wdila = function(context) {
    var lastLook = WorldStorage.getEntityValue(context.getCommandSource(), "cotton:last_seen_block");
    if (lastLook === 0) context.sendFeedback("Never looked at anything!", false);
    else context.sendFeedback(lastLook + ": " + ScriptTools.getTranslatedName(lastLook, "block"), false)
};
```

## Python 2.7
```python
# loads the Java class for ScriptTools, for raytracing and grabbing other executors.
from io.github.cottonmc.cotton_scripting.api import ScriptTools

#loads the Java class for WorldStorage, for persistent data storage
from io.github.cottonmc.cotton_scripting.api import WorldStorage

#prints "Hello world!" to the console whenever the script, or a function in the script, is run.
print "Hello world!"

#all scripts are passed a CottonScriptContext on eval as "cotton_context",
#and a fresh copy for any function calls in case the script-local version is modified.
#this prints to the console how many times this script has been run in the world's history,
#then saves the new number back to world storage.
runs = WorldStorage.getGlobalValue(cotton_context.getCommandWorld(), "cotton:test_script_runs_py2")
print "This script has been run " + str(runs) + " time(s)!"
runs += 1
WorldStorage.setGlobalValue(cotton_context.getCommandWorld(), "coton:test_script_runs_py2", runs)

#sets the block below the runner's feet to a block they specify.
def place_at_feet(context):
    arguments = context.getArguments()
    return context.runCommand("/setblock ~ ~-1 ~ " + arguments[0])

#prints the ID and name of the block the runner is looking at.
#also sets the "cotton:last_seen_block" entity value for the runner to the ID of the block.
def waila(context):
    result = ScriptTools.rayTraceFromLook(context.getCommandSource(), 5)
    WorldStorage.setEntityValue(context.getCommandSource(), "cotton:last_seen_block", result.getBlockId())
    context.sendFeedback(result.getBlockId() + ": " + ScriptTools.getTranslatedName(result.getBlockId(), "block"), False)

#also known as "what did I look at"
#reads the "cotton:last_seen_block" entity value for the runner and prints the ID and name.
def wdila(context):
    last_look = WorldStorage.getEntityValue(context.getCommandSource(), "cotton:last_seen_block")
    if last_look == "":
        context.sendFeedback("Never looked at anything!", False)
    else:
        context.sendFeedback(last_look + ": " + ScriptTools.getTranslatedName(last_look, "block"), False)
```