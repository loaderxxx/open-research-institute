# Forecast protocol: can a dated probability beat a simple baseline?

[Track overview](README.md) · [Русский](FORECAST.ru.md)

**Design only.** No questions have been registered by ORI, no model or human forecasts collected, and no outcomes scored. We would forecast observable changes over 24 hours, 7 days or 30 days. A singularity date is deliberately not an endpoint.

### A question that can be settled

Example, not a live prediction: “Will the public [arXiv version history of Kwa et al.](https://arxiv.org/abs/2503.14499) show a new version timestamp in the interval from 00:00 UTC on 1 December 2026 up to, but not including, 00:00 UTC on 31 December?” A correction on another website is not a revision in this experiment. Check the public record seven days after the interval closes. If the history is unavailable or ambiguous then, mark **unresolved**, not **no**. This example measures publication activity, not scientific progress.

### Freeze the question before collecting estimates

1. Register each event, event family, horizon, cutoff, resolution source, deadline and missing-data rule. Select the question list before estimating its difficulty. Keep questions about releases, prices and capability results separate.
2. At the cutoff freeze one dated evidence packet. Give each forecaster the same materials and time budget; no later web search. Record exact model version, allowed inputs and human assistance. Obtain probabilities independently before sharing them. Keep a dated, append-only record; later revisions are separate forecasts.
3. Compare against **two baselines**: 0.5 throughout; and a historical frequency estimated from a reference class fixed in advance, using only earlier comparable windows. For example, if the event occurred in seven of 30 historical windows, a predeclared smoothed estimate is (7 + 1)/(30 + 2) = 0.25. These numbers illustrate the rule, not historical data. A human panel or public consensus is an additional comparator only if it covers the same question at the same cutoff.
4. Have an adjudicator who cannot see the submitted probabilities apply the registered resolution rule. Save the dated evidence and counts of yes, no, unresolved and abstained. If a method abstains, report coverage; do not silently drop its hardest cases.

### Score probability, not confidence of language

For a binary question, let **p** be the probability of yes and **y** the eventual outcome (0 or 1). The Brier score is **(p − y)²**; lower is better. Illustrative calculation only: with p = 0.70, “yes” scores 0.09 and “no” scores 0.49. The 0.5 baseline scores 0.25 either way. One correct answer does not establish skill.

Report mean score and paired differences against each baseline on the same resolved questions. Show counts, performance by horizon and the frequency of events among predictions in each probability band. State when a band is too small to interpret. Keep updates or correlated questions about one release in one event family; assess uncertainty by family rather than treating every update as independent. Beating 0.5 but losing to the historical frequency is not a forecasting advantage.

**What existing work establishes.** In the [ForecastBench authors' early comparison](https://arxiv.org/abs/2409.19839v5), expert humans beat the tested models on a 200-question subset. A [later system report](https://arxiv.org/abs/2511.07678) reports competitive performance on ForecastBench but falls below market consensus on a different question set. The comparator and the question population can change the conclusion. Neither result estimates how Lira Singularity will perform.

**Decision rule:** use the first pilot to learn which questions can be settled and how often forecasts add information. Do not change spending, permissions or production systems on the basis of a short winning streak.
