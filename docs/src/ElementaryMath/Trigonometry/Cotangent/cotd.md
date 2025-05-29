# `cotd`

Compute the cotangent of `x` expressed in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cotd
```


## Methods

```@repl
methods(cotd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cotd(0)
Inf

julia> cotd(-0.0)
-Inf

julia> cotd(90)
0.0

julia> cotd(45)
1.0

julia> cotd(90)
0.0

julia> cotd(180)
-Inf
```

### Complex
```jldoctest
julia> cotd(0+0im)
NaN + NaN*im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- Implemented in terms of [`tand`](@ref): `cotd(x) = inv(tand(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[cotd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cotd - MathWorld](https://mathworld.wolfram.com/ )
