# `tanpi`

Compute the tangent of `π*x`, where `x` expressed in half-revolutions.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.tanpi
```


## Methods

```@repl
methods(tanpi, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> tanpi(0)
0.0

julia> tanpi(-0.0)
-0.0

julia> tanpi(0.5)
Inf

julia> tanpi(1.0)
-0.0

julia> tanpi(2.0)
0.0
```

### Complex
```jldoctest
julia> tanpi(0+0im)
0.0 + 0.0im
```

## Tips


## See Also

[`tan`](@ref)


## Extended Inputs


## Tech Notes

- `tanpi(::Real)`: by pure julia
- `tanpi(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[tanpi - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[tanpi - MathWorld](https://mathworld.wolfram.com/ )
