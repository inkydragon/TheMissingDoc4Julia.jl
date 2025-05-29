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

- `acoth(::Real)`: by pure julia
- `acoth(::BigFloat)`: by MPFR


## Version History

Introduced in Julia v1.0 (2018)


## External Links
- 🔗[acoth - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acoth - MathWorld](https://mathworld.wolfram.com/ )
