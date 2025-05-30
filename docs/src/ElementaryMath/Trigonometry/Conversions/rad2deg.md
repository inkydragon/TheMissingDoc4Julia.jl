# `rad2deg`

Convert `x` from radians to degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.rad2deg
```


## Methods

```@repl
methods(rad2deg, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> rad2deg(pi)
180.0

julia> rad2deg(pi/2)
90.0

julia> rad2deg.([1/6  1/4  1/3] * pi)
1×3 Matrix{Float64}:
 30.0  45.0  60.0

julia> rad2deg(-0.0)
-0.0
```


## Tips


## See Also


## Extended Inputs


## Tech Notes


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[Degree - MathWorld](https://mathworld.wolfram.com/Degree.html)
- 🔗[Radian - MathWorld](https://mathworld.wolfram.com/Radian.html)
- 🔗[Degree (angle) - Wikipedia](https://en.wikipedia.org/wiki/Degree_(angle))
- 🔗[Radian - Wikipedia](https://en.wikipedia.org/wiki/Radian)
