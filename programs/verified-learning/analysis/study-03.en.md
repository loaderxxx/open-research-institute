# Wen et al. — RLVR and correct reasoning

[Русская версия](study-03.md)

**Access and reading limits.** Checked the ICLR 2026 abstract and Microsoft’s institutional record. The OpenReview PDF required a browser check; the complete text was not read.

**Research result.** Wen and colleagues examine whether RLVR expands solution capabilities or mainly changes the probability of selecting already available answers. They propose CoT-Pass@K, which considers intermediate reasoning together with the final result, and report improvements on mathematics and coding tasks. A theoretical framework explains how answer-only reward can encourage correct steps. The conclusions concern the base models, procedures and definition of reasoning quality studied.

**ORI critical analysis.** Changing a metric can reveal a weakness in an earlier comparison, but the new metric itself needs validation. Researchers must specify step boundaries, incomplete explanations and permissible abbreviations. If a person or model judges the written explanation, ratings may partly depend on style rather than logic. That is a reason to measure agreement and analyse disputed cases, not to dismiss the metric automatically.

Moreover, K represents a computational budget rather than an abstract capacity measure. With many attempts, a correct answer may appear rarely, and estimates depend on generation length, temperature and selection. Before-and-after training comparisons should hold those conditions fixed or explicitly show their effects.

ORI should separately assess three outcomes: correct-answer frequency, correct-explanation frequency and diversity of solvable tasks. Joint improvement would provide stronger evidence of transfer than a single score. Detailed reading should also examine the assumptions connecting the theoretical account with actual training. The paper offers a substantive contribution to the RLVR debate without establishing that every verifiable final reward inevitably produces sound scientific reasoning beyond the studied task class. Its claims become most useful when their model, metric and budget conditions remain attached to the reported effect.

**Verification sources:**

- https://proceedings.iclr.cc/paper_files/paper/2026/hash/517f9b9c227b9dd51dba4560f37165ed-Abstract-Conference.html
- https://www.microsoft.com/en-us/research/publication/reinforcement-learning-with-verifiable-rewards-implicitly-incentivizes-correct-reasoning-in-base-llms/
