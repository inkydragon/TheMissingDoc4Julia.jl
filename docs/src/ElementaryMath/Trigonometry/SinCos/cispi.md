# `cispi`

Compute `exp(im*π*x)`, where `im` is the imaginary unit,
return in half-revolutions.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cispi
```


## Methods

```@repl
methods(cispi, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cispi(0)
1.0 + 0.0im

julia> cispi(-0.0)
1.0 - 0.0im

julia> cispi(0.5)
0.0 + 1.0im

julia> cispi(1.0)
-1.0 + 0.0im
```

### Complex
```jldoctest
julia> cispi(0+0im)
1.0 + 0.0im
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `cispi(::Real)`: by pure julia
- `cispi(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cispi - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cispi - MathWorld](https://mathworld.wolfram.com/ )
