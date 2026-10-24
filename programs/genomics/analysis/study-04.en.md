# Sheth et al. (2026) — Mapping enhancer–gene regulatory interactions from single-cell data

[Русский](study-04.md)

**Access.** Checked 24 October 2026: indexed abstract, introduction and initial results of the published Nature Genetics version dated 3 August 2026, not the 2024 preprint. Code and supplements were not examined.

The scE2G family uses ATAC or joint ATAC/RNA measurements and logistic classifiers trained on CRISPR experiments in K562. Training includes over 10,000 tested element–gene pairs, not 10,000 positive links. Models are evaluated against several evidence types and applied to data from defined cell populations.

**ORI critical analysis.** The study matters because it connects predictions to functional intervention rather than relying solely on accessibility–expression correlation. However, a negative-pair label depends on experimental power, detectable effect size and the tested conditions. Failure to detect reduced expression does not establish absence of every regulatory function. Future analyses should retain the label definition alongside predictions, particularly when transferring to rare cell states.

Training in one line and applying the model elsewhere raises a separate transfer question. Good ranking of common regulatory relationships can coexist with errors at specific loci. Evaluation should therefore examine performance by cell type, distance, accessibility and target-gene expression, not just a single overall accuracy. Application to a cell cluster must also be distinguished from establishing causality within every individual member of that cluster.

For ORI, scE2G illustrates a passage from observational mapping to prioritising functional hypotheses. A reasonable next step is to select one biological context, compare against a distance baseline and examine several links using independent perturbation evidence. Comparison with pgBoost is particularly informative because their training labels differ. Including CRISPR in training does not make every predicted edge experimentally confirmed. This initial assessment neither reproduces the computations nor establishes universal applicability to any single-cell dataset. It identifies the evidential advantages and transfer questions that a programme-specific benchmark should preserve.

**Source:** [published Nature Genetics article](https://www.nature.com/articles/s41588-026-02695-8).
