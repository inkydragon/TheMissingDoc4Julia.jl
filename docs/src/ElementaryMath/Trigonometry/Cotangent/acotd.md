# `acotd`

Compute the principal value of the arc cotangent of `x`,
return in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acotd
```


## Methods

```@repl
methods(acotd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acotd(Inf)
0.0

julia> acotd(-Inf)
-0.0

julia> acotd(0.0)
90.0

julia> acotd(1.0)
45.0
```

### Complex
```jldoctest
julia> acotd(0+0im)
NaN + NaN*im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- Implemented in terms of [`acot`](@ref): `acotd(x) = rad2deg(acot(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[acotd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acotd - MathWorld](https://mathworld.wolfram.com/ )
