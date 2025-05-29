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
julia> acosd(0)

julia> acosd(-0.0)
```

### Complex
```jldoctest
julia> acosd(0+0im)
```

## Tips


## See Also

[`acos`](@ref)


## Extended Inputs


## Tech Notes

- `acosd(::Real)`: by pure julia
- `acosd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[acosd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acosd - MathWorld](https://mathworld.wolfram.com/ )
