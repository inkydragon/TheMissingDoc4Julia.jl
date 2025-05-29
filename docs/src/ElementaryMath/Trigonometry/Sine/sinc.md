# `sinc`

Compute the normalized `sinc(x)` function, where `x` expressed in radians.

Returns:
```math
\begin{cases}
\frac{\sin(\pi x)}{\pi x},  & x \ne 0\\
1,  & x=0
\end{cases}
```

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
1

julia> sinc(1.0)
0.0
```

### Complex
```jldoctest
julia> sinc(0+0im)
1.0 - 0.0im
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
