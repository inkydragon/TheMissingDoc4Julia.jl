# `sincos`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sincos
```


## Methods

```@repl
methods(sincos, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sincos(0)

julia> sincos(-0.0)
```

### Complex
```jldoctest
julia> sincos(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sincos, (Any,), [LinearAlgebra])
```


## Tech Notes

- `sincos(::Real)`: by pure julia
- `sincos(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[sincos - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sincos - MathWorld](https://mathworld.wolfram.com/ )
