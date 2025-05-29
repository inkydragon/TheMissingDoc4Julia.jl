# `deg2rad`

Convert `x` from degrees to radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.deg2rad
```


## Methods

```@repl
methods(deg2rad, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> deg2rad(0)

julia> deg2rad(-0.0)
```

### Complex
```jldoctest
julia> deg2rad(0+0im)
```

## Tips


## See Also


## Extended Inputs



## Tech Notes

- `deg2rad(::Real)`: by pure julia
- `deg2rad(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[deg2rad - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[deg2rad - MathWorld](https://mathworld.wolfram.com/ )
