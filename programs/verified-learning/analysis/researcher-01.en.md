# Xumeng Wen and Microsoft Research — verifiable rewards

[Русская версия](researcher-01.md)

**Access and reading limits.** Checked Microsoft’s institutional publication record and the ICLR 2026 abstract. Wen’s individual biography and the complete paper were not examined.

**Research direction.** Microsoft’s institutional record confirms Wen and colleagues’ work on how verifiable rewards affect reasoning in base language models. The concrete direction compares successful final answers with intermediate-solution quality through CoT-Pass@K and examines training dynamics. The research question is which capabilities change after RLVR and how that differs from sampling answers more effectively.

**ORI critical analysis.** The team is worth following through the quality of new measurements rather than improvement magnitude alone. A reasoning metric should be defined sufficiently clearly for an independent researcher to repeat the assessment. Distinguishing an incorrect step, abbreviated presentation and missing proof is especially important: superficially similar brevity can conceal different cases.

Investigating training dynamics requires comparable checkpoints and matched generation conditions. When response length, attempt budget or explanation style change simultaneously, the source of improvement becomes difficult to identify. The programme should prioritise work that separates those changes and checks robustness with independent step evaluation.

Practical monitoring should include not only tasks on which the new metric is favourable, but also cases where answer correctness and explanation correctness diverge. Those cases reveal what the procedure actually measures. Transfer to new task structures and preservation of solution diversity should then be tested. The team offers a substantive way to sharpen the debate over RLVR capabilities without establishing a universal law of learning to reason correctly. Mentioning Microsoft identifies the publication context, not partnership with ORI, access to internal data or external review of our analysis. Claims about individual researchers should remain limited to the institutional and publication evidence actually inspected.

**Verification sources:**

- https://www.microsoft.com/en-us/research/publication/reinforcement-learning-with-verifiable-rewards-implicitly-incentivizes-correct-reasoning-in-base-llms/
- https://proceedings.iclr.cc/paper_files/paper/2026/hash/517f9b9c227b9dd51dba4560f37165ed-Abstract-Conference.html
