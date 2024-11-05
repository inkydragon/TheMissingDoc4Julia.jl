# Function Index



See Also: [Functions List - SpecialFunctions.jl](https://specialfunctions.juliamath.org/stable/functions_overview/)

- By default, all functions are provided by `SpecialFunctions.jl`.
- ❌: means not implemented


## Gamma Functions
- [Gamma Function - DLMF](https://dlmf.nist.gov/5)
- [Incomplete Gamma and Related Functions - DLMF](https://dlmf.nist.gov/8)

| Function | Description |
|:-------- |:----------- |
| `gamma(z)`        | gamma function |
| `loggamma(x)`     | `log(gamma(x))` |
| `logabsgamma(x)`  | `log(abs(gamma(x)))` |
| `digamma(x)`      | derivative of `loggamma` |
| `trigamma(x)`     | second derivative of `loggamma` |
| `polygamma(m,x)`  | (m+1)-th derivative of the `loggamma` |
| `gamma(a,z)`          | incomplete gamma function |
| `loggamma(a,z)`       | `log(gamma(a,x))` |
| `gamma_inc(a,x)`      | incomplete gamma function |
| `gamma_inc_inv(a,p,q)` | inverse of the incomplete gamma function |

### Beta Functions
| Function | Description |
|:-------- |:----------- |
| `beta(x,y)`           | beta function |
| `logbeta(x,y)`        | `log(beta(x,y))` |
| `logabsbeta(x,y)`     | `log(abs(beta(x,y)))` |
| `beta_inc(a,b,x,y)`   | incomplete beta function |
| `beta_inc_inv(a,b,p,q)` | inverse of the incomplete beta function |


## Exponential and Trigonometric Integrals
- [Exponential, Logarithmic, Sine, and Cosine Integrals - DLMF](https://dlmf.nist.gov/6)

| Function | Description |
|:-------- |:----------- |
| `expint(ν, z)`    | exponential integral  ``\operatorname{E}_\nu(z)`` |
| `expinti(x)`      | exponential integral  ``\operatorname{Ei}(x)`` |
| `expintx(x)`      | scaled exponential integral  ``e^z \operatorname{E}_\nu(z)`` |
| `sinint(x)`   | sine integral  ``\operatorname{Si}(x)`` |
| `cosint(x)`   | cosine integral  ``\operatorname{Ci}(x)`` |
| `sinhint(x)`  | ❌ hyperbolic sine integral  ``\operatorname{Shi}(x)`` |
| `coshint(x)`  | ❌ hyperbolic cosine integral  ``\operatorname{Chi}(x)`` |


## Error Functions, Dawson’s and Fresnel Integrals
> [Error Functions, Dawson’s and Fresnel Integrals - DLMF](https://dlmf.nist.gov/7)

| Function      | Description             |
|:------------- |:----------------------- |
| `erf(x)`      | error function at ``x`` |
| `erf(x,y)`    | accurate version of ``\operatorname{erf}(y) - \operatorname{erf}(x)`` |
| `erfc(x)`     | complementary error function, i.e. the accurate version of ``1-\operatorname{erf}(x)`` for large ``x`` |
| `erfcinv(x)`  | inverse function to `erfc()` |
| `erfcx(x)`    | scaled complementary error function, i.e. accurate ``e^{x^2} \operatorname{erfc}(x)`` for large ``x`` |
| `logerfc(x)`  | log of the complementary error function, i.e. accurate ``\operatorname{ln}(\operatorname{erfc}(x))`` for large ``x`` |
| `logerfcx(x)` | log of the scaled complementary error function, i.e. accurate ``\operatorname{ln}(\operatorname{erfcx}(x))`` for large negative ``x`` |
| `erfi(x)`     | imaginary error function defined as ``-i \operatorname{erf}(ix)`` |
| `erfinv(x)`   | inverse function to `erf()` |
| `dawson(x)`   | scaled imaginary error function, a.k.a. Dawson function, i.e. accurate ``\frac{\sqrt{\pi}}{2} e^{-x^2} \operatorname{erfi}(x)`` for large ``x`` |
| `faddeeva(x)` | Faddeeva function, equivalent to ``\operatorname{erfcx}(-ix)`` |


## Airy Functions
> [Airy and Related Functions - DLMF](https://dlmf.nist.gov/9)

| Function          | Description                                   |
|:----------------- |:--------------------------------------------- |
| `airyai(z)`       | Airy Ai function at `z`                       |
| `airyaiprime(z)`  | derivative of the Airy Ai function at `z`     |
| `airybi(z)`       | Airy Bi function at `z`                       |
| `airybiprime(z)`  | derivative of the Airy Bi function at `z`     |
| `airyaix(z)`      | scaled Airy Ai function and derivative at `z` |
| `airyaiprimex(z)` | scaled Airy Ai function and derivative at `z` |
| `airybix(z)`      | scaled Airy Ai function and derivative at `z` |
| `airybiprimex(z)` | scaled Airy Ai function and derivative at `z` |


## Bessel Functions
- [Bessel Functions - DLMF](https://dlmf.nist.gov/10)


## Struve Functions
- [Struve and Related Functions - DLMF](https://dlmf.nist.gov/11)


## Parabolic Cylinder Functions
- [Parabolic Cylinder Functions - DLMF](https://dlmf.nist.gov/12)


## Confluent Hypergeometric Functions
> [Confluent Hypergeometric Functions - DLMF](https://dlmf.nist.gov/13)

- [MartinMikkelsen/FewSpecialFunctions.jl](https://github.com/MartinMikkelsen/FewSpecialFunctions.jl)  
    Few special functions in Julia.
    Includes Clausen function, Coulomb wave functions, Debye function,
    Fresnel functions, Struve function, Hypergeometric functions,
    *Confluent hypergeometric functions*, Fermi-Dirac


## Legendre Functions
> [Legendre and Related Functions - DLMF](https://dlmf.nist.gov/14)

- [JuliaSpace/SatelliteToolboxLegendre.jl](https://github.com/JuliaSpace/SatelliteToolboxLegendre.jl)  
    Methods to compute Legendre associated functions and their derivatives.
- [jmert/AssociatedLegendrePolynomials.jl](https://github.com/jmert/AssociatedLegendrePolynomials.jl)  
    A library for calculating the Associated Legendre polynomials


## Hypergeometric Function
> [Hypergeometric Function - DLMF](https://dlmf.nist.gov/15)

- [JuliaMath/HypergeometricFunctions.jl](https://github.com/JuliaMath/HypergeometricFunctions.jl)  
    A Julia package for calculating hypergeometric functions
- [MartinMikkelsen/FewSpecialFunctions.jl](https://github.com/MartinMikkelsen/FewSpecialFunctions.jl)  
    Few special functions in Julia.
    Includes Clausen function, Coulomb wave functions, Debye function,
    Fresnel functions, Struve function, Hypergeometric functions,
    Confluent hypergeometric functions, Fermi-Dirac


## Elliptic Integrals
> [Elliptic Integrals - DLMF](https://dlmf.nist.gov/19)

| Function    | Description                                     |
|:----------- |:----------------------------------------------- |
| `ellipk(m)` | complete elliptic integral of 1st kind ``K(m)`` |
| `ellipe(m)` | complete elliptic integral of 2nd kind ``E(m)`` |


## Zeta Functions
> [Zeta and Related Functions - DLMF](https://dlmf.nist.gov/25)

| Function  | Description                   |
|:--------- |:----------------------------- |
| `eta(x)`  | Dirichlet eta function at `x` |
| `zeta(x)` | Riemann zeta function at `x`  |


## Mathieu Functions
> [Mathieu Functions and Hill’s Equation - DLMF](https://dlmf.nist.gov/28)

- [BBN-Q/MathieuFunctions.jl](https://github.com/BBN-Q/MathieuFunctions.jl)  
    Julia package for Mathieu Functions
- [Lightup1/MathieuF.jl](https://github.com/Lightup1/MathieuF.jl)  
    Julia package for Mathieu Functions with function forms similar to
    Mathieu related functions in Mathematica.
- [jebej/Mathieu.jl](https://github.com/jebej/Mathieu.jl)
    Package for computing Mathieu functions and characteristic values


## Spheroidal Wave Functions
- [Spheroidal Wave Functions - DLMF](https://dlmf.nist.gov/30)

missing

## Other Special Functions
> [Lambert W-Function - DLMF](https://dlmf.nist.gov/4.13)

- [JuliaMath/LambertW.jl](https://github.com/JuliaMath/LambertW.jl)
