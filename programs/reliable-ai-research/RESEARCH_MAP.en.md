# Source map: AI for scientific research

[Русский](RESEARCH_MAP.md) · [Program README](README.en.md)

**Status:** a starter annotated map, not a systematic review. **Checked:** 24 October 2026. Papers and benchmarks evaluate particular abilities; they do not establish autonomous scientific discovery.

<!-- ori-toc:start -->
## Contents

- [Three orientation books](#three-orientation-books)
- [Research and open resources](#research-and-open-resources)
- [Three historical milestones](#three-historical-milestones)
- [Active researchers and teams](#active-researchers-and-teams)
- [Current work and open questions](#current-work-and-open-questions)
<!-- ori-toc:end -->

## Three orientation books

| Book | Why it helps; access |
|---|---|
| Alexei Robsky, Liliya Lavitas, Yueqing Wang, *Reliable Evaluations for LLMs and AI Agents: End-to-End Evaluation Frameworks for LLMs and Autonomous AI Agents* (2026), [Springer](https://link.springer.com/book/10.1007/978-3-032-26749-8) | A practical framework for evaluating models and agents, including end-to-end scenarios and model judges. Published in September 2026; the publisher record is open, while full text requires purchase or subscription. As a new book, its guidance should be checked against primary benchmarks. |
| Bin Yu, Rebecca L. Barter, *Veridical Data Science* (2024), [MIT Press](https://mitpress.mit.edu/9780262049191/veridical-data-science/) | A methodology for reproducible analysis, predictability, computability, and stability; useful for separating a strong result from a convenient test. The publisher page and resources are open; the book is for sale or library access. |
| Christian Sandvig, Marc Aidinoff, Alondra Nelson, Kristen Vaccaro, Karrie Karahalios, Esha Bhandari, Ellery Roberts Biddle, Lena Armstrong, J. Nathan Matias, Motahhare Eslami & Danaé Metaxa (The Marquand House Collective), *Auditing AI* (2026), [MIT Press](https://mitpress.mit.edu/9780262051736/auditing-ai/) | A concise guide to auditing automated decisions: how to set up a test, interpret results, and change practice. Published on 21 April 2026; the publisher lists an open electronic edition. |

## Research and open resources

| Work | Question and result | Limits and access |
|---|---|---|
| Chen et al., [“ScienceAgentBench”](https://proceedings.iclr.cc/paper_files/paper/2025/hash/f12b4df26344f3be803c06b555252efe-Abstract-Conference.html), ICLR (2025) | A benchmark of 102 tasks drawn from peer-reviewed work across four fields and validated by subject experts; the best evaluated agent solved 32.4% without expert-provided knowledge. | Conference page and materials are available. This tests coding and analysis on selected tasks, not the whole research process; coverage is bounded by the fields and benchmark setup. |
| Chen et al., [“MLR-Bench”](https://proceedings.neurips.cc/paper_files/paper/2025/hash/ab8dd000d6f87f40061a73f8bca7fae4-Abstract-Datasets_and_Benchmarks_Track.html), NeurIPS (2025), DOI: [10.52202/085713-3945](https://doi.org/10.52202/085713-3945) | Its 201 open-ended ML research tasks cover idea generation, proposals, experiments, and papers. Authors report that agents frequently produced invalid or fabricated experimental results (up to 80% of cases in their setting). | Abstract and code are open; the full paper is available through the conference. The judge includes LLM reviewers and a bounded task set, so findings apply to this evaluation suite. |
| Wang et al., [“PaperArena: An Evaluation Benchmark for Tool-Augmented Agentic Reasoning on Scientific Literature”](https://arxiv.org/abs/2510.10909), 2025 preprint, v4 dated 30 January 2026 | Tests answers to real questions that require connecting multiple scientific papers and using retrieval, parsing, and computation tools. In v4 the authors report 38.78% average accuracy for the leading tested LLM in one agent workflow, and 18.47% on the hard subset. | Abstract, preprint, and platform are publicly available. Results depend on the tested models and tools; no comparison with a separate external baseline is made here. |
| Liu et al., [“Benchmarking AI Agents for Addressing Scientific Challenges Across Scales” (SciAgentArena)](https://arxiv.org/abs/2606.12736), preprint (2026) | Presents a benchmark of about 200 research tasks with stepwise verification and an interactive agent-agnostic environment, spanning several domains and scientific task scales. | Public preprint; results and coverage should be treated as preliminary pending independent replication and data checks. “Scientific discovery” should not be used as a synonym for completing a benchmark. |

## Three historical milestones

1. **1987 — computational models of scientific discovery.** Langley, Simon, Bradshaw, and Zytkow showed how programs can reproduce bounded processes for deriving scientific regularities ([MIT Press](https://mitpress.mit.edu/9780262620529/scientific-discovery/)). This is a historical argument about modellable tasks, not a claim that scientists can be replaced.
2. **2024 — a shift from system demonstrations to a testable agent cycle.** Authors of *The AI Scientist* described idea generation, experiments, and a scientific report ([preprint](https://arxiv.org/abs/2408.06292)). A generated paper or protocol is not trustworthy without checking data, code, and reproducibility.
3. **2025 — benchmarks begin covering parts of real research workflows.** ScienceAgentBench and MLR-Bench draw tasks from publications and measure individual stages ([ICLR](https://proceedings.iclr.cc/paper_files/paper/2025/hash/f12b4df26344f3be803c06b555252efe-Abstract-Conference.html), [NeurIPS](https://proceedings.neurips.cc/paper_files/paper/2025/hash/ab8dd000d6f87f40061a73f8bca7fae4-Abstract-Datasets_and_Benchmarks_Track.html)). Evaluation shifts toward executable outputs and expert-validated tasks.

## Active researchers and teams

- **Huan Sun and the OSU NLP group**, The Ohio State University: work on language agents and scientific workflows. Sun is an associate professor in CSE ([institutional profile](https://people.engineering.osu.edu/people/sun.397)); a recent specific work is ScienceAgentBench (ICLR 2025), which evaluates execution of real scientific data-analysis tasks.
- **Yiyou Sun and Dawn Song’s group**, University of California, Berkeley: study agent training and evaluation on long-horizon tasks ([researcher profile](https://sunyiyou.github.io/)). A 2026 work is *Agents’ Last Exam*, a living benchmark of professional workflows with verifiable outcomes; it measures agent reliability in work tasks, not scientific truth specifically.
- **Daoyu Wang and the PaperArena co-authors**, University of Science and Technology of China: develop tests for cross-paper reasoning and tool use ([Wang's institutional profile](https://ustcagi.github.io/author/daoyu-wang/) · [paper and authors](https://arxiv.org/abs/2510.10909)). Version v4, dated 30 January 2026, reports results on this specific benchmark; they should not be generalized to scientific work overall.

## Current work and open questions

In 2025–2026, the field is moving from impressive demonstrations to task suites that check execution, cost, data, and expert review. Available results still show leading agents far behind experts at literature synthesis and reproducing analyses. New benchmarks also cover long workflows, open research questions, and work across multiple papers. Their results remain preliminary and depend strongly on task selection, available tools, and scoring rules.

Open questions include how to verify claim and citation provenance; how to make evaluation robust to test contamination and LLM-judge bias; which human baseline is comparable; how to account for failed attempts, compute cost, and reproducibility; and whether coding success transfers to asking good questions, choosing methods, and interpreting data.

**Suggested next reading:** start with ScienceAgentBench, then compare its paper-derived tasks with PaperArena’s cross-paper synthesis and MLR-Bench’s open research setting. For each result, inspect the test data, execution protocol, and human baseline before extending it to claims about an “AI scientist.”
