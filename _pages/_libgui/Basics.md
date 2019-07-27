---
layout: page
title: "LibGui Basics"
order: 1
---

## Prepare the Block and BlockEntity for a GUI

Required Interfaces:
* If your block has an inventory, `InventoryProvider` on the Block and/or BlockEntity
* If you want numeric fields, `PropertyDelegateHolder` on the Block and/or BlockEntity

Optional but Helpful:
* `NameableContainerProvider` on the BlockEntity

Later in the process we'll implement the `activate` method on the Block.

## Subclass CottonScreen and CottonScreenController

`CottonScreenController` is the abstract superclass for shared gui state. Subclass this and add whatever components you'll need to your root panel:

```java
public class DramaGeneratorController extends CottonScreenController {

	public DramaGeneratorController(int syncId, PlayerInventory playerInventory, BlockContext context) {
		super(RecipeType.SMELTING, syncId, playerInventory, getBlockInventory(context), getBlockPropertyDelegate(context));
		
		WGridPanel rootPanel = (WGridPanel) getRootPanel();
		
		rootPanel.add(new WLabel(new TranslatableTextComponent("block.examplemod.drama_generator"), WLabel.DEFAULT_TEXT_COLOR), 0, 0);
		
		WItemSlot inputSlot = WItemSlot.of(blockInventory, 0);
		rootPanel.add(inputSlot, 4, 1);
		
		rootPanel.add(this.createPlayerInventoryPanel(), 0, 3);
		
		rootPanel.validate(this);
	}

	@Override
	public int getCraftingResultSlotIndex() {
		return -1; //There's no real result slot
	}
}
```

**The last line in your constructor should be validating the root panel.** This finds the right size for your GUI and registers all the itemslots with vanilla so that they sync and hover properly.

```java
public class DramaGeneratorScreen extends CottonScreen<DramaGeneratorController> {
	public DramaGeneratorScreen(DramaGeneratorController container, PlayerEntity player) {
		super(container, player);
	}
}
```

Subclassing CottonScreen is optional but highly reccommended. You could use the class as provided, but many GUI addons identify a gui by its Screen class, so creating a per-gui subclass helps sync up things like "recipes" buttons and helps other modders interact with your code.

## Register everything with Fabric

Somewhere in a "main" ModInitializer so that it runs on both client and server:
```java
ContainerProviderRegistry.INSTANCE.registerFactory(DramaGeneratorBlock.ID, (syncId, id, player, buf) -> new DramaGeneratorController(syncId, player.inventory, BlockContext.create(player.world, buf.readBlockPos())));
```
This snippet assumes that the "open gui" packet contains a BlockPos for the block you clicked on. We'll write the other side of this shortly.


Somewhere in a "client" ModInitializer so that it runs only on client startup:
```java
ScreenProviderRegistry.INSTANCE.registerFactory(DramaGeneratorBlock.ID, (syncId, identifier, player, buf) -> new DramaGeneratorScreen(new DramaGeneratorController(syncId, player.inventory, BlockContext.create(player.world, buf.readBlockPos())), player));
```
This is the same thing, but for the client. Again, the other side of this is coming right up.


## Implement the activate method on your Block

```java
	@Override
	public boolean activate(BlockState state, World world, BlockPos pos, PlayerEntity player, Hand hand, BlockHitResult hitResult) {
		if (world.isClient) return true;
		
		BlockEntity be = world.getBlockEntity(pos);
		if (be!=null && be instanceof DramaGeneratorEntity) {
			ContainerProviderRegistry.INSTANCE.openContainer(ID, player, (buf)->{
				buf.writeBlockPos(pos);
			});
		}
		
		return true;
	}
```

The important thing here is that `ID` is the same Identifier provided to both `ContainerProviderRegistry` and `ScreenProviderRegistry`. At the other end of the connection, the gui will be looked up and activated based on ID. Also, we're writing a blockpos into the packet buffer to help the other end construct a BlockContext, which we did above. You can write any data into the packet here, as long as your providers know how to decode it at gui startup.

## Test your GUI

At this point, you should be up and running. Try it out!