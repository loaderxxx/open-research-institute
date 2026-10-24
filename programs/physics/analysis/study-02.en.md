# Bérut et al. — Experimental verification of Landauer’s principle (2012)

[Русский](study-02.md) · [Programme](../README.en.md)

Checked: 24 October 2026. Initial source analysis; the author abstract in PubMed was read; publisher full text was not checked.

<!-- ori-toc:start -->
## Contents

- [What was studied](#what-was-studied)
- [Main significance](#main-significance)
- [Evaluating the evidence](#evaluating-the-evidence)
- [Relevance to ORI](#relevance-to-ori)
- [Sources](#sources)
<!-- ori-toc:end -->

## What was studied

The authors tested the heat cost of one-bit erasure using a colloidal particle in a controlled double-well potential. The two positions serve as memory states. According to the abstract, mean dissipated heat approaches the Landauer bound as the erasure cycle becomes longer. This is an experiment with a particular physical implementation of an information operation.

## Main significance

The programme-relevant step is from an argument about irreversibility to measurement on a controlled carrier. The reported result concerns average heat and a specified protocol, not identical dissipation on every individual run. Nor does it determine the energy cost of a software algorithm without an account of the hardware and operation sequence.

## Evaluating the evidence

Our questions for full reading are how particle trajectories were measured, how work and heat were reconstructed, how reliably erasure succeeded and how outcomes changed with cycle duration. Calibration and uncertainty estimates are needed. An abstract alone does not let us assess each stage of data processing or reproduce the numerical results.

## Relevance to ORI

The study helps distinguish a theoretical bound from an engineering objective. Approaching a bound slowly does not by itself answer the question of fast, reliable computation. A subsequent review should therefore examine duration, errors and control expenditure separately. It should also determine whether the accounting includes only a chosen degree of freedom or the whole apparatus. Those boundaries govern the permissible inference. The present text proposes reading criteria rather than a new efficiency estimate.

## Sources

- [Source 1](https://www.nature.com/articles/nature10872)
- [Source 2](https://pubmed.ncbi.nlm.nih.gov/22398556/)
