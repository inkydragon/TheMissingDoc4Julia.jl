# `atand`

Compute the principal value of the arc tangent of `x`,
return in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.atand
```


## Methods

```@repl
methods(atand, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> atand(0)

julia> atand(-0.0)
```

### Complex
```jldoctest
julia> atand(0+0im)
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `atand(::Real)`: by pure julia
- `atand(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[atand - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[atand - MathWorld](https://mathworld.wolfram.com/ )
