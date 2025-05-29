# `acosh`

Compute the arc hyperbolic cosine of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acosh
```


## Methods

```@repl
methods(acosh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acosh(0)

julia> acosh(-0.0)
```

### Complex
```jldoctest
julia> acosh(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acosh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `acosh(::Real)`: by pure julia
- `acosh(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[acosh - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acosh - MathWorld](https://mathworld.wolfram.com/ )
