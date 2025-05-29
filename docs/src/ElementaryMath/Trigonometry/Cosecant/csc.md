# `csc`

Compute the cosecant of `x` expressed in radians.

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
Inf

julia> csc(-0.0)
-Inf

julia> csc(pi/2)
1.0

julia> csc(pi)
Inf
```

### Complex
```jldoctest
julia> csc(0+0im)
NaN + NaN*im
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
