# `cot`

Compute the cotangent of `x`, return in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cot
```


## Methods

```@repl
methods(cot, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cot(0)

julia> cot(-0.0)
```

### Complex
```jldoctest
julia> cot(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cot, (Any,), [LinearAlgebra])
```


## Tech Notes

- `cot(::Real)`: by pure julia
- `cot(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cot - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cot - MathWorld](https://mathworld.wolfram.com/ )
