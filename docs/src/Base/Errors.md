# Errors

```@docs
# filter(t->isdefined(Core, Symbol(t)), subtypes(Exception))
Core.ArgumentError
Core.AssertionError
Core.BoundsError
# Core.ConcurrencyViolationError
Core.DivideError
Core.DomainError
Core.ErrorException
Core.InexactError
Core.InterruptException
Core.MethodError
Core.OutOfMemoryError
Core.OverflowError
Core.ReadOnlyMemoryError
# Core.SegmentationFault
Core.StackOverflowError
Core.TypeError
Core.UndefKeywordError
Core.UndefRefError
Core.UndefVarError

# filter(t->!isdefined(Core, Symbol(t))&&isdefined(Base, Symbol(t)), subtypes(Exception))
# Base.CanonicalIndexError
# Base.CapturedException
Base.CompositeException
Base.DimensionMismatch
Base.EOFError
# Base.InvalidStateException
Base.KeyError
Base.MissingException
Base.ProcessFailedException
Base.StringIndexError
Base.SystemError
Base.TaskFailedException
```
