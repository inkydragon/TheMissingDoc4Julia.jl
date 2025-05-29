# `secd`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.secd
```


## Methods

```@repl
methods(secd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> secd(0)

julia> secd(-0.0)
```

### Complex
```jldoctest
julia> secd(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(secd, (Any,), [LinearAlgebra])
```


## Tech Notes

- `secd(::Real)`: by pure julia
- `secd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[secd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[secd - MathWorld](https://mathworld.wolfram.com/ )
