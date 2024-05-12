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
- [Error Functions, Dawson’s and Fresnel Integrals - DLMF](https://dlmf.nist.gov/7)


## Airy Functions
- [Airy and Related Functions - DLMF](https://dlmf.nist.gov/9)


## Bessel Functions
- [Bessel Functions - DLMF](https://dlmf.nist.gov/10)


## Struve Functions
- [Struve and Related Functions - DLMF](https://dlmf.nist.gov/11)


## Parabolic Cylinder Functions
- [Parabolic Cylinder Functions - DLMF](https://dlmf.nist.gov/12)


## Confluent Hypergeometric Functions
- [Confluent Hypergeometric Functions - DLMF](https://dlmf.nist.gov/13)


## Legendre Functions
- [Legendre and Related Functions - DLMF](https://dlmf.nist.gov/14)


## Hypergeometric Function
- [Hypergeometric Function - DLMF](https://dlmf.nist.gov/15)


## Elliptic Integrals
- [Elliptic Integrals - DLMF](https://dlmf.nist.gov/19)


## Zeta Functions
- [Zeta and Related Functions - DLMF](https://dlmf.nist.gov/25)


## Mathieu Functions
- [Mathieu Functions and Hill’s Equation - DLMF](https://dlmf.nist.gov/28)


## Spheroidal Wave Functions
- [Spheroidal Wave Functions - DLMF](https://dlmf.nist.gov/30)


## Other Special Functions
- [Lambert W-Function - DLMF](https://dlmf.nist.gov/4.13)
