# `asind`

Compute the inverse sine of x, where the output is in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asind
```


## Methods

```@repl
methods(asind, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> asind(0)

julia> asind(-0.0)
```

### Complex
```jldoctest
julia> asind(0+0im)
```

## Tips


## See Also

[`asin`](@ref)


## Extended Inputs


## Tech Notes

- `asind(::Real)`: by pure julia
- `asind(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[asind - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[asind - MathWorld](https://mathworld.wolfram.com/ )
