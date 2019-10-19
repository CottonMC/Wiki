# Cauldron

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-cauldron/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-cauldron)

Module name: `cotton-cauldron`

## Example

Below is a sample script, written in JavaScript, to register two new
cauldron behaviors. It would be placed at the location `data/cotton/tweaker/cauldron_sample.js.`

``` js
// Classes to construct using lambdas
var Predicate = Java.type('java.util.function.Predicate');
var CauldronBehavior = Java.type('io.github.cottonmc.cotton.cauldron.CauldronBehavior');

// Construct a predicate that will only work if:
//  - the cauldron has at least one bottle of water in it
//  - the cauldron has no other inserted items
//  - the catalyst is a block of sand
var clayPred = new Predicate(function(ctx) {
    return ctx.getLevel() >= 1
        && ctx.getFluid() === TweakerUtils.getFluid("minecraft:water")
        && TweakerUtils.isItemListEmpty(ctx.getPreviousItems())
        && TweakerUtils.getStackItem(ctx.getStack()) === TweakerUtils.getItem("minecraft:sand");
});

// Construct a behavior that will:
//  - remove one sand from the catalyst stack
//  - remove one bottle of water from the cauldron
//  - give one block of clay to the activator
//  - play a sound effect of a bucket filling
var clayBehav = new CauldronBehavior(function(ctx) {
    CauldronTweaker.takeItem(ctx, 1);
    CauldronTweaker.drainCauldron(ctx, 1);
    CauldronTweaker.giveItem(ctx, TweakerUtils.getItem("minecraft:clay"), 1);
    CauldronTweaker.playSound(ctx, TweakerUtils.getSound("item.bucket.fill"), 1, 1);
});

// Construct a predicate that will only work if:
//  - the cauldron has at least three bottles of water in it
//  - the cauldron has no other inserted items
//  - the catalyst is an ender eye
var enderPred = new Predicate(function(ctx) {
    return ctx.getLevel() >= 3
        && ctx.getFluid() === TweakerUtils.getFluid("minecraft:water")
        && TweakerUtils.isItemListEmpty(ctx.getPreviousItems())
        && TweakerUtils.getStackItem(ctx.getStack()) === TweakerUtils.getItem("minecraft:ender_eye");
});

// Construct a behavior that will:
//  - remove one ender eye from the catalyst stack
//  - remove three bottles of water from the cauldron
//  - spawn an enderman above the cauldron
var enderBehav = new CauldronBehavior(function(ctx) {
    CauldronTweaker.takeItem(ctx, 1);
    CauldronTweaker.drainCauldron(ctx, 3);
    CauldronTweaker.spawnEntity(ctx, TweakerUtils.getEntity("minecraft:enderman"));
});

// Register the behaviors!
CauldronTweaker.registerBehavior(clayPred, clayBehav);
CauldronTweaker.registerBehavior(enderPred, enderBehav);
```