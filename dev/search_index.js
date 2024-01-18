var documenterSearchIndex = {"docs":
[{"location":"Base.Math/Trigonometry/Cosecant/#Cosecant","page":"Cosecant","title":"Cosecant","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Cosecant/","page":"Cosecant","title":"Cosecant","text":"Base.csc\nBase.cscd\nBase.csch\nBase.acsc\nBase.acscd\nBase.acsch","category":"page"},{"location":"Base.Math/Trigonometry/Cosecant/#Base.Math.csc","page":"Cosecant","title":"Base.Math.csc","text":"csc(x)\n\nCompute the cosecant of x, where x is in radians.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosecant/#Base.Math.cscd","page":"Cosecant","title":"Base.Math.cscd","text":"cscd(x)\n\nCompute the cosecant of x, where x is in degrees.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosecant/#Base.Math.csch","page":"Cosecant","title":"Base.Math.csch","text":"csch(x)\n\nCompute the hyperbolic cosecant of x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosecant/#Base.Math.acsc","page":"Cosecant","title":"Base.Math.acsc","text":"acsc(x)\n\nCompute the inverse cosecant of x, where the output is in radians. \n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosecant/#Base.Math.acscd","page":"Cosecant","title":"Base.Math.acscd","text":"acscd(x)\n\nCompute the inverse cosecant of x, where the output is in degrees. If x is a matrix, x needs to be a square matrix.\n\ncompat: Julia 1.7\nMatrix arguments require Julia 1.7 or later.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosecant/#Base.Math.acsch","page":"Cosecant","title":"Base.Math.acsch","text":"acsch(x)\n\nCompute the inverse hyperbolic cosecant of x. \n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cotangent/#Cotangent","page":"Cotangent","title":"Cotangent","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Cotangent/","page":"Cotangent","title":"Cotangent","text":"Base.cot\nBase.cotd\nBase.coth\nBase.acot\nBase.acotd\nBase.acoth","category":"page"},{"location":"Base.Math/Trigonometry/Cotangent/#Base.Math.cot","page":"Cotangent","title":"Base.Math.cot","text":"cot(x)\n\nCompute the cotangent of x, where x is in radians.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cotangent/#Base.Math.cotd","page":"Cotangent","title":"Base.Math.cotd","text":"cotd(x)\n\nCompute the cotangent of x, where x is in degrees.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cotangent/#Base.Math.coth","page":"Cotangent","title":"Base.Math.coth","text":"coth(x)\n\nCompute the hyperbolic cotangent of x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cotangent/#Base.Math.acot","page":"Cotangent","title":"Base.Math.acot","text":"acot(x)\n\nCompute the inverse cotangent of x, where the output is in radians. \n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cotangent/#Base.Math.acotd","page":"Cotangent","title":"Base.Math.acotd","text":"acotd(x)\n\nCompute the inverse cotangent of x, where the output is in degrees. If x is a matrix, x needs to be a square matrix.\n\ncompat: Julia 1.7\nMatrix arguments require Julia 1.7 or later.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cotangent/#Base.Math.acoth","page":"Cotangent","title":"Base.Math.acoth","text":"acoth(x)\n\nCompute the inverse hyperbolic cotangent of x. \n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Sine/sind/#sind","page":"sind","title":"sind","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sind/","page":"sind","title":"sind","text":"Base.sind","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sind/#Base.Math.sind","page":"sind","title":"Base.Math.sind","text":"sind(x)\n\nCompute sine of x, where x is in degrees. If x is a matrix, x needs to be a square matrix.\n\ncompat: Julia 1.7\nMatrix arguments require Julia 1.7 or later.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Tangent/#Tangent","page":"Tangent","title":"Tangent","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Tangent/","page":"Tangent","title":"Tangent","text":"Base.tan\nBase.tand\nBase.tanh\nBase.atan\nBase.atand\nBase.atanh","category":"page"},{"location":"Base.Math/Trigonometry/Tangent/#Base.tan","page":"Tangent","title":"Base.tan","text":"tan(x)\n\nCompute tangent of x, where x is in radians.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Tangent/#Base.Math.tand","page":"Tangent","title":"Base.Math.tand","text":"tand(x)\n\nCompute tangent of x, where x is in degrees. If x is a matrix, x needs to be a square matrix.\n\ncompat: Julia 1.7\nMatrix arguments require Julia 1.7 or later.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Tangent/#Base.tanh","page":"Tangent","title":"Base.tanh","text":"tanh(x)\n\nCompute hyperbolic tangent of x.\n\nSee also tan, atanh.\n\nExamples\n\njulia> tanh.(-3:3f0)  # Here 3f0 isa Float32\n7-element Vector{Float32}:\n -0.9950548\n -0.9640276\n -0.7615942\n  0.0\n  0.7615942\n  0.9640276\n  0.9950548\n\njulia> tan.(im .* (1:3))\n3-element Vector{ComplexF64}:\n 0.0 + 0.7615941559557649im\n 0.0 + 0.9640275800758169im\n 0.0 + 0.9950547536867306im\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Tangent/#Base.atan","page":"Tangent","title":"Base.atan","text":"atan(y)\natan(y, x)\n\nCompute the inverse tangent of y or y/x, respectively.\n\nFor one argument, this is the angle in radians between the positive x-axis and the point (1, y), returning a value in the interval -pi2 pi2.\n\nFor two arguments, this is the angle in radians between the positive x-axis and the point (x, y), returning a value in the interval -pi pi. This corresponds to a standard atan2 function. Note that by convention atan(0.0,x) is defined as pi and atan(-0.0,x) is defined as -pi when x < 0.\n\nSee also atand for degrees.\n\nExamples\n\njulia> rad2deg(atan(-1/√3))\n-30.000000000000004\n\njulia> rad2deg(atan(-1, √3))\n-30.000000000000004\n\njulia> rad2deg(atan(1, -√3))\n150.0\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Tangent/#Base.Math.atand","page":"Tangent","title":"Base.Math.atand","text":"atand(y)\natand(y,x)\n\nCompute the inverse tangent of y or y/x, respectively, where the output is in degrees.\n\ncompat: Julia 1.7\nThe one-argument method supports square matrix arguments as of Julia 1.7.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Tangent/#Base.atanh","page":"Tangent","title":"Base.atanh","text":"atanh(x)\n\nCompute the inverse hyperbolic tangent of x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Secant/#Secant","page":"Secant","title":"Secant","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Secant/","page":"Secant","title":"Secant","text":"Base.sec\nBase.secd\nBase.sech\nBase.asec\nBase.asecd\nBase.asech","category":"page"},{"location":"Base.Math/Trigonometry/Secant/#Base.Math.sec","page":"Secant","title":"Base.Math.sec","text":"sec(x)\n\nCompute the secant of x, where x is in radians.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Secant/#Base.Math.secd","page":"Secant","title":"Base.Math.secd","text":"secd(x)\n\nCompute the secant of x, where x is in degrees.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Secant/#Base.Math.sech","page":"Secant","title":"Base.Math.sech","text":"sech(x)\n\nCompute the hyperbolic secant of x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Secant/#Base.Math.asec","page":"Secant","title":"Base.Math.asec","text":"asec(x)\n\nCompute the inverse secant of x, where the output is in radians. \n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Secant/#Base.Math.asecd","page":"Secant","title":"Base.Math.asecd","text":"asecd(x)\n\nCompute the inverse secant of x, where the output is in degrees. If x is a matrix, x needs to be a square matrix.\n\ncompat: Julia 1.7\nMatrix arguments require Julia 1.7 or later.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Secant/#Base.Math.asech","page":"Secant","title":"Base.Math.asech","text":"asech(x)\n\nCompute the inverse hyperbolic secant of x. \n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Sine/asinh/#asinh","page":"asinh","title":"asinh","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/asinh/","page":"asinh","title":"asinh","text":"Base.asinh","category":"page"},{"location":"Base.Math/Trigonometry/Sine/asinh/#Base.asinh","page":"asinh","title":"Base.asinh","text":"asinh(x)\n\nCompute the inverse hyperbolic sine of x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Sine/sin/#sin","page":"sin","title":"sin","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"using LinearAlgebra","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"Base.sin","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/#Base.sin","page":"sin","title":"Base.sin","text":"sin(x)\n\nCompute sine of x, where x is in radians.\n\nSee also sind, sinpi, sincos, cis, asin.\n\nExamples\n\njulia> round.(sin.(range(0, 2pi, length=9)'), digits=3)\n1×9 Matrix{Float64}:\n 0.0  0.707  1.0  0.707  0.0  -0.707  -1.0  -0.707  -0.0\n\njulia> sind(45)\n0.7071067811865476\n\njulia> sinpi(1/4)\n0.7071067811865475\n\njulia> round.(sincos(pi/6), digits=3)\n(0.5, 0.866)\n\njulia> round(cis(pi/6), digits=3)\n0.866 + 0.5im\n\njulia> round(exp(im*pi/6), digits=3)\n0.866 + 0.5im\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Sine/sin/#Methods","page":"sin","title":"Methods","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"With Number and Missing input:","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"methods(sin, (Any,), [Base, Base.Math, Base.MathConstants, Base.MPFR])","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"With Array like input:","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"methods(sin, (Any,), [LinearAlgebra])","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/#Examples","page":"sin","title":"Examples","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sin/#Int-and-Float","page":"sin","title":"Int and Float","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"julia> sin(0)\n0.0\n\njulia> sin(0.5*pi)\n1.0\n\njulia> sin(pi)\n0.0\n\njulia> pi\nπ = 3.1415926535897...\n\njulia> sin.([0 0.5*pi pi 1.5*pi 2*pi])\n1×5 Matrix{Float64}:\n 0.0  1.0  1.22465e-16  -1.0  -2.44929e-16","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"tip: dot-style function call\nf.(args) means eval args one by one.","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"big float, sin(pi/6) == sin(30°) == 1/2:","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"julia> sin(pi/6)\n0.49999999999999994\n\njulia> sin(pi/big\"6\")\n0.4999999999999999999999999999999999999999999999999999999999999999999999999999957","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"special float NaN, Inf:","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"julia> sin(NaN)\nNaN\n\njulia> sin(Inf)\nERROR: DomainError with Inf:\nsin(x) is only defined for finite x.\n[...]","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"plot","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"using UnicodePlots\nlineplot(-π, π, sin)","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/#Complex","page":"sin","title":"Complex","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"julia> sin(0+0im)\n0.0 + 0.0im","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"plot real part","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"using UnicodePlots\nsin_real(x, y) = real(sin(x + y*im))\nsurfaceplot(-2pi:0.01:2pi, -pi:0.01:pi, sin_real)","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/#Missing","page":"sin","title":"Missing","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"julia> sin(missing)\nmissing","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/#Nothing","page":"sin","title":"Nothing","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"julia> sin(nothing)\nERROR: MethodError: no method matching sin(::Nothing)\n[...]","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/#Matrix","page":"sin","title":"Matrix","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"# TODO\nBase.sin(AbstractMatrix)","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sin/","page":"sin","title":"sin","text":"julia> sin([1 2; 3 4])\n2×2 Matrix{Float64}:\n -0.465581  -0.148424\n -0.222637  -0.688218\n\njulia> sin.([1 2; 3 4])\n2×2 Matrix{Float64}:\n 0.841471   0.909297\n 0.14112   -0.756802\n\njulia> sin([1 2; 3 4]) == sin.([1 2; 3 4])\nfalse","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Trigonometry","page":"Trigonometry","title":"Trigonometry","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/#Sine","page":"Trigonometry","title":"Sine","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"sin\nsind\nsinh\nsinpi\nasin\nasind\nasinh","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Cosine","page":"Trigonometry","title":"Cosine","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"cos\ncosd\ncosh\ncospi\nacos\nacosd\nacosh","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Tangent","page":"Trigonometry","title":"Tangent","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"tan\ntand\ntanh\natan\natand\natanh\natan2\natan2d","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Cosecant","page":"Trigonometry","title":"Cosecant","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"csc\ncscd\ncsch\nacsc\nacscd\nacsch","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Secant","page":"Trigonometry","title":"Secant","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"sec\nsecd\nsech\nasec\nasecd\nasech","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Cotangent","page":"Trigonometry","title":"Cotangent","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"cot\ncotd\ncoth\nacot\nacotd\nacoth","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Hypotenuse","page":"Trigonometry","title":"Hypotenuse","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"hypot","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Conversions","page":"Trigonometry","title":"Conversions","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"rad2deg\ndeg2rad","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Others","page":"Trigonometry","title":"Others","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"<!– ref workaround –>","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/","page":"Trigonometry","title":"Trigonometry","text":"Base.sincos\nBase.sincospi\nBase.cis","category":"page"},{"location":"Base.Math/Trigonometry/Trigonometry/#Base.Math.sincos","page":"Trigonometry","title":"Base.Math.sincos","text":"sincos(x)\n\nSimultaneously compute the sine and cosine of x, where x is in radians, returning a tuple (sine, cosine).\n\nSee also cis, sincospi, sincosd.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Trigonometry/#Base.Math.sincospi","page":"Trigonometry","title":"Base.Math.sincospi","text":"sincospi(x)\n\nSimultaneously compute sinpi(x) and cospi(x) (the sine and cosine of π*x, where x is in radians), returning a tuple (sine, cosine).\n\ncompat: Julia 1.6\nThis function requires Julia 1.6 or later.\n\nSee also: cispi, sincosd, sinpi.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Trigonometry/#Base.cis","page":"Trigonometry","title":"Base.cis","text":"cis(x)\n\nMore efficient method for exp(im*x) by using Euler's formula: cos(x) + i sin(x) = exp(i x).\n\nSee also cispi, sincos, exp, angle.\n\nExamples\n\njulia> cis(π) ≈ -1\ntrue\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Sine/sinh/#sinh","page":"sinh","title":"sinh","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sinh/","page":"sinh","title":"sinh","text":"Base.sinh","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sinh/#Base.sinh","page":"sinh","title":"Base.sinh","text":"sinh(x)\n\nCompute hyperbolic sine of x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Array/zeros/#zeros","page":"zeros","title":"zeros","text":"","category":"section"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"","category":"page"},{"location":"Base.Array/zeros/#Methods","page":"zeros","title":"Methods","text":"","category":"section"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"methods(zeros)","category":"page"},{"location":"Base.Array/zeros/#Examples","page":"zeros","title":"Examples","text":"","category":"section"},{"location":"Base.Array/zeros/#Float64","page":"zeros","title":"Float64","text":"","category":"section"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"julia> zeros()\n0-dimensional Array{Float64, 0}:\n0.0","category":"page"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"Vector","category":"page"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"julia> zeros(1)\n1-element Vector{Float64}:\n 0.0\n\njulia> zeros(2)\n2-element Vector{Float64}:\n 0.0\n 0.0","category":"page"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"Array","category":"page"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"julia> zeros(1, 1)\n1×1 Matrix{Float64}:\n 0.0\n\njulia> zeros(1, 2)\n1×2 Matrix{Float64}:\n 0.0  0.0\n\njulia> zeros(2, 1)\n2×1 Matrix{Float64}:\n 0.0\n 0.0\n\njulia> zeros(2, 2)\n2×2 Matrix{Float64}:\n 0.0  0.0\n 0.0  0.0\n\njulia> zeros(2, 2, 1)\n2×2×1 Array{Float64, 3}:\n[:, :, 1] =\n 0.0  0.0\n 0.0  0.0\n\njulia> zeros(1, 1, 1, 1)\n1×1×1×1 Array{Float64, 4}:\n[:, :, 1, 1] =\n 0.0","category":"page"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"Tuple input:","category":"page"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"julia> zeros(1, 1, 1, 1) == zeros((1, 1, 1, 1))\ntrue","category":"page"},{"location":"Base.Array/zeros/#Other-Types","page":"zeros","title":"Other Types","text":"","category":"section"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"Int8","category":"page"},{"location":"Base.Array/zeros/","page":"zeros","title":"zeros","text":"julia> zeros(Int8)\n0-dimensional Array{Int8, 0}:\n0\n\njulia> zeros(Int8, 1)\n1-element Vector{Int8}:\n 0\n\njulia> zeros(Int8, 1, 1)\n1×1 Matrix{Int8}:\n 0\n\njulia> zeros(Int8, 2, 2)\n2×2 Matrix{Int8}:\n 0  0\n 0  0\n\njulia> zeros(Int8, 2, 2, 2) == zeros(Int8, (2, 2, 2))\ntrue","category":"page"},{"location":"Base.Math/Trigonometry/Cosine/#Cosine","page":"Cosine","title":"Cosine","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Cosine/","page":"Cosine","title":"Cosine","text":"Base.cos\nBase.cosd\nBase.cospi\nBase.cosh\nBase.acos\nBase.acosd\nBase.acosh","category":"page"},{"location":"Base.Math/Trigonometry/Cosine/#Base.cos","page":"Cosine","title":"Base.cos","text":"cos(x)\n\nCompute cosine of x, where x is in radians.\n\nSee also cosd, cospi, sincos, cis.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosine/#Base.Math.cosd","page":"Cosine","title":"Base.Math.cosd","text":"cosd(x)\n\nCompute cosine of x, where x is in degrees. If x is a matrix, x needs to be a square matrix.\n\ncompat: Julia 1.7\nMatrix arguments require Julia 1.7 or later.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosine/#Base.Math.cospi","page":"Cosine","title":"Base.Math.cospi","text":"cospi(x)\n\nCompute cos(pi x) more accurately than cos(pi*x), especially for large x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosine/#Base.cosh","page":"Cosine","title":"Base.cosh","text":"cosh(x)\n\nCompute hyperbolic cosine of x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosine/#Base.acos","page":"Cosine","title":"Base.acos","text":"acos(x)\n\nCompute the inverse cosine of x, where the output is in radians\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosine/#Base.Math.acosd","page":"Cosine","title":"Base.Math.acosd","text":"acosd(x)\n\nCompute the inverse cosine of x, where the output is in degrees. If x is a matrix, x needs to be a square matrix.\n\ncompat: Julia 1.7\nMatrix arguments require Julia 1.7 or later.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Cosine/#Base.acosh","page":"Cosine","title":"Base.acosh","text":"acosh(x)\n\nCompute the inverse hyperbolic cosine of x.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Arithmetic/Arithmetic/#Arithmetic-Operations","page":"Arithmetic Operations","title":"Arithmetic Operations","text":"","category":"section"},{"location":"Base.Math/Arithmetic/Arithmetic/#Basic-Arithmetic","page":"Arithmetic Operations","title":"Basic Arithmetic","text":"","category":"section"},{"location":"Base.Math/Arithmetic/Arithmetic/","page":"Arithmetic Operations","title":"Arithmetic Operations","text":"+\n-\n*\n/\n\\\n^","category":"page"},{"location":"Base.Math/Arithmetic/Arithmetic/#Modulo-Division-and-Rounding","page":"Arithmetic Operations","title":"Modulo Division and Rounding","text":"","category":"section"},{"location":"Base.Math/Arithmetic/Arithmetic/","page":"Arithmetic Operations","title":"Arithmetic Operations","text":"mod\nrem\nidivide\nceil\nfix\nfloor\nround","category":"page"},{"location":"Base.Math/Arithmetic/Arithmetic/#Relational-Operations","page":"Arithmetic Operations","title":"Relational Operations","text":"","category":"section"},{"location":"Base.Math/Arithmetic/Arithmetic/","page":"Arithmetic Operations","title":"Arithmetic Operations","text":"==\n>=\n>\n<=\n<\n~=\nisequal\nisequaln","category":"page"},{"location":"Base.Math/Arithmetic/Arithmetic/#Logical-(Boolean)-Operations","page":"Arithmetic Operations","title":"Logical (Boolean) Operations","text":"","category":"section"},{"location":"Base.Math/Arithmetic/Arithmetic/","page":"Arithmetic Operations","title":"Arithmetic Operations","text":"&\nShort-Circuit &&\n~\n|\nShort-Circuit ||\nxor\nall\nany\nfalse\nfind\nislogical\nlogical\ntrue","category":"page"},{"location":"Base.Math/Arithmetic/Arithmetic/#Bit-Wise-Operations","page":"Arithmetic Operations","title":"Bit-Wise Operations","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/asin/#asin","page":"asin","title":"asin","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/asin/","page":"asin","title":"asin","text":"Base.asin","category":"page"},{"location":"Base.Math/Trigonometry/Sine/asin/#Base.asin","page":"asin","title":"Base.asin","text":"asin(x)\n\nCompute the inverse sine of x, where the output is in radians.\n\nSee also asind for output in degrees.\n\nExamples\n\njulia> asin.((0, 1/2, 1))\n(0.0, 0.5235987755982989, 1.5707963267948966)\n\njulia> asind.((0, 1/2, 1))\n(0.0, 30.000000000000004, 90.0)\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Sine/asind/#asind","page":"asind","title":"asind","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/asind/","page":"asind","title":"asind","text":"Base.asind","category":"page"},{"location":"Base.Math/Trigonometry/Sine/asind/#Base.Math.asind","page":"asind","title":"Base.Math.asind","text":"asind(x)\n\nCompute the inverse sine of x, where the output is in degrees. If x is a matrix, x needs to be a square matrix.\n\ncompat: Julia 1.7\nMatrix arguments require Julia 1.7 or later.\n\n\n\n\n\n","category":"function"},{"location":"Base.Math/Trigonometry/Sine/sinpi/#sinpi","page":"sinpi","title":"sinpi","text":"","category":"section"},{"location":"Base.Math/Trigonometry/Sine/sinpi/","page":"sinpi","title":"sinpi","text":"Base.sinpi","category":"page"},{"location":"Base.Math/Trigonometry/Sine/sinpi/#Base.Math.sinpi","page":"sinpi","title":"Base.Math.sinpi","text":"sinpi(x)\n\nCompute sin(pi x) more accurately than sin(pi*x), especially for large x.\n\nSee also sind, cospi, sincospi.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = EndlessTesting","category":"page"},{"location":"#EndlessTesting","page":"Home","title":"EndlessTesting","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for EndlessTesting.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
