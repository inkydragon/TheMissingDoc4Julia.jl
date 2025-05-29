# `cis`

Compute `exp(im*x)`, where `im` is the imaginary unit,
return in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cis
```


## Methods

```@repl
methods(cis, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cis(0)

julia> cis(-0.0)
```

### Complex
```jldoctest
julia> cis(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cis, (Any,), [LinearAlgebra])
```


## Tech Notes

- `cis(::Real)`: by pure julia
- `cis(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cis - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cis - MathWorld](https://mathworld.wolfram.com/ )
