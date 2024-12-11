# Numbers

```julia
using AbstractTrees
AbstractTrees.children(t::Type) =
    filter(t->isdefined(Base, Symbol(t)) || isdefined(Core, Symbol(t)), subtypes(t))
print_tree(Number)
```
```txt
Number
├─ Complex
└─ Real
   ├─ AbstractFloat
   │  ├─ BigFloat
   │  ├─ Float16
   │  ├─ Float32
   │  └─ Float64
   ├─ AbstractIrrational
   │  └─ Irrational
   ├─ Integer
   │  ├─ Bool
   │  ├─ Signed
   │  │  ├─ BigInt
   │  │  ├─ Int128
   │  │  ├─ Int16
   │  │  ├─ Int32
   │  │  ├─ Int64
   │  │  └─ Int8
   │  └─ Unsigned
   │     ├─ UInt128
   │     ├─ UInt16
   │     ├─ UInt32
   │     ├─ UInt64
   │     └─ UInt8
   └─ Rational
```

```@docs
Core.Number
Core.Real
```

## Integer types
```@docs
Core.Integer
Core.Bool
Core.Unsigned
Core.UInt8
Core.UInt16
Core.UInt32
Core.UInt64
Core.UInt128
Core.Signed
Core.Int8
Core.Int16
Core.Int32
Core.Int64
Core.Int128
Base.BigInt
```

## Floating-point types
```@docs
Core.AbstractFloat
Core.Float16
Core.Float32
Core.Float64
Base.BigFloat
```

## Irrational
```@docs
Base.AbstractIrrational
Base.Irrational
```

## Rational
```@docs
Base.Rational
```

## Complex types
```@docs
Base.Complex
Base.ComplexF16
Base.ComplexF32
Base.ComplexF64
```
