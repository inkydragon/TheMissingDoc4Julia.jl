# `asec`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asec
```


## Methods

```@repl
methods(asec, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> asec(0)

julia> asec(-0.0)
```

### Complex
```jldoctest
julia> asec(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(asec, (Any,), [LinearAlgebra])
```


## Tech Notes

- `asec(::Real)`: by pure julia
- `asec(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[asec - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[asec - MathWorld](https://mathworld.wolfram.com/ )
