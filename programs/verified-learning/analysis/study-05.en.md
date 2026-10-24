# Zeng et al. — RLVE

[Русская версия](study-05.md)

**Access and reading limits.** Checked the ICML/PMLR 2026 abstract and record. Code, task generators and the complete experimental protocol were not run or closely examined.

**Research result.** RLVE combines programmatically verifiable environments with difficulty adapted to the current model. RLVE-Gym contains 400 environments developed through manual engineering. In the authors’ comparison, joint training yields an absolute mean improvement of 3.37 percentage points across six benchmarks; continuing the original training yields 0.49 points with greater compute. This describes a particular model and training setup, not a constant improvement factor for every system.

**ORI critical analysis.** Adaptive difficulty addresses an understandable problem: very easy tasks provide little information, while very hard tasks provide few successes. It also changes the training distribution. Researchers should therefore check whether important task classes disappear and whether capabilities persist after difficulty increases. One average score cannot describe that movement adequately.

Scaling environment count should be distinguished from scaling substantive diversity. Several generators may share one solution rule, and different wording need not create a new capability. Transfer tests should hold out entire task families and examine similarities in algorithmic structure. Programmatic verification establishes conformity only to the implemented rule, which may itself contain an error.

A practical ORI follow-up is a map of environments by skill, oracle type and source of difficulty. Improvements should then be compared at matched total cost, considering environment construction and generator validation as well as training. The work provides a concrete platform for investigating learning signals without establishing the accuracy of factual claims or scientific explanations in unrestricted text. Its value is to expand the space of controlled experiments in which the rule’s boundaries and success criterion can be stated explicitly. That makes it possible to investigate generalisation while retaining a clear account of what has actually been verified.

**Verification sources:**

- https://proceedings.mlr.press/v306/zeng26j.html
