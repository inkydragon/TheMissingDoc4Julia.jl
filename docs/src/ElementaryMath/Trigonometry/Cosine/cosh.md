# `cosh`

Compute the hyperbolic cosine of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cosh
```


## Methods

```@repl
methods(cosh, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cosh(0)

julia> cosh(-0.0)
```

### Complex
```jldoctest
julia> cosh(0+0im)
```

## Tips


## See Also

[`cos`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cosh, (Any,), [LinearAlgebra])
```


## Tech Notes

- `cosh(::Real)`: by pure julia
- `cosh(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cosh - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cosh - MathWorld](https://mathworld.wolfram.com/ )
