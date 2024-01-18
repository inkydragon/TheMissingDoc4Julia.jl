# `sin`
```@setup repl_only
using LinearAlgebra
```

```@docs
Base.sin
```


## Methods

With `Number` and `Missing` input:
```@repl 
methods(sin, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```

With `Array` like input:
```@repl repl_only
methods(sin, (Any,), [LinearAlgebra])
```


## Examples
### Int and Float
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

plot
```@repl
using UnicodePlots
lineplot(-π, π, sin)
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

### Missing
```jldoctest
julia> sin(missing)
missing
```

### Nothing
```jldoctest
julia> sin(nothing)
ERROR: MethodError: no method matching sin(::Nothing)
[...]
```


## Extended Capabilities
> `sin` in other stdlib or pkg.
### Matrix
```jl
# TODO
Base.sin(AbstractMatrix)
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

### GPU
> TODO


## See Also
[`sinpi`](@ref), [`sincos`](@ref),
[`sind`](@ref), [`sinh`](@ref),
[`asin`](@ref)


## Version History
Introduced in 2018 (1.0)
