# Basics

## Writing Scripts

Scripts can be run using any JSR-223 script engine on the classpath.
JavaScript is (at time of writing) natively included with Java 8 as
the Nashorn library, though it is in the process of deprecation. Any
other scripting language can be added if it has an implementation on
JSR-223, but the JAR may need a `fabric.mod.json` for it to be
registered by the loader.

All scripts should be placed inside datapacks in the
`<namespace>/data/scripts/` folder, or any subfolder. Upon reload,
they will be ready to call in-game. Scripts can either be called as a
file, or you can call a specific function within the file. The script
will be passed a [`CottonScriptContext`](https://github.com/CottonMC/cotton-scripting/blob/master/src/main/java/io/github/cottonmc/cotton_scripting/api/CottonScriptContext.java)
object named `cotton_context`, which carries information about the
script's state, including any arguments passed by the user, and all
functions called specifically will be passed a fresh context as a
parameter. This is done because JSR-223 isn't too happy about having
arbitrary amounts of arguments passed to a function. The ScriptContext
can also be used to send feedback to the user or run in-game commands.

## Calling Scripts

Scripts can be run in-game with the `/script` command. It requires at
least a permission level of 2, like with the vanilla `/function`
command. The command requires the identifier of a script, and will
autocomplete valid script files. Optionally, a specific method name
can be passed, along with any arguments the player wants to send,
separated by a comma and a space. **Be warned:** Scripts are
arbitrarycode. They are a lot more capable than standard
`mcfunction`s, but that capability comes with a risk. Make absolutely
sure you know what the scripts you put on your server do. Remember,
[all scripts are technically arbitrary code](https://www.youtube.com/watch?v=LtGm7e9gd0Y).
Please make sure you don't download malware onto your or your players' computers.