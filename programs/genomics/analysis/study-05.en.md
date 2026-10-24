# Fu et al. (2025) — A foundation model of transcription across human cell types

[Русский](study-05.md)

**Access.** Checked 24 October 2026: indexed abstract, introduction and selected training and discussion sections in Nature. Code, weights and supplements were not executed or assessed.

GET combines sequence information and chromatin accessibility to predict expression. Pretraining uses 213 cell types; expression data for subsequent training and evaluation are available for 153. The paper examines transfer to held-out types and interpretation of regulatory relationships. This is a computational model with selected biological tests, not a complete transcription mechanism.

**ORI critical analysis.** “Unseen cell type” must be interpreted relative to the training stage. Absence of an expression label does not necessarily mean absence of related information during pretraining. A fair transfer assessment must identify which samples, types, sequences and technologies appeared at each stage. Otherwise, the generalisation test may be less demanding than a short description suggests.

Accurate absolute expression prediction also does not guarantee accurate response to intervention. A model can distinguish generally high- and low-expression genes while missing a small but functionally important change in one gene. ORI therefore needs separate evaluations across genes, across cellular states and after targeted regulatory change. These are different tasks and should not be collapsed into one performance measure.

Model interpretation can propose factor interactions, but computational feature importance is not physical contact or causal necessity. A useful ORI comparison would test a small set of such hypotheses against biochemical and perturbation evidence while preserving failed predictions. GET is relevant as a tool for comparing cellular contexts, yet it cannot remove uncertainty in cell-type labels, measurement coverage or dependence on the supplied chromatin state. The next step should reproduce a precisely defined transfer evaluation before discussing mechanistic conclusions. No such reproduction was performed here; this entry instead specifies what it would need to establish and why a predictive result is distinct from a causal explanation.

**Sources:** [Nature](https://www.nature.com/articles/s41586-024-08391-z); [official implementation identified by the authors](https://github.com/GET-Foundation/get_model).
