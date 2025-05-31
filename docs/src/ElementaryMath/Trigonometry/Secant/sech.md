# `sech`

Compute the hyperbolic secant of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sech
```


## Methods

```@repl
methods(sech, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-3, 3, sech, ylim=(-3, 3))
```

### Real Numbers
```jldoctest
julia> sech(0)
1.0

julia> sech(1)
0.6480542736638855

julia> sech(1e6)
0.0

julia> sech(-1e6)
0.0
```

### Complex
```jldoctest
julia> sech(0+0im)
1.0 + 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sech, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`cosh`](@ref): `sech(x) = inv(cosh(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.28.6](https://dlmf.nist.gov/4.28#E6)
- 🔗[Hyperbolic Secant - MathWorld](https://mathworld.wolfram.com/HyperbolicSecant.html)
- 🔗[Hyperbolic functions - Wikipedia](https://en.wikipedia.org/wiki/Hyperbolic_functions)
