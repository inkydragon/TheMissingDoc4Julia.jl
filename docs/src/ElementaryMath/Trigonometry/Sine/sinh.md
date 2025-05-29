# `sinh`

Compute hyperbolic sine of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sinh
```


## Methods

```@repl
methods(sinh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sinh(0)

julia> sinh(-0.0)
```

### Complex
```jldoctest
julia> sinh(0+0im)
```

## Tips


## See Also

[`asinh`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sinh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `sinh(::Real)`: by pure julia
- `sinh(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[sinh - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sinh - MathWorld](https://mathworld.wolfram.com/ )
