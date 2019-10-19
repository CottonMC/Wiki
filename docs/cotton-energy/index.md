# Getting started

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-snapshot/io/github/cottonmc/cotton-energy/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-snapshot/io/github/cottonmc/cotton-energy)

## What is Cotton Energy?

Cotton Energy is library to make simple, extensible power systems. 
Using it you can create any kind of a power system from fantastic
liquid-like Redstone Flux to realistic electricity-like energy with
varying voltages, sparkling wires and dangerous harmful arcs. It
uses LibBlockAttributes to interact between blocks, items, or entities.

## Using Cotton Energy in your mod

Cotton Energy is available on Cotton Project snapshots Maven. You need
to pull it in order to use the library. Put it in your `build.gradle`:

``` groovy
repositories {
  maven {
      name = "Cotton"
      url = "http://server.bbkr.space:8081/artifactory/libs-snapshot/"
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
  modApi  "io.github.cottonmc:cotton-energy:<version>"

  // This will package Cotton Energy into your JAR
  // Remove it if you don't want this
  include "io.github.cottonmc:cotton-energy:<version>"
}
```

And don't forget to list it in your `fabric.mod.json`:

``` json
"depends": {
    "cotton-energy": ">=<version>",
}
```