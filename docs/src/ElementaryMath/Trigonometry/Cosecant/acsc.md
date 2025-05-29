# `acsc`

Compute the principal value of the arc cosecant of `x`,
return in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acsc
```


## Methods

```@repl
methods(acsc, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acsc(Inf)
0.0

julia> acsc(-Inf)
-0.0

julia> acsc(1.0) / pi
0.5

julia> acsc(0)
ERROR: DomainError with Inf:
asin(x) is not defined for |x| > 1.
Stacktrace:
[...]
```

### Complex
```jldoctest
julia> acsc(Inf+0im)
0.0 - 0.0im
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acsc, (Any,), [LinearAlgebra])
```


## Tech Notes

- `acsc(::Real)`: by pure julia
- `acsc(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[acsc - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acsc - MathWorld](https://mathworld.wolfram.com/ )
