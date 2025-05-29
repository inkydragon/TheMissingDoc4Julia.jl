# `acot`

Compute the principal value of the arc cotangent of `x`,
return in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acot
```


## Methods

```@repl
methods(acot, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acot(Inf)
0.0

julia> acot(-Inf)
-0.0

julia> acot(0.0) / pi
0.5

julia> acot(1.0) / pi
0.25
```

### Complex
```jldoctest
julia> acot(0+0im)
NaN + NaN*im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acot, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`atan`](@ref): `acot(x) = inv(atan(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[acot - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acot - MathWorld](https://mathworld.wolfram.com/ )
