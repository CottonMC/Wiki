# Getting Started

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/LibCD/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/LibCD)

## What is LibCD?

LibCapableData, or LibCD, adds various hooks to have more advanced control over data. It's focused on being simple and extensible, along with being compatible with any resource type added by other mods.

## Client Use
For conditional resources, add a file `<target resource with extension>.mcmeta`. This will be parsed as JSON to check whether the resource should be loaded. All conditions go in an array with the key `when:`, and are each given as an object with a single key-value pair. Each pair will specify a condition that *must* be met for the recipe to be loaded. There are four conditions pre-included, and other mods may add their own:

- `libcd:mod_loaded` (passed a String or an array): Will return true if all mods with the given IDs are loaded.
- `libcd:item_exists` (passed a String or an array): Will return true if all items with the given item IDs are loaded.
- `libcd:not` (passed a single-element object) Will return true if the condition listed in the given object is *not* true.
- `libcd:or` (passed an array, aliased to "or"): Will return true if *any* condition listed in the given array is true.

**WARNING**: Currently, conditions silently return false if they are passed an improper parameter. This will hopefully be changed in the future, but if you think something should be loaded and it isn't, check your conditions.

## Developer use
LibCD allows any mod to register their own conditions, to prevent recipe loadin based on config or more advanced logic. LibCD is available on the CurseForge maven.

To add a new condition, call `Conditions.registerCondition()`, passing an Identifier for the condition's name and a `Predicate<Object>` for the use of the condition.

The Object passed to the predicate will be a boxed primitive (Integer, Float, Boolean, etc.), a String, a `List<JsonElement>`, a `JsonObject`, or null. Use an `instanceof` check to be sure what you're being passed.

## Adding LibCD to your environment

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
  modApi  "io.github.cottonmc:LibCD:<version>"

  // This will package LibCD into your JAR
  // Remove it if you don't want this
  include "io.github.cottonmc:LibCD:<version>"
}
```

And don't forget to list it in your `fabric.mod.json`:

``` json
"depends": {
    "libcd": ">=<version>",
}
```
