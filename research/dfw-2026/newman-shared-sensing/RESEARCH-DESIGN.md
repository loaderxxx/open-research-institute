# Proposed tests: safe abstention and credible road alerts

**EN** · [Русский](RESEARCH-DESIGN.ru.md)

[Study overview](README.md) · [Evidence atlas](ATLAS.md)

These are separate, unrun studies. The yard test is simulation-only. The road concept is a retrospective maintenance triage experiment, not a routing or driver-safety system.

## A. Shared-sensing yard simulation

**Primary question.** If a simulated robot stops after a sensor outage, can holding its last reservation until there is fresh evidence reduce incorrect releases without making the yard unusable?

**Design.** Freeze a simple synthetic yard graph, task schedule, random seeds, observation events and independent simulator ground truth. Compare nominal reservations, global hold after degraded sensing, and an explicit three-state occupancy policy (clear, occupied, unknown) whose unknown regions stay reserved. Keep routes and task schedules identical. Test independent sensor loss and common-mode outages separately, including loss during handover and stale observation after recovery. Evaluate on held-out layouts as well as designs used to tune the policies.

**Report.** Count false clear decisions, conflicts, unnecessary holds, intervention requests, clearance delay, and missions per robot-hour. Pair results by scenario seed and show uncertainty across seeds and layouts. Any timeout that cannot establish a clear state should be counted as unresolved, not dropped. The hypothesis fails if false releases do not improve at comparable throughput or improvements disappear on held-out layouts. Simulation does not authorize control of real robots.

## B. Road Surface Alerts retrospective pilot

**Primary question.** Does repeat evidence help an operator choose inspection sites beyond what a single vibration event supports?

**Design.** With an authorised participating fleet, observe normal trips on two preselected routes; do not direct drivers toward hazards or issue in-vehicle alerts. Compare a single-event baseline, repeated observations from the same vehicle, and corroboration across vehicles. Use the same coverage map for the comparisons. Match candidates against a blinded maintenance inspection; sample known joints, speed humps and ordinary road segments as controls. Keep segments and dates used for tuning separate from evaluation, and record mount and vehicle variability. Treat changes after maintenance as new observations rather than grouping them with pre-repair readings.

**Report.** Show inspection yield, false positives by control class, held-out sensitivity where inspection coverage supports it, geographic coverage and reviewer workload. Label unevaluated segments as unknown. Discard journey-level traces once edge-level features have served the approved evaluation purpose; publish only aggregates. Decide whether to proceed based on blinded inspection yield at comparable coverage, not on vibration agreement alone.
