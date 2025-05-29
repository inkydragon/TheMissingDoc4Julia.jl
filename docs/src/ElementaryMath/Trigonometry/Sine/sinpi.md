# `sinpi`

Compute the sine of `π*x`, where `x` expressed in half-revolutions.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sinpi
```


## Methods

```@repl
methods(sinpi, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sinpi(0)
0.0

julia> sinpi(0.5)
1.0

julia> sinpi(1)
0.0
```

### Complex
```jldoctest
julia> sinpi(0+0im)
0.0 + 0.0im
```

## Tips


## See Also

[`sin`](@ref)


## Extended Inputs


## Tech Notes

- `sinpi(::Real)`: by pure julia
- `sinpi(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[sinpi - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sinpi - MathWorld](https://mathworld.wolfram.com/ )
