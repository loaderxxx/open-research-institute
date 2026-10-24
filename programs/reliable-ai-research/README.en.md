# AI for scientific research

[Русский](README.md)

**Central question:** How can we distinguish a persuasive answer from a result that can be checked?

This program concerns the reliability of research answers and agent systems. We examine claim verifiability, citation accuracy, search quality, use of long context, and ways to evaluate results. A separate section covers interaction among multiple agents: when message exchange helps solve a task and when it spreads the same error.

<!-- ori-toc:start -->
## Contents

- [Program questions](#program-questions)
- [Reading library](#reading-library)
- [Sources and limitations](#sources-and-limitations)
- [What the sources report](#what-the-sources-report)
- [How to read this review](#how-to-read-this-review)
<!-- ori-toc:end -->

## Program questions

- How does factual accuracy differ from having a citation or from agreement among several models?
- What do published benchmarks, human annotations, and model judges measure?
- How does interpretation change when tests contain errors, participants are dependent, or evaluations are biased?

## Reading library

Start with the general review, then continue to the two standalone in-depth reviews. This is the first selected level of topics; it does not exhaust the field.

| Material | Read in repository |
|---|---|
| Reliable AI Research | [Markdown](reading/overview.en.md) |
| Agents and Evaluation of Research Systems | [Markdown](reading/agents-and-evaluation.en.md) |
| Evidence and Citation | [Markdown](reading/evidence-and-citations.en.md) |

The reviews examine concepts and published findings, strong objections, and limits of knowledge. They do not replace primary sources and are not reports of our own experiments.

## Sources and limitations

These materials help readers assess AI research without treating a polished answer, a high score, and reliable knowledge as the same thing.

[Current research map](RESEARCH_MAP.en.md) · [Bibliography and reading depth](SOURCES.en.md) · [Machine-readable register](sources.json) · [All programs](../../README.en.md) · [Full library](../../LIBRARY.en.md)

The materials were prepared with AI assistance and internal editorial review. They have not undergone external scientific peer review. Review date: 23 September 2026. Below is a concise map of the first release's underlying evidence; its identifiers refer to the shared `data/sources.json` register.

## What the sources report

### AIR-01
The current MAST version derived 14 failure types from 150 original traces and analyzed more than 1,600 scale-annotated traces from seven systems.

**Limitations:** The initial taxonomy and scale annotation used different procedures; part of the larger sample was annotated by LLMs.

**Sources:** [S01: Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657)

### AIR-02
MAST groups failures into three broad categories: design, agent coordination, and task verification.

**Limitations:** The classification does not claim to exhaust all future failure modes.

**Sources:** [S01: Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657)

### AIR-03
Sparse communication among six agents on verified tasks maintained or improved accuracy compared with a fully connected network and saved input tokens.

**Limitations:** Input-token cost is not the full cost of conducting real research.

**Sources:** [S02: Improving Multi-Agent Debate with Sparse Communication Topology](https://arxiv.org/abs/2406.11776)

### AIR-04
For the tested SWE-Agent+GPT-4 combination, after problematic cases were removed, the solved-task rate fell from 12.47% to 3.97%.

**Limitations:** This estimate is specific to the audit of selected patches and the filtering method.

**Sources:** [S03: SWE-Bench+: Enhanced Coding Benchmark for LLMs](https://arxiv.org/abs/2410.06992)

### AIR-05
The order of two answers can systematically change LLM-judge ratings.

**Limitations:** The magnitude and direction of bias vary by judge and task.

**Sources:** [S04: Judging the Judges: A Systematic Study of Position Bias in LLM-as-a-Judge](https://arxiv.org/html/2406.07791v9)

### AIR-06
The position of a relevant document in long context affects retrieval and answering results in the tested settings.

**Limitations:** This is not a direct test of a literature review; only the abstract was read.

**Sources:** [S05: Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172)

## How to read this review

A claim made by a source does not mean its result was independently replicated. Philosophical arguments, correlations, and causal experiments have different evidential status. Reading depth and limitations are listed in the [source register](../../data/sources.json).

This material was prepared with AI assistance. It has not undergone external scientific peer review.

[Source analyses: ideas, evidence and limitations](../../SOURCE_ANALYSES.en.md). Reading depth and extended-book status are stated separately.
