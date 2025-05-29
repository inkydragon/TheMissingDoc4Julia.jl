# `hypot`

Compute the hypotenuse ``\sqrt{x^2+y^2}`` avoiding overflow and underflow.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.hypot
```


## Methods

```@repl
methods(hypot, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> hypot(0)

julia> hypot(-0.0)
```

### Complex
```jldoctest
julia> hypot(0+0im)
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `hypot(::Real)`: by pure julia
- `hypot(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[hypot - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[hypot - MathWorld](https://mathworld.wolfram.com/ )
