# Robsky, Lavitas and Wang — Reliable Evaluations for LLMs and AI Agents

[Русская версия](book-01.md)

**Access and reading limits.** Checked Springer’s description, contents and publication details for September 2026. The complete chapters were not read.

**Source content.** The publisher presents the book as a practical framework for evaluating language models and agents. Evaluation design is organised around task sets, templates, metrics and evaluators. Agent loops, infrastructure and continuous improvement receive separate treatment. This is guidance on designing evaluations, not an independent experiment showing that its procedures guarantee reliability for every system. Judging the detailed recommendations requires reading the chapters.

**ORI critical analysis.** An end-to-end evaluation of a research agent should begin with the result the user actually needs. A correct citation, successfully executed code and a justified scientific conclusion are different targets. The first two can be achieved while the data are still interpreted incorrectly. Each metric should therefore state which transition in the research process it tests.

Separating performer error from evaluator error is especially important. If a model judge prefers fluent presentation, a higher score can accompany weaker verifiability. Diagnosis requires independently labelled cases, reversal of answer order and examination of disagreements rather than merely averaging several judges.

The book can provide an organisational framework for this work, but a production scenario should not automatically be transferred to an open scientific question. Research allows the answer to be unknown beforehand; evaluation must distinguish honest uncertainty from failure and an informative negative result from work that was never performed. A practical ORI output is a matrix connecting tasks, observable artefacts and independent checking procedures. It should also account for repeated-attempt costs, tool changes and data provenance. The resulting evaluation would describe a specific system capability rather than become a general promise of “reliable AI.”

**Verification sources:**

- https://link.springer.com/book/10.1007/978-3-032-26749-8
