# `zeros`
```@setup repl_only

```


## Methods

```@repl 
methods(zeros)
```


## Examples
### Float64

```jldoctest
julia> zeros()
0-dimensional Array{Float64, 0}:
0.0
```

**Vector**
```jldoctest
julia> zeros(1)
1-element Vector{Float64}:
 0.0

julia> zeros(2)
2-element Vector{Float64}:
 0.0
 0.0
```

**Array**
```jldoctest
julia> zeros(1, 1)
1×1 Matrix{Float64}:
 0.0

julia> zeros(1, 2)
1×2 Matrix{Float64}:
 0.0  0.0

julia> zeros(2, 1)
2×1 Matrix{Float64}:
 0.0
 0.0

julia> zeros(2, 2)
2×2 Matrix{Float64}:
 0.0  0.0
 0.0  0.0

julia> zeros(2, 2, 1)
2×2×1 Array{Float64, 3}:
[:, :, 1] =
 0.0  0.0
 0.0  0.0

julia> zeros(1, 1, 1, 1)
1×1×1×1 Array{Float64, 4}:
[:, :, 1, 1] =
 0.0
```

Tuple input:
```jldoctest
julia> zeros(1, 1, 1, 1) == zeros((1, 1, 1, 1))
true
```


### Other Types

**Int8**
```jldoctest
julia> zeros(Int8)
0-dimensional Array{Int8, 0}:
0

julia> zeros(Int8, 1)
1-element Vector{Int8}:
 0

julia> zeros(Int8, 1, 1)
1×1 Matrix{Int8}:
 0

julia> zeros(Int8, 2, 2)
2×2 Matrix{Int8}:
 0  0
 0  0

julia> zeros(Int8, 2, 2, 2) == zeros(Int8, (2, 2, 2))
true
```
