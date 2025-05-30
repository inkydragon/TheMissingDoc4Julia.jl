# `cos`

Compute the cosine of `x` expressed in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.cos
```


## Methods

```@repl
methods(cos, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(0, 2π, cos)
```

### Real Numbers
```jldoctest
julia> cos(0)
1.0

julia> cos(0.5*pi)
6.123233995736766e-17

julia> cos(pi)
-1.0

julia> pi
π = 3.1415926535897...

julia> cos.([0 0.5*pi pi 1.5*pi 2*pi])
1×5 Matrix{Float64}:
 1.0  6.12323e-17  -1.0  -1.83697e-16  1.0
```

big float, `cos(pi/2) == 0`:
```jldoctest
julia> cos(pi/2)
6.123233995736766e-17

julia> cos(pi/big"2")
5.48458720489676038371065313197849010525379118254343975589502858496071344256677e-78
```

### Complex
```jldoctest
julia> cos(0+0im)
1.0 - 0.0im
```

plot real part
```@repl
using UnicodePlots
cos_real(x, y) = real(cos(x + y*im))
surfaceplot(-2pi:0.01:2pi, -pi:0.01:pi, cos_real)
```


## Tips
- Call [`cospi`](@ref) to compute `cos(x*pi)`


## See Also
[`cospi`](@ref), [`sincos`](@ref),
[`cosd`](@ref), [`cosh`](@ref),
[`acos`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(cos, (Any,), [LinearAlgebra])
```

```jldoctest
julia> cos([1 2; 3 4])
2×2 Matrix{Float64}:
  0.855423  -0.110876
 -0.166315   0.689109

julia> cos.([1 2; 3 4])
2×2 Matrix{Float64}:
  0.540302  -0.416147
 -0.989992  -0.653644

julia> cos([1 2; 3 4]) == cos.([1 2; 3 4])
false
```


## Tech Notes
- `cos(::Number)`: by pure julia
- `cos(::BigFloat)`: by MPFR


## Version History
Introduced in Julia v1.0 (2018)


## External Links
- 🔗[DLMF 4.14.2](https://dlmf.nist.gov/4.14.2)
- 🔗[Cosine - MathWorld](https://mathworld.wolfram.com/Cosine.html)
- 🔗[Cosine - Wikipedia](https://en.wikipedia.org/wiki/Sine_and_cosine)
