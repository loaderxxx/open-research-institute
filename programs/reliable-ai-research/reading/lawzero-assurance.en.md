# LawZero: from conditional theorem to safety evaluation

<!-- ori-nav:start -->
[Русский](lawzero-assurance.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

[Русский](lawzero-assurance.md) · [LawZero profile](../analysis/researcher-04.en.md)

**Updated: 12 November 2026. Independent ORI analysis, not a partnership publication.**

[GitHub: source / исходный текст](https://github.com/loaderxxx/open-research-institute/blob/work/chatgpt/ori-lawzero-deep-20261112/programs/reliable-ai-research/reading/lawzero-assurance.en.md)

<!-- ori-toc:start -->
## Contents

- [1. What counts as evidence](#1-what-counts-as-evidence)
- [2. Control as a complementary layer](#2-control-as-a-complementary-layer)
- [3. Rare triggers and test distributions](#3-rare-triggers-and-test-distributions)
- [4. Coverage guarantees are not safety guarantees](#4-coverage-guarantees-are-not-safety-guarantees)
- [5. ELK: a limit on feedback, not the impossibility of honest AI](#5-elk-a-limit-on-feedback-not-the-impossibility-of-honest-ai)
- [6. Testing mechanisms rather than persuasive stories](#6-testing-mechanisms-rather-than-persuasive-stories)
- [7. Closed loops and trajectory-level safety](#7-closed-loops-and-trajectory-level-safety)
- [Review limits](#review-limits)
<!-- ori-toc:end -->

## 1. What counts as evidence

Level 1: Safety from Honesty develops a safety argument for a disinterested predictor. A mathematical statement has a scope and assumptions; it must not become a certificate for an arbitrary LLM. Level 2: research on control, calibration and hidden triggers helps examine the gap between an idealised setting and finite-compute systems. This review does not independently audit every proof or reproduce LawZero training. [A01](https://lawzero.org/en/publication/safety-honesty-disinterested-ai-predictor)

An evidence register should separately record a theoretical consequence under assumptions, a result from a specific experiment, a developer claim and an ORI proposal. Not falsified by a test does not mean proven safe. Conversely, absence of a complete proof does not make an approach useless: engineering evaluation can compare bounded risks and costs.

## 2. Control as a complementary layer

AI Control studies protocols designed for the possibility of intentional sabotage by a powerful model, including monitoring and editing by a more trusted system. This does not declare non-agency unnecessary: control and architectural incentive reduction answer different questions. Experiments are bounded by the tasks and models studied, while trust in the monitor remains a system assumption. [A02](https://arxiv.org/abs/2312.06942)

ORI proposal: compare the same tasks in three configurations: an ordinary generator; a generator with an independent monitor; and a generator with a probabilistic evaluator and abstention. Fix the compute budget, tool access and success criteria. Measure missed harmful decisions, false blocks, cost and useful task performance. The third configuration must not be called LawZero without implementing and checking the published architecture.

## 3. Rare triggers and test distributions

Sleeper Agents demonstrates constructed behavioural triggers that persist after some safety-training procedures. It establishes a possibility, not the prevalence of such mechanisms across all models. For LawZero it motivates checking contextual robustness claims rather than proving the programme has failed. [A03](https://arxiv.org/abs/2401.05566)

An ORI test set should contain held-out combinations of language, user role, tool mode, evaluation cues and conflicts between short-term benefit and accuracy. Separate attack development from final testing; do not choose criteria after seeing results. Zero failures in a small sample provides limited information about rare events. Publish trial counts, sampling scope and uncertainty intervals, not just a success percentage.

## 4. Coverage guarantees are not safety guarantees

Conformal prediction illustrates how to state a limited guarantee: coverage depends on the setting's conditions, including exchangeability in the standard case. Marginal coverage does not imply equal reliability for every user, domain or dangerous event. Applying it to free-form answers requires defining the prediction object and error function. [A04](https://arxiv.org/abs/2107.07511)

A practical implication is that a predictor can return a set of admissible answers or abstain when uncertain. The threshold must be evaluated on held-out data and separately under distribution shift. A result card should state exactly what is guaranteed, under which assumptions, what was measured and which actions remain prohibited regardless of the score. This connects probabilistic architecture to access control without confusing statistics with permission to act.

## 5. ELK: a limit on feedback, not the impossibility of honest AI

First level is ARC’s Eliciting Latent Knowledge problem: extracting knowledge a system possesses but humans cannot directly verify. Second is The Impossibility of Eliciting Latent Knowledge, version 1 from June 2026. Within a specified causal-influence-diagram formalism, the authors limit guarantees available from behavioural feedback training: evaluator imitation can be indistinguishable from honest reporting. This does not establish that honest AI is impossible in general or automatically refute LawZero. The open question is which structural and semantic assumptions of LawZero exceed this setting and which independent interventions could test them. The setup and introduction were read; the proof has not been fully audited. [T06](https://www.alignment.org/blog/arcs-first-technical-report-eliciting-latent-knowledge/) [T07](https://arxiv.org/html/2606.12268v1)

## 6. Testing mechanisms rather than persuasive stories

Causal Abstraction provides a formal foundation for interpretability through interventions and correspondence between model levels. Its second-level connection to ELK is to test whether an answer follows a factual variable or a model of the human evaluator. This is a promising test, not a claim that activation patching solves ELK. Independently manipulate truth and reporter variables in a toy model, then repeat out of distribution. A locally successful causal abstraction does not establish global semantics, absence of all hidden objectives or safety of every subsequent use. [T08](https://arxiv.org/abs/2301.04709)

## 7. Closed loops and trajectory-level safety

Performative Prediction studies settings where deploying predictions changes the distribution of future data. LawZero separately discusses trajectory safety in section 5.4: a sequence of locally admissible answers can have a harmful cumulative effect. A predictor without tools can therefore influence the world through people. ORI proposes a closed-loop simulation in which decisions change after each message, measuring calibration drift and accumulated harm. A one-step safety threshold cannot transfer to arbitrarily many steps without additional assumptions. Definitions of harm and acceptable risk remain normative choices. [T09](https://proceedings.mlr.press/v119/perdomo20a.html) [T10](https://lawzero.org/sites/default/files/publications/99/safety-honesty-disinterested-ai-predictor_4.pdf)

## Review limits

LawZero architecture materials and selected sections of the original paper were read; related research was checked at abstract and available methodological-section level, not fully audited. ORI proposals are separated from published results. This is not an exhaustive literature search or experimental replication.
