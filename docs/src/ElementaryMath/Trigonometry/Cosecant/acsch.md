# `acsch`

Compute the arc hyperbolic cosecant of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acsch
```


## Methods

```@repl
methods(acsch, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-4, 4, acsch, ylim=(-3, 3))
```

### Real Numbers
```jldoctest
julia> acsch(Inf)
0.0

julia> acsch(-Inf)
-0.0

julia> acsch(1.0)
0.881373587019543
```

### Complex
```jldoctest
julia> acsch(0+0im)
NaN + NaN*im
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acsch, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`asinh`](@ref): `acsch(x) = inv(asinh(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.37.7](https://dlmf.nist.gov/4.37#E7)
- 🔗[Inverse Hyperbolic Cosecant - MathWorld](https://mathworld.wolfram.com/InverseHyperbolicCosecant.html)
- 🔗[Inverse trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
