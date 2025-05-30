# `cospi`

Compute the cosine of `π*x`, where `x` expressed in half-revolutions.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cospi
```


## Methods

```@repl
methods(cospi, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cospi(0)
1.0

julia> cospi(-0.0)
1.0

julia> cospi(0.5)
0.0

julia> cospi(1)
-1.0
```

### Complex
```jldoctest
julia> cospi(0+0im)
1.0 - 0.0im
```

## Tips


## See Also

[`cos`](@ref)


## Extended Inputs


## Tech Notes

- `cospi(::Real)`: by pure julia
- `cospi(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[cospi - cppreference.com](https://en.cppreference.com/w/c/numeric/math/cospi)
