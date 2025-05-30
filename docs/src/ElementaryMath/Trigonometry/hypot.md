# `hypot`

Compute the hypotenuse ``\sqrt{x^2+y^2}`` avoiding overflow and underflow.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.hypot
```


## Methods

```@repl
methods(hypot, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> hypot(3, 4)
5.0

julia> hypot(5, 12)
13.0

julia> hypot(65, 72)
97.0
```


## Tips


## See Also


## Extended Inputs


## Tech Notes

- `hypot(::Real)`: by pure julia
- `hypot(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[hypot - cppreference.com](https://en.cppreference.com/w/c/numeric/math/hypot)
- 🔗[Hypotenuse - Wikipedia](https://en.wikipedia.org/wiki/Hypotenuse)
