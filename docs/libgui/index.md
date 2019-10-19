# Getting Started

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/LibGui/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/LibGui)

## What is LibGui?

Minecraft GUIs without spending forever painstakingly aligning things
to the background image. Instead, LibGui takes a logical description
of your GUI, and draws it on-the-fly like any modern GUI system.
Controls can be hung on an item slots grid or offset from it. Panel
styles, colors, and opacity can be customized, and everything can be extended.

## Using LibGui in your mod

If you want to use it in your project, you
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

Then you can include it as a Fabric dependency in your `build.gradle`:

``` groovy
dependencies {
  modApi  "io.github.cottonmc:LibGui:<version>"

  // This will package LibGui into your JAR
  // Remove it if you don't want this
  include "io.github.cottonmc:LibGui:<version>"
}
```

And don't forget to list it in your `fabric.mod.json`:

``` json
"depends": {
    "libgui": ">=<version>",
}
```