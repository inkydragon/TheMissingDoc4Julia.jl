# `asec`

Compute the principal value of the arc secant of `x`,
return in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asec
```


## Methods

```@repl
methods(asec, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> asec(1.0)
0.0

julia> asec(-1.0) / pi
1.0

julia> asec(sqrt(2)) / pi
0.25000000000000006

julia> asec(2) / pi
0.33333333333333337

julia> asec(Inf) / pi
0.5
```

### Complex
```jldoctest
julia> asec(1+0im)
0.0 + 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(asec, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`acos`](@ref): `asec(x) = inv(acos(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[asec - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[asec - MathWorld](https://mathworld.wolfram.com/ )
