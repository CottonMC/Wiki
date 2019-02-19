---
layout: page
title: "Basic Item"
order: 1
---

Adding an item to Minecraft is a two-step process. You first have to add your item in code (in your mod's init method) and then you have to provide the necessary asset files that define how your item is rendered.

## Registering a basic item
Minecraft has different 'lists' for all kinds of available stuff that exists in the game, called registries. In order to add an object to the game we usually have to add it to the corresponding registry, this usually looks something like this: `Registry.register(REGISTRY_TYPE, ID, OBJECT);`. For Items the registry we want to add our item-object to is Registry.ITEM, the ID is a unique Identifier that can be used to identify our item and the object is our custom Item.
So in order to register our item, we now need to create an Identifier and an Item object.

Creating an Identifier is easy: `Identifier id = new Identifier("modid", "item_name")`. Creating the Item object, on the other hand, is a bit more tricky, but still very easy: `Item myItem = new Item(new Item.Settings().itemGroup(ItemGroup.MISC));`. As you can see the construct requires an Item.Settings object. This is where many properties of item Item such as the stack size or the creative tab (=itemgroup) is set.

Let's now combine what we have learned:
```java
public class ExampleMod implements ModInitializer
{
    // I moved the item object out of the onInitialize method so that we can use it later on.
    public static final Item MY_FIRST_ITEM = new Item(new Item.Settings().itemGroup(ItemGroup.MISC));
    
    @Override
    public void onInitialize()
    {
        Registry.register(Registry.ITEM, new Identifier("modid", "my_first_item"), MY_FIRST_ITEM);
    }
}
```

The code above should add a new Item called "item.modid.my_first_item" to the Misc creative tab. Congratulations, you just added your first item to Fabric!

## Adding the necessary assets
If you run the game now and check you will see that there are a few problems with your item. It is rendered as a purple/black square and its name is "item.modid.my_first_item". Let's fix these problems now!

### Translation
The reason why Minecraft calls your item "item.modid.my_first_item" is because there are no localized names for it yet. To fix this we need to provide at least an english translation of our mod. Navigate to src/main/resources/ and create a folder called "assets". Now open this new folder and create another folder called "modid" (don't actually call it "modid"). Inside this folder create yet another folder and call it lang. Now you can finally create your translation file. Create a file called "en_us.json" and put the following text into it:
```json
{
  "item.modid.my_first_item": "Tutorial Item"
}
```
This will let Minecraft now that the english name of what was previously called "item.modid.my_first_item" is "Tutorial Item". In the future whenever you want to add a translation for something added by you mod simply add a new line to this file with `"current_name": "Translated Name"`. Also make sure that all lines except the last one end with a "`,`"!

### Rendering you item
Now let's fix how our new Item is displayed. Whenever minecraft attempts to display an item it loads the item's models file for instructions on how to render it. Let's create this model file now. Create a new json file at the following location: `src/main/resources/assets/modid/models/item/my_first_item.json`. Make sure that "modid" and "my_first_item" match whatever you used in your item's Identifier.
Open the newly created json file and paste the following into it:
```json
{
  "parent": "item/generated",
  "textures": {
    "layer0": "modid:item/my_first_item"
  }
}
```
This tells Minecraft that your item should be rendered like "minecraft:item/generated" (default flat 2d item) and that texture layer0 should be "modid:item/my_first_item". Now all you have to do is to add said texture to your project. Put it into `src/main/resources/assets/modid/textures/item/my_first_item.png`. This time "modid" and "my_first_item" have to match whatever you specified in the model json file.

And that's it! You now should have a working item in the Misc creative tab that has the correct name and is rendered with your model and texture.

## Advanced stuff
Now that you have successfully created your first item here are some suggestions for possible improvements:


### Create a ModItems class
As you can see we register our item directly in the MainMod class. This might work for now since we only add one item, but the more stuff we add the more crowded our MainMod class will become. So let's move all our Items to another class:

```java
public class CustomItems
{
    public static final Item MOD_ITEM_1 = new Item(new Item.Settings().itemGroup(ItemGroup.MISC));
    public static final Item MOD_ITEM_2 = new Item(new Item.Settings().itemGroup(ItemGroup.MISC));
    public static final Item MOD_ITEM_3 = new Item(new Item.Settings().itemGroup(ItemGroup.MISC));
    public static final Item MOD_ITEM_4 = new Item(new Item.Settings().itemGroup(ItemGroup.MISC));

    public void registerItems()
    {
        register("item_1", MOD_ITEM_1);
        register("item_2", MOD_ITEM_2);
        register("item_3", MOD_ITEM_3);
        register("item_4", MOD_ITEM_4);
    }

    private void register(String name, Item item){
        Registry.register(Registry.ITEM, new Identifier("modid", name), item);
    }
}
```

All we now have to do to register all four of your custom items is to call `CustomItems.registerItems()` in our mod's main init method.

### Create your own Item class
We can do a bunch of cool stuff by messing with the Item.Settings properties, but if we want to do more advanced stuff we will have to edit our item's class. So instead of using Minecraft's Item class let's create our own:
```java
public class AwesomeItem extends Item
{
    public AwesomeItem(Settings settings)
    {
        super(settings);
    }
}
```
Right now this class behaves exactly like Minecraft's Item class. Let's spice things up a bit:

```java
public class AwesomeItem extends Item
{
    public AwesomeItem(Settings settings)
    {
        super(settings);
    }

    @Override
    @Environment(EnvType.CLIENT)
    public boolean hasEnchantmentGlint(ItemStack itemStack_1) {
        return true;
    }
}
```

And now instead of:
```java
    public static final Item MY_FIRST_ITEM = new Item(new Item.Settings().itemGroup(ItemGroup.MISC));
```
use:
```java
    public static final Item MY_FIRST_ITEM = new AwesomeItem(new Item.Settings().itemGroup(ItemGroup.MISC));
```
This should give your item the enchantment glint effect.

Make sure to check out the classes of different vanilla items to see other ways you can tweak your items.