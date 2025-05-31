# `coth`

Compute the hyperbolic cotangent of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.coth
```


## Methods

```@repl
methods(coth, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-3, 3, coth, ylim=(-5, 5))
```

### Real Numbers
```jldoctest
julia> coth(0)
Inf

julia> coth(-0.0)
-Inf

julia> coth(1.0)
1.3130352854993315
```

### Complex
```jldoctest
julia> coth(0+0im)
NaN + NaN*im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(coth, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`tanh`](@ref): `coth(x) = inv(tanh(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.28.7](https://dlmf.nist.gov/4.28#E7)
- 🔗[Hyperbolic Cotangent - MathWorld](https://mathworld.wolfram.com/HyperbolicCotangent.html)
- 🔗[Hyperbolic functions - Wikipedia](https://en.wikipedia.org/wiki/Hyperbolic_functions)
