# Feng et al. — Beyond Model Collapse

[Русская версия](study-02.md)

**Access and reading limits.** Checked the ICLR 2025 abstract. Theorems, experimental settings and code were not examined in detail.

**Research result.** The authors investigate how verification of synthetic examples affects performance deterioration during training on model-generated data. The theory uses Gaussian mixtures, linear classifiers and linear verifiers. Experiments address matrix eigenvalue computation and news summarisation. Under those conditions, even imperfect selection prevented the observed decline, and a proposed selection-quality proxy correlated with performance. This is a conditional result rather than a universal prohibition or endorsement of synthetic training.

**ORI critical analysis.** The selection mechanism matters more than an example’s origin alone. Synthetic material can broaden useful coverage or repeatedly reproduce one error. A verifier needs to distinguish these possibilities, and its quality depends not only on overall accuracy but also on errors it systematically misses.

Selection can improve an average score while narrowing diversity. If difficult or rare examples are rejected more often, later training may look stable on typical tasks while losing performance in distribution tails. Quality, coverage and error frequencies across subgroups should therefore be compared alongside the aggregate score.

ORI should trace the sequence from original real data through generator, selection rule, accepted and rejected examples to the new model. Each transition needs an account of what was independently measured. It is especially important to check whether the training-data evaluator resembles the final test so closely that improvement mainly reflects adaptation to one criterion. The paper identifies conditions under which verification helps, but transfer to scientific prose requires separate definitions of factual correctness, completeness and permissible uncertainty. The abstract cannot establish the full reach of the theoretical guarantees. Detailed reading should also distinguish a demonstrated empirical proxy from a universal diagnostic for future synthetic-data pipelines.

**Verification sources:**

- https://proceedings.iclr.cc/paper_files/paper/2025/hash/df2d62b96a4003203450cf89cd338bb7-Abstract-Conference.html
