# `sinh`

Compute the hyperbolic sine of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sinh
```


## Methods

```@repl
methods(sinh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sinh(0)
0.0

julia> sinh(1)
1.1752011936438014
```

### Complex
```jldoctest
julia> sinh(0+0im)
0.0 + 0.0im
```

## Tips


## See Also

[`asinh`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sinh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `sinh(::Real)`: by pure julia
- `sinh(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.28.1](https://dlmf.nist.gov/4.28#E1)
- 🔗[Hyperbolic Sine - MathWorld](https://mathworld.wolfram.com/HyperbolicSine.html)
- 🔗[Hyperbolic functions - Wikipedia](https://en.wikipedia.org/wiki/Hyperbolic_functions)
