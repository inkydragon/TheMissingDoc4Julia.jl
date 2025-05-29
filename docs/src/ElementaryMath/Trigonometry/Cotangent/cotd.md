# `cotd`

Compute the cotangent of `x`, return in degrees.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cotd
```


## Methods

```@repl
methods(cotd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cotd(0)

julia> cotd(-0.0)
```

### Complex
```jldoctest
julia> cotd(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cotd, (Any,), [LinearAlgebra])
```


## Tech Notes

- `cotd(::Real)`: by pure julia
- `cotd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cotd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cotd - MathWorld](https://mathworld.wolfram.com/ )
