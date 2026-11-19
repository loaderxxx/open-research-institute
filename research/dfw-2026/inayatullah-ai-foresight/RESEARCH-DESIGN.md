# Research design: audit a foresight assistant

**English** · [Русский](RESEARCH-DESIGN.ru.md)

[Study introduction](README.md) · [Evidence atlas](ATLAS.md)

**Status: proposed, not run.**

Use fictional municipal-grant workshops in twelve versioned transcripts. A policy-maker advocates faster intake, an applicant flags language accessibility, a case worker flags exception queues, and a civil society observer opposes automated exclusion. Mark clauses as directly stated, paraphrasable, unresolved or withdrawn. Keep the expected exact count of distinct objections separate from the number of times speakers repeat them.

## Comparisons

1. Baseline: generic source-only summary.
2. Attribution: summary with speaker/span IDs and separate dissent.
3. Layered: attribution plus CLA categories, explicitly marking analyst inference versus original statements.

Hold source access, model, token budget and document format limits constant where possible. Ablate order and language independently; evaluate shuffled input and matched translation versions. Fixed sentences expressing the opposite of a consensus claim and later withdrawals are challenge cases, not real sentiments.

## Scorecard

| Outcome | Operational definition |
| --- | --- |
| Correct attribution | Published claims with the correct role, stance and supporting span, divided by all claims attributed to participants. |
| Minority objection recall | Distinct reference objections retained, divided by distinct objections established before model runs. |
| False consensus | Any group-agreement claim contradicted or unsupported by the transcript, measured per transcript and per agreement claim. |
| Translation fidelity | Preservation of objection polarity, agency and uncertainty, judged independently of style. |
| Withdrawal fidelity | A removed position is no longer treated as current on rerun; if approved audit logs require it, historical existence is labeled separately. |
| Scenario boundary | Model suggestions correctly labeled as hypothetical instead of described as participant contributions. |

Two independent raters work blind to condition where practicable; report disagreements, adjudication and uncertainty. Run repeated outputs for each transcript but use transcript-level units for comparisons. Publish only fictional benchmark fixtures and scoring/disagreement rules. A favorable synthetic result would justify designing a participant-approved study, not deploying a tool as a representative of a community.
