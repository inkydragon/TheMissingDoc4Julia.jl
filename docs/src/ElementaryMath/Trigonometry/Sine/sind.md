# `sind`

Compute the sine of `x` expressed in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sind
```


## Methods

```@repl
methods(sind, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sind(180)
0.0

julia> sind(90)
1.0
```


## Tips


## See Also

[`sin`](@ref)


## Extended Inputs


## Tech Notes

- `sind(::Real)`: by pure julia
- `sind(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[sind - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sind - MathWorld](https://mathworld.wolfram.com/ )
