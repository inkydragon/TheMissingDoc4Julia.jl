# `asind`

Compute the principal value of the arc sine of `x`,
return in degrees.

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
0.0

julia> asind(0.5)
30.000000000000004

julia> asind(1)
90.0
```

### Complex
```jldoctest
julia> asind(0+0im)
0.0 + 0.0im
```

## Tips


## See Also

[`asin`](@ref)


## Extended Inputs


## Tech Notes

- Implemented in terms of [`asin`](@ref): `asind(x) = rad2deg(asin(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[asind - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[asind - MathWorld](https://mathworld.wolfram.com/ )
