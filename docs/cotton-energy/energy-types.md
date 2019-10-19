# Energy types

Cotton Energy's components work on a system of energy types. Each
type has its own rules for how much can be transferred at a time, how
much has to be transferred at a time, and how a GUI should format
tooltips for the energy amount. Energy types are registered to the
`CottonEnergy.ENERGY_REGISTRY` registry, but are only used in transit;
an Energy component won't natively hold its energy type, since it's
not really needed while you aren't between components.

Cotton Energy includes four built-in energy types in `DefaultEnergyTypes`
themed around conventional electrical energy:

| Type | Max transfer rate in WU/t  | Intentional use |
| ---- | :---------------: | --------------- |
| ``LOW_VOLTAGE``           | 4   | Intended for the lowest tier, low energy, early-game machines |
| ``MEDIUM_VOLTAGE``        | 16  | Intended for the middle tier, middle energy machines, first industrial, scientific machine chains |
| ``HIGH_VOLTAGE``          | 64  | Intended for the high tier, high energy machines, complex industrious assembly and processing lines |
| ``ULTRA_HIGH_VOLTAGE``    | 256 | Intended foradditional, highest tier, energy-hungry machines, end-game power-stuff |
