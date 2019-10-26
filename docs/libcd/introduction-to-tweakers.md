# Introduction to Tweakers

Before the existence of JSON recipes, there was [MineTweaker](https://minecraft.curseforge.com/projects/minetweaker3). It allowed you to use a scripting language called ZenScript to add and remove recipes from the game. Over time, dozens upon dozens of mods came to depend on Minetweaker, and its successor CraftTweaker, for allowing modpack devs to customize recipes and game flow. Now, in 1.13 and beyond, recipes are exclusively designed through JSON, which has the advantage of being much more easily reloadable but has little ability to dynamically generate recipes. Within the world of Fabric, various options have come up: [SewingKit](https://minecraft.curseforge.com/projects/sewingkit) for a direct CraftTweaker port, and LibCD tweakers.

Tweakers execute code from JSR-223 compliant scripting languages to register recipes or behaviors for any compatible system. Because JSR-223 compliant languages are built to be general-purpose, scripts can work for systems like Cotton's cauldron behaviors easily. On top of that, Tweakers are run out of data packs, so they can be reloaded at any time without a hit on server performance.

Tweaker scripts are stored in the `data/<namespace>/tweakers` folder. JavaScript is automatically supported due to the Java 8 JVM, as well as any engine added from other mods, like [Cotton Scripting: Python 2.7](https://minecraft.curseforge.com/projects/cotton-scripting-python-2-7).