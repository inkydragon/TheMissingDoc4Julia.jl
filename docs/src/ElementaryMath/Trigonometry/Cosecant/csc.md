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

- Implemented in terms of [`sin`](@ref): `csc(x) = inv(sin(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.14.5](https://dlmf.nist.gov/4.14#E5)
- 🔗[Cosecant - MathWorld](https://mathworld.wolfram.com/Cosecant.html)
- 🔗[Trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Trigonometric_functions)
