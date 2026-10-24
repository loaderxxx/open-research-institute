# Wang et al. — PaperArena, version 4

[Русская версия](study-03.md)

**Access and reading limits.** Checked the abstract and history of v4 dated 30 January 2026. Full tasks, agent traces and code were not examined; this is a preprint.

**Research result.** PaperArena tests questions requiring information from multiple scientific papers and tool use. Its platform includes multimodal document parsing, context retrieval and programmatic computation. In version 4, the authors report 38.78% mean accuracy for the leading tested model within the chosen agent workflow and 18.47% on the hard subset. These are comparisons of specific configurations within the benchmark, not a general measure of scientific reading ability.

**ORI critical analysis.** A cross-paper answer contains several potentially separate failure points: source selection, fact extraction, alignment of definitions and final inference. A correct citation does not guarantee correct use of the cited data. Results obtained under different experimental conditions, for example, cannot be combined merely because their authors use the same metric name.

Tools add another layer. A table-parsing error may look like a reasoning failure, while correct arithmetic can conceal incorrect input values. It is therefore useful to preserve the provenance of each intermediate value and test the transition from document to structured representation separately from subsequent analysis.

ORI should interpret scores alongside available tools, query budgets and stopping rules. Better modelling and better text extraction are different explanations for increased accuracy. Pinning the result to version 4 is also necessary: changing tasks or procedures can make percentages incomparable without further checks. A practical reading output is an answer annotated through the chain “source, extracted statement, transformation, conclusion.” That turns an aggregate score into diagnostic information and helps distinguish justified literature synthesis from plausible prose containing several references. The benchmark’s value lies in making these demanding combinations observable under a defined protocol, while leaving wider research competence as a separate question.

**Verification sources:**

- https://arxiv.org/abs/2510.10909v4
