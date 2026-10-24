# Source map: learning from verified outcomes

[Русский](RESEARCH_MAP.md) · [Program README](README.en.md)

**Status:** a starter annotated map, not a systematic review. **Checked:** 24 October 2026. A “verifiable reward” means a signal can be computed from a rule, test, or environment; it does not guarantee that the rule captures correct reasoning beyond that task.

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
| Richard S. Sutton, Andrew G. Barto, *Reinforcement Learning: An Introduction*, 2nd ed. (2018), [MIT Press](https://mitpress.mit.edu/9780262039246/reinforcement-learning/) | Core concepts of reward-based learning, action selection, and policy updates; a useful foundation for RLVR. Publisher record and authors' web text are available; print is paid, and an open edition is available under CC BY-NC-ND. |
| Masashi Sugiyama et al., *Machine Learning from Weak Supervision: An Empirical Risk Minimization Approach* (2022), [MIT Press](https://mitpress.mit.edu/9780262370561/machine-learning-from-weak-supervision/) | Theory and algorithms for incomplete and weak labels; helps explain how a verification signal can be noisy or incomplete. Publisher record is open; book is paid or available through libraries. |
| Marc G. Bellemare, Will Dabney, Mark Rowland, *Distributional Reinforcement Learning* (2023), [MIT Press](https://mitpress.mit.edu/9780262048019/distributional-reinforcement-learning/) | An advanced treatment of reward distributions and uncertainty instead of a single average. Publisher page is open; MIT Press provides an OA edition under CC BY-NC-ND. |

## Research and open resources

| Work | Question and result | Limits and access |
|---|---|---|
| Setlur et al., [“Rewarding Progress”](https://proceedings.iclr.cc/paper_files/paper/2025/hash/98711dea460bdefe0e651ca23ec98ba2-Abstract-Conference.html), ICLR (2025) | Studies how to train stepwise verifiers. Authors score a step by how much it raises the future likelihood of a correct answer; on the mathematical tasks studied, they report more accuracy and search efficiency than a final-answer-only verifier. | Paper and supplements are open. Results depend on a separate prover policy and structured tasks; transfer to open-ended research questions has not been established. |
| Feng et al., [“Beyond Model Collapse: Scaling Up with Synthesized Data Requires Verification”](https://proceedings.iclr.cc/paper_files/paper/2025/hash/df2d62b96a4003203450cf89cd338bb7-Abstract-Conference.html), ICLR (2025) | Tests selection of synthetic examples in two tasks and shows that even imperfect verification can prevent an observed quality decline during synthetic-data training. | Open paper. Theoretical results use simplified models, and experiments are limited to matrix tasks and news summarization. It does not prove synthetic data universally safe. |
| Wen et al., [“Reinforcement Learning with Verifiable Rewards Implicitly Incentivizes Correct Reasoning”](https://proceedings.iclr.cc/paper_files/paper/2026/hash/517f9b9c227b9dd51dba4560f37165ed-Abstract-Conference.html), ICLR (2026) | Compares RLVR with repeated generation and proposes CoT-Pass@K, which accounts for a successful answer and intermediate steps; authors report extending solution boundaries in math and code. | Conference page and full text are open. The intermediate-step metric is the authors' operationalization; generalization is bounded by verifiable math and coding tasks. |
| Yuan et al., [“Verifiable Process Rewards for Agentic Reasoning”](https://arxiv.org/abs/2605.10325), preprint (2026) | Converts verifiable signals from search, logical constraints, and probabilistic inference into stepwise rewards; authors report gains over baseline rewards and transfer to some agent benchmarks. | Open abstract and preprint; independent peer review was not confirmed as of this check. In v3 dated 12 October 2026, the core environments use algorithmic oracles while the τ²-bench extension uses an expert LLM; these provide different strengths of verification. Application to open-ended tasks remains unresolved. |
| Zeng et al., [“RLVE: Scaling Up Reinforcement Learning for Language Models with Adaptive Verifiable Environments”](https://proceedings.mlr.press/v306/zeng26j.html), ICML/PMLR (2026) | RLVE-Gym provides 400 programmatically verifiable environments with adaptive difficulty; joint training improved the average across six benchmarks by 3.37 percentage points in the authors' comparison. | Paper and code are open. The suite tests tasks with algorithmic criteria; it does not settle fact-checking in natural text or the quality of scientific explanations. |

## Three historical milestones

1. **1988 — temporal-difference learning.** Sutton described incremental prediction-learning procedures that use prior experience and differences between successive predictions ([“Learning to predict by the methods of temporal differences,” Springer](https://link.springer.com/article/10.1007/BF00115009)). The paper's DOI is 10.1007/BF00115009. This is an early foundation of RL, before language models and verifiable rewards.
2. **2023 — large-scale human annotation of reasoning steps.** Lightman et al. released PRM800K and showed process supervision outperforming outcome-only supervision on MATH tasks ([preprint](https://arxiv.org/abs/2305.20050)). Expensive labels and domain limits raised the question of whether process verification could scale automatically.
3. **2025 — verification becomes a training signal for synthetic data and agents.** Work on process rewards and synthetic data tests not only the final answer but the usefulness of an intermediate step or example ([ICLR: Rewarding Progress](https://proceedings.iclr.cc/paper_files/paper/2025/hash/98711dea460bdefe0e651ca23ec98ba2-Abstract-Conference.html); [ICLR: verification of synthesized data](https://proceedings.iclr.cc/paper_files/paper/2025/hash/df2d62b96a4003203450cf89cd338bb7-Abstract-Conference.html)). |

## Active researchers and teams

- **Xumeng Wen and the Microsoft Research Asia team** study training and evaluation of LLM reasoning. At ICLR 2026, Wen et al. test whether RLVR develops correct intermediate steps rather than merely increasing the odds of selecting a found solution ([Microsoft Research publication](https://www.microsoft.com/en-us/research/publication/reinforcement-learning-with-verifiable-rewards-implicitly-incentivizes-correct-reasoning-in-base-llms/); [ICLR paper](https://openreview.net/pdf/cff035e465a2a364634b3279828daca60b9cf34d.pdf)).
- **Amrith Setlur, Aviral Kumar, and co-authors**, from Carnegie Mellon University, Google Research, and Google DeepMind, develop process verifiers for search and reinforcement learning. Their ICLR 2025 paper on rewarding progress reports gains in accuracy and compute efficiency on mathematical reasoning ([paper and affiliations](https://openreview.net/pdf?id=A6Y7AqlzLW); [Setlur profile](https://ars22.github.io/)).
- **Zhiyuan Zeng, Simon Shaolei Du, Hannaneh Hajishirzi, and the RLVE team**, published in PMLR/ICML 2026, study scalable adaptive environments with programmatically checked answers. Their 2026 work presents the open 400-environment RLVE-Gym and an expanded-environment training comparison ([PMLR paper](https://proceedings.mlr.press/v306/zeng26j.html)); see also [Hannaneh Hajishirzi's University of Washington institutional profile](https://www.cs.washington.edu/people/faculty/hannaneh-hajishirzi/). This documents active team research, not applicability to every subject.

## Current work and open questions

Three strands are visible in 2025–2026: automatic verifiers for intermediate steps, RL from final answers in tasks with checkable outcomes, and synthetic data selected through verification. New papers report transfer across math or logic tasks and some agent tests; the evidence remains tied to specific experimental conditions. The less formalized the task, the harder it is to define a reliable oracle and avoid training to the test.

Open questions include when a verifiable final answer really rewards a correct process; how an oracle can miss or reinforce systematic error; how to measure solution diversity, calibration, and out-of-distribution robustness; how much real data is needed in synthetic training; and whether effects persist on scientific tasks with ambiguous answers or a need for new observations.

**Suggested next reading:** read *Rewarding Progress* and compare process rewards with final-answer rewards; then read the 2026 RLVR paper, focusing on CoT-Pass@K; next, use RLVE or VPR as examples of expanding the class of verifiable environments. Finish with the synthetic-data verification paper and inspect which assumptions support transfer.
