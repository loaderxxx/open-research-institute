# Evidence atlas: separating interpolation from transfer

**English** · [Русский](ATLAS.ru.md)

[Study overview](README.md) · [Appraisal checklist](RESEARCH-DESIGN.md)

## Core sources and adjacent evidence

| Source | Question it addresses | Boundary of the inference |
| --- | --- | --- |
| [Proteomizer preprint](https://doi.org/10.1101/2025.06.22.660946); archive-reviewed, independent direct fetch blocked | Motivates whether RNA-based estimates add information for protein abundance prediction compared with appropriate baselines. | Do not repeat disputed baseline values, assert a specific gain, or infer that a frozen predictor transferred independently without direct confirmation. |
| [T2Pdecoder](https://doi.org/10.1038/s41467-026-74209-3); [publisher in-press manuscript, relevant results sections checked](https://www.nature.com/articles/s41467-026-74209-3_reference.pdf) and [PMC text snippets](https://pmc.ncbi.nlm.nih.gov/articles/PMC13408446/) | Adjacent comparator for RNA-to-protein prediction. The manuscript reports fitting and evaluation splits for paired glioma data, an independent glioma test dataset, and separate training and evaluation in breast-cancer cohorts. | A held-out patient inside combined cohorts and model fitting for another tissue are not interchangeable with external evaluation of unchanged parameters. The exact split and which observations influenced fitting matter. |
| [Eraslan et al., Molecular Systems Biology](https://doi.org/10.15252/msb.20188513); publisher abstract and methods excerpts | Study of relative protein-to-mRNA amounts across 29 human tissues, illustrating why matched assays contain more information than RNA alone. | Tissue-level associations do not certify patient-level estimates. Limit results to the tissues, measurements and detectable entities in study. |
| [CPTAC Pan-Cancer Resource Working Group](https://doi.org/10.1016/j.ccell.2023.06.009); author abstract and [NCI study summary](https://proteomics.cancer.gov/news_and_announcements/pan-cancer-analysis-identifies-promising-therapeutic-targets) | Harmonized multi-cancer reference resource. Its use highlights the need to identify shared cohorts behind nominally distinct evaluations. | Harmonization does not make cohorts independently collected. Shared source participants, related specimens and shared preprocessing can compromise a claimed independent evaluation. |

## Cross-analysis

**Setting matters as much as score.** Peer comparison must hold target definition, tissue, assay context, held-out units, and scoring unit constant. A model scored across proteins within a person need not rank people correctly for a particular protein, even if the pooled correlation is high. Correlation also does not establish agreement of the absolute values.

**Cohort shift and missingness are distinct.** Changes in sampling or measurement can alter both the distribution of observed values and which proteins qualify for paired scoring. An analysis restricted to well-measured cases can appear to generalize better while covering fewer outputs. Report the denominator before comparing models.

**Related experiments are not replicas.** T2Pdecoder and multi-tissue ratio studies make the methodological question concrete; they cannot settle the Proteomizer preprint's disputed baseline values. A transparent independent appraisal begins by clarifying which claim the authors test, not by treating different numbers as a leaderboard.

**Evidence gaps:** Direct access to the Proteomizer preprint remained blocked in this pass. Findings attributed to the archive are not upgraded to independently checked. No reported numbers for Proteomizer and no inferred applications to clinical decisions.
