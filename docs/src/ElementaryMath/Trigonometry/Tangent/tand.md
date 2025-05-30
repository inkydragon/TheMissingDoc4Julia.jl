# `tand`

Compute the tangent of `x` expressed in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.tand
```


## Methods

```@repl
methods(tand, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> tand(0)
0.0

julia> tand(-0.0)
-0.0

julia> tand(45)
1.0

julia> tand(90)
Inf
```

### Complex
```jldoctest
julia> tand(0+0im)
0.0 + 0.0im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- Implemented in terms of [`tan`](@ref): `tand(deg) = tan(deg2rad(deg))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
