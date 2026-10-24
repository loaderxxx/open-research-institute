# Sutton and Barto — Reinforcement Learning: An Introduction

[Русская версия](book-01.md)

**Access and reading limits.** Checked the second-edition description and MIT Press’s link to the authors’ open edition. The author server timed out; the full 2018 edition was not read.

**Source content.** The publisher describes reinforcement learning as an agent learning through environmental interaction and accumulated reward. The second edition proceeds from tabular methods to function approximation, off-policy learning and policy-gradient methods. It provides mathematical language for goals, actions and behavioural updates. It is not specifically about current language-model training from verifiable answers, so the connection with RLVR is an analytical application of its general framework.

**ORI critical analysis.** The programme’s key question arises before algorithm selection: which reward rule represents the quality being investigated? If reward is assigned for matching a final answer, optimisation directly promotes that event. Correctness of the intermediate explanation needs an additional argument or measurement; it does not follow merely from the use of reinforcement learning.

Policy change should also be separated from an increased number of attempts. Improving success probability at a fixed budget can be valuable without creating a new class of solvable tasks. Comparisons need matched computational limits, sampling procedures and stopping conditions. Otherwise, an algorithmic advantage becomes mixed with an advantage in the search procedure.

A practical ORI reading should translate each RLVR paper into an explicit specification of state, action, observation, reward, horizon and verification rule. This exposes hidden assumptions, such as reconstructing a state from text or treating successive attempts as independent. It also clarifies why a correct final-answer oracle can leave a difficult problem of assigning credit across steps. The textbook supplies a foundation for these distinctions without automatically transferring tabular guarantees to a large language model. The next close reading should focus on the assumptions behind such transfers rather than treating shared terminology as sufficient justification.

**Verification sources:**

- https://mitpress.mit.edu/9780262039246/reinforcement-learning/
- https://incompleteideas.net/book/the-book-2nd.html
