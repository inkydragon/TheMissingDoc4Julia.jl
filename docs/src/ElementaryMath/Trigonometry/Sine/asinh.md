# `asinh`

Compute the arc hyperbolic sine of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asinh
```


## Methods

```@repl
methods(asinh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> asinh(0)
0.0

julia> asinh(1)
0.881373587019543
```

### Complex
```jldoctest
julia> asinh(0+0im)
0.0 - 0.0im
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(asinh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `asinh(::Real)`: by pure julia
- `asinh(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[asinh - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[asinh - MathWorld](https://mathworld.wolfram.com/ )
