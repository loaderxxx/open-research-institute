# Proposed evaluation: energy per accepted artifact

[Overview](README.md) · [Evidence atlas](ATLAS.md)

**Status:** proposal only; not executed. Compare two configurations on ordinary source-grounded summarization tasks using a fixed set of public, non-sensitive documents.

## Predeclare what counts

- A unit is one assigned task and its eventual artifact, not one API call. Keep failed tasks in the sample.
- A result passes only if it is factually supported by the assigned documents, cites the relevant passages, meets the requested format and introduces no unsupported consequential claim. Use blinded independent review, report disagreements and adjudicate them with a written rule.
- Give both configurations the same task list, input material, deadlines and retry budget. Use a balanced order across tasks and repeat with the same arrival trace. Evaluate a low-load regime separately from a steady-load regime.
- A trial ends on acceptance, elapsed deadline, or exhaustion of its retry allowance, whichever comes first. Record timeouts, empty results and abstentions explicitly.

## Instrumentation and reporting

For where measurement is possible, record the meter boundary (e.g., accelerator telemetry or host wall power), sampling, warm-up, idle window and clock alignment. Use the same boundary for both configurations. Report gross power and, if presented, idle-adjusted power separately. Include in-boundary generative retries and verification calls; label labor and any unmeasured electricity as outside the boundary. If only provider token counts are available, report token counts, not observed watt-hours.

Report total in-boundary energy, energy per attempt, energy per assigned task, acceptance and abstention rates, latency distribution, and energy per accepted artifact. The latter is total in-boundary energy across successful and unsuccessful tasks divided by accepted artifacts. If none pass, report it as undefined, not zero. Estimate uncertainty by paired resampling at task level, not at token or retry level; report counts by task category.

**Illustrative arithmetic, not measurements:** A uses 18 Wh across 30 assigned tasks and delivers 12 accepted outputs: 1.50 Wh per accepted artifact. B uses 24 Wh and delivers 24 accepted outputs: 1.00 Wh per accepted artifact. A used less electricity overall but delivered half as many acceptable artifacts. Report both facts; choosing B would be an operational decision subject to reliability, budget and latency requirements, not a universal sustainability claim.
