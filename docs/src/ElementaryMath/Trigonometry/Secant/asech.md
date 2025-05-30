# `asech`

Compute the arc hyperbolic secant of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asech
```


## Methods

```@repl
methods(asech, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> asech(1.0)
0.0

julia> asech(0.648)
1.0001099661900488

julia> asech(0.0)
Inf

julia> asech(-Inf)
ERROR: DomainError with -0.0:
acosh(x) is only defined for x ≥ 1.
Stacktrace:
[...]
```

### Complex
```jldoctest
julia> asech(1+0im)
0.0 - 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(asech, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`acosh`](@ref): `asech(x) = inv(acosh(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.37.8](https://dlmf.nist.gov/4.37#E8)
- 🔗[Inverse Hyperbolic Secant - MathWorld](https://mathworld.wolfram.com/InverseHyperbolicSecant.html)
- 🔗[Inverse trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
