# LawZero: architecture and the limits of non-agency

<!-- ori-nav:start -->
[Русский](lawzero-architecture.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

[Русский](lawzero-architecture.md) · [LawZero profile](../analysis/researcher-04.en.md)

**Updated: 12 November 2026. Independent ORI analysis, not a partnership publication.**

[GitHub: source / исходный текст](https://github.com/loaderxxx/open-research-institute/blob/work/chatgpt/ori-lawzero-deep-20261112/programs/reliable-ai-research/reading/lawzero-architecture.en.md)

<!-- ori-toc:start -->
## Contents

- [1. A scientist who does not need to win](#1-a-scientist-who-does-not-need-to-win)
- [2. Knowing consequences is not wanting them](#2-knowing-consequences-is-not-wanting-them)
- [3. Why an honest answer needs uncertainty](#3-why-an-honest-answer-needs-uncertainty)
- [4. An error is not yet deception](#4-an-error-is-not-yet-deception)
- [5. Keeping explanations that are not yet winning](#5-keeping-explanations-that-are-not-yet-winning)
- [6. What the model treats as a fact](#6-what-the-model-treats-as-a-fact)
- [7. The final turn: observing is not intervening](#7-the-final-turn-observing-is-not-intervening)
- [Review limits](#review-limits)
<!-- ori-toc:end -->

## 1. A scientist who does not need to win

Imagine a laboratory where an AI helps explain an unexpected experimental result. We could ask it to do two very different things: find the most plausible explanation, or ensure the project is judged a success. In the second case, an attractive report might become more useful than an inconvenient truth. LawZero starts with that distinction: can we build powerful intelligence for understanding the world without giving it its own objective to change the world in a preferred direction?

Scientist AI is a research programme, not an announcement that safety has been solved. The original paper proposes an alternative to goal-directed agents; the 2026 architecture note explains a separation between generating possible answers and estimating their probabilities. To understand the idea's strengths and weaknesses, we must go beyond its name: how is uncertainty represented, what exactly does the evaluator learn, and why is knowing about consequences different from wanting them? [L01](https://arxiv.org/abs/2502.15657) [L02](https://lawzero.org/en/publication/scientist-ai-safe-design-not-desiring)

## 2. Knowing consequences is not wanting them

A weather forecast says it will rain tomorrow; it need not try to make rain happen. Similarly, a model can estimate a decision's consequences without choosing the decision for its own benefit. But connect its answers to a planner and tools, and we have a different system. Safety of the individual predictor cannot automatically be attributed to the whole arrangement.

LawZero proposes distinguishing truth from testimony: “the director said the experiment succeeded” does not mean “the experiment succeeded.” Another important idea is that an answer should not become more attractive to the model merely because it produces advantageous consequences for it. A familiar laboratory scenario can test a small part of this requirement: keep the data fixed, but tell the researcher that a negative conclusion will upset the client. A changed forecast now needs explanation. Such a test is useful, but robustness to a few phrasings does not establish the absence of every hidden objective. [L02](https://lawzero.org/en/publication/scientist-ai-safe-design-not-desiring)

## 3. Why an honest answer needs uncertainty

A good researcher keeps several explanations in mind. As evidence arrives, some become more likely while others recede. This is an accessible way into Scientist AI's Bayesian idea: do not settle on a confident story too early. Yet if the needed explanation never entered the hypothesis set, high probabilities assigned to the remaining options cannot rescue the investigation. Assumptions and limited computation remain genuine problems even when the theory is neatly expressed.

There is a more practical difficulty too: does “90 percent” mean roughly nine correct forecasts in ten across a sufficiently large series of comparable cases? This is calibration. Guo and colleagues studied it in classifiers; Ovadia and colleagues investigated uncertainty estimates when data change. Their findings supply no magical way to calibrate arbitrary text, but suggest the right question: does a system's confidence retain its meaning in another domain, language or rare dangerous situation? Those measurements matter to ORI more than the impression created by a confident voice. [L01](https://arxiv.org/abs/2502.15657) [L03](https://arxiv.org/abs/1706.04599) [L04](https://arxiv.org/abs/1906.02530)

## 4. An error is not yet deception

A researcher can be wrong because they do not know the answer. They can know too little but feel too certain. Or they can understand the facts and deliberately report something else. These are fundamentally different safety cases. Inference-Time Intervention shows that changing particular model activations can improve truthfulness in the studied TruthfulQA setting. Better test performance, however, does not establish a universal mechanism of honesty.

ORI should therefore not call every hallucination deception. That diagnosis needs independent grounds for believing the system had access to the correct knowledge, and an account of how the distortion arose. In practice, preserve not only the polished final answer but also the task conditions, ground truth, model version and confidence. Accuracy, calibration, absence of deception and absence of independent goals are related properties, but none substitutes for all the others. [L05](https://arxiv.org/abs/2306.03341)

## 5. Keeping explanations that are not yet winning

This brings us to a technically interesting tool: the GFlowNet. It is helpful to picture it not as a machine selecting one winner, but as a way of generating diverse candidates with weights related to a specified reward. Work on amortised inference for language models uses this approach to approximate complex distributions involving intermediate reasoning. Research on Bayesian-network structure uses it to obtain different graphs of possible dependencies rather than a single best graph.

For Scientist AI, this matters because retaining alternatives is part of honest uncertainty. Yet these methods face difficulties when distributions become highly concentrated or problems grow. A useful ORI evaluation would resemble a detective exercise: construct a world with several known explanations, then ask which the system discovers, which it forgets and how well it weights them. Winning on the quality of one answer does not mean it preserved the full relevant picture. [T01](https://arxiv.org/abs/2310.04363) [T02](https://arxiv.org/html/2202.13903v2)

## 6. What the model treats as a fact

Return to the laboratory. An instrument displays a number, an assistant copies it into a notebook, and the director describes the result to a client. These are three different events, with opportunities for error between them. If training collapses them into one “correct sentence,” the system struggles to distinguish what deserves trust. Work on Probabilistic Dependency Graphs and Qualitative Mechanism Independence, included in LawZero's technical bibliography, helps formalise consistency among probabilistic assumptions and independence of causal mechanisms.

But a formalism does not assign the right meaning to variables for us. Calling one variable “truth” is insufficient. A small ORI experiment fits naturally here: independently vary the fact, witness reliability and reporting form, then observe what changes the model's belief. This is a testable connection to scientific methodology: evidence must be evaluated together with how it was obtained. Success would establish a bounded property of the selected model, not semantic infallibility for AI in general. [T03](https://arxiv.org/html/2202.11862v1) [T04](https://arxiv.org/abs/2501.15488)

## 7. The final turn: observing is not intervening

Seeing a light turn on and pressing the switch yourself are not the same evidence about the world. Shaking the foundations examines a related failure in sequence models: a model's own action can be mistaken for fresh observation of a hidden state. Treating the action causally as an intervention resolves the problem in the studied setting. This is no universal explanation of hallucinations, but an important warning for systems that both reason and act.

The story thus returns to LawZero's starting question. Understanding the world means distinguishing explanations, evidence and one's own influence on events. ORI's useful next step is to test these distinctions in tasks with known mechanisms, then carefully increase complexity. Two artificial worlds, for example, can share observed correlations yet respond differently to intervention. Distinguishing them when the necessary evidence is available tells us more than another persuasive explanation. None of these papers alone proves the safety of the entire architecture. [T05](https://arxiv.org/html/2110.10819v1) [T04](https://arxiv.org/abs/2501.15488)

## Review limits

LawZero architecture materials and selected sections of the original paper were read; related research was checked at abstract and available methodological-section level, not fully audited. ORI proposals are separated from published results. This is not an exhaustive literature search or experimental replication.
