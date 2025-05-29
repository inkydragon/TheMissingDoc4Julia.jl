# Implementation Notes

## libm exception handling

Julia's maths functions throw an exception
if the input parameter is out of range, instead of returning `NaN`.

If you do not want an exception to be thrown,
you can use the [NaNMath.jl](https://github.com/JuliaMath/NaNMath.jl) package.
