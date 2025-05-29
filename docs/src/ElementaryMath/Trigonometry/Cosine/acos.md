# `acos`

Compute the principal value of the arc cosine of `x`,
return in radians.

- For `x` in range `[-1, 1]`, return value in range `[0, pi]`
- Otherwise, throw a `DomainError`

```@setup repl_only
using LinearAlgebra
```
```@docs
Base.acos(::Real)
```


## Methods
```@repl
methods(acos, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples
```@repl
using UnicodePlots
lineplot(-1, 1, acos; ylim=(0, pi))
```

### Real Numbers
```jldoctest
julia> acos(1.0)
0.0

julia> acos(0.0)
1.5707963267948966

julia> acos(-1.0)
3.141592653589793

julia> acos(2.0)
ERROR: DomainError with 2.0:
acos(x) not defined for |x| > 1
Stacktrace:
[...]
```

### Complex
```jldoctest
julia> acos(2.0+0im)
0.0 - 1.3169578969248166im

julia> acos(2.0-0im)
0.0 + 1.3169578969248166im

julia> acos(-2.0+0im)
3.141592653589793 - 1.3169578969248166im

julia> acos(-2.0-0im)
3.141592653589793 + 1.3169578969248166im
```


## Tips
- For real number input, the input range is limited to `[0, 1]`.
    For larger ranges, use complex inputs.
- The output is expressed in radians,
    and needs to be converted if a degrees is required:
    ```
    degrees = radians * 180 / pi
    ```

## See Also
[`cos`](@ref), [`acosd`](@ref), [`acosh`](@ref)


## Extended Inputs

### Matrix
With `Array` like input:
```@docs
LinearAlgebra.acos(::AbstractMatrix)
```
```@repl repl_only
methods(acos, (Any,), [LinearAlgebra])
```

```jldoctest
julia> acos([-1 0; 0 -1])
2×2 Matrix{Float64}:
 3.14159  0.0
 0.0      3.14159
```


## Tech Notes
- `acos(::Real)`: by pure julia
- `acos(::BigFloat)`: by MPFR


## Version History
Introduced in Julia v1.0 (2018)


## External Links
- 🔗[Inverse trigonometric functions - Wikipedia](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
- 🔗[Inverse Cosine - Wolfram MathWorld](https://mathworld.wolfram.com/InverseCosine.html)
