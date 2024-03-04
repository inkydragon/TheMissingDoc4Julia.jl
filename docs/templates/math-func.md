# `math_func_name`
> NOTE: One line description.
> May be auto-generated.

Here is a One line description.

```@setup repl_only
using LinearAlgebra
```
```@docs
math_func_name
```

> NOTE: longer desc.


## Methods
> TODO: This section should be auto-generated.

```@repl
methods(math_func_name, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])
```


## Examples
> NOTE: Basic examples, special inputs, errors and plots.

### Real Numbers
```jldoctest
julia> math_func_name(0)

julia> math_func_name(-0.0)
```

### Complex
```jldoctest
julia> math_func_name(0+0im)
```

### Missing
```jldoctest
julia> math_func_name(missing)
missing
```

### Nothing
```jldoctest
julia> math_func_name(nothing)
ERROR: MethodError: no method matching sin(::Nothing)
[...]
```


## Tips
> NOTE: Guidelines for using functions


## See Also
> NOTE: related functions.

[`math_func_name_fast`](@ref)


## Extended Inputs
> NOTE: `sin` in stdlib or other pkg.

### Matrix
With `Array` like input:
```@repl repl_only
methods(math_func_name, (Any,), [LinearAlgebra])
```


## Tech Notes
> NOTE: Technical and implementation details,
> limitations of current implementations.

- `math_func_name(::Real)`: by pure julia
- `math_func_name(::BigFloat)`: by MPFR


## Version History
> NOTE: Changelog for functions.
> TODO: This section should be auto-generated.

Introduced in 2018 (1.0)


## External Links
- 🔗[math_func_name - Wikipedia](https://en.wikipedia.org/wiki/ )
- 🔗[math_func_name - MathWorld](https://mathworld.wolfram.com/ )
