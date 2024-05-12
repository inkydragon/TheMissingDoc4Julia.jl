"""
All Sidebar Pages.

## ref
- https://documenter.juliadocs.org/stable/man/guide/#Pages-in-the-Sidebar
"""

all_pages = [
    "Home" => "index.md",

    "GettingStarted.md",
    "Mathematics" => Any[
        "Mathematics" => "Mathematics.md",
        "Arithmetic" => Any[
            "ElementaryMath/Arithmetic/Arithmetic.md",
            "ElementaryMath/Arithmetic/Addition/Addition.md",
            "ElementaryMath/Arithmetic/Subtraction/Subtraction.md",
            "ElementaryMath/Arithmetic/Multiplication/Multiplication.md",
            "ElementaryMath/Arithmetic/Division/Division.md",
            "ElementaryMath/Arithmetic/Powers.md",
            "ElementaryMath/Arithmetic/Transpose.md",
            "ElementaryMath/Arithmetic/Checked.md",
        ],
        "Trigonometry" => Any[
            "Trigonometry" => "ElementaryMath/Trigonometry/Trigonometry.md",
            "Sine" => Any[
                "ElementaryMath/Trigonometry/Sine/sin.md",
                "ElementaryMath/Trigonometry/Sine/sind.md",
                "ElementaryMath/Trigonometry/Sine/sinpi.md",
                "ElementaryMath/Trigonometry/Sine/sinh.md",
                "ElementaryMath/Trigonometry/Sine/sincos.md",
                "ElementaryMath/Trigonometry/Sine/sincosd.md",
                "ElementaryMath/Trigonometry/Sine/sincospi.md",
                "ElementaryMath/Trigonometry/Sine/asin.md",
                "ElementaryMath/Trigonometry/Sine/asind.md",
                "ElementaryMath/Trigonometry/Sine/asinh.md",
            ],
            "Cosine" => "ElementaryMath/Trigonometry/Cosine.md",
            "Tangent" => "ElementaryMath/Trigonometry/Tangent.md",
            "Cotangent" => "ElementaryMath/Trigonometry/Cotangent.md",
            "Secant" => "ElementaryMath/Trigonometry/Secant.md",
            "Cosecant" => "ElementaryMath/Trigonometry/Cosecant.md",
            "Hypotenuse" => "ElementaryMath/Trigonometry/Hypotenuse.md",
            "Conversions" => "ElementaryMath/Trigonometry/Conversions.md",
        ],
        "Exponents and Logarithms" => Any[
            "ElementaryMath/Exp-and-Log/exp-and-log.md",
            "ElementaryMath/Exp-and-Log/Exponents.md",
            "ElementaryMath/Exp-and-Log/Power.md",
            "ElementaryMath/Exp-and-Log/Root.md",
            "Logarithms" => Any[
                "ElementaryMath/Exp-and-Log/Logarithms.md",
                "ElementaryMath/Exp-and-Log/log.md",
            ],
        ],
        "Complex Numbers" => "ElementaryMath/Complex/Complex.md",
        "ElementaryMath/DiscreteMath/DiscreteMath.md",
        "ElementaryMath/Polynomials/Polynomials.md",
        "SpecialFunctions" => Any[
            "ElementaryMath/SpecialFunctions/index.md",
            "ElementaryMath/SpecialFunctions/function-index.md",
        ],
        "ElementaryMath/Constants/Constants.md",
        hide("ElementaryMath/index.md")
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
        # Others
        "Packages/SpecialFunction.md",
    ]),

    "Dev Memo" => Any[
        "dev/index.md",
        "dev/ideas.md",

        # TODO: maybe move those to other project
        "CheatSheet" => Any[
            "SciPy" => "cheatsheet/scipy.md",
            "Matlab" => "cheatsheet/matlab.md",
        ],
    ],
] # all_pages
