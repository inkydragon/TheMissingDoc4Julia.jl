# `acsch`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acsch
```


## Methods

```@repl
methods(acsch, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> acsch(0)

julia> acsch(-0.0)
```

### Complex
```jldoctest
julia> acsch(0+0im)
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acsch, (Any,), [LinearAlgebra])
```


## Tech Notes

- `acsch(::Real)`: by pure julia
- `acsch(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[acsch - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acsch - MathWorld](https://mathworld.wolfram.com/ )
