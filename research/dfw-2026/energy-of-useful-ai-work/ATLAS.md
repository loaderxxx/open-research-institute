# Evidence atlas: energy per accepted result

[Study overview](README.md) · [Proposed evaluation](RESEARCH-DESIGN.md)

## What the festival material actually establishes

[Prototypes for Humanity's short-papers catalogue](https://prototypesforhumanity.com/latestnews/press/2026-short-papers) is a record of the organiser's listings, not a substitute for the unavailable manuscripts. [Oriva's catalogue entry](https://prototypesforhumanity.com/prototypes/oriva) is likewise a prototype description. It does not furnish the clinical validation necessary to turn a prototype claim into a claim about patient benefit. These are separate examples of boundaries between a listing, a working artifact and a validated outcome. Neither is evidence for a particular electricity saving.

## Four adjacent measurement approaches

| Primary source; extent checked | Unit and boundary | What the comparison does not establish |
| --- | --- | --- |
| [Chung et al., ML.ENERGY, §§2–3](https://arxiv.org/html/2505.06371v2); methods read | GPU telemetry under realistic serving configurations; for text, average request energy inferred from steady-state token rate and average generated length; for jointly batched diffusion, energy divided across batch members. | GPU telemetry is not full facility electricity. The average is not direct per-request metering, and steady-state estimates do not describe an intermittently idle service. |
| [Tschand et al., MLPerf Power, §§III–IV](https://arxiv.org/html/2410.12032v1); methods read | Whole tested system within a scale-specific, documented instrumentation envelope; execution-phase focus. Cooling and network attribution at large scale require care. | Whole-system does not automatically mean full production pipeline or data-center overhead. Matching a workload standard is not the same as satisfying a domain-specific editorial rubric. |
| [Luccioni, Jernite & Strubell, FAccT 2024](https://doi.org/10.1145/3630106.3658542); [author methods](https://arxiv.org/html/2311.16863) read | Repeated sequential inference runs across benchmark tasks comparing general-purpose and task-specific models; normalization per 1,000 inferences. | Useful within tasks and settings evaluated. Not a serving-load comparison and not a rework or acceptance audit; results cannot be assigned indiscriminately to production deployments. |
| [Energy use of AI inference, efficiency pathways, and test-time scaling](https://www.sciencedirect.com/science/article/pii/S2542435126001145); publisher text checked | Estimates query energy from throughput, equipment power and operational assumptions; useful for scale and sensitivity analysis. | Model-based estimates are not measurements of an arbitrary API. A median in their scenarios does not determine this workflow's electricity use. |

## Cross-analysis: align the boundary before comparing a number

1. **Capacity vs. utility:** Requests per watt addresses capacity; accepted artifacts per kWh addresses cost per successful outcome. A short incorrect answer can look efficient under the first metric and expensive under the second.
2. **Allocated vs. observed energy:** Aggregate electricity from a calibrated meter is an observation. Assigning that energy to a single request in a shared batch is a model. Report the two separately and state how idle load is treated.
3. **Steady state vs. actual workload:** A saturated queue amortizes work differently than a sporadic service. Report concurrency, batching, warm-up and arrival regime before comparing results.
4. **Energy vs. emissions:** Electricity is measured in Wh or joules. Emissions require additional location, time and carbon-intensity assumptions; keep them separate or explicitly unavailable.

**Remaining gap:** The archive flagged its two benchmark references as abstract-only. The methods in §§2–3 and §§III–IV are now checked for the pinned versions above; catalogue-only claims still have catalogue-only status. No ORI outcome or numeric ranking follows from those checks.
