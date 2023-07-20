using Documenter
using MultiDocumenter

clonedir = mktempdir()

docs = [
    MultiDocumenter.MultiDocRef(upstream = joinpath(clonedir, "Home"),
                                       path = "optimalcontrol",
                                       name = "Home",
                                       giturl = "https://github.com/control-toolbox/OptimalControl.jl.git"),
    MultiDocumenter.DropdownNav(
        "Base and Utilities",
        [
            MultiDocumenter.MultiDocRef(
                upstream = joinpath(clonedir, "CTBase"),
                path = "ctbase",
                name = "CTBase",
                giturl = "https://github.com/control-toolbox/CTBase.jl.git",
            ),
            MultiDocumenter.MultiDocRef(
                upstream = joinpath(clonedir, "CTFlows"),
                path = "ctflows",
                name = "CTFlows",
                giturl = "https://github.com/control-toolbox/CTFlows.jl.git",
            ),
            MultiDocumenter.MultiDocRef(
                upstream = joinpath(clonedir, "CTProblems"),
                path = "ctproblems",
                name = "CTProblems",
                giturl = "https://github.com/control-toolbox/CTProblems.jl.git",
            ),
        ]),
    MultiDocumenter.DropdownNav(
        "Solvers",
        [
            MultiDocumenter.MultiDocRef(
                upstream = joinpath(clonedir, "CTDirect"),
                path = "ctdirect",
                name = "CTDirect",
                giturl = "https://github.com/control-toolbox/CTDirect.jl.git",
            ),
            MultiDocumenter.MultiDocRef(
                upstream = joinpath(clonedir, "CTDirectShooting"),
                path = "ctdirectshooting",
                name = "CTDirectShooting",
                giturl = "https://github.com/control-toolbox/CTDirectShooting.jl.git",
            ),
        ]),
]

outpath = mktempdir()

MultiDocumenter.make(
    outpath,
    docs;
    assets_dir = "src/assets",
    search_engine = MultiDocumenter.SearchConfig(index_versions = ["stable",], engine = MultiDocumenter.FlexSearch),
    brand_image = MultiDocumenter.BrandImage("https://control-toolbox.org/",joinpath("assets","ct-crop.svg")),
    rootpath = "/CTDocs.jl/",
)

gitroot = normpath(joinpath(@__DIR__, ".."))
run(`ls`)
run(`git pull`)
outbranch = "gh-pages"
has_outbranch = true
if !success(`git checkout $outbranch`)
    has_outbranch = false
    if !success(`git switch --orphan $outbranch`)
        @error "Cannot create new orphaned branch $outbranch."
        exit(1)
    end
end
for file in readdir(gitroot; join = true)
    endswith(file, ".git") && continue
    rm(file; force = true, recursive = true)
end
for file in readdir(outpath)
    cp(joinpath(outpath, file), joinpath(gitroot, file))
end
run(`git add .`)
if success(`git commit -m 'Aggregate documentation'`)
    @info "Pushing updated documentation."
    if has_outbranch
        run(`git push`)
    else
        run(`git push -u origin $outbranch`)
    end
    run(`git checkout main`)
else
    @info "No changes to aggregated documentation."
end
