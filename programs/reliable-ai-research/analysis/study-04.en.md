# Liu et al. — SciAgentArena

[Русская версия](study-04.md)

**Access and reading limits.** Checked the abstract and preprint record dated 10 June 2026. The interactive environment, tasks and code were not independently run.

**Research result.** SciAgentArena proposes approximately 200 scientific tasks with stepwise verification in an interactive, agent-agnostic environment. The authors distinguish well-specified data-analysis operations from more open questions requiring independent exploration. They report uneven performance: clear criteria help execution, while novelty and sustained self-directed investigation remain difficult. These are preliminary findings from a public preprint, not an independent assessment of the entire field.

**ORI critical analysis.** Separating tasks by how fully they are specified is more informative than one overall ranking. Success might mean reproducing a known computation, estimating an unknown parameter or forming a new hypothesis. Those achievements need different evidence and should not be aggregated without explaining their weights. Defining novelty relative to existing literature is particularly important.

Stepwise verification helps locate failures but may change the task itself. Frequent correctness feedback gives an agent information that might be unavailable in real research. Independent execution and execution with feedback should therefore be measured separately. Similarly, an agent-agnostic interface does not ensure that its tools are equally useful to every architecture.

The next ORI reading should determine what data the agent sees, who defines the criteria and how unfinished attempts are counted. Intermediate hypothesis quality, cost and reproducibility deserve attention alongside final success. The preprint offers a promising structure for comparing scientific tasks, but completing a task should not be called a discovery without checking novelty and substantive significance. Its practical value is the opportunity to make boundaries of agent competence concrete and testable rather than promise a universal artificial researcher. Independent replication and inspection of the underlying tasks remain necessary before broad claims about transfer are warranted.

**Verification sources:**

- https://arxiv.org/abs/2606.12736
