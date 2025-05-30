# `acot`

Compute the principal value of the arc cotangent of `x`,
return in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acot
```


## Methods

```@repl
methods(acot, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-10, 10, acot, ylim=(-π/2, π/2))
```

### Real Numbers
```jldoctest
julia> acot(Inf)
0.0

julia> acot(-Inf)
-0.0

julia> acot(0.0) / pi
0.5

julia> acot(1.0) / pi
0.25
```

### Complex
```jldoctest
julia> acot(0+0im)
NaN + NaN*im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acot, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`atan`](@ref): `acot(x) = inv(atan(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.23.9](https://dlmf.nist.gov/4.23#E9)
- 🔗[Inverse Cotangent - MathWorld](https://mathworld.wolfram.com/InverseCotangent.html)
- 🔗[Inverse trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
