using TheMissingDoc4Julia
using Documenter

DocMeta.setdocmeta!(TheMissingDoc4Julia, :DocTestSetup, :(using TheMissingDoc4Julia); recursive=true)

# import all_pages
include("sidebar.jl")

makedocs(;
    modules=[Base, TheMissingDoc4Julia],
    authors="Chengyu HAN <git@wo-class.cn> and contributors",
    repo="https://github.com/inkydragon/TheMissingDoc4Julia.jl/blob/{commit}{path}#{line}",
    sitename="The Missing Doc 4 Julia",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        repolink="https://inkydragon.github.io/TheMissingDoc4Julia.jl",
        canonical="https://inkydragon.github.io/TheMissingDoc4Julia.jl",
        edit_link="main",
        ansicolor=true,
    ),
    warnonly=true,
    doctest=false,
    checkdocs=:none,
    pages=all_pages,
)

deploydocs(;
    repo="github.com/inkydragon/TheMissingDoc4Julia.jl",
    devbranch="main",
)
