# `acotd`

Compute the principal value of the arc cotangent of `x`,
return in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acotd
```


## Methods

```@repl
methods(acotd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acotd(0)

julia> acotd(-0.0)
```

### Complex
```jldoctest
julia> acotd(0+0im)
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `acotd(::Real)`: by pure julia
- `acotd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[acotd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acotd - MathWorld](https://mathworld.wolfram.com/ )
