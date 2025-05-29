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

julia> sincosd(-0.0)
```

### Complex
```jldoctest
julia> sincosd(0+0im)
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `sincosd(::Real)`: by pure julia
- `sincosd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[sincosd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sincosd - MathWorld](https://mathworld.wolfram.com/ )
