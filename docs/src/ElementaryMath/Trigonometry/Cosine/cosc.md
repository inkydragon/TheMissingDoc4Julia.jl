# `cosc`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cosc
```


## Methods

```@repl
methods(cosc, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cosc(0)

julia> cosc(-0.0)
```

### Complex
```jldoctest
julia> cosc(0+0im)
```

## Tips


## See Also

[`cosc_fast`](@ref)


## Extended Inputs


## Tech Notes

- `cosc(::Real)`: by pure julia
- `cosc(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cosc - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cosc - MathWorld](https://mathworld.wolfram.com/ )
