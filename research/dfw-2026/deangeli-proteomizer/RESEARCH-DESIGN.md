# Appraisal checklist: validation claims for matched human abundance studies

[Overview](README.md) · [Evidence atlas](ATLAS.md)

**Status:** reading and audit framework, not an experimental or clinical protocol.

## Before accepting a result

| Claim | Evidence to request from the paper | Red flag |
| --- | --- | --- |
| Internal prediction | Participant grouping, biological replicate treatment, training/validation/held-out flow diagram | Aliquots or related specimens split across train and test |
| New cohort, same setting | Cohort collected independently and exclusion of overlap with training sources | Different paper names refer to the same consortium participants |
| Transfer to a new setting | Explicitly say whether weights, thresholds, calibration or measurement transformations were changed using target information | Refitting labelled as unchanged deployment |
| Numerical improvement | Same inputs, same held-out participants, same scoring denominator and uncertainty for both methods | Methods scored on different subsets or pooled metrics with no stratification |
| Predictive coverage | Eligibility denominator, measured/missing counts and error reported by subgroup | Performance on detectable cases presented as whole-cohort performance |

## Example of a proper conclusion

“On dataset A we observed within-cohort predictive association; an analysis on dataset B used target-cohort fitting and does not demonstrate frozen transfer. The reported error excludes entities without paired measurements.” That supports a much narrower claim than “accurately measures proteins in new populations.”

For a new source, log title and study version, application population, datasets and overlap, data access conditions, comparison baseline and result status. Flag papers that only report an aggregate correlation, and separate contextual references from evidence for the actual predictor. If validation details remain inaccessible, mark the claim unresolved rather than inferring the method from the abstract.
