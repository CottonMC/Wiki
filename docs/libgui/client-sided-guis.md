# Client sided GUIs

If you're writing a config panel, an instruction book, or any other
non-inventory GUI, it's often easier to have nothing to do with
`AbstractContainerScreen`. That's where `ClientCottonScreen` comes in.

To set up a clientside cotton gui, we will:

* Make a subclass of `ClientCottonScreen` - you probably won't modify
your subclass at all, but it helps people writing addons to your mod
target your gui specifically.

* Make a subclass of `LightweightGuiDescription` - this is the heart
of your GUI. You'll add all your widgets and painters to this.

* Ask Minecraft to open your GUI

## Subclassing `ClientCottonScreen`

```java
package com.examplemod;

import io.github.cottonmc.cotton.gui.GuiDescription;
import io.github.cottonmc.cotton.gui.client.ClientCottonScreen;

/** This subclass doesn't need to do anything, just be a distinct
 *  class so that anyone making edits or adding buttons can find us
 *  with an instanceof check */
public class ExampleScreen extends ClientCottonScreen {
    public ExampleScreen(GuiDescription description) {
        super(description);
    }

}
```

## Subclassing LightweightGuiDescription

```java
public class ExampleGui extends LightweightGuiDescription {
    public ExampleGui() {
        WGridPanel root = new WGridPanel();
        setRootPanel(root);
        root.setSize(256, 240);
        
        WSprite icon = new WSprite(new Identifier("minecraft:textures/item/redstone.png"));
        root.add(icon, 0, 2, 1, 1);
        
        WButton button = new WButton(new TranslatableText("gui.examplemod.examplebutton"));
        root.add(button, 0, 3, 4, 1);
        
        WLabel label = new WLabel(new LiteralText("Test"), 0xFFFFFF);
        root.add(label, 0, 4, 2, 1);
    }
    
    
    
    @Override
    public void addPainters() {
        getRootPanel().setBackgroundPainter(BackgroundPainter.VANILLA); //This is done automatically though
    }
}
```

As with other Cotton GUIs, your GUI is made of a component hierarchy
of different kinds of `WPanels` and `WWidgets`. You can nest panels
of different kinds to any depth in order to organize and position
components. The default root panel is a `WGridPanel`, which positions
its components on an item slot-sized (18-pixel) grid. You can use
`WPlainPanel` in order to position and size components by pixels
instead. Keep in mind that some components have no intrinsic size, so
you probably want to use the five-argument `add(WWidget widget, int x, int y, int width, int height)`
method for plain panels.

`WWidgets` can be subclassed and remixed into extremely custom
controls. There are several drawing methods in `ScreenDrawing` to
help out with this.

## Opening your GUI

Assuming your `ClientCottonScreen` subclass is called `ExampleScreen`,
and your `LightweightGuiDescription` is called `ExampleGui`, the
process to open your GUI is pretty simple. 

::: danger
Only do this once you're sure you're only running on the client. Many
events like `Item.use` or `Item.useOnBlock` get called on the logical
server too, so doublecheck your `world.isClient`
:::

```java
MinecraftClient.getInstance().openScreen(new ExampleScreen(new ExampleGui()));
```

or, if you elect not to subclass `ClientCottonScreen`, the following will also work:

```java
MinecraftClient.getInstance().openScreen(new ClientCottonScreen(new ExampleGui()));
```


