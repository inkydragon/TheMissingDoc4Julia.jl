# `acscd`

Compute the principal value of the arc cosecant of `x`,
return in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acscd
```


## Methods

```@repl
methods(acscd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acscd(Inf)
0.0

julia> acscd(-Inf)
-0.0

julia> acscd(2)
30.000000000000004

julia> acscd(sqrt(2))
44.99999999999999

julia> acscd(1.0)
90.0

julia> acscd(0)
ERROR: DomainError with Inf:
asin(x) is not defined for |x| > 1.
Stacktrace:
[...]
```

### Complex
```jldoctest
julia> acscd(1+0im)
90.0 - 0.0im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- Implemented in terms of [`acsc`](@ref): `acscd(x) = rad2deg(acsc(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[acscd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acscd - MathWorld](https://mathworld.wolfram.com/ )
