# `sind`

Compute the sine of `x` expressed in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sind
```


## Methods

```@repl
methods(sind, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sind(180)
0.0

julia> sind(90)
1.0
```


## Tips


## See Also

[`sin`](@ref)


## Extended Inputs


## Tech Notes

- Implemented in terms of [`sin`](@ref): `sind(deg) = sin(deg2rad(deg))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
