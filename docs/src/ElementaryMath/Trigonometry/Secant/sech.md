# `sech`

Compute the hyperbolic secant of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sech
```


## Methods

```@repl
methods(sech, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sech(0)

julia> sech(-0.0)
```

### Complex
```jldoctest
julia> sech(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sech, (Any,), [LinearAlgebra])
```


## Tech Notes

- `sech(::Real)`: by pure julia
- `sech(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[sech - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sech - MathWorld](https://mathworld.wolfram.com/ )
