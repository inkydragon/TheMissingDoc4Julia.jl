using EndlessTesting
using Documenter

DocMeta.setdocmeta!(EndlessTesting, :DocTestSetup, :(using EndlessTesting); recursive=true)

makedocs(;
    modules=[EndlessTesting],
    authors="woclass <git@wo-class.cn> and contributors",
    repo="https://github.com/inkydragon/EndlessTesting.jl/blob/{commit}{path}#{line}",
    sitename="EndlessTesting.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)
