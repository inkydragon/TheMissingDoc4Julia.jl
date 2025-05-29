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
0.0

julia> atand(-0.0)
-0.0

julia> atand(1.0)
45.0

julia> atand(Inf)
90.0

julia> atand(-Inf)
-90.0
```

### Complex
```jldoctest
julia> atand(0+0im)
0.0 - 0.0im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `atand(::Real)`: by pure julia
- `atand(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[atand - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[atand - MathWorld](https://mathworld.wolfram.com/ )
