# `tanh`

Compute the hyperbolic tangent of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.tanh
```


## Methods

```@repl
methods(tanh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> tanh(0)
0.0

julia> tanh(-0.0)
-0.0

julia> tanh(1.0)
0.7615941559557649
```

### Complex
```jldoctest
julia> tanh(0+0im)
0.0 + 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(tanh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `tanh(::Real)`: by pure julia
- `tanh(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[tanh - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[tanh - MathWorld](https://mathworld.wolfram.com/ )
