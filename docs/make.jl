using EndlessTesting
using Documenter

DocMeta.setdocmeta!(EndlessTesting, :DocTestSetup, :(using EndlessTesting); recursive=true)

all_pages = [
    "Home" => "index.md",
    "Base.Math" => Any[
        "Arithmetic" => "Base.Math/Arithmetic/Arithmetic.md",
        "Exponents and Logarithms" => "Base.Math/Exp-and-Log/exp-and-log.md",
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
    ],
] # all_pages


makedocs(;
    modules=[Base, EndlessTesting],
    authors="woclass <git@wo-class.cn> and contributors",
    repo="https://github.com/inkydragon/EndlessTesting.jl/blob/{commit}{path}#{line}",
    sitename="EndlessTesting.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        repolink="https://inkydragon.github.io/EndlessTesting.jl",
        canonical="https://inkydragon.github.io/EndlessTesting.jl",
        edit_link="main",
        ansicolor=true,
    ),
    warnonly=true,
    doctest=false,
    checkdocs=:none,
    pages=all_pages,
)

deploydocs(;
    repo="github.com/inkydragon/EndlessTesting.jl",
    devbranch="main",
)
