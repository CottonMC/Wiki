# Recipe Tweaker example

Below is a sample script, written in JavaScript, to register new recipes for each vanilla recipe type through the Tweaker system. It would be placed at the location `data/libcd/tweaker/recipe_sample.js`.
```js
//A shorthand to get a stick input.
var stick = "minecraft:stick";
//A shorthand to get a crafting table output
var table = TweakerUtils.createItemStack("minecraft:crafting_table", 1);

//remove the vanilla crafting table recipe, so we can use ours instead
RecipeTweaker.removeRecipe("minecraft:crafting_table");

//create a recipe for a piece of tall grass and a piece of bonemeal -> a two-high piece of tall grass.
RecipeTweaker.addShapeless(["minecraft:grass", "minecraft:bone_meal"], TweakerUtils.createItemStack("minecraft:tall_grass", 1));

//create a recipe for a stone pickaxe and a diamond -> a diamond pickaxe with 1 durability left.
RecipeTweaker.addShapeless(["minecraft:stone_pickaxe", "minecraft:diamond"], TweakerUtils.createItemStack("minecraft:diamond_pickaxe{Damage:1560}", 1));

//create a recipe for a stone pickaxe, a diamond, and an iron ingot -> a diamond pickaxe with 131 durability (the amount a stone pick has) left, along with an enchantment, lore and a custom name.
var newPickStack = TweakerUtils.createItemStack("minecraft:diamond_pickaxe", 1);
newPickStack = TweakerUtils.setName(newPickStack, "Patched Pickaxe");
newPickStack = TweakerUtils.addLore(newPickStack, [
    "A stone pick strengthened",
    "with iron and diamond.",
    "Not very durable, but",
    "should be able to mine",
    "better than usual."
]);
newPickStack = TweakerUtils.setDamage(newPickStack, 1430);
newPickStack = TweakerUtils.enchant(newPickStack, "minecraft:fortune", 1);
RecipeTweaker.addShapeless(["minecraft:stone_pickaxe", "minecraft:diamond", "minecraft:iron_ingot"], newPickStack);

//create a recipe for a stick above a stone block with two oak planks on the right -> a crafting table
RecipeTweaker.addShaped([[stick, "minecraft:oak_planks"], ["minecraft:stone", "minecraft:oak_planks"]], table);

//create a pattern/dictionary set for a shaped recipe
var pattern = [ '/ /',
    '/_/',
    '/ /'];
var dict = {
    "/": stick,
    //put a # at the front of an ID to make it a tag instead of an item.
    "_": "#minecraft:wooden_slabs"
};

//create a recipe for sticks on the sides and any wooden slab in the middle -> six ladders.
RecipeTweaker.addShaped(pattern, dict, TweakerUtils.createItemStack("minecraft:ladder", 6));

//create a recipe to smelt a bottle of water -> a bottle of dragon's breath.
//use a getter syntax (two IDs separated by ->) for special getters like potions
RecipeTweaker.addSmelting("minecraft:potion->minecraft:water", TweakerUtils.createItemStack("minecraft:dragon_breath", 1), 200, 0.35);

//create a recipe to blast a piece of coal -> a diamond. Takes 4x the fuel and time of a standard blasting operation.
RecipeTweaker.addBlasting("minecraft:coal", TweakerUtils.createItemStack("minecraft:diamond", 1), 400, 0.7);

//create a recipe to blast anything in the #minecraft:coals tag with the nbt tag {Custom:3} or a piece of obsidian -> a diamond block.
//Takes 4x the fuel and time of a standard blasting operation
RecipeTweaker.addBlasting(RecipeTweaker.makeIngredient("fuzzy", "#minecraft:coals{CustomTag:3}", "minecraft:obsidian"), TweakerUtils.createItemStack("minecraft:diamond_block", 1), 400, 0.7);

//create a recipe to smoke a log -> a block of charcoal. Takes 4x the fuel and time of a standard smoking operation.
RecipeTweaker.addSmoking("#minecraft:logs", TweakerUtils.createItemStack("minecraft:coal_block", 1), 400, 0.7);

//create a recipe to bake an apple -> a golden apple on a campfire.
RecipeTweaker.addCampfire("minecraft:apple", TweakerUtils.createItemStack("minecraft:golden_apple", 1), 600, 0.7);

//get all the IDs of items in the #minecraft:logs tag.
var logs = TweakerUtils.getItemsInTag("minecraft:logs");

//create recipes to convert any type of log -> any other type of log in a stonecutter, iterating over the logs tag.
for (var i = 0; i < logs.length; i++) {
    RecipeTweaker.addStonecutting("#minecraft:logs", TweakerUtils.createItemStack(logs[i], 1));
}
```