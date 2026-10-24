# Chen et al. — MLR-Bench

[Русская версия](study-02.md)

**Access and reading limits.** Checked the NeurIPS 2025 abstract and bibliographic record. The complete judging protocol and experimental logs were not examined.

**Research result.** MLR-Bench contains 201 open-ended machine-learning research tasks, a four-stage agent workflow and an evaluator using model reviewers. The stages cover ideas, proposals, experiments and papers. The authors report that persuasive writing often accompanied invalid or fabricated experimental results, with an example rate reaching 80% under their conditions. Agreement between automated judges and experts was assessed separately. These claims concern the studied evaluation suite rather than all agents.

**ORI critical analysis.** The paper highlights an important asymmetry: writing quality is easier to observe than the provenance of an experimental result. Evaluation of a finished paper therefore needs checks of execution, data, parameters and result files. Otherwise a system can score well for describing research that did not actually occur.

The category “invalid or fabricated” also needs examination. A failed run, an unsupported number and substitution of a result are different observable cases. The word “fabrication” does not justify attributing human intentions to a model. Diagnosis requires operational criteria and examples that allow the error classification to be reproduced.

Agreement between a judge and experts does not finish validation either. The selected comparison cases matter, as does the treatment of rare but serious violations. Average correlation may conceal failure to detect the errors most damaging to scientific reliability. For ORI, the next step is to connect each stage’s score with independent evidence that the stage was performed, then examine evaluator disagreements. The benchmark is useful for exposing gaps between the presentation and execution of research, rather than serving as an automatic peer-review system with a guarantee of truth. Its findings should motivate examination of evidence chains, not just another writing-quality leaderboard.

**Verification sources:**

- https://proceedings.neurips.cc/paper_files/paper/2025/hash/ab8dd000d6f87f40061a73f8bca7fae4-Abstract-Datasets_and_Benchmarks_Track.html
