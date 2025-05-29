# `secd`

Compute the secant of `x` expressed in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.secd
```


## Methods

```@repl
methods(secd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> secd(0)
1.0

julia> secd(45)
1.414213562373095

julia> secd(60)
2.0

julia> secd(90)
Inf

julia> secd(180)
-1.0
```

### Complex
```jldoctest
julia> secd(0+0im)
1.0 + 0.0im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- Implemented in terms of [`cosd`](@ref): `secd(x) = inv(cosd(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[secd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[secd - MathWorld](https://mathworld.wolfram.com/ )
