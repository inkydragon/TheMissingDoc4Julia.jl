"""
All Sidebar Pages.

## ref
- https://documenter.juliadocs.org/stable/man/guide/#Pages-in-the-Sidebar
"""

all_pages = [
    "Home" => Any[
        "index.md",
        "dev/index.md",
    ],

    "GettingStarted.md",
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
        hide("Base.Math/index.md")
    ],
    "Graphics.md",

    "Stdlib" => Any[
        "stdlib/RandomNumbers.md",
        "stdlib/LinearAlgebra.md",
        "stdlib/SparseArrays.md",
    ],
    hide("Julia Packages" => "Packages/FindPackages.md", [
        "Packages/Interpolation.md",
        "Packages/Optimization.md",
        "Packages/Integration-and-Differential.md",
        "Packages/FourierTransform-and-Filtering.md",
        "Packages/Graph-and-Network.md",
        "Packages/Geometry.md",
        "Packages/Quantum.md",
        # Graphics
        "Packages/Plotting.md",
        "Packages/ImagesProcessing.md",
    ]),

    # TODO: maybe move those to other project
    "CheatSheet" => Any[
        "SciPy" => "cheatsheet/scipy.md",
        "Matlab" => "cheatsheet/matlab.md",
    ],
] # all_pages
