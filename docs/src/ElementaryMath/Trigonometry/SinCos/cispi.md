# `cispi`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cispi
```


## Methods

```@repl
methods(cispi, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cispi(0)

julia> cispi(-0.0)
```

### Complex
```jldoctest
julia> cispi(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cispi, (Any,), [LinearAlgebra])
```


## Tech Notes

- `cispi(::Real)`: by pure julia
- `cispi(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cispi - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cispi - MathWorld](https://mathworld.wolfram.com/ )
