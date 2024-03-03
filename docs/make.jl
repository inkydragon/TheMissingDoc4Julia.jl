using TheMissingDoc4Julia
using Documenter

DocMeta.setdocmeta!(TheMissingDoc4Julia, :DocTestSetup, :(using TheMissingDoc4Julia); recursive=true)

all_pages = [
    "Home" => "index.md",
    "Mathematics" => Any[
        "Mathematics" => "Mathematics.md",
        "Arithmetic" => "Base.Math/Arithmetic/Arithmetic.md",
        "Trigonometry" => Any[
            "Trigonometry" => "Base.Math/Trigonometry/Trigonometry.md",
            "Sine" => Any[
                "Base.Math/Trigonometry/Sine/sin.md",
                "Base.Math/Trigonometry/Sine/sind.md",
                "Base.Math/Trigonometry/Sine/sinpi.md",
                "Base.Math/Trigonometry/Sine/sinh.md",
                "Base.Math/Trigonometry/Sine/sincos.md",
                "Base.Math/Trigonometry/Sine/sincosd.md",
                "Base.Math/Trigonometry/Sine/sincospi.md",
                "Base.Math/Trigonometry/Sine/asin.md",
                "Base.Math/Trigonometry/Sine/asind.md",
                "Base.Math/Trigonometry/Sine/asinh.md",
            ],
            "Cosine" => "Base.Math/Trigonometry/Cosine.md",
            "Tangent" => "Base.Math/Trigonometry/Tangent.md",
            "Cotangent" => "Base.Math/Trigonometry/Cotangent.md",
            "Secant" => "Base.Math/Trigonometry/Secant.md",
            "Cosecant" => "Base.Math/Trigonometry/Cosecant.md",
            "Hypotenuse" => "Base.Math/Trigonometry/Hypotenuse.md",
            "Conversions" => "Base.Math/Trigonometry/Conversions.md",
        ],
        "Exponents and Logarithms" => Any[
            "Base.Math/Exp-and-Log/exp-and-log.md",
            "Base.Math/Exp-and-Log/log.md",
        ],
        "Complex Numbers" => "Base.Math/Complex/Complex.md",
    ],
    "Stdlib" => Any[
        "stdlib/RandomNumbers.md",
        "stdlib/LinearAlgebra.md",
        "stdlib/SparseArrays.md",
    ],
    "Julia Packages" => Any[
        "Packages/FindPackages.md",
        "Packages/Interpolation.md",
        "Packages/Optimization.md",
        "Packages/Integration-and-Differential.md",
        "Packages/FourierTransform-and-Filtering.md",
        "Packages/Graph-and-Network.md",
        "Packages/Geometry.md",
        "Packages/Quantum.md",
    ],
    # TODO: maybe move those to other project
    "CheatSheet" => Any[
        "SciPy" => "cheatsheet/scipy.md",
        "Matlab" => "cheatsheet/matlab.md",
    ],
] # all_pages


makedocs(;
    modules=[Base, TheMissingDoc4Julia],
    authors="Chengyu HAN <git@wo-class.cn> and contributors",
    repo="https://github.com/inkydragon/TheMissingDoc4Julia.jl/blob/{commit}{path}#{line}",
    sitename="The Missing Doc 4 Julia",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        repolink="https://inkydragon.github.io/TheMissingDoc4Julia.jl",
        canonical="https://inkydragon.github.io/TheMissingDoc4Julia.jl",
        edit_link="main",
        ansicolor=true,
    ),
    warnonly=true,
    doctest=false,
    checkdocs=:none,
    pages=all_pages,
)

deploydocs(;
    repo="github.com/inkydragon/TheMissingDoc4Julia.jl",
    devbranch="main",
)
