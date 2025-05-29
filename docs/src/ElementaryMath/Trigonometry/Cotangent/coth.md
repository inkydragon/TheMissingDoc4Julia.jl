# `coth`

Compute the hyperbolic cotangent of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.coth
```


## Methods

```@repl
methods(coth, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> coth(0)
Inf

julia> coth(-0.0)
-Inf

julia> coth(1.0)
1.3130352854993315
```

### Complex
```jldoctest
julia> coth(0+0im)
NaN + NaN*im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(coth, (Any,), [LinearAlgebra])
```


## Tech Notes

- `coth(::Real)`: by pure julia
- `coth(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[coth - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[coth - MathWorld](https://mathworld.wolfram.com/ )
