# Chandrasekaran et al. (2024) — JUMP Cell Painting pilot

[Русский](study-01.md)

**Access.** Checked 25 October 2026: the official catalogue entry `cpg0000-jump-pilot`; images and numerical files were not downloaded. This is an open dataset, assessed through its description.

The catalogue lists over 300 compounds and 160 genes investigated through knockout and overexpression in A549 and U2OS at two timepoints. It reports 12.3 TB split between images and numerical data, using protocol v2.5. This bounded pilot must be distinguished from the much larger JUMP dataset with a different identifier.

**ORI critical analysis.** The resource supports questions about how cellular morphology relates to perturbation responses. Its central analytical value is the possibility of comparing reproducibility across replicates as well as average phenotypes. Individual cells cannot automatically be treated as independent observations: cells in one well share their environment, treatment and acquisition conditions. More cells therefore do not substitute for independent experimental replicates.

A useful first analysis would select a small, well-documented set of conditions and test whether profile similarity survives withholding wells or batches. Training and evaluation should be separated at the appropriate experimental unit so that related images do not inflate accuracy. The contributions of cell size, cell number and segmentation quality should then be assessed separately because they may dominate more specific perturbation effects.

Even a reproducible morphological cluster does not establish a common biochemical mechanism. Different pathways may converge on a similar stress state. For ORI's tissue question, this dataset is particularly useful as a first exercise in measuring individual cells, but it does not itself explain spatial tissue organisation. Download decisions should follow inspection of file schemas, licensing and the required subset's size; the entire multiterabyte archive is unnecessary for an initial comparison. No published analysis was reproduced for this entry, and the proposed checks are an ORI reading and evaluation agenda rather than results obtained from the data.

**Source:** [Cell Painting Gallery, complete datasets](https://broadinstitute.github.io/cellpainting-gallery/complete_datasets.html).
