# `asech`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asech
```


## Methods

```@repl
methods(asech, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> asech(0)

julia> asech(-0.0)
```

### Complex
```jldoctest
julia> asech(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(asech, (Any,), [LinearAlgebra])
```


## Tech Notes

- `asech(::Real)`: by pure julia
- `asech(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[asech - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[asech - MathWorld](https://mathworld.wolfram.com/ )
