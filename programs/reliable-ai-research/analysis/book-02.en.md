# Yu and Barter — Veridical Data Science

[Русская версия](book-02.md) · [Extended analysis of selected sections](book-02-deep.en.md)

**Access and reading limits.** The official Bin Yu page confirms the author-supplied open web edition. The preface and selected chapter 1 passages were inspected; the entire book has not yet been closely read.

**Source content.** The open edition treats data analysis as a nonlinear process encompassing question formulation, collection, cleaning, modelling and interpretation. Its PCS framework combines predictive checking, computational feasibility and stability under reasonable changes to data and analytical decisions. The introduction stresses that data and algorithms do not themselves reveal how well they represent the real domain problem. Domain knowledge and critical examination of the transitions between question, measurement and conclusion remain necessary.

**ORI critical analysis.** For scientific agents, this means rerunning one script does not establish result stability. An agent can exactly reproduce a mistaken sampling or cleaning decision. It is therefore useful to compare several justified analytical choices and record which conclusions survive and which depend on a particular choice.

Stability is not an independent guarantee of truth either. All variants might share the same false premise or systematic measurement error. Perturbations should be selected substantively: which decisions could reasonably have been made, and which alternatives matter for the domain question? An arbitrary collection of similar runs can create only the appearance of scrutiny.

A practical ORI application is a decision log recording analytical choices, reasons, alternatives and effects on conclusions. For agent systems, preserving data provenance and separating proposed interpretation from directly computed results are especially important. Predictive success should be evaluated in intended-use conditions rather than only on a convenient held-out dataset. The book offers a substantive methodology for such scrutiny without replacing independent assessment of causal claims or turning automated analysis into autonomous scientific truth production. Its usefulness comes from making human and automated judgment calls visible enough to challenge.

**Verification sources:**

- https://mitpress.mit.edu/9780262049191/veridical-data-science/
- https://binyu.stat.berkeley.edu/
- https://vdsbook.com/
- https://vdsbook.com/01-veridical_ds
