# `acosh`

Compute the arc hyperbolic cosine of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acosh
```


## Methods

```@repl
methods(acosh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(1, 4, acosh, xlim=(-4, 4) , ylim=(-2, 2))
```

### Real Numbers
```jldoctest
julia> acosh(1.0)
0.0

julia> acosh(2.0)
1.3169578969248166

julia> acosh(0.0)
ERROR: DomainError with 0.0:
acosh(x) is only defined for x ≥ 1.
Stacktrace:
[...]
```

### Complex
```jldoctest
julia> acosh(1+0im)
0.0 + 0.0im
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acosh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `acosh(::Real)`: by pure julia
- `acosh(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.37.2](https://dlmf.nist.gov/4.37#E2)
- 🔗[Inverse Hyperbolic Cosine - MathWorld](https://mathworld.wolfram.com/InverseHyperbolicCosine.html)
- 🔗[Inverse trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
