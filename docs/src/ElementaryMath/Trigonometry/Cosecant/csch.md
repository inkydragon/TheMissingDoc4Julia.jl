# `csch`

Compute the hyperbolic cosecant of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.csch
```


## Methods

```@repl
methods(csch, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> csch(0)
Inf

julia> csch(-0.0)
-Inf

julia> csch(1.0)
0.8509181282393216
```

### Complex
```jldoctest
julia> csch(1+0im)
0.8509181282393217 - 0.0im
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(csch, (Any,), [LinearAlgebra])
```


## Tech Notes

- `csch(::Real)`: by pure julia
- `csch(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[csch - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[csch - MathWorld](https://mathworld.wolfram.com/ )
