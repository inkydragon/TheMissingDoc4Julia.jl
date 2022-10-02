using EndlessTesting
using Documenter

DocMeta.setdocmeta!(EndlessTesting, :DocTestSetup, :(using EndlessTesting); recursive=true)

all_pages = [
    "Home" => "index.md",
    # Base.Math
    "Base.Math" => Any[
        "Trigonometry" => Any[
            "Sine" => Any[
                "Base.Math/Trigonometry/Sine.md",
                "Base.Math/Trigonometry/Sine/sin.md",
                "Base.Math/Trigonometry/Sine/sind.md",
                "Base.Math/Trigonometry/Sine/sinpi.md",
                "Base.Math/Trigonometry/Sine/sinh.md",
                "Base.Math/Trigonometry/Sine/asin.md",
                "Base.Math/Trigonometry/Sine/asind.md",
                "Base.Math/Trigonometry/Sine/asinh.md",
            ],
            "Cosine" => "Base.Math/Trigonometry/Cosine.md",
            "Tangent" => "Base.Math/Trigonometry/Tangent.md",
            "Cotangent" => "Base.Math/Trigonometry/Cotangent.md",
            "Secant" => "Base.Math/Trigonometry/Secant.md",
            "Cosecant" => "Base.Math/Trigonometry/Cosecant.md",
        ],        
    ],
] # all_pages


makedocs(;
    modules=[EndlessTesting],
    authors="woclass <git@wo-class.cn> and contributors",
    repo="https://github.com/inkydragon/EndlessTesting.jl/blob/{commit}{path}#{line}",
    sitename="EndlessTesting.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        edit_link="main",
        assets=String[],
    ),
    pages=all_pages,
)
