# Evidence atlas: localization, shared control and road condition

[Study overview](README.md) · [Proposed evaluation](RESEARCH-DESIGN.md)

## How evidence was checked

We began with the archive's Oxford brief and reviewed the relevant sections of the papers: place-recognition metrics, handover assumptions, warehouse evaluation and failures. We added two adjacent evidence strands: repeat-traversal localization and independently checked road anomalies. This is a targeted evidence map, not an exhaustive review or replication. Metrics below retain their original experimental units.

| Evidence | Method and comparison | Supported result | Boundary |
| --- | --- | --- | --- |
| [Churchill & Newman, 2013](https://ori.ox.ac.uk/media/5616/2013ijrr_churchill.pdf) · journal paper | Accumulates different visual observations of a place across runs, and attempts localization against prior observations alongside independent pose estimation. | Multiple experiences can represent scene changes on the studied routes. | Repeated visual alignment does not identify road defects or certify metric accuracy in a different city. |
| [Agarwal et al., 2025](https://ora.ox.ac.uk/objects/uuid%3A209f215d-3672-40b2-8efa-adf80bda1c36/files/rx346d6275) · journal paper, Sections 4–6 | Compares uncertainty-ranked radar retrieval with prior methods and ablations on Oxford Radar RobotCar data. Uses GPS-derived location references offline. | The authors report that rejecting uncertain queries improves success among the remaining queries, at the cost of route coverage. | The full text confirms the main 25 m match radius; a comparison additionally uses a 50 m false-positive boundary. Neither is an online collision-avoidance tolerance. |
| [Robinson et al., 2026, Robot-Relay](https://doi.org/10.1007/s10514-025-10227-2) · journal paper | Repeated traversals by one office robot guided by six uncalibrated cameras, with handover links learned across overlapping views. | An office demonstration establishes that geometric camera calibration is not necessary for this architecture in the tested environment. | Handover still needs a learned camera graph and usable overlapping observations. No comparison to an independently redundant installation. |
| [Robinson et al., 2026, Multi-Robot Planning and Control](https://arxiv.org/html/2606.06762v1) · preprint, Sections 4–6 | Four heterogeneous robots, 30 warehouse cameras, a 45-minute run, and separate human teleoperation trials. Component experiments compare image-space prediction against mean and nearest-neighbor baselines. | Authors report 76 missions and four interventions, including two collisions and two perception-related halts. This is useful evidence of feasibility and failure types. | One warehouse and one short long-run trial. Visual distinctiveness, controller tuning and constant-speed assumptions constrain transfer. |
| [Eriksson et al., 2008, Pothole Patrol](https://www.cs.purdue.edu/homes/bb/2020-fall-cs590bb/docs/ot/mit-madden-balakrishnan-pot-hole-p2-mobisys-2008.pdf) · conference paper | Instrumented taxis, manually labeled passes, clustering across repeated observations and visits to 48 high-confidence candidate sites. | Repeat vibration events can be used to prioritize where to inspect. | The spot-check is conditional on repeated detections and does not establish recall over all streets. Dedicated sensor setups do not validate arbitrary smartphone mounts. |

## Cross-check: warehouse timing

With no background robots, Table 1 reports 110.8 s for autonomous operation (three trials) and 109.2 s for teleoperation (one trial), a difference of roughly 1.5%. Adding four seconds to the tabulated mean yields roughly 5.1%; subtracting four seconds yields about −2.2%. The narrative's with/without-planning distinction therefore depends on whether the table already includes that pause. We leave that unresolved rather than selecting a more favorable estimate. With two other robots moving, both methods have three listed trials, not one; the means are 117.7 and 113.0 s, approximately 4.2% apart. These tiny, setup-specific comparisons do not establish a general ranking. [Preprint, §5.3 and Table 1](https://arxiv.org/html/2606.06762v1#S5.SS3)

## Cross-analysis: what agreement can and cannot establish

- **Recognition ≠ control.** The radar study's outcome is a nearby retrieved place, while the warehouse outcome is safe-looking task execution and its exceptions. A high retrieval score does not make a corridor safe to release.
- **Reuse ≠ redundancy.** Off-board infrastructure may save duplication, but several views depending on one network or clock are not independent witnesses against a shared failure.
- **Repeated observations ≠ independent observations.** Two passes by the same vehicle over the same fixed joint can generate consistent false positives. Road-defect classification needs matched negative controls and independent adjudication.
- **A pilot proposal ≠ a commercial result.** No cited study demonstrates how an industrial Dubai fleet handles reserved space after a sensing failure. Treat controlled simulation as its own evidence class and stop short of external deployment claims.
