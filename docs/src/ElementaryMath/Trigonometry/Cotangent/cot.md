# `cot`

Compute the cotangent of `x` expressed in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cot
```


## Methods

```@repl
methods(cot, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-2π, 2π, cot, xlim=(-7, 7), ylim=(-4, 4))
```

### Real Numbers
```jldoctest
julia> cot(0)
Inf

julia> cot(-0.0)
-Inf

julia> cot(pi)
-Inf

julia> cot(pi/2)
6.123233995736766e-17

julia> cot(pi/4)
1.0000000000000002
```

### Complex
```jldoctest
julia> cot(0+0im)
NaN + NaN*im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cot, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`tan`](@ref): `cot(x) = inv(tan(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.14.7](https://dlmf.nist.gov/4.14#E7)
- 🔗[Cotangent - MathWorld](https://mathworld.wolfram.com/Cotangent.html)
- 🔗[Trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Trigonometric_functions)
