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
1.0

julia> sech(1)
0.6480542736638855

julia> sech(1e6)
0.0

julia> sech(-1e6)
0.0
```

### Complex
```jldoctest
julia> sech(0+0im)
1.0 + 0.0im
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
