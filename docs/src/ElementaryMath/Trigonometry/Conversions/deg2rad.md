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

- `deg2rad(::Real)`: by pure julia
- `deg2rad(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[deg2rad - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[deg2rad - MathWorld](https://mathworld.wolfram.com/ )
