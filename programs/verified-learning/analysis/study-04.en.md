# Yuan et al. — Verifiable Process Rewards

[Русская версия](study-04.md)

**Access and reading limits.** Checked the abstract of v3 dated 12 October 2026 and the preprint history. Complete experiments and independent peer review were not examined.

**Research result.** VPR repurposes task-solving oracles as verifiers of intermediate actions. Version 3 uses search for Sokoban, constraints for Sudoku and posterior inference for Minesweeper. The authors report improvements over compared outcome-reward approaches. An additional tool-use experiment on τ²-bench uses an expert language model as a reference policy. That changes the basis of verification from an algorithmic oracle, which matters when interpreting transfer.

**ORI critical analysis.** Dense feedback can ease credit assignment, but signal reliability depends on its origin. Checking a formal game constraint and obtaining an expert model’s preference do not have the same evidential status. Their results should therefore remain separate even when used within one optimisation procedure.

Action validity must also be distinguished from usefulness for eventual success. A locally valid move can lead to an unsuccessful strategy, while a temporarily suboptimal move can support exploration. The oracle should specify which property it evaluates. Across environments, a hidden change in reward meaning may explain differences better than the general label “verifiable.”

The next ORI reading should trace the information available to the oracle, its invocation cost and whether privileged feedback exists only during training. If evaluation relies on a state inaccessible to a real agent, transfer without that privilege needs a separate test. The preprint offers a concrete way to exploit task structure, but does not solve verification of open scientific exploration. Each intermediate reward should have a provenance record: rule, inputs, possible errors and applicable domain. That is more informative than a broad promise of dense, reliable feedback. It also permits comparisons between exact checking and model-based assessment without treating them as interchangeable.

**Verification sources:**

- https://arxiv.org/abs/2605.10325v3
