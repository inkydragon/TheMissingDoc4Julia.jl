# `acoth`

Compute the arc hyperbolic cotangent of `x`.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acoth
```


## Methods

```@repl
methods(acoth, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
plot = Plot(; xlim=(-4, 4), ylim=(-3, 3));
lineplot!(plot, 1, 4, acoth);
lineplot!(plot, -4, -1, acoth)
```

### Real Numbers
```jldoctest
julia> acoth(Inf)
0.0

julia> acoth(-Inf)
-0.0

julia> acoth(1.313)
1.0000487358456431
```

### Complex
```jldoctest
julia> acoth(Inf+0im)
0.0 - 0.0im
```

## Tips


## See Also



## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(acoth, (Any,), [LinearAlgebra])
```


## Tech Notes

- Implemented in terms of [`atanh`](@ref): `acoth(x) = inv(atanh(x))`


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF: §4.37.9](https://dlmf.nist.gov/4.37#E9)
- 🔗[Inverse Hyperbolic Cotangent - MathWorld](https://mathworld.wolfram.com/InverseHyperbolicCotangent.html)
- 🔗[Inverse trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
