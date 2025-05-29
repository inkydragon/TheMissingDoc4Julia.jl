# `sec`

Compute the secant of `x`, return in radians.

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

julia> sec(-0.0)
```

### Complex
```jldoctest
julia> sec(0+0im)
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

Introduced in 2018 (1.0)


## External Links
- 🔗[sec - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sec - MathWorld](https://mathworld.wolfram.com/ )
