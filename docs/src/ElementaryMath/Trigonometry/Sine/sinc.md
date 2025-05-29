# `sinc`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sinc
```


## Methods

```@repl
methods(sinc, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> sinc(0)

julia> sinc(-0.0)
```

### Complex
```jldoctest
julia> sinc(0+0im)
```

## Tips


## See Also


## Extended Inputs


## Tech Notes

- `sinc(::Real)`: by pure julia
- `sinc(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[sinc - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[sinc - MathWorld](https://mathworld.wolfram.com/ )
