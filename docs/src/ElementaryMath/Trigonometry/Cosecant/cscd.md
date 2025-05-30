# `cscd`

Compute the cosecant of `x` expressed in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cscd
```


## Methods

```@repl
methods(cscd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cscd(0)
Inf

julia> cscd(-0.0)
-Inf

julia> cscd(45)
1.414213562373095

julia> cscd(90)
1.0

julia> cscd(180)
Inf
```

### Complex
```jldoctest
julia> cscd(90+0im)
1.0 - 0.0im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- Implemented in terms of [`sind`](@ref): `cscd(x) = inv(sind(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
