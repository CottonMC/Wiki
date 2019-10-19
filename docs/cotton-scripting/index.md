# Getting Started

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton-scripting/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton-scripting)

## What is Cotton Scripting?

It is a datapack-focused scripting API for Fabric. It allows you to
run any JSR-223-compatible scripting engine from commands and
interact with the Minecraft world.

## Using Cotton Scripting in your mod

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
  modApi "io.github.cottonmc:cotton-scripting:<version>"
}
```

And don't forget to list it in your `fabric.mod.json`:

``` json
"depends": {
    "cotton-scripting": ">=<version>",
}
```