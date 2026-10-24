# Zhang et al. — Demonstrating quantum error mitigation on logical qubits (2025/2026)

[Русский](study-05.md) · [Programme](../README.en.md)

Checked: 24 October 2026. Initial source analysis; the author abstract and journal metadata were checked; the experiment and supplements were not reproduced.

<!-- ori-toc:start -->
## Contents

- [Question and approach](#question-and-approach)
- [Main significance](#main-significance)
- [Evidence questions](#evidence-questions)
- [Why it matters to ORI](#why-it-matters-to-ori)
- [Sources](#sources)
<!-- ori-toc:end -->

## Question and approach

The study examines residual logical errors after error correction. The authors use zero-noise extrapolation: physical noise is varied and its relationship to the output supports a corrected estimate. The abstract describes superconducting-processor experiments, including circuits using repetition and surface codes.

## Main significance

Our analytical conclusion is that correcting errors and improving a statistical estimate are distinct operations. A good extrapolated estimate of an observable does not imply that every circuit run becomes error-free. Consequently, a claim about a reliable quantum computer cannot rest on one improvement metric from a selected experimental series.

## Evidence questions

Full evaluation requires the noise-amplification procedure, fitting model, uncertainty and additional sampling cost. Robustness should be checked against the chosen extrapolation points and mismatch between the assumed noise model and the device. It is also important to distinguish mean performance from estimate variability: lower systematic error may come with greater statistical expense. These are assessment criteria rather than failures demonstrated in this initial analysis.

## Why it matters to ORI

The paper supplies a concrete connection between information theory and hardware constraints. A useful next comparison would hold the measurement budget fixed across correction alone, correction plus mitigation and an explicitly specified baseline. That is our proposed evaluation criterion, not a completed reproduction. Online publication occurred in 2025, while the journal volume belongs to 2026; neither should be confused with the date of our source check. The accessible abstract supports orientation, not detailed validation of the experiment.

## Sources

- [Source 1](https://www.nature.com/articles/s41467-025-67768-4)
- [Source 2](https://arxiv.org/abs/2501.09079)
