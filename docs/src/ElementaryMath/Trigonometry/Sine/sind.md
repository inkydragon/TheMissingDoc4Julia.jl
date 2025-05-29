# `sind`

Compute sine of x, where x is in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sind
```


## Methods

```@repl
methods(sind, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sind(0)

julia> sind(-0.0)
```

### Complex
```jldoctest
julia> sind(0+0im)
```

## Tips


## See Also

[`sin`](@ref)


## Extended Inputs


## Tech Notes

- `sind(::Real)`: by pure julia
- `sind(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[sind - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sind - MathWorld](https://mathworld.wolfram.com/ )
