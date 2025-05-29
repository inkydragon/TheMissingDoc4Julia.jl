# `sincospi`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sincospi
```


## Methods

```@repl
methods(sincospi, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sincospi(0)

julia> sincospi(-0.0)
```

### Complex
```jldoctest
julia> sincospi(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sincospi, (Any,), [LinearAlgebra])
```


## Tech Notes

- `sincospi(::Real)`: by pure julia
- `sincospi(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[sincospi - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sincospi - MathWorld](https://mathworld.wolfram.com/ )
