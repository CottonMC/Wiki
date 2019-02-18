---
layout: page
title: "Fabric 101"
order: 1
---
> "You think you know how modding works? You think that Forge and Bukkit are all there is? What is real? What mysteries lie beyond the reach of your senses? At the root of modding mapping and mixins meet. Thoughts shape reality. This dev environment is only one of an infinite number. Git repositories without end. Some benevolent and open source. Others filled with malice and restrictive licenses."
> -- <cite>Ansraer, 18.02.2019</cite>

## Fabric, Yarn and Loom

To start explaining what fabric, yarn, loom and enigma are I will have to start with how java works. Developers write Java source code (usually in .java files). This source code is easily readable, but in no way optimized for usage by a machine. Thats why we have to compile it to a format all devices that can run java can understand: the *.java files are turned into *.class files (called byte code), something far closer to machine readable code than the original source code. When these files are executed with the Java VM the JIT (just in time compiler) compiles them once more to real machine code. This has the advantage that our compiled class codes are platform independent (machine code usualy only worky on the platform it was compiled on) but can be converted to machine code very, very fast.

As you might have already guessed Minecraft, like any other java program, is distributed as byte code. Platform independent code that can run on anything that supports Java. In order to interact with it we however need to be able to see it's source code. Usually this wouldn't be too much of a problem, there are quite a few programs out there that can turn bytecode back into source code. The problem is that the minecraft source code is also obfuscated. This means that the bytecode is modified in such a way that it is still fully functional, but far harder to read or reverse engineer. This is usualyl accomplished by replacing meaningfull names with random nonsense.

To solve this problem MCP was created, a toolchain to decompile, deobfuscate, change and recompile the minecraft source code. It's most important job was it's capability to deobfuscate the minecraft source code, replacing the random names of methods, classes and variables with human readable names. (a process called mapping) Soon the first real content mods started to appear. But there was one big problem: If you wanted to use two mods together you would have to manualy merge them, line by line. There were many tasks that couldn't be accomplished without overwriting Minecraft's base source code (such as adding Blocks and/or Items), and if two mods tried to change the same class they would conflict with one another. To solve this ModLoader were created: Mods that replaced important parts of Minecraft and provided hooks so that other mods wouldn't have to edit the source. Over the years these ModLoaders started to provide more and more features.

### Yarn