# `tand`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.tand
```


## Methods

```@repl
methods(tand, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> tand(0)

julia> tand(-0.0)
```

### Complex
```jldoctest
julia> tand(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(tand, (Any,), [LinearAlgebra])
```


## Tech Notes

- `tand(::Real)`: by pure julia
- `tand(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[tand - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[tand - MathWorld](https://mathworld.wolfram.com/ )
