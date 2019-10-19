# Tag extensions

LibCD adds the ability for tag JSONs to contain a `libcd` block which uses Conditions for partial tag loading. Tag JSONs without `libcd` blocks will not be affected.

## Elements
- `"replace"`: takes a single object for a Condition. If the Condition is true, the LibCD block will replace all tag entries *before* this tag JSON. Entries in this tag JSON's normal `values` block will still be added if the LibCD `replace` element is true. Optional.
- `"entries"`: takes an array of objects. Each object contains the following keys:
  - `"when"`: takes an array of Condition objects.
  - `"values"`: exactly like the standard tag JSON `values` element. These values will only be appended if the `when` for this entry evaluates to true.

## Example

For a tag at the data pack location `data/c/tags/items/potatoes.json`:
```json
{
    "replace": false,
    "values": [
        "minecraft:potato",
        "minecraft:poisonous_potato"
    ],
    "libcd": {
        "replace": { "libcd:dev_mode": true },
        "entries": [
            {
                "when": [
                    { "libcd:mod_loaded": "lil-tater" }
                ],
                "values": [
                    "lil-tater:lil_tater",
                    "lil-tater:lil_tater_tot",
                    "lil-tater:compressed_tater_tot",
                    "lil-tater:irritated_tater",
                    "lil-tater:drowned_tater"
                ]
            }
        ]
    }
}
```