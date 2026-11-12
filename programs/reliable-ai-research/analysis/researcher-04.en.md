# LawZero and Scientist AI: understanding without pursuing goals of its own

[Русский](researcher-04.md) · [ORI programme](../README.en.md)

**Checked: 12 November 2026. Status: analytical profile of an external organization.** LawZero is not an ORI project or an established ORI partner. Library inclusion does not imply that its authors endorse our interpretations.

Imagine an AI that can explain why a bridge might fail, but has no objective of persuading anyone to build or demolish it. The distinction sounds small until advice becomes action. LawZero starts from this boundary: perhaps making AI more capable need not mean giving it ever stronger incentives to reshape the world.

This is not a description of an already perfected machine. It is a research programme with an unusually direct question: can an AI understand more while wanting less?

<!-- ori-toc:start -->
## Contents

- [Organization and research focus](#organization-and-research-focus)
- [The research idea](#the-research-idea)
- [Evidence and unresolved questions](#evidence-and-unresolved-questions)
- [Funding: commitments are not expenditure](#funding-commitments-are-not-expenditure)
- [Why this matters for a scientific institute](#why-this-matters-for-a-scientific-institute)
- [Reading and verification limits](#reading-and-verification-limits)
- [Primary sources](#primary-sources)
- [Continue the story](#continue-the-story)
<!-- ori-toc:end -->

## Organization and research focus

LawZero is a Montréal-based nonprofit founded by Yoshua Bengio. Its launch was announced on 3 June 2025 after incubation at Mila. It develops technical approaches to the safety of highly capable AI. Despite its name, it is not a legal-services product. Its main direction, Scientist AI, concerns separating prediction from goal-directed intervention in the world. [Official launch announcement][1].

**Scientist AI** at LawZero should not be confused with **The AI Scientist** or other agents that automate research workflows. Similar names do not establish common architectures, teams or results. The initial LawZero preprint appeared in February 2025; it examines agency risks and a possible safer approach, rather than demonstrating a finished general-purpose scientist. [Initial paper][2].

## The research idea

The February 2026 overview describes a hypothesis generator paired with a neutral probabilistic evaluator. Contextualized data should distinguish a claim about the world from the fact that a particular person made that claim. Evaluator training is intended not to reward the downstream consequences of predictions. Proposed applications include research assistance and oversight of agentic systems. The authors identify accurate evaluation of counterfactual consequences as an open problem. This is a development direction, not a ready-made guarantee. [Architecture overview][3].

## Evidence and unresolved questions

*Safety from Honesty in a Disinterested AI Predictor* offers a conditional mathematical argument. Its scope primarily concerns dangerous goal-directed behaviour arising within the Predictor, and it relies on assumptions about training dynamics and the rarity of dangerous predictors. Asymptotic accuracy is not established accuracy for a finite model. Assumptions still need justification in concrete settings. The limitations and future-work sections distinguish this argument from safety of an entire deployed system. [Publication record][4], [PDF, selected sections][5].

This cannot be translated into claims that AI is already absolutely safe, all attacks are prevented, or the model makes no mistakes. Scaffolding, tools and users introduce additional risks. A study of dropout and Gaussian-noise detection in several models' activations is a separate empirical direction: detecting an intervention neither proves consciousness nor tests the complete Scientist AI system. [Empirical publication][8].

## Funding: commitments are not expenditure

On 16 September 2026, Canada's government announced planned support of **CAD 150 million from Canada and EUR 100 million from Germany**. The German contribution is subject to European Commission notification. We retain separate currencies: adding them without an exchange rate and date would be misleading. These are not an audited organizational budget or proof that the full amount has been disbursed. [Primary government announcement][6].

LawZero describes the joint commitment as **up to CAD 300 million**. This is the organization's formulation, not our independent estimate of cash received. Its announcement also describes plans for Canadian computing infrastructure and expansion into Berlin; an intention should not be presented as an accomplished outcome. [LawZero announcement][7].

## Why this matters for a scientific institute

Imagine a research assistant that proposes an elegant explanation, then evaluates it, then writes the final report. If all three stages repeat the same mistake, the polished report can hide the absence of an independent check. LawZero makes an important question visible: could generating an idea and judging the evidence for it be separated more fundamentally?

For ORI the relevant connection is therefore reliable scientific work. We want to understand when an evaluator can distinguish evidence from quotation, recognise conflicting sources and admit that it cannot decide. A model agreeing with another model is not enough: they may share the same blind spot. The useful test is whether the proposed separation changes measurable errors under unfamiliar conditions.

There is also a practical boundary. A careful adviser can still be placed inside a careless laboratory. Once a system can run code, modify data or initiate experiments, the permissions and checks around it matter alongside its predictions. ORI has not yet carried out the experiments discussed in these essays; they are proposed ways to test the ideas rather than achievements to advertise.

## Reading and verification limits

We read official announcements, the HTML architecture overview, the original preprint's bibliographic record and abstract. In the 40-page technical PDF we examined the introduction and selected sections on assumptions, limitations and future work, particularly pages 20 and 28–30. We read the empirical paper's introduction. No independent proof audit, experimental replication, financial audit or source-code audit was performed. Peer-review status is not asserted without separate verification. This is an AI-assisted analytical profile, not an original ORI experimental result.

## Primary sources
1. [Launch announcement / Объявление о запуске](https://lawzero.org/en/news/yoshua-bengio-launches-lawzero-new-nonprofit-advancing-safe-design-ai)
2. [Initial Scientist AI preprint / Исходный препринт](https://arxiv.org/abs/2502.15657)
3. [Architecture overview / Обзор архитектуры](https://lawzero.org/en/publication/scientist-ai-safe-design-not-desiring)
4. [Safety argument / Аргумент безопасности](https://lawzero.org/en/publication/safety-honesty-disinterested-ai-predictor)
5. [Technical PDF / Технический PDF](https://lawzero.org/sites/default/files/publications/99/safety-honesty-disinterested-ai-predictor_4.pdf)
6. [Canada–Germany announcement / Объявление Канады и Германии](https://www.canada.ca/en/innovation-science-economic-development/news/2026/09/canada-and-germany-invest-in-lawzero-to-build-a-new-approach-to-safe-sovereign-ai.html)
7. [LawZero funding announcement / Финансирование: версия LawZero](https://lawzero.org/en/news/lawzero-receives-commitment-300m-joint-funding-canada-and-germany)
8. [Activation perturbation study / Исследование вмешательств в активации](https://lawzero.org/en/publication/language-models-recognize-dropout-and-gaussian-noise-applied-their-activations)

[1]: https://lawzero.org/en/news/yoshua-bengio-launches-lawzero-new-nonprofit-advancing-safe-design-ai
[2]: https://arxiv.org/abs/2502.15657
[3]: https://lawzero.org/en/publication/scientist-ai-safe-design-not-desiring
[4]: https://lawzero.org/en/publication/safety-honesty-disinterested-ai-predictor
[5]: https://lawzero.org/sites/default/files/publications/99/safety-honesty-disinterested-ai-predictor_4.pdf
[6]: https://www.canada.ca/en/innovation-science-economic-development/news/2026/09/canada-and-germany-invest-in-lawzero-to-build-a-new-approach-to-safe-sovereign-ai.html
[7]: https://lawzero.org/en/news/lawzero-receives-commitment-300m-joint-funding-canada-and-germany
[8]: https://lawzero.org/en/publication/language-models-recognize-dropout-and-gaussian-noise-applied-their-activations

## Continue the story

To follow the idea inside the model, read [how Scientist AI separates explanations from evaluation](../reading/lawzero-architecture.en.md). The next essay asks [what would count as evidence that this is safe](../reading/lawzero-assurance.en.md). We then return to the laboratory in [AI as a scientific assistant](../reading/lawzero-cross-research.en.md), before widening the view to [the international search for reliable AI](../reading/safe-ai-landscape.en.md).

[GitHub: source / исходники](https://github.com/loaderxxx/open-research-institute/tree/work/chatgpt/ori-lawzero-deep-20261112/programs/reliable-ai-research)
