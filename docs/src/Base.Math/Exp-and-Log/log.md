# Log

```@docs
Base.log
```

## Complex Plane

> - WikiPedia: https://en.wikipedia.org/wiki/Complex_logarithm#/media/File:Complex_log_domain.svg
> - Sage: https://doc.sagemath.org/html/en/reference/plotting/sage/plot/complex_plot.html#codecell6

```@repl
using UnicodePlots

X = repeat(collect(-20:20)', outer=(41, 1));
Y = repeat(collect(20:-1:-20), outer=(1,41));
grid = complex.(X, Y) ./ 10;
Z = log.(grid);
zangle = angle.(Z);
heatmap(zangle; xfact=0.1, yfact=0.1, xoffset=-2, yoffset=-2)
```


## index
```@docs
Base.log2
Base.log10
Base.log1p
```
