var documenterSearchIndex = {"docs":
[{"location":"api.html","page":"API","title":"API","text":"CurrentModule = CTFlows","category":"page"},{"location":"api.html","page":"API","title":"API","text":"Pages = [\"api.md\"]","category":"page"},{"location":"api.html#API","page":"API","title":"API","text":"","category":"section"},{"location":"api.html","page":"API","title":"API","text":"This page is a dump of all the docstrings found in the code. ","category":"page"},{"location":"api.html","page":"API","title":"API","text":"Modules = [CTFlows]\nOrder = [:module, :type, :function, :macro]","category":"page"},{"location":"api.html#CTBase.OptimalControlSolution-Tuple{CTFlows.OptimalControlFlowSolution}","page":"API","title":"CTBase.OptimalControlSolution","text":"OptimalControlSolution(\n    ocfs::CTFlows.OptimalControlFlowSolution\n) -> CTBase.OptimalControlSolution\n\n\nConstruct an OptimalControlSolution from an OptimalControlFlowSolution.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.OptimalControlFlowSolution","page":"API","title":"CTFlows.OptimalControlFlowSolution","text":"struct OptimalControlFlowSolution\n\nType that represents a solution to an optimal control flow.\n\nFields\n\node_sol::Any\nfeedback_control::CTBase.ControlFunction\ncontrol_dimension::Integer\ncontrol_names::Vector{String}\nstate_dimension::Integer\nstate_names::Vector{String}\ntime_name::String\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTFlows.Flow","page":"API","title":"CTFlows.Flow","text":"Flow(f::Function, description...; kwargs_Flow...)\n\nTBW\n\n\n\n\n\n","category":"function"},{"location":"api.html#CTFlows.Flow-Union{Tuple{dimension_usage}, Tuple{time_dependence}, Tuple{CTBase.OptimalControlModel{time_dependence, dimension_usage}, Function, Function, Function}} where {time_dependence, dimension_usage}","page":"API","title":"CTFlows.Flow","text":"Flow(\n    ocp::CTBase.OptimalControlModel{time_dependence, dimension_usage},\n    u_::Function,\n    g_::Function,\n    μ_::Function;\n    alg,\n    abstol,\n    reltol,\n    saveat,\n    kwargs_Flow...\n) -> CTFlows.OptimalControlFlow{AbstractVector{<:Real}, AbstractVector{<:Real}, Real}\n\n\nFlow from an optimal control problem, a control function in feedback form, a state constraint and its  associated multiplier in feedback form.\n\nExample\n\njulia> ocp = Model(time_dependence=:nonautonomous)\njulia> f = Flow(ocp, (t, x, p) -> p[1], (t, x) -> x[1] - 1, (t, x, p) -> x[1]+p[1])\n\nwarning: Warning\nThe time dependence of the control function must be consistent with the time dependence of the optimal control problem. The dimension of the output of the control function must be consistent with the dimension usage of the control of the optimal control problem.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.Flow-Union{Tuple{dimension_usage}, Tuple{time_dependence}, Tuple{CTBase.OptimalControlModel{time_dependence, dimension_usage}, Function}} where {time_dependence, dimension_usage}","page":"API","title":"CTFlows.Flow","text":"Flow(\n    ocp::CTBase.OptimalControlModel{time_dependence, dimension_usage},\n    u_::Function;\n    alg,\n    abstol,\n    reltol,\n    saveat,\n    kwargs_Flow...\n) -> CTFlows.OptimalControlFlow{AbstractVector{<:Real}, AbstractVector{<:Real}, Real}\n\n\nFlow from an optimal control problem and a control function in feedback form.\n\nExample\n\njulia> f = Flow(ocp, (x, p) -> p)\n\nwarning: Warning\nThe time dependence of the control function must be consistent with the time dependence of the optimal control problem. The dimension of the output of the control function must be consistent with the dimension usage of the control of the optimal control problem.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.__abstol-Tuple{}","page":"API","title":"CTFlows.__abstol","text":"__abstol() -> Float64\n\n\nDefault absolute tolerance for ODE solvers.\n\nSee abstol from OrdinaryDiffEq.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.__alg-Tuple{}","page":"API","title":"CTFlows.__alg","text":"__alg(\n\n) -> OrdinaryDiffEq.Tsit5{typeof(OrdinaryDiffEq.trivial_limiter!), typeof(OrdinaryDiffEq.trivial_limiter!), Static.False}\n\n\nDefault algorithm for ODE solvers.\n\nSee alg from OrdinaryDiffEq.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.__reltol-Tuple{}","page":"API","title":"CTFlows.__reltol","text":"__reltol() -> Float64\n\n\nDefault relative tolerance for ODE solvers.\n\nSee reltol from OrdinaryDiffEq.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.__saveat-Tuple{}","page":"API","title":"CTFlows.__saveat","text":"__saveat() -> Vector{Any}\n\n\nSee saveat from OrdinaryDiffEq.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.__tstops-Tuple{}","page":"API","title":"CTFlows.__tstops","text":"__tstops() -> Vector{Real}\n\n\nSee tstops from OrdinaryDiffEq.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.classical_usage-NTuple{4, Any}","page":"API","title":"CTFlows.classical_usage","text":"classical_usage(\n    alg,\n    abstol,\n    reltol,\n    saveat;\n    kwargs_Flow...\n) -> Any\n\n\nReturns a function that solves ODE problem associated to classical vector field.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.hamiltonian_usage-NTuple{4, Any}","page":"API","title":"CTFlows.hamiltonian_usage","text":"hamiltonian_usage(\n    alg,\n    abstol,\n    reltol,\n    saveat;\n    kwargs_Flow...\n) -> Any\n\n\nReturns a function that solves ODE problem associated to Hamiltonian vector field.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.makeH-Tuple{CTBase.DynamicsFunction, CTBase.ControlFunction, CTBase.LagrangeFunction, Real, Real, CTBase.MixedConstraintFunction, CTBase.MultiplierFunction}","page":"API","title":"CTFlows.makeH","text":"makeH(\n    f::CTBase.DynamicsFunction,\n    u::CTBase.ControlFunction,\n    f⁰::CTBase.LagrangeFunction,\n    p⁰::Real,\n    s::Real,\n    g::CTBase.MixedConstraintFunction,\n    μ::CTBase.MultiplierFunction\n) -> CTFlows.var\"#H#48\"\n\n\nConstructs the Hamiltonian: \n\nH(t, x, p) = p ⋅ f(t, x, u(t, x, p)) + s p⁰ f⁰(t, x, u(t, x, p)) + μ(t, x, p) ⋅ g(t, x, u(t, x, p))\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.makeH-Tuple{CTBase.DynamicsFunction, CTBase.ControlFunction, CTBase.LagrangeFunction, Real, Real}","page":"API","title":"CTFlows.makeH","text":"makeH(\n    f::CTBase.DynamicsFunction,\n    u::CTBase.ControlFunction,\n    f⁰::CTBase.LagrangeFunction,\n    p⁰::Real,\n    s::Real\n) -> CTFlows.var\"#H#46\"\n\n\nConstructs the Hamiltonian: \n\nH(t, x, p) = p ⋅ f(t, x, u(t, x, p)) + s p⁰ f⁰(t, x, u(t, x, p))\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.makeH-Tuple{CTBase.DynamicsFunction, CTBase.ControlFunction, CTBase.MixedConstraintFunction, CTBase.MultiplierFunction}","page":"API","title":"CTFlows.makeH","text":"makeH(\n    f::CTBase.DynamicsFunction,\n    u::CTBase.ControlFunction,\n    g::CTBase.MixedConstraintFunction,\n    μ::CTBase.MultiplierFunction\n) -> CTFlows.var\"#H#47\"\n\n\nConstructs the Hamiltonian: \n\nH(t, x, p) = p ⋅ f(t, x, u(t, x, p)) + μ(t, x, p) ⋅ g(t, x, u(t, x, p))\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.makeH-Tuple{CTBase.DynamicsFunction, CTBase.ControlFunction}","page":"API","title":"CTFlows.makeH","text":"makeH(\n    f::CTBase.DynamicsFunction,\n    u::CTBase.ControlFunction\n) -> CTFlows.var\"#44#45\"\n\n\nConstructs the Hamiltonian: \n\nH(t, x, p) = p f(t, x, u(t, x, p))\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTFlows.rhs-Tuple{Hamiltonian}","page":"API","title":"CTFlows.rhs","text":"rhs(h::Hamiltonian) -> CTFlows.var\"#rhs!#15\"\n\n\nThe right and side from a Hamiltonian is a Hamiltonian vector field.\n\n\n\n\n\n","category":"method"},{"location":"index.html#CTFlows.jl","page":"Introduction","title":"CTFlows.jl","text":"","category":"section"},{"location":"index.html#Overview","page":"Introduction","title":"Overview","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"This package is ...","category":"page"}]
}
