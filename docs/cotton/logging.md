# Logging

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-logging/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-logging)

Module name: `cotton-logging`

## Creating a new ModLogger

Creating a new ModLogger couldn't be easier. Simply put the following
code in your mod's main file:

``` java
public static ModLogger logger = new ModLogger(MODID);
```

And that's all there really is to it. But you might want to add a
custom prefix to your logger so it's easier to recognize your mod's logs:

``` java
public static ModLogger logger = new ModLogger(MODID, "Foo");
```

Now everything this logger writes will have the prefix `[Foo]:`

## Using your logger

A ModLogger comes with different levels, which makes it easier to
only log what you need. You can log using a level by writing: 
`logger.<level>(<your message>)` Each level has a different priority
and some of them also have special colors to make them more visible.

Available levels are:
- `all` - all levels, including custom levels
- `error` and `devError` - designate error events 
- `warn` and `devWarn` - designate potentially harmful situations
- `info` and `devInfo` - designate informational messages that 
highlight the progress at coarse-grained level
- `debug` - designates fine-grained informational events that are most
useful to debug an application
- `trace` - designates finer-grained informational events than the `debug`

Levels prefixed with `dev` will only print the message in the
development environment.