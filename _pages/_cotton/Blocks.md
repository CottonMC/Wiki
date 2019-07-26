---
layout: page
title: "Basic Block"
order: 2
---

Now that you already know how to add Items to Minecraft Blocks shouldn't be that much more difficult. You again will have to do two things: 1. Register your block and 2. Provide the necessary assets.

## Registering a Block
This time we want to add our object, which is going to be a block Object, to the `Registry.BLOCK` registry. Let's start by creating our block:
```java
public static final Block MY_FIRST_BLOCK = new Block(Block.Settings.of(Material.DIRT));
```
This time instead of creating our own Block.Settings we copy the existing settings from Minecraft's dirt block. Block.Settings stores properties like the hardness or the color a block has on the map.
Now all that's left to do is to register it just like we registered our first item:
```java
public class ExampleMod implements ModInitializer
{
    // I moved the block object out of the onInitialize method so that we can use it later on.
    public static final Block MY_FIRST_BLOCK = new Block(Block.Settings.of(Material.DIRT));
    
    @Override
    public void onInitialize()
    {
        Registry.register(Registry.Block, new Identifier("modid", "my_first_block"), MY_FIRST_BLOCK);
    }
}
```
However, if you open up your game now you won't be able to find your custom block. That's because we haven't added a BlockItem yet. Minecraft knows that there is a new block, but it isn't aware that this block also is an item. Let's fix that now by adding one more line to our init method.
```java
    public void onInitialize()
    {
        Registry.register(Registry.Block, new Identifier("modid", "my_first_block"), MY_FIRST_BLOCK);
        Registry.register(Registry.ITEM, new Identifier("modid", "my_first_block"), new BlockItem(MY_FIRST_BLOCK, new Item.Settings().itemGroup(ItemGroup.MISC));
    }
```
Now we have added a block to the game and an item that is the block item of out Block and will be displayed in the Misc creative tab.

If you open the game now you should already be able to see our new block.


## Adding the necessary assets
If you run the game now and check you will see that there are a few problems with our block. It is rendered as a purple/black square and its name is "tile.modid.my_first_block".

### Translation
Just like the for our first item we will need to add a line mapping the unlocalized name to the english name in our en_us.json file. If you haven't created an en_us.json file yet head over to BasicItem where I explain where you have to create it.

### Rendering our Block
Similar to what we did for our item we will have to provide a few json files and a texture. Let's start with the stuff we need for our Block.

#### Blockstate
The blockstate json files tell Minecraft which model should be used based on the blocks current state. Since our block is a simple cube without any special properties the following code should be fully sufficient:
```json
{
    "variants": {
        "": { "model": "modid:block/my_first_block" }
    }
}
``` 
Place your blockstate file at the following location `src/main/resources/assets/modid/blockstates/my_first_block.json`.

#### Block Model
Let's also give Minecraft the block model we referenced in our blockstates.json. This time place it at ``src/main/resources/assets/modid/models/block/my_first_block.json``.
For a basic cube, all we need to tell Minecraft is that out block is a child of "cube" and what texture we want to use. This should look something like this:
```json
{
    "parent": "block/cube_all",
    "textures": {
        "all": "modid:block/my_first_block"
    }
}
```

#### Block Texture
Now all that's left to do is to provide the texture. it should be placed here: `src/main/resources/assets/modid/textures/block/my_first_block.png`.


#### BlockItem Model
We now have all we need to render our block ingame. However, our BlockItem is a different story. If you start the game now you will notice that while you block looks fine when it's placed down it's model and texture doesn't work when it's an item.
So let's create a new model for our BlockItem.
Create the following file and open it `src/main/resources/assets/modid/models/item/my_first_block.json`.
Instead of writing a complicated model we just tell Minecraft to render our block the same it is rendered when it's placed down:
```json
{
    "parent": "modid:block/my_first_block"
}
```

