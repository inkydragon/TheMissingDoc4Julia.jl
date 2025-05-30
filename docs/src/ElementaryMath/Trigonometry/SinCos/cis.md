# `cis`

Compute `exp(im*x)`, where `im` is the imaginary unit,
return in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cis
```


## Methods

```@repl
methods(cis, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

### Real Numbers
```jldoctest
julia> cis(0)
1.0 + 0.0im

julia> cis(-0.0)
1.0 - 0.0im

julia> cis(pi)
-1.0 + 0.0im
```

### Complex
```jldoctest
julia> cis(0+0im)
1.0 + 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cis, (Any,), [LinearAlgebra])
```


## Tech Notes

- `cis(::Real)`: by pure julia
- `cis(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.14.3](https://dlmf.nist.gov/4.14#E3)
- 🔗[Cis - MathWorld](https://mathworld.wolfram.com/Cis.html)
- 🔗[cis (mathematics) - Wikipedia](https://en.wikipedia.org/wiki/Cis_(mathematics))
