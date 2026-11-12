# LawZero: architecture and the limits of non-agency

<!-- ori-nav:start -->
[Русский](lawzero-architecture.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

[Русский](lawzero-architecture.md) · [LawZero profile](../analysis/researcher-04.en.md)

**Updated: 12 November 2026. Independent ORI analysis, not a partnership publication.**

[GitHub: source / исходный текст](https://github.com/loaderxxx/open-research-institute/blob/work/chatgpt/ori-lawzero-deep-20261112/programs/reliable-ai-research/reading/lawzero-architecture.en.md)

<!-- ori-toc:start -->
## Contents

- [1. Two levels of reading](#1-two-levels-of-reading)
- [2. Prediction is not action](#2-prediction-is-not-action)
- [3. Bayesian uncertainty and finite computation](#3-bayesian-uncertainty-and-finite-computation)
- [4. Truthful answers and internal knowledge](#4-truthful-answers-and-internal-knowledge)
- [5. Not one best answer: GFlowNets and posterior alternatives](#5-not-one-best-answer-gflownets-and-posterior-alternatives)
- [6. Loss assumptions and causal mechanisms](#6-loss-assumptions-and-causal-mechanisms)
- [7. Action, observation and intervention](#7-action-observation-and-intervention)
- [Review limits](#review-limits)
<!-- ori-toc:end -->

## 1. Two levels of reading

Level 1 comprises the original Scientist AI programme and LawZero's architecture note. Level 2 comprises independent research that can test individual components: calibration, distribution shift and elicitation of truthful answers. This is a thematic comparison, not a claim that LawZero cites every work below or that these works validate the entire project. The original preprint proposes an alternative to agents optimising the consequences of actions; the 2026 note clarifies the generator and probability estimator. [L01](https://arxiv.org/abs/2502.15657) [L02](https://lawzero.org/en/publication/scientist-ai-safe-design-not-desiring)

## 2. Prediction is not action

The central question is what is optimised. A system may answer questions about the consequences of an action without selecting actions to pursue its own objective. Yet a separate planner using those answers creates an agentic system again. Predictor safety therefore does not automatically transfer to a predictor–planner–tools stack. The architecture note distinguishes a proposition's truth from the fact that someone asserted it; consequence invariance targets incentives concerning the effects of an answer. These are architectural requirements, not observations establishing that an available model has no hidden goals. [L02](https://lawzero.org/en/publication/scientist-ai-safe-design-not-desiring)

ORI test proposal: construct paired questions with identical factual content but different stated effects of the answer on its user. Vary promised reward, shutdown possibilities and social pressure while preserving task evidence. Compare predictive distributions, not merely convincing prose. An answer may rationally change when evidence changes, so the experiment must separately vary world evidence and information about publication consequences. This tests local robustness, not global non-agency.

## 3. Bayesian uncertainty and finite computation

Bayesian language makes uncertainty explicit but does not remove the choice of hypothesis space, priors or approximate inference. If the true explanation is excluded from the model, confidence within the model does not rescue the forecast. Finite computation and approximation are substantive limitations in the original Scientist AI programme, not minor implementation details. [L01](https://arxiv.org/abs/2502.15657)

At level 2, Guo and colleagues document calibration problems in modern classifiers and benefits of temperature scaling in the studied tasks. Ovadia and colleagues evaluate uncertainty under dataset shift. This motivates measurement, not an automatic calibration recipe for free text. ORI should record Brier score or log loss for verifiable propositions, construct reliability diagrams, and separately evaluate new domains, languages and rare dangerous events. Good average calibration can coexist with poor calibration in a critical subgroup. [L03](https://arxiv.org/abs/1706.04599) [L04](https://arxiv.org/abs/1906.02530)

## 4. Truthful answers and internal knowledge

Inference-Time Intervention studies activation changes that improve truthful answers in a particular TruthfulQA setting. This differs from designing a disinterested predictor: identifying an activation direction does not prove that a system always reports the truth it knows. Distinguish factual accuracy, calibration, absence of deception and absence of goal pursuit. None of these properties alone establishes the others. [L05](https://arxiv.org/abs/2306.03341)

A proposed testing record should contain the question, independent ground truth, model version, probability, answer, external tools and pressure conditions. Errors should be separated into ignorance, miscalibration, framing sensitivity and suspected strategic distortion; the last cannot be diagnosed from a single incorrect answer. A deception claim requires separate evidence of knowledge available to the system and a causal account of its behaviour.

## 5. Not one best answer: GFlowNets and posterior alternatives

First level: Amortizing intractable inference in large language models investigates GFlowNet training for approximate inference with latent reasoning. Second level: Bayesian Structure Learning with Generative Flow Networks samples a distribution of graphs rather than one best DAG. This is a technical line connected to the original Scientist AI proposal, not a completed safety proof. Concentrated-posterior and scaling difficulties cannot be concealed by the word Bayesian. Proposed ORI test: use a synthetic task with known alternative explanations to measure mode coverage and relative weights; compare against single-answer search at the same budget. Accuracy of the best answer does not guarantee preservation of uncertainty. [T01](https://arxiv.org/abs/2310.04363) [T02](https://arxiv.org/html/2202.13903v2)

## 6. Loss assumptions and causal mechanisms

First level: Probabilistic Dependency Graphs relates losses to inconsistency in a probabilistic model. Second level: Qualitative Mechanism Independence formalises independence of causal mechanisms. Both appear in the bibliography of LawZero’s technical text. Their mathematical structure does not establish that chosen variables actually represent a fact, a report of a fact or source reliability. ORI proposes a model with independently controlled facts, testimony and witness reliability: test whether fact probabilities change when only reporting form changes. This tests specific assumptions, not a semantic guarantee for all queries. [T03](https://arxiv.org/html/2202.11862v1) [T04](https://arxiv.org/abs/2501.15488)

## 7. Action, observation and intervention

Shaking the foundations studies a sequence model mistaking its own action for fresh evidence about a hidden world. Treating actions causally as interventions resolves the problem in the studied setting. The second-level connection to mechanism independence is our interpretation: statistical correlation does not automatically answer what happens if we act. ORI can use two artificial worlds with identical observed correlations but different intervention effects. Evaluate discrimination between these worlds given additional evidence, not explanatory elegance. The paper does not explain every language-model hallucination. [T05](https://arxiv.org/html/2110.10819v1) [T04](https://arxiv.org/abs/2501.15488)

## Review limits

LawZero architecture materials and selected sections of the original paper were read; related research was checked at abstract and available methodological-section level, not fully audited. ORI proposals are separated from published results. This is not an exhaustive literature search or experimental replication.
