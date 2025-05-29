# `tan`

Compute the tangent of `x` expressed in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.tan
```


## Methods

```@repl
methods(tan, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> tan(0)
0.0

julia> tan(-0.0)
-0.0

julia> tan(pi/4)
0.9999999999999999

julia> tan(pi/2)
1.633123935319537e16

julia> tan(pi)
0.0
```

### Complex
```jldoctest
julia> tan(0+0im)
0.0 - 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(tan, (Any,), [LinearAlgebra])
```


## Tech Notes

- `tan(::Real)`: by pure julia
- `tan(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[tan - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[tan - MathWorld](https://mathworld.wolfram.com/ )
