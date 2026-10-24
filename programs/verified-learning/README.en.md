# Learning from Verified Results

[Русский](README.md)

**Central question:** Which data and verification methods actually help models learn?

We study published work on training with verified answers, intermediate solution steps, and synthetic data. Three questions are connected here: what exactly counts as verified, how a training signal is constructed, and how well a result transfers to new tasks. The focus is on distinctions between checking a final answer and a process, selecting data and achieving real generalization.

## Program questions

- When does checking a solution step tell us more than a correct final answer?
- What are the limitations of automatic verifiers and teacher explanations?
- Under what conditions does synthetic data help, and when does it change or narrow the distribution?

## Reading library

Start with the general review, then continue to the two standalone in-depth reviews. This is the first selected level of topics; it does not exhaust the field.

| Material | PDF | Read in repository |
|---|---|---|
| Learning from Verified Results | [20 A5 pages, Russian](reading/overview.pdf) | [Markdown, Russian](reading/overview.md) |
| Verifying the Solution Process | [20 A5 pages, Russian](reading/process-verification.pdf) | [Markdown, Russian](reading/process-verification.md) |
| Synthetic Data and Recursive Learning | [20 A5 pages, Russian](reading/synthetic-data.pdf) | [Markdown, Russian](reading/synthetic-data.md) |

Each PDF contains 20 A5 pages. The reviews examine concepts and published findings, strong objections, and limits of knowledge. They do not replace primary sources and are not reports of our own experiments.

## Sources and limitations

The review explains the limitations of published methods. It does not promise to train a universal model to a specified level of quality.

[Bibliography and reading depth](SOURCES.en.md) · [Machine-readable register](sources.json) · [All programs](../../README.en.md) · [Full library](../../LIBRARY.en.md)

The materials were prepared with AI assistance and internal editorial review. They have not undergone external scientific peer review. Review date: 23 September 2026. Below is a concise map of the first release's underlying evidence; its identifiers refer to the shared `data/sources.json` register.

## What the sources report

### VL-01
On GSM8K, a separate verifier improved selection among many solutions; the effect was absent with a small dataset.

**Limitations:** Tasks had known answers, and the research procedure was costly.

**Sources:** [S06: Training Verifiers to Solve Math Word Problems](https://arxiv.org/abs/2110.14168)

### VL-02
On a subset of MATH, process supervision outperformed outcome supervision.

**Limitations:** It relied on extensive human annotation; the result does not automatically transfer to other domains.

**Sources:** [S07: Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)

### VL-03
Adding teacher explanations improved training of smaller models on four NLP benchmarks with the studied method.

**Limitations:** An explanation does not certify its own factual accuracy or causal validity.

**Sources:** [S08: Distilling Step-by-Step! Outperforming Larger Language Models with Less Training Data and Smaller Model Sizes](https://arxiv.org/abs/2305.02301)

### VL-04
STaR filters explanations based on whether the final answer is correct, then fine-tunes the model.

**Limitations:** A known answer does not prove every intermediate step is correct; only the abstract was read.

**Sources:** [S09: STaR: Bootstrapping Reasoning With Reasoning](https://arxiv.org/abs/2203.14465)

### VL-05
Uncritical recursive use of model-generated data can lose rare events from the original distribution.

**Limitations:** Collapse depends on the update procedure; the article does not prohibit all synthetic data.

**Sources:** [S10: AI models collapse when trained on recursively generated data](https://www.nature.com/articles/s41586-024-07566-y)

### VL-06
Accumulating original real data together with synthetic data prevented the studied type of collapse under the tested architectures.

**Limitations:** This does not guarantee the truth of an individual episode; only the abstract was read.

**Sources:** [S11: Is Model Collapse Inevitable? Breaking the Curse of Recursion by Accumulating Real and Synthetic Data](https://arxiv.org/abs/2404.01413)

### VL-07
Phi-1 was trained on selected web data and synthetic textbooks, achieving strong scores on coding tasks.

**Limitations:** Training required substantial resources; the entire effect cannot be attributed to the synthetic component alone; only the abstract was read.

**Sources:** [S12: Textbooks Are All You Need](https://arxiv.org/abs/2306.11644)

### VL-08
A patch selected for passing tests may still be incorrect if the tests are weak.

**Limitations:** This is a specific audit of coding tasks; transfer to other domains is analytical.

**Sources:** [S03: SWE-Bench+: Enhanced Coding Benchmark for LLMs](https://arxiv.org/abs/2410.06992)

## How to read this review

A claim made by a source does not mean its result was independently replicated. Philosophical arguments, correlations, and causal experiments have different evidential status. Reading depth and limitations are listed in the [source register](../../data/sources.json).

This material was prepared with AI assistance. It has not undergone external scientific peer review.
