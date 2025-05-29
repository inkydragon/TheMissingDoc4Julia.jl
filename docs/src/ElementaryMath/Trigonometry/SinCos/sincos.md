# `sincos`

Compute the sine and cosine of `x` expressed in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sincos
```


## Methods

```@repl
methods(sincos, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sincos(0)
(0.0, 1.0)

julia> sincos(pi)
(0.0, -1.0)

julia> sincos(-0.0)
(-0.0, 1.0)
```

### Complex
```jldoctest
julia> sincos(0+0im)
(0.0 + 0.0im, 1.0 - 0.0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sincos, (Any,), [LinearAlgebra])
```


## Tech Notes

- `sincos(::Real)`: by pure julia
- `sincos(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[sincos - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sincos - MathWorld](https://mathworld.wolfram.com/ )
