# `csch`

Compute the hyperbolic cosecant of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.csch
```


## Methods

```@repl
methods(csch, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-3, 3, csch, ylim=(-3, 3))
```

### Real Numbers
```jldoctest
julia> csch(0)
Inf

julia> csch(-0.0)
-Inf

julia> csch(1.0)
0.8509181282393216
```

### Complex
```jldoctest
julia> csch(1+0im)
0.8509181282393217 - 0.0im
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(csch, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`sinh`](@ref): `csc(x) = inv(sinh(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.28.5](https://dlmf.nist.gov/4.28#E5)
- 🔗[Hyperbolic Cosecant - MathWorld](https://mathworld.wolfram.com/HyperbolicCosecant.html)
- 🔗[Hyperbolic functions - Wikipedia](https://en.wikipedia.org/wiki/Hyperbolic_functions)
