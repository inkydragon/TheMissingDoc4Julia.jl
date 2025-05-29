# `csc`

~~TODO: Here is a One line description.~~

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.csc
```


## Methods

```@repl
methods(csc, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> csc(0)

julia> csc(-0.0)
```

### Complex
```jldoctest
julia> csc(0+0im)
```

## Tips


## See Also


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(csc, (Any,), [LinearAlgebra])
```


## Tech Notes

- `csc(::Real)`: by pure julia
- `csc(::BigFloat)`: by MPFR


## Version History

Introduced in 2018 (1.0)


## External Links
- 🔗[csc - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[csc - MathWorld](https://mathworld.wolfram.com/ )
