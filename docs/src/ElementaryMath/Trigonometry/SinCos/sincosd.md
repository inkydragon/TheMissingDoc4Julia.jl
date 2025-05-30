# `sincosd`

Compute the sine and cosine of `x` expressed in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sincosd
```


## Methods

```@repl
methods(sincosd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sincosd(0)
(0.0, 1.0)

julia> sincosd(-0.0)
(-0.0, 1.0)

julia> sincosd(45)
(0.7071067811865476, 0.7071067811865476)

julia> sincosd(90)
(1.0, 0.0)

julia> sincosd(180)
(0.0, -1.0)
```

### Complex
```jldoctest
julia> sincosd(0+0im)
(0.0 + 0.0im, 1.0 - 0.0im)
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `sincosd(::Real)`: by pure julia
- `sincosd(::BigFloat)`: by MPFR


## Version History

[Introduced in Julia v1.3 (2019)](https://github.com/JuliaLang/julia/blob/v1.3.0/NEWS.md?plain=1#L43)


## External Links
