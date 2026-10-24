# Amrith Setlur, Aviral Kumar and colleagues — process verifiers

[Русская версия](researcher-02.md)

**Access and reading limits.** Checked Setlur’s author profile, affiliations and the opening of Rewarding Progress in the conference PDF. Detailed proofs and all experiments were not read.

**Research direction.** Setlur’s profile describes systems that adapt during problem solving through search, interaction and additional computation. Rewarding Progress, with Kumar and colleagues, connects this direction with training process verifiers. The conference PDF confirms participation from CMU, Google Research and Google DeepMind. Its concrete question is which intermediate-progress signal improves a base policy even when the evaluator is not a universally stronger solver.

**ORI critical analysis.** Complementarity between performer and verifier matters for the programme. Two systems can have the same average accuracy yet differ greatly in their usefulness as a pair. When they fail on the same steps, agreement adds little. A verifier that discriminates the performer’s weaknesses may improve search without independently solving every task.

That gain must nevertheless be separated from additional computation. Extra continuations, evaluator calls and training of a separate model all have costs. Comparisons should use total cost and result quality rather than only the main policy’s step count. Analyses showing which error types are helped or worsened by additional checking are particularly valuable.

Practical monitoring can follow three questions: what counts as progress, where its estimate comes from and how transfer to a new policy is tested. Scientific tasks add a distinction between productive exploration through rejected hypotheses and a final report that clearly separates them from supported conclusions. This research direction provides methods for the former, not a ready oracle of scientific truth. Listing the authors does not imply collaboration or their endorsement of ORI’s analysis. Its value is a testable account of how feedback and search interact, with resource use and evaluator limitations kept visible.

**Verification sources:**

- https://ars22.github.io/
- https://proceedings.iclr.cc/paper_files/paper/2025/file/98711dea460bdefe0e651ca23ec98ba2-Paper-Conference.pdf
