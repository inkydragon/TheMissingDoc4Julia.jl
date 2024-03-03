# EndlessTesting

> TODO: Rename to `TheMissingDoc4Julia`

Example doc page: `sin` https://inkydragon.github.io/EndlessTesting.jl/dev/Base.Math/Trigonometry/Sine/sin/

See also: [Related Issues](docs/src/index.md)

## Build
1. Clone project.
2. Init and Build:
```sh
julia --project=docs -e "using Pkg; Pkg.develop(PackageSpec(path=pwd())); Pkg.instantiate();"
julia --project=docs docs/make.jl
```

## Random Ideas
+ put all docs into repl, then we could like to manual in functions docs.
