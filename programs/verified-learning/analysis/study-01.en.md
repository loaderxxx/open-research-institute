# Setlur et al. — Rewarding Progress

[Русская версия](study-01.md)

**Access and reading limits.** Inspected the abstract, opening introduction and first figure explanation in the ICLR 2025 PDF. Not all experiments and proofs were closely read.

**Research result.** The authors propose rewarding a step for progress: a change in the probability of a later correct answer, estimated under a separate prover policy. This differs from checking the formal correctness of every statement. The inspected introduction explains why a useful search step can involve repetition or correction of an error. Effectiveness depends on whether the prover distinguishes continuations produced by the base model. The paper reports improvements in search and training on the mathematical tasks studied.

**ORI critical analysis.** The idea requires a careful definition of “good.” A step can help find an answer without belonging to a correct final proof. The programme therefore needs separate checks of search-trajectory quality and presented-explanation quality. Conflating them risks treating successful search as an error-free chain of reasoning.

Prover strength also cannot be reduced to overall accuracy. If the prover can repair every unsuccessful step, success probability changes little and the signal stops distinguishing the base agent’s actions. Complementarity may therefore matter more than the highest score on an isolated test. That should be evaluated with matched generation budgets and sensitivity analysis over prover choice.

ORI should separately account for the cost of obtaining evaluations, training the verifier and performing later search. A gain at deployment does not always mean a gain for the whole procedure. Detailed reading should examine how success probabilities are estimated from intermediate states and how stable those estimates are. The work supplies a concrete credit-assignment mechanism, but does not guarantee the truth of open scientific explanations for which the correct final answer is not known in advance. Its contribution is a useful training objective whose interpretation remains tied to the task and prover.

**Verification sources:**

- https://proceedings.iclr.cc/paper_files/paper/2025/hash/98711dea460bdefe0e651ca23ec98ba2-Abstract-Conference.html
- https://proceedings.iclr.cc/paper_files/paper/2025/file/98711dea460bdefe0e651ca23ec98ba2-Paper-Conference.pdf
