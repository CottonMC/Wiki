---
layout: page
title: "Modding 101"
order: 1
---
> "You think you know how modding works? You think that Forge and Bukkit are all there is? What is real? What mysteries lie beyond the reach of your senses? At the root of modding mapping and mixins meet. Thoughts shape reality. This dev environment is only one of an infinite number. Git repositories without end. Some benevolent and open source. Others filled with malice and restrictive licenses."
> -- <cite>Ansraer, 18.02.2019 19:46 CEST</cite>


**I wrote this text to test the formatting of mardown features. As others have pointed out to me it's not completely accurate, but fixing this is a low priority. Feel free to create a PR or just send me a edited version via other means.**


## Fabric API, Yarn and Loom

To start explaining what Fabric, Yarn, Loom, and Enigma are I will have to start with explaining how java works. Developers write Java source code (usually in .java files). This source code is easily readable, but in no way optimized for usage by a machine. That's why we have to compile it to a format all devices that can run java can understand: the *.java files are turned into *.class files (called byte code), something far closer to machine-readable code than the original source code. When these files are executed with the Java VM the JIT (just in time compiler) compiles them once more to real machine code. This has the advantage that our compiled class codes are platform independent (machine code usually only works on the platform it was compiled on) but can be converted to machine code very, very fast.

As you might have already guessed Minecraft, like any other java program, is distributed as byte code. Platform independent code that can run on anything that supports Java. In order to interact with it we, however, need to be able to see it's source code. Usually, this wouldn't be too much of a problem, there are quite a few programs out there that can turn bytecode back into source code. The problem is that the Minecraft source code is also obfuscated. This means that the bytecode is modified in such a way that it is still fully functional, but far harder to read or reverse engineer. This is usually accomplished by replacing meaningful names with random nonsense.

To solve this problem MCP was created, a toolchain to decompile, deobfuscate, change and recompile the Minecraft source code. It's most important job was its capability to deobfuscate the Minecraft source code, replacing the random names of methods, classes, and variables with human-readable names. (a process called mapping) Soon the first real content mods started to appear. But there was one big problem: If you wanted to use two mods together you would have to manually merge them, line by line. There were many tasks that couldn't be accomplished without overwriting Minecraft's base source code (such as adding Blocks and/or Items), and if two mods tried to change the same class they would conflict with one another. To solve this ModLoader were created: Mods that replaced important parts of Minecraft and provided hooks so that other mods wouldn't have to edit the source. Over the years these ModLoaders started to provide more and more features. As of right now the most popular option is called Forge and maintained by a dev team lead by LexManos.

### Fabric API

Fabric is a new-ish modding API that tries to counter the trend of constantly growing, if not outright bloated, APIs. It only provides the most important tools developers need to change Minecraft while at the same time being flexible enough that almost anything is possible. Another notable feature is the usage of Mixins to inject new code into Minecraft instead of replacing the original source code.


### Yarn

Unlike other modding environments fabric doesn't use the MCP mappings. After long and tedious research I managed to find the following two quotes explaining this decision:
> "BECAUSE IS SAID SO"
> -- <cite>asie, 19.02.2019 01:28 CEST on the Fabric Discord server</cite>

> "we don't want lex to sue us"
> -- <cite>B0undarybreaker, 19.02.2019 01:28 CEST on the Fabric Discord server</cite>

Instead, the fabric dev team decided to create their own, completely open source, mappings for Minecraft using a program called "Enigma". The result of this effort is known as "Yarn". **PLEASE BE AWARE THAT OUT OF LEGAL REASONS WE TRY TO AVOID NAMES FROM MCP AS MUCH AS POSSIBLE.**

### Loom
Loom is the last major part of the Fabric project: It's a gradle plugin that is used for all the stuff that happens behind the scenes. As a modder all you need to know is that loom sets up your workspace and is used to build your mods final jar file. Other tha- Wait, why am I writing this? This was supposed to be a collection of notes for personal reference. All this stuff is not important! I got sidetracked again, Shit, **shit, SHIT**