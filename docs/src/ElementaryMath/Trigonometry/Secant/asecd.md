# `asecd`

Compute the principal value of the arc secant of `x`,
return in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asecd
```


## Methods

```@repl
methods(asecd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> asecd(1.0)
0.0

julia> asecd(sqrt(2))
45.00000000000001

julia> asecd(2.0)
60.00000000000001

julia> asecd(Inf)
90.0

julia> asecd(-1.0)
180.0
```

### Complex
```jldoctest
julia> asecd(1+0im)
0.0 + 0.0im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- Implemented in terms of [`asec`](@ref): `asecd(x) = rad2deg(asec(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[asecd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[asecd - MathWorld](https://mathworld.wolfram.com/ )
