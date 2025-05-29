# `sin`

Compute the sine of `x` expressed in radians.

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.sin
```


## Methods

```@repl
methods(sin, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples

```@repl
using UnicodePlots
lineplot(-π, π, sin)
```

### Real Numbers
```jldoctest
julia> sin(0)
0.0

julia> sin(0.5*pi)
1.0

julia> sin(pi)
0.0

julia> pi
π = 3.1415926535897...

julia> sin.([0 0.5*pi pi 1.5*pi 2*pi])
1×5 Matrix{Float64}:
 0.0  1.0  1.22465e-16  -1.0  -2.44929e-16
```

!!! tip "dot-style function call"
    `f.(args)` means eval args one by one.

big float, `sin(pi/6) == sin(30°) == 1/2`:
```jldoctest
julia> sin(pi/6)
0.49999999999999994

julia> sin(pi/big"6")
0.4999999999999999999999999999999999999999999999999999999999999999999999999999957
```

special float `NaN`, `Inf`:
```jldoctest
julia> sin(NaN)
NaN

julia> sin(Inf)
ERROR: DomainError with Inf:
sin(x) is only defined for finite x.
[...]
```

### Complex
```jldoctest
julia> sin(0+0im)
0.0 + 0.0im
```

plot real part
```@repl
using UnicodePlots
sin_real(x, y) = real(sin(x + y*im))
surfaceplot(-2pi:0.01:2pi, -pi:0.01:pi, sin_real)
```


## Tips
- Call [`sinpi`](@ref) to compute `sin(x*pi)`


## See Also
[`sinpi`](@ref), [`sincos`](@ref),
[`sind`](@ref), [`sinh`](@ref),
[`asin`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@repl repl_only
methods(sin, (Any,), [LinearAlgebra])
```

```jldoctest
julia> sin([1 2; 3 4])
2×2 Matrix{Float64}:
 -0.465581  -0.148424
 -0.222637  -0.688218

julia> sin.([1 2; 3 4])
2×2 Matrix{Float64}:
 0.841471   0.909297
 0.14112   -0.756802

julia> sin([1 2; 3 4]) == sin.([1 2; 3 4])
false
```


## Tech Notes
- `sin(::Number)`: by pure julia
- `sin(::BigFloat)`: by MPFR


## Version History
Introduced in 2018 (1.0)


## External Links
- 🔗[DLMF 4.14.1](https://dlmf.nist.gov/4.14.1)
- 🔗[Sine - Wikipedia](https://en.wikipedia.org/wiki/Sine_and_cosine)
- 🔗[Sine - MathWorld](https://mathworld.wolfram.com/Sine.html)
