# The Missing Doc 4 Julia

This project is intended to be a supplement to [the official julia documentation](https://docs.julialang.org/).
When possible, much of the project will be merged into the julia documentation.

This project is a *reference*.
> Reference guides are **technical descriptions** of the machinery and how to operate it.
> Reference material is **information-oriented**.
>
> —— 🔗[Reference - diataxis.fr](https://diataxis.fr/reference/)


## Example
Example doc page:
- [sin - TheMissingDoc4Julia](https://inkydragon.github.io/TheMissingDoc4Julia.jl/dev/ElementaryMath/Trigonometry/Sine/sin/)

See also: [Related Issues](docs/src/index.md)


## Build
1. Clone project.
2. Init and Build:
```sh
julia --project=docs -e "using Pkg; Pkg.develop(PackageSpec(path=pwd())); Pkg.instantiate();"
julia --project=docs docs/make.jl
```
