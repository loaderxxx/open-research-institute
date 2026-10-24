# Daoyu Wang and PaperArena — scientific-literature workflows

[Русская версия](researcher-03.md)

**Access and reading limits.** Checked the USTC-AGI profile, publication list and PaperArena v4 abstract. Complete agent traces were not examined.

**Research direction.** The USTC-AGI page associates Daoyu Wang with agents and lists PaperArena among work on search, reasoning and scientific documents. PaperArena provides a concrete evaluation in which an answer requires several papers and external tools. For ORI, the direction matters as an effort to make the combination of evidence distributed across sources testable, beyond text generation alone.

**ORI critical analysis.** The main monitoring question is whether evaluation distinguishes a missing document from incorrect reasoning over a retrieved document. Those failures require different remedies: one agent needs better search, another better alignment of definitions or calculations. An overall score hides that difference, making traces with localisable errors especially useful.

Scientific-literature difficulty also cannot be reduced to context length. Conflicting findings may concern different populations, method versions or experimental conditions. An agent should preserve those distinctions rather than collect several apparently agreeing sentences. Useful evaluation tasks include cases where the correct answer requires a qualification or a refusal to combine incompatible data.

Practical monitoring can follow claim provenance: what was found, what was extracted, what a tool transformed and what was inferred. New training methods should be assessed by whether they improve a particular transition and whether the effect survives on new papers. The group offers an orientation for diagnosing literature agents without establishing that the best result on one task set guarantees reliability for every review. Inclusion implies neither collaboration nor author endorsement of ORI’s interpretations and does not replace independent checking of published materials. The goal is a more precise account of where evidence is preserved or lost as an agent constructs its answer.

**Verification sources:**

- https://ustcagi.github.io/author/daoyu-wang/
- https://arxiv.org/abs/2510.10909v4
