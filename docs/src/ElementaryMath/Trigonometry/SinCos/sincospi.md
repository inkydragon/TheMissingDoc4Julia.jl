# `sincospi`

Compute the sine and cosine of `π*x`, where `x` expressed in half-revolutions.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sincospi
```


## Methods

```@repl
methods(sincospi, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sincospi(0)
(0.0, 1.0)

julia> sincospi(-0.0)
(-0.0, 1.0)

julia> sincospi(0.5)
(1.0, 0.0)

julia> sincospi(1)
(0.0, -1.0)
```

### Complex
```jldoctest
julia> sincospi(0+0im)
(0.0 + 0.0im, 1.0 - 0.0im)
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `sincospi(::Real)`: by pure julia
- `sincospi(::BigFloat)`: by MPFR


## Version History

[Introduced in Julia v1.6 (2021)](https://github.com/JuliaLang/julia/blob/v1.6.0/NEWS.md?plain=1#L96)


## External Links
