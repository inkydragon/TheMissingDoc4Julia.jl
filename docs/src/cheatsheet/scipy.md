# SciPy => Julia

- Github: [scipy/scipy](https://github.com/scipy/scipy)
- Docs: [docs.scipy.org](https://docs.scipy.org/doc/scipy/reference/)



```
scipy.cluster
scipy.constants
scipy.datasets
scipy.fft
scipy.fftpack
scipy.integrate
scipy.interpolate
scipy.io
scipy.linalg
scipy.misc
scipy.ndimage
scipy.odr
scipy.optimize
scipy.signal
scipy.sparse
scipy.spatial
scipy.special
scipy.stats
```

## Fortran Code in SciPy
> META: FORTRAN Code inventory [#18566](https://github.com/scipy/scipy/issues/18566)

* [ ]  `scipy.integrate`:
    Not in Julia Core

* [ ]  `scipy.interpolate`
    Not in Julia Core

* [ ]  `scipy.linalg`
  * [x]  `lu.f`: Replaced in [#18358](https://github.com/scipy/scipy/pull/18358)
  * [x]   `det.f`: Replaced in [#18225](https://github.com/scipy/scipy/pull/18225)
  * [ ]  `id_dist`: Convert: Moderate (replacement in progress) [#18367](https://github.com/scipy/scipy/issues/18367)
  * [ ]  `blas`: Convert: Very Hard (Depends on BLAS/LAPACK lib) A lot of historical wrapper inconsistencies
  * [ ]  `lapack`: Convert : Very Hard (Depends on BLAS/LAPACK lib) A lot of historical wrapper inconsistencies

* [ ]  `scipy.odr`
    Not in Julia Core

* [ ]  `scipy.optimize`
    Not in Julia Core

* [ ]  `scipy.sparse.linalg`
  * [ ]  ARPACK Convert : Hard
  * [x]  `iterative`: Replaced in [#18488](https://github.com/scipy/scipy/pull/18488)
  * [ ]  PROPACK : Convert : Hard

* [ ]  `scipy.special`
  * [x]  `AMOS`: Replaced in [#19587](https://github.com/scipy/scipy/pull/19587)
  * [x]  `cdflib`: Replaced in  [#19560](https://github.com/scipy/scipy/pull/19560)
  * [ ]  `specfun`: Replaced in [#19824](https://github.com/scipy/scipy/pull/19824)

* [x]  `scipy.stats`
  * [x]  `statlib`: Replaced in [#18679](https://github.com/scipy/scipy/pull/18679)
  * [ ]  `mvndst`: Already implemented in [#17410](https://github.com/scipy/scipy/pull/17410) but not public yet



## scipy.special

### Hypergeometric functions
> Need: [JuliaMath/HypergeometricFunctions.jl](https://github.com/JuliaMath/HypergeometricFunctions.jl)

- [`hyp0f1`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.hyp0f1.html#scipy.special.hyp0f1):
    [`HypergeometricFunctions.pFq`](https://juliamath.github.io/HypergeometricFunctions.jl/stable/)
- [`scipy.special.hyp1f1`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.hyp1f1.html#scipy.special.hyp1f1):
    [`HypergeometricFunctions._₁F₁`](https://juliamath.github.io/HypergeometricFunctions.jl/stable/#HypergeometricFunctions._%E2%82%81F%E2%82%81)
- [`scipy.special.hyp2f1`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.hyp2f1.html#scipy.special.hyp2f1):
    [`HypergeometricFunctions._₂F₁`](https://juliamath.github.io/HypergeometricFunctions.jl/stable/#HypergeometricFunctions._%E2%82%82F%E2%82%81)
- [`scipy.special.hyperu`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.hyperu.html#scipy.special.hyperu):
    [`HypergeometricFunctions.U`](https://juliamath.github.io/HypergeometricFunctions.jl/stable/#HypergeometricFunctions.U)

### Parabolic cylinder functions
> Related issue: 
> - [Add parabolic cylinder function - JuliaMath/SpecialFunctions.jl](https://github.com/JuliaMath/SpecialFunctions.jl/issues/417)
> - #TODO: [[pr#19824] Rewrite specfun F77 code in C - scipy/scipy](https://github.com/scipy/scipy/pull/19824)

- [`pbdv`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.pbdv.html#scipy.special.pbdv):
    missing
- [`pbvv`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.pbvv.html#scipy.special.pbvv):
    missing
- [`pbwa`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.pbwa.html#scipy.special.pbwa):
    missing
- `pbdv_seq`, `pbvv_seq`, `pbdn_seq`: missing

### Mathieu and related functions
> - May using: [BBN-Q/MathieuFunctions.jl](https://github.com/BBN-Q/MathieuFunctions.jl)
> - #TODO: [[pr#19824] Rewrite specfun F77 code in C - scipy/scipy](https://github.com/scipy/scipy/pull/19824)

- `mathieu_a`, `mathieu_b`: missing
- `mathieu_cem`, `mathieu_sem`: missing

## Kelvin functions
- `kelvin`, `kelvin_zeros`: missing
