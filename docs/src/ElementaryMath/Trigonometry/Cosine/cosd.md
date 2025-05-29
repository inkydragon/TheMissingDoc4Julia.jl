# `cosd`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cosd
```


## Methods

```@repl
methods(cosd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cosd(0)

julia> cosd(-0.0)
```

### Complex
```jldoctest
julia> cosd(0+0im)
```

## Tips


## See Also

[`cos`](@ref)


## Extended Inputs


## Tech Notes

- `cosd(::Real)`: by pure julia
- `cosd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cosd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cosd - MathWorld](https://mathworld.wolfram.com/ )
