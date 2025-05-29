"""
All Sidebar Pages.

## ref
- https://documenter.juliadocs.org/stable/man/guide/#Pages-in-the-Sidebar
"""

all_pages = [
    "Home" => "index.md",

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
            "ElementaryMath/Arithmetic/Modulo-and-Round.md",
            "ElementaryMath/Arithmetic/Relational.md",
            "ElementaryMath/Arithmetic/Logical.md",
            "ElementaryMath/Arithmetic/BitWise.md",
            "ElementaryMath/Arithmetic/Checked.md",
        ],
        "Trigonometry" => Any[
            "Trigonometry" => "ElementaryMath/Trigonometry/Trigonometry.md",
            "Sine" => Any[
                "ElementaryMath/Trigonometry/Sine/sin.md",
                "ElementaryMath/Trigonometry/Sine/sind.md",
                "ElementaryMath/Trigonometry/Sine/sinpi.md",
                "ElementaryMath/Trigonometry/Sine/asin.md",
                "ElementaryMath/Trigonometry/Sine/asind.md",
                "ElementaryMath/Trigonometry/Sine/sinh.md",
                "ElementaryMath/Trigonometry/Sine/asinh.md",
                "ElementaryMath/Trigonometry/Sine/sinc.md",
            ],
            "SinCos" => Any[
                "ElementaryMath/Trigonometry/SinCos/sincos.md",
                "ElementaryMath/Trigonometry/SinCos/sincosd.md",
                "ElementaryMath/Trigonometry/SinCos/sincospi.md",
                "ElementaryMath/Trigonometry/SinCos/cis.md",
                "ElementaryMath/Trigonometry/SinCos/cispi.md",
            ],
            "Cosine" => Any[
                "ElementaryMath/Trigonometry/Cosine/cos.md",
                "ElementaryMath/Trigonometry/Cosine/cosd.md",
                "ElementaryMath/Trigonometry/Cosine/cospi.md",
                "ElementaryMath/Trigonometry/Cosine/acos.md",
                "ElementaryMath/Trigonometry/Cosine/acosd.md",
                "ElementaryMath/Trigonometry/Cosine/cosh.md",
                "ElementaryMath/Trigonometry/Cosine/acosh.md",
                "ElementaryMath/Trigonometry/Cosine/cosc.md",
            ],
            "Tangent" => Any[
                "ElementaryMath/Trigonometry/Tangent/tan.md",
                "ElementaryMath/Trigonometry/Tangent/tand.md",
                "ElementaryMath/Trigonometry/Tangent/tanpi.md",
                "ElementaryMath/Trigonometry/Tangent/atan.md",
                "ElementaryMath/Trigonometry/Tangent/atand.md",
                "ElementaryMath/Trigonometry/Tangent/tanh.md",
                "ElementaryMath/Trigonometry/Tangent/atanh.md",
            ],
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

        "ElementaryMath/Constants/Constants.md",
        "ElementaryMath/impl-notes.md",
        hide("ElementaryMath/index.md")
    ],

    "Packages" => Any[
        "Special Functions" => Any[
            "Pkg/SpecialFunctions/index.md",
            "Pkg/SpecialFunctions/functions.md",
        ],
    ],

    # Dev...
    "Base" => Any[
        "Base/Types.md",
        "Base/Numbers.md",
        "Base/Errors.md",
    ],
] # all_pages
