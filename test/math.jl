# Test Math functions ULP
using Base.MPFR
using UnicodePlots


function sin!(y::BigFloat)
    ccall((:mpfr_sin, :libmpfr), Int32, 
        (Ref{BigFloat}, Ref{BigFloat}, MPFR.MPFRRoundingMode), 
         y, y, MPFR.ROUNDING_MODE[])
end

function subnormalize!(y::BigFloat, inex::Int32)
    ccall((:mpfr_subnormalize, :libmpfr), Int32, 
        (Ref{BigFloat}, Int32, MPFR.MPFRRoundingMode), 
         y, inex, MPFR.ROUNDING_MODE[])
end

function ToFloat64(y::BigFloat)
    ccall((:mpfr_get_d, :libmpfr), Float64, 
        (Ref{BigFloat}, MPFR.MPFRRoundingMode), 
         y, MPFR.MPFRRoundNearest)
end

function ref_sin(y::Float64)
    setprecision(BigFloat, 53) do 
        Y = BigFloat(y)
        inex = sin!(Y)
        inex = subnormalize!(Y, inex)

        Y
    end
end

function sin_ulp(x::Float64)
    y = sin(x)
    Y = sin(BigFloat(x))
    Yf64 = Float64(Y)
    ulps = eps(Yf64)
    u = Float64(Y - BigFloat(y)) / ulps
    u
end

function sin_uplot(max_iter=10^4)
    x = rand(0.0:eps():2pi, (max_iter,))
    u = sin_ulp.(x)
    
    # histogram(u)
    (x, u)
end

# scatterplot(x, u)
