---
layout: page
title: "Developer Setup"
order: 2
---
The following steps will help you adding one of cottons libraries to your mod.

## Requirements
- Java 8+
- Internet access
- A workig fabric project **with FABRIC API**

## 1. Add the cotton repository
All of cotton's mods and libraries are hosted on our own maven repository. In order for you to donwload them you need to add said repository to you build.gradle file:

```bash
repositories {
  ...
  maven {
      name = "Cotton"
      url = "http://server.bbkr.space:8081/artifactory/libs-release/"
  }
  maven {
      name = "Cotton (snapshots)"
      url = "http://server.bbkr.space:8081/artifactory/libs-snapshot/"
  }
}
```

## 2. Add whatever dependency you need

You now need to import the dependecy you want two times, first in the build.gradle to add it to your project and once to the mod json file to tell the fabric mod loader that you mod depends on it.

### Cotton

Since cotton is a collection of different modules you can pick which parts you need for your mod:

Just add the lines with the modules you want to you buil.gradle:
```bash
dependencies {
  modCompile "io.github.cottonmc:cotton-player-events:<player-events-version>"
  modCompile "io.github.cottonmc:cotton-logging:<logging.version>"
  modCompile "io.github.cottonmc:cotton-config:<config-version>"
  modCompile "io.github.cottonmc:cotton-datapack:<datapack-version>"
  modCompile "io.github.cottonmc:cotton-cauldron:<cauldron-version>"
}
```

And finally mark the cotton-bundle (which contains all modules) as a dependency in fabric.mod.json:
```json
"depends": {
  "fabricloader": ">=0.4.0",
  "fabric": "*",

  "cotton":"<version>"
},
```


### Cotton Resources

Add the dependency to your buil.gradle:
```bash
dependencies {
  modCompile "io.github.cottonmc:cotton-resources:<version>"
}
```
And mark cotton-resources as a dependency in fabric.mod.json:
```json
"depends": {
  "fabricloader": ">=0.4.0",
  "fabric": "*",

  "cotton-resources":"<version>"
},
```


### Cotton Energy

Add the dependency to your buil.gradle:
```bash
dependencies {
  modCompile "io.github.cottonmc:cotton-energy:<version>"
}
```
And mark cotton-energy as a dependency in fabric.mod.json:
```json
"depends": {
  "fabricloader": ">=0.4.0",
  "fabric": "*",

  "cotton-energy":"<version>"
},
```

### LibGUI

Add the dependency to your buil.gradle:
```bash
dependencies {
  modCompile "io.github.cottonmc:LibGui:<version>"
}
```
And mark LibGui as a dependency in fabric.mod.json:
```json
"depends": {
  "fabricloader": ">=0.4.0",
  "fabric": "*",

  "libgui":"<version>"
},
```
## 3. Running the gradle tasks
For the next step open a shell and navigate to your project folder. You will need to run a gradle command to download the new dependencies for your project:
```bash
./gradlew genSources
```
This might take a few minutes. Once this is done refresh the project in your IDE.

