# `acot`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acot
```


## Methods

```@repl
methods(acot, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acot(0)

julia> acot(-0.0)
```

### Complex
```jldoctest
julia> acot(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acot, (Any,), [LinearAlgebra])
```


## Tech Notes

- `acot(::Real)`: by pure julia
- `acot(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[acot - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acot - MathWorld](https://mathworld.wolfram.com/ )
