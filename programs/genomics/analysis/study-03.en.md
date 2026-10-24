# Dorans et al. (2025) — Linking regulatory variants to target genes by integrating single-cell multiome methods and genomic distance

[Русский](study-03.md)

**Access.** Checked 25 October 2026: abstract and public extended-data captions in the Nature Genetics subscription preview. The publisher's main text was not read. A PMC author manuscript was located, but direct access displayed CAPTCHA; full reading is not claimed.

pgBoost combines regulatory-link scores with genomic distance and trains on eQTL data. The authors report improved enrichment of evaluation sets relative to individual approaches and investigate cell-type specificity. It ranks candidate variant–gene links rather than experimentally validating every link.

**ORI critical analysis.** A major lesson is the need to compare complex models with a simple distance baseline. If molecular features do not improve that comparison, biological plausibility alone does not establish predictive usefulness. Distance can also encode how positive examples were selected. Evaluation should therefore compare similar distance distributions and avoid collapsing proximal and distal links into one headline number.

Enrichment among known links and calibrated probability are different properties. A score can rank candidates well without representing the literal probability of a causal effect in a new tissue. Independence between training and evaluation also matters: shared loci, donors or annotation sources can make performance appear overly favourable. The subscription preview does not permit complete verification of all splitting and processing details.

For ORI, the method is useful as a bridge between multimodal observations and selection of testable hypotheses. The next step is to compare several predictions with intervention evidence in matching cellular contexts while retaining alternative target genes. Cases where the nearest gene outperforms the complex model should be documented separately. The map's statement that full text is available from the publisher needs qualification: open captions, code or tables do not equal access to the entire article. This entry preserves that boundary and treats candidate prioritisation as a distinct stage from causal validation.

**Sources:** [Nature Genetics subscription preview](https://doi.org/10.1038/s41588-025-02220-3); [PMC author-manuscript record](https://pmc.ncbi.nlm.nih.gov/articles/PMC12704523/).
