# LawZero and Scientist AI: understanding without pursuing goals of its own

[Русский](researcher-04.md) · [ORI programme](../README.en.md)

**Checked: 12 November 2026. Status: analytical profile of an external organization.** LawZero is not an ORI project or an established ORI partner. Library inclusion does not imply that its authors endorse our interpretations.

<!-- ori-toc:start -->
## Contents

- [Organization and research focus](#organization-and-research-focus)
- [The research idea](#the-research-idea)
- [Evidence and unresolved questions](#evidence-and-unresolved-questions)
- [Funding: commitments are not expenditure](#funding-commitments-are-not-expenditure)
- [ORI analysis and research questions](#ori-analysis-and-research-questions)
- [Reading and verification limits](#reading-and-verification-limits)
- [Primary sources](#primary-sources)
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

## ORI analysis and research questions

For ORI, the useful principle is a testable separation of hypothesis proposal, evidence evaluation and authorization to act. That separation merits study without assuming that the label “neutral” makes an implementation neutral. Even a correctly expressed probability depends on data, a world model and the wording of a question.

Proposed ORI questions, **not experiments already performed**:

1. Compare probability calibration and abstention under domain shifts and conflicting sources. High average accuracy does not replace testing rare harmful errors.
2. Test whether contextualization distinguishes evidence, opinion, quotation and instruction. Include cases where identical words have different evidential status depending on their source.
3. Evaluate generator and evaluator errors separately. Agreement may reflect a shared systematic error rather than independent confirmation.
4. For each safety claim, record assumptions, applicability limits and ways to detect violations. Compare computational cost, latency and scenario coverage.
5. Evaluate the complete system after tools are attached. An agent using a predictor's outputs does not automatically inherit its desirable behaviour.

The connection to digital continuity is limited: careful evidence provenance and belief updating are useful for digital models of people, but this programme does not establish mind uploading or preservation of subjective personal identity.

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
