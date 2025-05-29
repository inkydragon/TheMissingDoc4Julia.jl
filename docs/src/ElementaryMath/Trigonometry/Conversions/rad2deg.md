# `rad2deg`

Convert `x` from radians to degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.rad2deg
```


## Methods

```@repl
methods(rad2deg, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> rad2deg(0)

julia> rad2deg(-0.0)
```

### Complex
```jldoctest
julia> rad2deg(0+0im)
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `rad2deg(::Real)`: by pure julia
- `rad2deg(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[rad2deg - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[rad2deg - MathWorld](https://mathworld.wolfram.com/ )
