# Getting started

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton)

## What is Cotton?

Cotton (previously Cotton API) is a collection of tiny-to-small libs,
that aren't big enough to be their own things, yet useful enough to
exist.

Currently Cotton consists of these modules:
- `cotton-logging` - custom logger
- `cotton-config` - config files
- `cotton-datapacks` - global datapacks
- `cotton-commons` - block and item unification, common tags
- `cotton-cauldron` - cauldron tweaks
- `cotton-player-events` - player events, hooks and callbacks

## Using Cotton in your mod

If you want to use it or some of its modules in your project, you
first need to add Cotton Project Maven repository to your
`build.gradle`:

``` groovy
repositories {
    maven {
        name 'Cotton'
        url 'http://server.bbkr.space:8081/artifactory/libs-release'
    }
}
```

::: tip
Don't accidentally put it inside your `buildscript` repositories
section or `settings.gradle` Those are for the Gradle plugins
primarily.
:::

Then you can pull any module you want through your Gradle dependencies as
a Fabric dependency. For example:

``` groovy
dependendencies {
    modCompile "io.github.cottonmc.cotton:cotton-logging:1.0.0-rc.1"
    modCompile "io.github.cottonmc.cotton:cotton-commons:1.0.0-rc.3"
}
```

::: warning
Cotton is modular, like Fabric, and modules are not compatible with
the `include` configuration. Please use `modCompile`, `modApi`, or
`modImplementation` and list the modules you use in your `fabric.mod.json`
:::