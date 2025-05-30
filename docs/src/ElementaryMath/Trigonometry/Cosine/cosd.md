# `cosd`

Compute the cosine of `x` expressed in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cosd
```


## Methods

```@repl
methods(cosd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cosd(0)
1.0

julia> cosd(-0.0)
1.0

julia> cosd(60)
0.5

julia> cosd(90)
0.0

julia> cosd(180)
-1.0
```

### Complex
```jldoctest
julia> cosd(0+0im)
1.0 - 0.0im
```

## Tips


## See Also

[`cos`](@ref)


## Extended Inputs


## Tech Notes

- Implemented in terms of [`cos`](@ref): `cosd(deg) = cos(deg2rad(deg))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
