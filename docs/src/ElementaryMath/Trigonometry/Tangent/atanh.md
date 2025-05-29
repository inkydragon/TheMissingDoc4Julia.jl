# `atanh`

Compute the arc hyperbolic tangent of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.atanh
```


## Methods

```@repl
methods(atanh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> atanh(0)
0.0

julia> atanh(-0.0)
-0.0

julia> atanh(0.76)
0.9962150823451031

julia> atanh(2)
ERROR: DomainError with 2.0:
atanh(x) is only defined for |x| ≤ 1.
Stacktrace:
[...]
```

### Complex
```jldoctest
julia> atanh(0+0im)
0.0 + 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(atanh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `atanh(::Real)`: by pure julia
- `atanh(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[atanh - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[atanh - MathWorld](https://mathworld.wolfram.com/ )
