# Getting started

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton-resources/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton-resources)

## What is Cotton Resources?

Cotton Resources provides mod authors with a selection of different
blocks and items that are commonly used. We did all the work for you,
there are finished high-quality textures, incredibly structured JSON
files and stunning crafting recipes. Even ore gen is handled by us.
And the best thing about them - we will also handle pesky duplicates;
there won't be two different copper ingots that can do the exact same
things but have different textures. All you have to do is install the
mod and use it!

## Using Cotton Resources in your mod

Include Cotton Project Maven in your `build.gradle`:

``` groovy
repositories {
  maven {
      name = "Cotton"
      url = "http://server.bbkr.space:8081/artifactory/libs-release/"
  }
}
```

::: tip
Don't accidentally put it inside your `buildscript` repositories
section or `settings.gradle` Those are for the Gradle plugins
primarily.
:::

Include Cotton Resources in your `build.gradle`:

``` groovy
dependencies {
  modApi  "io.github.cottonmc:cotton-resources:<version>"

  // This will package Cotton Resources into your JAR
  // Remove it if you don't want this
  include "io.github.cottonmc:cotton-resources:<version>"
}
```

And don't forget to list it in your `fabric.mod.json`:

``` json
"depends": {
    "cotton-resources": ">=<version>",
}
```

Now you can simply access any item or block from the collection from
anywhere you want prepending it with `c` namespace, like `c:tin_ingot`

