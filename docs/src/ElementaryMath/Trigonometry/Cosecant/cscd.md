# `cscd`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cscd
```


## Methods

```@repl
methods(cscd, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cscd(0)

julia> cscd(-0.0)
```

### Complex
```jldoctest
julia> cscd(0+0im)
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cscd, (Any,), [LinearAlgebra])
```


## Tech Notes

- `cscd(::Real)`: by pure julia
- `cscd(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[cscd - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[cscd - MathWorld](https://mathworld.wolfram.com/ )
