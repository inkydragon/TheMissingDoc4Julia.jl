# `cosh`

Compute the hyperbolic cosine of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cosh
```


## Methods

```@repl
methods(cosh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cosh(0)
1.0

julia> cosh(1.0)
1.5430806348152437
```

### Complex
```jldoctest
julia> cosh(0+0im)
1.0 - 0.0im
```

## Tips


## See Also

[`cos`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cosh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `cosh(::Real)`: by pure julia
- `cosh(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.28.2](https://dlmf.nist.gov/4.28#E2)
- 🔗[Hyperbolic Cosine - MathWorld](https://mathworld.wolfram.com/HyperbolicCosine.html)
- 🔗[Hyperbolic functions - Wikipedia](https://en.wikipedia.org/wiki/Hyperbolic_functions)
