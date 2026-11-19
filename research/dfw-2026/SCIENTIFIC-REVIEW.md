# What can a researcher take from these seven studies?

[Collection](README.md) · [Русский](SCIENTIFIC-REVIEW.ru.md) · [Review method](METHOD.md)

**The clearest Dubai finding is about a decision people *say* they would accept, not one they can safely delegate.** The strongest local route result is about routes a model selects, not routes pedestrians choose. Both are worth citing for the narrower claim. Neither justifies deployment. Below, **direct** means the authors observed the stated outcome, **indirect** means a model or a different endpoint stands in for the decision, and **proposal** means a test ORI has not run. These labels apply to claims, not to the quality of entire papers. This is an editorial appraisal, not independent peer review or author endorsement.

### 1. Can the user take control of a service avatar?

**Direct: preferences.** In an English-language quota survey of 1,001 Dubai residents, 72.5% agreed with avatars providing information versus 43.2% for handling complaints. These are two items answered by the same sample, not independent groups or a causal effect. No one had to interrupt an avatar to complete the survey. [Aymerich-Franch et al., §2.3 and Table 3](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2025.1719342/pdf).

**Proposal:** Give users a reversible task and a reason to stop it; count correct interruptions before completion, not just clicks on “stop.” [Handback design](aymerich-franch-handback/RESEARCH-DESIGN.md).

### 2. Can people tell who is operating the avatar?

**Direct: presentation, not provenance.** Kodani et al. randomly assigned 62 people to an android lecture or a video lecture. Both were prerecorded. Some self-ratings favored the android; the nine-question quiz did not show a statistically significant difference. Neither result tests live-versus-recorded recognition. [Kodani et al., §§4.1–4.5](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2024.1469626/pdf).

**Proposal:** After a mode change, ask separately “Who produced the last message?” and “Who could stop the next action?” Record confidently wrong answers, not just average accuracy. [Avatar design](ishiguro-avatar-control/RESEARCH-DESIGN.md).

### 3. Is the shadier Dubai route actually usable?

**Indirect: modeled outdoor exposure.** Wen et al.'s Table A.1 gives the sun-exposed share of route length. Averaging its four station means equally gives **45.38% on the shortest route versus 36.54% on the shadiest**: about **8.84 percentage points** less, for about 1.3% extra total distance. This is a comparison of modeled routes, not measured heat dose, route uptake or a guarantee for a specific hour. The paper analyzes indoor links separately. [Wen et al., §3.1 and Table A.1](https://senseable.mit.edu/papers/pdf/20250911_Wen-etal_WalkingSmart_CEUS.pdf#page=22).

**Proposal:** Before studying uptake, check which suggested paths remain accessible at the advertised time. An inaccessible entrance invalidates that recommendation even if its shade estimate is exact. [Urban route design](senseable-city-dubai/RESEARCH-DESIGN.md).

### 4. When do repeated detections justify an inspection?

**Direct: confirmation among flagged sites.** In a Boston taxi study, field inspection found potholes at 39 of 48 sites with at least four detections. That is an answer about sites selected by the detector. It does not say what fraction of all potholes were missed, or how a different vehicle and road network would perform. [Eriksson et al., Table 6](https://people.csail.mit.edu/hari/papers/p102.pdf). The Oxford warehouse preprint tests a **different** endpoint: 76 robot missions in one 45-minute run required four interventions, two following collisions. That demonstrates operation with supervision, not safe unattended use. [Robinson et al., §5.2](https://arxiv.org/html/2606.06762v1#S5.SS2).

**Proposal:** Inspect a sample of unflagged segments as well as alerts. If false negatives cannot be estimated, use the output as an inspection shortlist, not a road-safety rating. [Shared sensing design](newman-shared-sensing/RESEARCH-DESIGN.md).

### 5. Does an RNA-to-protein prediction travel between tissues?

**Direct: a reported failure to transfer.** In his Cambridge thesis, Deangeli reports better agreement with measured protein abundance within represented human tissues, but the gain did not carry over to the novel tissues or protocols tested. This is the same project as the Proteomizer preprint, not a second replication. The negative finding does not establish that no other model could generalize. [Deangeli, project summary §4.1 and transfer analysis §4.5](https://api.repository.cam.ac.uk/server/api/core/bitstreams/13cb0dec-3766-41e1-9160-0b7aa7c14ce2/content).

**Appraisal question:** Were cases from the external cohort used to refit the model, and did the comparator score the same measured proteins in the same people? Without those answers, do not rank the two scores. [Cohort appraisal](deangeli-proteomizer/RESEARCH-DESIGN.md).

### 6. Can an AI help a group agree without erasing dissent?

**Direct, but for different tasks.** Participants preferred statements written by an AI mediator in [Tessler et al.'s consensus experiment](https://pubmed.ncbi.nlm.nih.gov/39418380/). In a separate aggregation task, [Zhu et al., preprint v5](https://arxiv.org/abs/2510.05154v5), report underrepresentation of minority positions in summaries. Seeking a statement people endorse and preserving all distinct objections are different objectives; these findings are not a head-to-head comparison.

**Proposal:** Score agreement separately from whether every documented objection survives with its meaning intact. Neither study validates AI-facilitated futures workshops. [Foresight design](inayatullah-ai-foresight/RESEARCH-DESIGN.md).

### 7. Which workflow uses less electricity for useful work?

**Indirect: energy per generated request.** For text generation, ML.ENERGY estimates average request energy from a saturated serving interval and average output length. It does not meter the electricity needed to produce a result that an editor accepts. [Chung et al., §3.2, Eq. 2](https://arxiv.org/html/2505.06371v2#S3.SS2).

**Proposal:** Predefine acceptance, then divide total measured electricity for all attempts by the number of accepted results. Hold the metering boundary and task mix fixed; report reviewer time separately. If no results pass, report the energy spent and zero accepted, not zero energy per success. [Energy evaluation](energy-of-useful-ai-work/RESEARCH-DESIGN.md).

**First decision:** Prioritize the time-specific route-access audit for a first local study: it tests a concrete assumption without first needing to infer preferences or recruit participants. For a service-avatar study, test handback and controller recognition together, but report them as separate outcomes. These are ORI's priorities, not results. [Compare the seven questions](CROSS-STUDY.md).
