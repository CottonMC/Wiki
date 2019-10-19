# Work Units system

Cotton Energy's native energy comes in units called Work Units. Work
Units are exchanged on a push-based system, and are stored in energy
attributes. Energy attributes store a specific amount of energy,
along with what types they can accept. All energy attributes have a
method to convert between accepted energy types.

::: warning
Everything below is considered advanced and kinda conceptional. This
is not essential for you to build a power grid. But consider reading
this some time, because it can make your machines work in a more
natural and intersing way and enrich your gameplay experience.
:::

Since energy is inherently volatile, energy in the wrong form can
sometimes overload a component. When this happens with electricity,
it's called an EMP, or Electro-Magnetic Pulse. By default, energy
attributes will lose some of their energy when hit with an EMP.

`EnergyAttribute` has a method to simulate EMPs:

``` java
default void emp(int strength) {
    extractEnergy(getPreferredType(), strength, Simulation.ACTION);
}
```

This method is intended to indicate to this Component that its holder
has been exposed to extremely powerful and sudden electromagnetic
radiation. If this Component stores electrical energy, it should at
least remove 'strength' energy from its internal buffer, and can
optionally trigger volatile behavior or shut the machine down
temporarily. However, specially designed induction coils might
actually charge if strength is below their capacity.
