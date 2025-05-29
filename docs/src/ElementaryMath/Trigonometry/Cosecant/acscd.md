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
julia> acscd(0)

julia> acscd(-0.0)
```

### Complex
```jldoctest
julia> acscd(0+0im)
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acscd, (Any,), [LinearAlgebra])
```


## Tech Notes

- `acscd(::Real)`: by pure julia
- `acscd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[acscd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acscd - MathWorld](https://mathworld.wolfram.com/ )
