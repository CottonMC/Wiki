---
layout: page
title: "Setting up you dev environment"
order: 2
---
The following steps will help you getting started with Fabric. You will learn how to setup a dev environment and how to customize it to fit you project.

## Requirements
- Java 8+
    - There are known problems with higher java versions. 
- Internet access
- An IDE, preferable IntelliJ (it has a very useful plugin for mixins)

## Setting up your workspace
Start by creating an empty folder where you want to set up your workspace. Once you are ready to head over to [this](https://github.com/FabricMC/fabric-example-mod/) GitHub project and copy everything except the LICENSE and README.md. For the next step open the gradle.properties in your favorite text editor and replace the values of "minecraft_version", "yarn_mappings" and "loader_version" with the latest version (You can find them [here](https://modmuss50.me/fabric.html)).

## Running the gradle tasks
For the next step open a shell and navigate to your project folder. You will need to run a few gradle commands to download the required dependencies for your project:
```shell
./gradlew genSources
```
This might take a few minutes. Next, you will need to prepare your project for your IDE:

### Intellij
```shell
./gradlew idea
```
I also recommend that you install the excellent MinecraftDev plugin for IntelliJ. You can get it [here](https://plugins.jetbrains.com/plugin/8327-minecraft-development) or from the IntelliJ Marketplace.

Open the project in IntelliJ by double-clicking the .ipr file. Make sure to **NOT** import it as a gradle project.
### Eclipse
```shell
./gradlew eclipse genEclipseRuns
```
### VS Code
Open the folder with VS Code and wait for it to import the gradle project (This might take some time). Once it is done go to View -> Terminal. This should open a terminal in the project folder. Enter the following command:
```shell
./gradlew vscode
```

You should now have the project in the IDE of your choice. Proceed to the next step. If gradle exited with an error on any of the commands make sure to check out the **GRADLE, SOS!** section at the end of this page.

## Some important files
In this section I will introduce some of the most important files of your project.

### src/main/resources/fabric.mod.json
This file contains basic information about your mod and is used to start your mod. **DO NOT RENAME OR MOVE IT**.
It should look something like this:
```json
{
  "id": "modid",
  "name": "Example Mod",
  "description": "This is an example description! Tell everyone what your mod is about!",
  "version": "${version}",
  "side": "universal",
  "initializers": [
    "net.fabricmc.example.ExampleMod"
  ],
  "requires": {
    "fabric": "*"
  },
  "mixins": {
    "client": "modid.client.json",
    "common": "modid.common.json"
  }
}
```
There are three important entries in this file:
1. "id" This contains your mod's modid. This will be used to uniquely identify your mod.
2. "initializers" This array contains the fully qualified names of all your mods Initializers (Usually only one). Should you rename your initializer class or move it to another package make sure to update this string too.
3. "mixins" This is where you set the name of your client, common and server mixin names. Make sure that the entries always match the names of your mixin json files.

### src/main/resources/modid.*.json (Mixin files)
These files contain a list of all your mixin. Whenever you want to add or remove a mixin make sure to also update the corresponding mixin file.
Here is how your modid.client.json should look like right now:
```json
{
  "required": true,
  "package": "net.fabricmc.example.mixin",
  "compatibilityLevel": "JAVA_8",
  "mixins": [
    "ExampleMixin"
  ],
  "injectors": {
    "defaultRequire": 1
  }
}
```
Important is the line starting with "package" and the "mixins" array. The later is an array of all the mixin classes that you want to add on the client side and the first is the package where they can be found. Right now only the mixin "ExampleMixin" in the "net.fabricmc.example.mixin" will be applied.

### src/main/java/net/fabricmc/example/ExampleMod.java
This is your mod's main class. It's onInitialize() method will be run during Minecraft's startup. Whenever I mention "the initialize method" or "during initialization" or "in your main mod class" I am talking about this method/class.

## Customize your project
Now that you have a basic idea of what your project looks like here are some important next steps:

1. Change the default package and rename the main mod class. (don't forget to update all the json files I mentioned above)
2. Update the fabric.mod.json. It's time to pick a name, modid and to write a basic description for your mod.
3. Rename the mixin json files. Update the mixn jsons so that they contain you modid. While you are at it I would recommend to also add the prefix "mixins" to the files. This will allow the MCDev plugin to find them. And make sure to also update the fabric.mod.json file.
4. Start reading the source code of other mods on github or head over to the Basic section. And don't forget to join us on Discord!

## **GRADLE, SOS!**
If you are reading this you are doomed. Give up now.

Wait no, don't actually do that! Gradle has a tendency to break, so whatever you are experiencing right now is probably not your fault. Try the following solutions and see if they fix your project:

1. Kill old gradle processes. Sometimes gradle keeps running in the background and locks a file, making it impossible for newer gradle processes to change it. You can kill all running gradle processes with the `./gradlew --stop` command.

2. make sure you have the latest version of Java 8 installed and are using it for gradle. Other java versions might break stuff and cause weird errors. Whenever you have an SSL error it's probably java that screwed up.

3. Delete the following folders/files:
    - `PROJECT_FOLDER/.gradle`
    - `C:/Users/YOU/.gradle`
    - All IDE related files in you project folder.

4. Restart your PC. Trust me, it works...

5. Abandon all hope and despair.

6. Get over your ego and ask for help on the official Fabric Discord server.