# Starter literature map: DNA and gene regulation

[Русская версия](RESEARCH_MAP.md) · [Programme README](README.en.md)

**Checked 24 October 2026.** The focus is regulatory elements, cell identity and the path from DNA variant to function, including single-cell and spatial data. This is a starter map, not a systematic review. Metadata, abstracts, publisher pages, profiles and available excerpts were checked; availability of a full text does not by itself mean it was read.

<!-- ori-toc:start -->
## Contents

- [Books](#books)
- [Papers and open resources](#papers-and-open-resources)
- [Historical landmarks](#historical-landmarks)
- [Researchers and groups](#researchers-and-groups)
- [Current directions and open questions](#current-directions-and-open-questions)
<!-- ori-toc:end -->

## Books

1. **Bruce Alberts et al., _Molecular Biology of the Cell_ (7th ed., 2022).** [W. W. Norton](https://seagull.wwnorton.com/molecularbiologycell). A reliable foundation in chromosomes, genome expression and its control, including updates on genomes and cellular organisation. The page and demo excerpts are open; the book and full text are paid.
2. **James D. Watson et al., _Molecular Biology of the Gene_ (7th ed., 2014).** [Pearson](https://www.pearson.com/en-us/subject-catalog/p/molecular-biology-of-the-gene/P200000003297/9780321762436). A detailed introduction to transcription, regulatory elements, genetic experiments and expression. Metadata are open; full text is paid, though some editions may be available through libraries.
3. **Maxine Singer and Paul Berg, _Genes & Genomes_ (1991).** [MIT Press / University Science Books](https://mitpress.mit.edu/9780935702170/genes-and-genomes/). A historically useful account of molecular mechanisms for using genetic information and experimental methods; its age means modern genomic technologies must be covered with newer sources. Metadata are available; print copies are paid or may be out of print.

## Papers and open resources

1. **Meenakshi S. Kagda et al. (2025), “Data navigation on the ENCODE portal”.** [Nature Communications, DOI](https://www.nature.com/articles/s41467-025-64343-9) · [data portal](https://www.encodeproject.org/data/). Describes the redesigned portal and a large open functional-genomics collection, including ChIP-seq, ATAC-seq, RNA-seq, Hi-C and single-cell data. Raw and processed data are public, but the resource spans different samples, protocols and project phases; check metadata and pipelines before analysis.
2. **Xie et al. (2025), “DNA-guided transcription factor interactions extend human gene regulatory code”.** [Nature, DOI](https://www.nature.com/articles/s41586-025-08844-z). Combines structural and genomic approaches to show how DNA sequence guides transcription-factor interactions and extends models of regulatory code. The article is open access; causal generalisation across all cell types and contexts requires further tests.
3. **Dorans et al. (2025), “Linking regulatory variants to target genes by integrating single-cell multiome methods and genomic distance”.** [Nature Genetics, DOI](https://doi.org/10.1038/s41588-025-02220-3). Combines single-cell multiome data and genomic distance to link non-coding variants to candidate target genes. The publisher shows a subscription preview; the abstract and some supplementary materials are open. An [author manuscript in PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12704523/) was located, but its full text was not read in this check. A variant-to-target link remains a prediction unless functional perturbation tests that locus.
4. **Sheth et al. (2026), “Mapping enhancer–gene regulatory interactions from single-cell data”.** [Nature Genetics, DOI](https://www.nature.com/articles/s41588-026-02695-8). The scE2G models use ATAC or multiome data and train on CRISPR perturbations of more than 10,000 element–gene pairs; the authors test them against independent eQTL/GWAS links and build cell-type maps. Open text, code and datasets are described in the paper. The authors note accuracy limits from assay depth and additional epigenomic data; these are computational predictions, not functional validation of every edge.
5. **Xi Fu et al. (2025), “A foundation model of transcription across human cell types”.** [Nature, DOI](https://www.nature.com/articles/s41586-024-08391-z). GET learns from chromatin accessibility and sequence and predicts expression across 213 cell types, including unseen types. The article is open access; predictions do not replace targeted experimental perturbation.

## Historical landmarks

- **1953 — DNA double-helix structure.** [Watson and Crick, Nature, DOI](https://doi.org/10.1038/171737a0). The molecular structure enabled a mechanism for copying hereditary information; authorship and contributions should be understood in the context of modern histories of science.
- **1961 — Jacob and Monod’s operon model.** [Original paper, Journal of Molecular Biology, DOI](https://doi.org/10.1016/S0022-2836(61)80072-7). Linked bacterial transcription regulation to regulatory sequences and proteins; it is a key model, while eukaryotic regulation is substantially more complex.
- **2003 — official announcement that the Human Genome Project was complete.** [NHGRI, 14 April 2003](https://www.genome.gov/11006929/2003-release-international-consortium-completes-hgp). The international consortium announced that it had achieved the project’s goals; in 2004 it published the description of the finished euchromatic sequence, [“Finishing the euchromatic sequence of the human genome”](https://doi.org/10.1038/nature03001). The reference became an important coordinate system, not a complete catalogue of variants, regulation or cell states.

## Researchers and groups

- **Robin H. van der Weide — UMC Utrecht, Center for Molecular Medicine.** [Institutional profile](https://research.umcutrecht.nl/researchers/robin-h-van-der-weide/) · [specific 2026 paper](https://doi.org/10.1038/s41467-026-72392-x). In Mikhail D. Magnitov, van der Weide et al., “Mapping functional non-coding variation in individual human genomes through haplotyping, multiomics, and deep learning” (2026), the authors combine haplotyping, multiomics and deep-learning predictions; they report validating hundreds of variant-disrupted TF-binding events and a rare variant affecting PIK3R5. This documents a specific group contribution, but does not universally validate predictions for all variants.
- **Jesse M. Engreitz — Stanford University / Broad Institute, Gene Regulation Observatory.** [Lab profile](https://engreitzlab.org/) · [scE2G 2026 paper](https://www.nature.com/articles/s41588-026-02695-8). His lab develops experimental and computational approaches to causal links between regulatory elements and genes; recent scE2G work compares single-cell predictions with CRISPR perturbations and genetic associations.
- **Evgeny Z. Kvon — University of California, Irvine.** [Institutional news on his group and 2025 work](https://devcell.bio.uci.edu/new-discovery-reveals-hidden-dna-element-that-helps-switch-on-genes-from-afar/). His team studies distal enhancers; in 2025 it described a “Range Extender” element that helps enhancers communicate with genes across long distances. This is a specific recent mechanistic study, but generalisation to other loci and tissues requires testing.

## Current directions and open questions

In 2025–2026, prominent directions include large single-cell maps of regulatory links and models that try to transfer predictions of expression and enhancer–gene links across cell types. Functional genomics continues to release experimental data through ENCODE. One distinction matters: chromatin accessibility and activity correlations help rank hypotheses, while CRISPR perturbation and orthogonal measurements are needed for causal tests.

Open questions include how well models transfer to new cell states; differences among donors, batches and technologies; identifying the specific target gene of a non-coding variant; and combining single-cell observations with spatial tissue context. “Cell identity” is not reducible to one transcriptome, and a predicted link does not always imply a necessary or sufficient mechanism.

**Suggested next reading:** begin with Alberts’ chapters on gene-expression control and cell analysis; then follow the chain from regulatory code (Xie et al.) to enhancer–gene and variant maps (Dorans; Sheth), checking predictions against ENCODE data and independent functional tests.

**Verified primary links:** [Alberts/Norton](https://seagull.wwnorton.com/molecularbiologycell), [Watson/Pearson](https://www.pearson.com/en-us/subject-catalog/p/molecular-biology-of-the-gene/P200000003297/9780321762436), [ENCODE portal](https://www.encodeproject.org/data/), [Xie et al./Nature](https://www.nature.com/articles/s41586-025-08844-z), [Dorans et al./Nature Genetics](https://doi.org/10.1038/s41588-025-02220-3), [Sheth et al./Nature Genetics](https://www.nature.com/articles/s41588-026-02695-8), [van der Weide/UMC Utrecht](https://research.umcutrecht.nl/researchers/robin-h-van-der-weide/).
