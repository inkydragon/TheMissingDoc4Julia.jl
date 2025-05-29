# `tanpi`

Compute the tangent of `π*x`, return in half-revolutions.

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

julia> tanpi(-0.0)
```

### Complex
```jldoctest
julia> tanpi(0+0im)
```

## Tips


## See Also

[`tan`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(tanpi, (Any,), [LinearAlgebra])
```


## Tech Notes

- `tanpi(::Real)`: by pure julia
- `tanpi(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[tanpi - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[tanpi - MathWorld](https://mathworld.wolfram.com/ )
