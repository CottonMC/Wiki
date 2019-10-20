# Config

[![Maven metadata URL](https://img.shields.io/maven-metadata/v/http/server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-config/maven-metadata.xml.svg)](http://server.bbkr.space:8081/artifactory/libs-release/io/github/cottonmc/cotton/cotton-config)

Module name: `cotton-config`

## Creating a config POJO

For this example, we want to create a config file for a mod called
`Foo` so that users can change the number of times `bar` will be
printed to the console. First we create a simple POJO that has all
the variables we want:

``` java
public class FooConfig {
    public int barAmount = 121;
}
```

It will correspond to a single integer field named `barAmount` with a
default value of 121 inside your config file.

Now we also must tell the config loader what name this config file
will have. To do this let's add the `ConfigFile` annotation:

``` java
@ConfigFile(name="FooConfigFile")
public class FooConfig {
    public int barAmount = 121;
}
```

This config file will now be saved as `FooConfigFile.json5`

## Adding comments

While in smaller config files it might still be obvious what each
option means bigger mods might want to add comments to their config
files. So it would be nice if we could add a comment already. To do
so we just need to add `Comment` annotation above the field we want:

``` java
@ConfigFile(name="FooConfigFile")
public class FooConfig {
    @Comment(value="Changes how often bar will be printed")
    public int barAmount = 121;
}
```

## Loading config

All you have to do in order to load a config file is to use 
`ConfigManager.loadConfig()` In practice this looks something like this:

``` java
public class ExampleMod implements ModInitializer {
    public static FooConfig config;
    @Override
    public void onInitialize() {
        config = ConfigManager.loadConfig(FooConfig.class)
    }
}
```

This will attempt to load the config file or create it if it doesn't already exist.