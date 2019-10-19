# Datapack

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-datapack/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-datapack)

Module name: `cotton-datapack`

::: warning WIP
This section still isn't done ;C
:::

## Virtual resource example

``` java
@Override()
public void onInitialize() {
    HashMap<String, InputStreamProvider> map = new HashMap<>();

    map.put("assets/minecraft/blockstates/cobblestone.json", InputStreamProvider.of(() -> "{\n" +
            "    \"variants\": {\n" +
            "        \"\": { \"model\": \"block/sandstone\" }\n" +
            "    }\n" +
            "}\n"));
            
    VirtualResourcePackManager.INSTANCE.addPack(
            new VirtualResourcePack(new Identifier("cotton", "test"), map),
            Collections.singleton(ResourceType.CLIENT_RESOURCES)
    );
}
```