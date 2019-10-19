# Commons

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-commons/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-commons)

Module name: `cotton-commons`

## What are commons?

Common items and blocks (aka commons) are our solution to having 15
different versions of copper with different textures. But if you are
reading this you are probably more interested in
[Cotton Resources](/cotton-resources/), which is a large optimized
collection of such items and blocks carefully coded, textured and 
served with a lot of precise configs for your convenience. 

::: danger
If possible ***always*** use Cotton Resources instead of this mod.
:::

If you weren't satisfied enough with the collection and don't want to
use the convenient generators for everything, because your resource
is too special for all of that yet somehow you have managed to
conclude that it wouldn't ever be unique to your mod, then continue.

## How it works?

It checks if a block or item has already been registered for a given
name. If yes it will return that block or item to you. If no it will
register the default block or item you should have provided.

## Adding a common item

Let's assume you want to have an item `lovely_ingot` and you have
already provided textures, models, etc for it and put those under the
commons namespace `c` (i.e. you put those JSONs and PNGs inside
`resources/assets/c/`). In your mod main class you need to register
this item using `CommonItems.register()` instead of in-game registry:

``` java
public static Item lovelyIngot;

@Override
public void onInitialize() {
    Item defaultItem = new Item(new Item.Settings());
    lovelyIngot = CommonItems.register("lovely_ingot", defaultItem);
}
```

::: tip
If you want to make it easier for users to find your item consider
adding it to the commons creative tab: `CottonCommons.ITEM_GROUP`
:::

## Adding a common block

Adding a common block is almost the same as adding a common item. The
only difference is that for a block you need to use
`CommonBlocks.register()` which will also take care of creating a
block item for you:

``` java
public static Block lovelyBlock;

@Override
public void onInitialize() {
    Block defaultBlock = new Block(new Block.Settings.copy(Blocks.STONE)));
    lovelyBlock = CommonBlocks.register("lovely_block", defaultBlock);
}
```

In some rare cases you might want to use a custom block item. For
these cases you may add a third argument like this:

``` java
Block lovelyBlock = new Block(Block.Settings.copy(Blocks.STONE));
BlockItem lovelyBlockItem = new BlockItem(lovelyBlock, new Item.Settings());
CommonBlocks.register("lovely_block", lovelyBlock, lovelyBlockItem);
```

::: tip
As with an item, consider also adding your block to the the commons
creative tab: `CottonCommons.ITEM_GROUP`
:::

## Using commons

Use them the same way as if you were to use your own items, but with
the commons namespace `c` instead of your own.

::: warning
Don't put *your* recipes, loot tables, etc under the `c` namespace.
Put there only what's supposed to be a common, cross-mod thing.
:::