# `asecd`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asecd
```


## Methods

```@repl
methods(asecd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> asecd(0)

julia> asecd(-0.0)
```

### Complex
```jldoctest
julia> asecd(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(asecd, (Any,), [LinearAlgebra])
```


## Tech Notes

- `asecd(::Real)`: by pure julia
- `asecd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[asecd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[asecd - MathWorld](https://mathworld.wolfram.com/ )
