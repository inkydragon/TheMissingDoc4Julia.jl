# `acosd`

Compute the principal value of the arc cosine of `x`,
return in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acosd
```


## Methods

```@repl
methods(acosd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acosd(1.0)
0.0

julia> acosd(0.0)
90.0

julia> acosd(0.5)
60.00000000000001

julia> acosd(-1.0)
180.0
```

### Complex
```jldoctest
julia> acosd(0+0im)
90.0 - 0.0im
```

## Tips


## See Also

[`acos`](@ref)


## Extended Inputs


## Tech Notes

- Implemented in terms of [`acos`](@ref): `acosd(x) = rad2deg(acos(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[acosd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acosd - MathWorld](https://mathworld.wolfram.com/ )
