# Research design: evaluate reversible delegation

English · [Русский](RESEARCH-DESIGN.ru.md)

[Study introduction](README.md) · [Evidence atlas](ATLAS.md)

**Status: proposed, not run.**

Use a local simulated concierge with a fixed fictional programme. Tasks cover finding a session, building an itinerary, preparing an unsent mock message, and changing a pending action. Record software state changes without personal data; all external actions remain disabled.

| Condition | Ownership shown | Intervention |
| --- | --- | --- |
| A: review at end | General assistant identity | Standard review before mock execution |
| B: ownership visibility | Active stage and who owns the next step | Same review and controls as A |
| C: visibility plus handback | Same stage/owner label as B | Persistent stop and explicit reassignment, with visible acknowledgment |

A versus B isolates label placement; B versus C isolates controls as an interface bundle. Keep model, language options, tasks and substantive suggestions identical. Counterbalance fixed scenarios if a later adult study is independently approved; use held-out synthetic scenarios first. Other design choices, such as ordering and label phrasing, should be tested separately.

## Failure cases and scoring

- **Stale delivery:** after cancellation, a late worker result cannot execute or recreate a pending action. Log requested, acknowledged, canceled and late-result-discarded events.
- **Ownership conflict:** mixed AI drafting and human approval. Score who wrote the content and who can execute separately.
- **False stop:** user thinks an operation was canceled when the mock system still has it pending. Prime metric is validly canceled operations over cancellation attempts; report false confirmations separately.
- **Language switch:** mirror tasks in a second language, checking functional equivalence before comparing conditions.

Primary endpoints: correct owner/state identification and successful cancellation before the mock deadline. Secondary endpoints: completion accuracy, intervention latency, false stops and user-reported burden. Report denominators and uncertainty per condition and scenario; high completion cannot offset unsafe cancellations. With human participants, preregister a minimum detectable effect or treat as exploratory, report order effects and do not infer clinical value or Dubai-wide preferences.
