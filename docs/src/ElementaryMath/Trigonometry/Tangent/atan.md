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

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.23.3](https://dlmf.nist.gov/4.23#E3)
- 🔗[Inverse Tangent - MathWorld](https://mathworld.wolfram.com/InverseTangent.html)
- 🔗[Inverse trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
