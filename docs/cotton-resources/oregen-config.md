# Oregen config

To configure oregen of any common resource, registered with the mod,
you need to create a JSON in your datapack (`data` directory in your
mod) in `oregen` directory with any name (like `data/oregen/config.json`)
and place the configuration inside.

## Generators

Generators define the properties of a single cluster of an ore in the
world. You can define dimensions, spawn height and cluster size and rarity
(count per chunk).

``` json
{
	"generators": {
		"ruby": {
			"dimensions": [ { "tag": "overworlds" } ],

			"ore_block": "c:ruby_ore",
			
			"min_height": 6,
			"max_height": 16,
			"cluster_count": 1,
			"cluster_size": 5
        },
        "iridium": {
			"dimensions": [ "minecraft:the_nether" ],

			"ore_block": "c:iridium_ore",

			"min_height": 32,
			"max_height": 64,
			"cluster_count": 2,
			"cluster_size": 3,
		},
    }
}
```

## Replacements

Replacements define which blocks should be substituted by a given ore,
i.e. iron ore should only replace stone, but never dirt.

``` json
{
	"replacements": {
		"tin": {
			"minecraft:netherrack": "c:tin_nether_ore",
			"minecraft:end_stone": "c:tin_end_ore"
		},
		"titanium": {
			"minecraft:netherrack": "c:titanium_nether_ore",
			"minecraft:end_stone": "c:titanium_end_ore"
        }
    }
}
```