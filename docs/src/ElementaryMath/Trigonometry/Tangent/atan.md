# `atan`

Compute the principal value of the arc tangent of `x`,
return in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.atan
```


## Methods

```@repl
methods(atan, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> atan(0)
0.0

julia> atan(-0.0)
-0.0

julia> atan(1.0) / pi
0.25
```

### Complex
```jldoctest
julia> atan(0+0im)
0.0 - 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(atan, (Any,), [LinearAlgebra])
```


## Tech Notes

- `atan(::Real)`: by pure julia
- `atan(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[atan - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[atan - MathWorld](https://mathworld.wolfram.com/ )
