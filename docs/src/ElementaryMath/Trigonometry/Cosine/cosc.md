# `cosc`

Compute the `cosc(x)` function, the derivative of `sinc(x)`,
where `x` expressed in radians.

Returns:
```math
\begin{cases}
\frac{\cos(\pi x)}{x}-\frac{\sin(\pi x)}{\pi x^2},  & x \ne 0\\
0,  & x=0\\
\end{cases}
```

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
-0.0

julia> cosc(-0.0)
0.0

julia> cosc(1.0)
-1.0
```

### Complex
```jldoctest
julia> cosc(0+0im)
-0.0 + 0.0im
```

## Tips


## See Also

[`sinc`](@ref)


## Extended Inputs


## Tech Notes

- `cosc(::Real)`: by pure julia
- `cosc(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
