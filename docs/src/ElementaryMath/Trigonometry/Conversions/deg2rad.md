# `deg2rad`

Convert `x` from degrees to radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.deg2rad
```


## Methods

```@repl
methods(deg2rad, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> deg2rad(180) / pi
1.0

julia> deg2rad(90) / pi
0.5

julia> deg2rad.([30 45 60]) / pi
1×3 Matrix{Float64}:
 0.166667  0.25  0.333333

julia> deg2rad(-0.0)
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
