# `sec`

Compute the secant of `x` expressed in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sec
```


## Methods

```@repl
methods(sec, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sec(0)
1.0

julia> sec(pi)
-1.0

julia> sec(pi/4)
1.414213562373095

julia> sec(pi/3)
1.9999999999999996

julia> sec(pi/2)
1.633123935319537e16
```

### Complex
```jldoctest
julia> sec(0+0im)
1.0 + 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sec, (Any,), [LinearAlgebra])
```


## Tech Notes

- `sec(::Real)`: by pure julia
- `sec(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[sec - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sec - MathWorld](https://mathworld.wolfram.com/ )
