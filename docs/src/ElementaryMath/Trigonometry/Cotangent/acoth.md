# `acoth`

~~TODO: Here is a One line description.~~

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
julia> acoth(0)

julia> acoth(-0.0)
```

### Complex
```jldoctest
julia> acoth(0+0im)
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

Introduced in 2018 (1.0)


## External Links
- 🔗[acoth - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[acoth - MathWorld](https://mathworld.wolfram.com/ )
