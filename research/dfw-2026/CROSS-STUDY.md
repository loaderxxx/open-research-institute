# Seven studies, four recurring measurement problems

[All studies](README.md) · [Source and review method](METHOD.md)

This is an ORI interpretation, not a pooled statistical result. The source domains and units are different. The value of comparing them is to notice an error that recurs even when the technology changes.

| Study | Observed or reported proxy | Stronger claim needing its own test |
| --- | --- | --- |
| [Shared sensing](newman-shared-sensing/README.md) | Localization or repeated observations | A verified road hazard, after ruling out surface features and device/vehicle effects |
| [Urban mobility](senseable-city-dubai/README.md) | Simulated exposure along a route | Real-world route uptake and exposure by local users under varying conditions |
| [Handback](aymerich-franch-handback/README.md) | Willingness to use, perceived agency or other ratings | Ability to recognise and correctly execute a requested transfer of control |
| [Protein prediction](deangeli-proteomizer/README.md) | Predictive association within a study sample | Calibrated, useful transfer to an independently collected cohort |
| [Avatar control](ishiguro-avatar-control/README.md) | Presence, liking or perceived human likeness | Correct attribution of the controller and understanding of which actions it can take |
| [AI foresight](inayatullah-ai-foresight/README.md) | Number or apparent variety of generated scenarios | Whether participants surface and retain distinct assumptions, including minority views |
| [AI energy](energy-of-useful-ai-work/README.md) | Electricity per generated response | Electricity used per quality-accepted artifact, including failed attempts |

## Shared lessons

1. **An informative proxy is not the endpoint.** Route shadow supports a prediction about exposure; it does not demonstrate uptake. Liking an avatar does not tell us whether participants know who controls it.
2. **Name what changed at transfer.** Tissue, place, sampling process or deployment load can change both the comparable input and the interpretation of a result. Before reading a cross-study ranking, check whether the comparator was frozen, refitted, simulated, or directly observed.
3. **Count the unobserved and failed cases.** Missing paired measurements, unverified road alerts, unsuccessful handbacks and rejected responses may be exactly the cases that matter most to a decision. A denominator excluding them answers a different question.
4. **Publish a readable limit alongside each result.** An outside reader should be able to tell what to trust without reading a private log. That is why every atlas links methods, evidence and unresolved questions separately.

Choose the next test by the cost of getting the conclusion wrong. Audit participant comprehension before generalizing user satisfaction to control, and audit local route assumptions or independent observations before recommending interventions. These are ORI priorities for future work, not claims that any test has already happened.

## Three proposed comparisons with clear baselines

| Question | Comparison | Main risk to the interpretation |
| --- | --- | --- |
| Does repeated sensing improve road-alert reliability? | Compare single versus repeated observations against the same independent labels. Count both false alerts and missed defects. | Repeated sensor or trajectory errors can make two readings look more independent than they are. |
| Do people retain meaningful control? | Keep the task constant while comparing interfaces. Score recognition of the controller, successful handback and recovery separately from stated preference. | Familiarity or more obvious prompts may explain better task performance without showing that users understood who was in control. |
| Does AI help produce useful foresight efficiently? | Review humans-only and AI-assisted outputs against one rubric; record accepted outcomes, review time and rejected attempts. Keep time and energy in separate units. | The cheapest attempt need not yield the cheapest accepted result, and a quality rubric can reward fluency over contradictory evidence. |

No comparison in this table has been run for this release. For participant-based work, verify the appropriate ethics, governance and consent requirements before recruitment.
