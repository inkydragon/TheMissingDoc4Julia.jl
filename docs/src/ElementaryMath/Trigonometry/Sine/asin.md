# `asin`
Compute the inverse sine of parameter in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.asin(x::Number)
```


## Methods

```@repl
methods(asin, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-1, 1, asin)
```

### Real Numbers
```jldoctest
julia> asin.([-1.0, -0.5, 0.0, 0.5, 1.0])
5-element Vector{Float64}:
 -1.5707963267948966
 -0.5235987755982989
  0.0
  0.5235987755982989
  1.5707963267948966

julia> asin(-1.0) ≈ -asin(1.0)
true

julia> asin(0.5)*6 ≈ asin(1.0)*2 ≈ π
true

julia> asin(big"1")*2 == BigFloat(pi)
true
```

### Complex

```jldoctest
julia> asin(0-0im)
0.0 + 0.0im

julia> asin.(complex(-4:4))
9-element Vector{ComplexF64}:
 -1.5707963267948966 + 2.0634370688955608im
 -1.5707963267948966 + 1.762747174039086im
 -1.5707963267948966 + 1.3169578969248166im
 -1.5707963267948966 + 0.0im
                 0.0 + 0.0im
  1.5707963267948966 + 0.0im
  1.5707963267948966 + 1.3169578969248166im
  1.5707963267948966 + 1.762747174039086im
  1.5707963267948966 + 2.0634370688955608im
```

> TODO: Complex3DPlot

## Tips
- Call [`asind`](@ref) for output in degrees.


## See Also
[`asind`](@ref), [`sin`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(asin, (Any,), [LinearAlgebra])
```

```@docs
asin(A::AbstractMatrix)
```


## Tech Notes
- `asin(::Number)`: by pure julia
- `asin(::BigFloat)`: by MPFR


## Version History
Introduced in 2018 (1.0)


## External Links
- 🔗[DLMF 4.23.E1](https://dlmf.nist.gov/4.23.E1)
- 🔗[Inverse trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
- 🔗[Inverse Sine - Wolfram MathWorld](https://mathworld.wolfram.com/InverseSine.html)
