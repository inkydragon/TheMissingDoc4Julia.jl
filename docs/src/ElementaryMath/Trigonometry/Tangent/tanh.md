# `tanh`

Compute the hyperbolic tangent of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.tanh
```


## Methods

```@repl
methods(tanh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-3, 3, tanh)
```

### Real Numbers
```jldoctest
julia> tanh(0)
0.0

julia> tanh(-0.0)
-0.0

julia> tanh(1.0)
0.7615941559557649
```

### Complex
```jldoctest
julia> tanh(0+0im)
0.0 + 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(tanh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `tanh(::Real)`: by pure julia
- `tanh(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.28.4](https://dlmf.nist.gov/4.28#E4)
- 🔗[Hyperbolic Tangent - MathWorld](https://mathworld.wolfram.com/HyperbolicTangent.html)
- 🔗[Hyperbolic functions - Wikipedia](https://en.wikipedia.org/wiki/Hyperbolic_functions)