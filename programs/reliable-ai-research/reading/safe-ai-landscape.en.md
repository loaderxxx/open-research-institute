# International landscape of verifiable and controllable AI

<!-- ori-nav:start -->
[Русский](safe-ai-landscape.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

**Checked: 12 November 2026.** Selective editorial review of primary descriptions, documentation and research reports; not an audit of every proof or an independent replication. Prepared with AI assistance and internal editorial review; no external scientific peer review. External organisations are not ORI projects or confirmed partners.

[Dedicated LawZero profile](../analysis/researcher-04.en.md).

<!-- ori-toc:start -->
## Contents

- [1. Conclusion](#1-conclusion)
- [2. Four distinct problems that must not be conflated](#2-four-distinct-problems-that-must-not-be-conflated)
- [3. Map of organizations and approaches](#3-map-of-organizations-and-approaches)
- [4. Additional section: formal methods and verifiable constraints](#4-additional-section-formal-methods-and-verifiable-constraints)
- [5. Comparative framework for the ORI page](#5-comparative-framework-for-the-ori-page)
- [6. Proposed ORI research series](#6-proposed-ori-research-series)
- [7. International extension: different mechanisms, not identical competitors](#7-international-extension-different-mechanisms-not-identical-competitors)
- [8. How to extend the map](#8-how-to-extend-the-map)
<!-- ori-toc:end -->

## 1. Conclusion

LawZero is interesting not for promising “another safe chatbot,” but for attempting to separate probabilistic understanding of the world from optimizing actions within it. That separation alone is insufficient: errors in the world model, harm specification, implementation, and infrastructure remain. The most immediately useful related directions for ORI are AI control, formal checks on actions, independent evaluation of safeguards, and architectures with limited permissions.

The comparison should concern testable claims, not brands: what is protected, against which adversary, under which assumptions, through which test, and with what residual risk.

## 2. Four distinct problems that must not be conflated

1. **Preventing dangerous goals:** change training or architecture to avoid creating unnecessary agency. LawZero.
2. **Controlling actions even when a model is untrustworthy:** a separate monitor, limited authority, blocking, or a safe fallback executor. Redwood, AISI, DeepMind.
3. **Verifying a specific property:** proving a program property, an action’s admissibility, or a computation’s provenance. Formal methods and provable inference. This does not prove that an answer is true or a model is benevolent.
4. **Independently evaluating a safety claim:** assessing training, behavior, and the protective infrastructure itself. METR, Apollo; the results are bounded by access and evaluation conditions.

## 3. Map of organizations and approaches

### LawZero: Scientist AI

**Relationship:** the baseline for comparison. **Method:** a probabilistic predictor, epistemic contextualization of data, and training without rewards for the consequences of using an answer; actions belong to an external architecture with safeguards. The publication dated 2 July 2026 presents a conditional safety argument. It depends, among other things, on assumptions about training dynamics and the rarity of dangerous predictors. This is not empirical proof of a safe general-purpose model. For ORI, it is important to maintain a separate assumption register and distinguish predictor safety from safety of the entire agentic system. [S01](https://lawzero.org/en/research).

### Redwood Research: AI Control

**Type:** nonprofit research organization. **Method:** a weaker trusted model oversees a stronger, potentially malicious one; approaches include monitoring, editing, and deferring to a trusted alternative. Unlike LawZero, it does not first require proving the absence of dangerous intentions: it evaluates the system’s ability to resist them. Published experiments and environments include BashArena, BashBench, and LinuxArena. Limitation: success in a particular experimental environment does not automatically transfer to arbitrary tools, long tasks, or a stronger adversary. [S02](https://www.redwoodresearch.org/research/ai-control).

### UK AI Security Institute: ControlArena

**Type:** government research organization; the platform was developed with Redwood. **Method:** reproducible experiments combining a legitimate main task and a harmful side objective in an isolated environment. It provides environment configurations, agent policies, monitors, and response protocols built on Inspect. This is a useful foundation for independent ORI research, not ready-made system certification. The weaker model’s trustworthiness and the scenarios’ realism remain experimental assumptions. [S03](https://www.aisi.gov.uk/blog/introducing-controlarena-a-library-for-running-ai-control-experiments), [S04](https://control-arena.aisi.org.uk/), [S05](https://github.com/UKGovernmentBEIS/control-arena).

### Google DeepMind: AI Control Roadmap

**Type:** model developer. **Method:** layered defenses, threat models, access restrictions, monitoring, and responses to a potentially untrustworthy internal agent. The publication dated 18 June 2026 distinguishes asynchronous responses to reversible actions from synchronous prevention of especially dangerous ones. It identifies coverage, detection recall, and response-time metrics and describes an internal prototype and monitoring deployment. This is a developer report and roadmap, not a universal mathematical guarantee. Particularly useful for ORI is the shift from “the monitor noticed something” to measuring whether the system prevented the action in time. [S06](https://deepmind.google/blog/securing-the-future-of-ai-agents/).

### OpenAI: multistage monitoring

**Type:** model developer. The publication dated 29 October 2026 describes an architecture ranging from inexpensive classifiers and a model reviewer to investigations using additional telemetry. It distinguishes alignment training, access restrictions, and detection of residual violations. This is valuable as an example of operational deployment and evaluation budgeting, but a coverage claim cannot be equated with independent evidence that every threat is detected. For ORI, separate checks of log completeness and correspondence between monitor and agent context would be useful. [S07](https://alignment.openai.com/how-we-detect-frontier-model-misalignment/).

### Anthropic: SHADE-Arena

**Type:** developer of models and experimental evaluations. **Method:** an agent performs a complex legitimate task alongside an assigned hidden harmful objective; another AI assesses suspiciousness from the action transcript. The publication dated 16 June 2025 describes 17 tasks and evaluations of 14 models. This measures capabilities under artificially constructed conditions, not the prevalence of sabotage among ordinary users. The suspiciousness threshold and main-task success materially affect the metrics. For ORI: report usefulness, attack success, monitor misses, and false alarms separately. [S08](https://www.anthropic.com/research/shade-arena-sabotage-monitoring).

### Anthropic / EPFL / collaborators: FlashProve

**Adjacent, not equivalent to LawZero.** The work dated 2 November 2026 concerns cryptographic verification that an answer was computed by the claimed model. Code, Lean formalizations, and a prototype were released. This provides integrity guarantees for a particular computation under relevant cryptographic and implementation assumptions, not guarantees of truth, harmlessness, or absence of hidden goals in an answer. The authors explicitly describe it as intermediate progress. It is useful to ORI as a separate provenance and provider-trust layer, not as a substitute for substantive checking. [S09](https://www.anthropic.com/research/provable-inference).

### METR: independent evaluation of control infrastructure

**Type:** independent research organization. A joint pilot with Redwood, published on 22 October 2026 and conducted with extensive access, examined OpenAI’s historical monitoring system as it stood on or before 21 July. It tested coverage and infrastructure robustness, not merely the quality of a model judge. The authors distinguish problems found in the old system from subsequent OpenAI claims of fixes, which they did not themselves verify. This is a strong methodological example for ORI: monitoring must be protected from agent influence and reconciled against independent logs. Historical findings must not be applied to the current system without reassessment. [S10](https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/).

### Apollo Research: embedded evaluations

**Type:** organization researching strategic deception and evaluation. Its position dated 1 October 2026 is that final-model testing is insufficient: sustained, deep access to training, intermediate models, and deployment is needed. The absence of visible bad behavior may indicate improvement or better concealment. The authors propose examining training incentives, rigorous evaluations, behavior during internal use, and detectability of dangerous reasoning; they emphasize that these remain insufficient without controls. For ORI: research should account for evaluation awareness and should not infer “intentions” from a single impressive demonstration. [S11](https://www.apolloresearch.ai/blog/towards-embedded-evaluations-for-scheming-propensities).

### Conjecture / Cognitive Emulation: a historical reference, not automatically an active one

CoEm proposed bounded, understandable cognitive components instead of unrestricted autonomous intelligence. Its 2024 roadmap remains architecturally useful: AI as maintainable software, information provenance, and complexity control. It must not, however, be presented as a current, proven solution. In a retrospective dated 26 March 2026, cofounder Connor Leahy described a shift from research to products in 2025 and the end of this chapter of the company. An up-to-date directory therefore needs the label “historical research program,” not an unverified claim of an active laboratory. [S12](https://www.conjecture.dev/research/conjecture-a-roadmap-for-cognitive-software-and-a-humanist-future-of-ai), [S13](https://www.ettf.land/p/conjecture-a-retrospective).

### Safe Superintelligence Inc.: monitor developments, but do not rank technically without evidence

The official website describes jointly advancing safety and capabilities as the company’s mission. The material read does not provide sufficient technical detail to compare its mechanism with Scientist AI or assert a proven guarantee. SSI therefore belongs in an “organizations to watch” section, rather than among reproducible protective methods. A lack of detail on this page does not establish the absence of all research or private progress. [S14](https://ssi.inc/).

## 4. Additional section: formal methods and verifiable constraints

### ARIA — Safeguarded AI
A UK government program with an announced £59 million budget. The current plan changed in May 2026, emphasizing an open mathematical assurance toolkit and cybersecurity; its two current areas are Tooling and Applications. This is a funded research program, not a completed safe model. The page frames equipping code and control systems with quantitative guarantees as a future outcome. The earlier general deployment API must not be presented as an unchanged current plan. [S15](https://aria.org.uk/opportunity-spaces/trust-everything-everywhere/safeguarded-ai).

Candidates for further standalone profiles: Oxford / Alessandro Abate / SAINT; York / Radu Calinescu / ULTIMATE; Topos Research UK / David Jaz Myers; Birmingham / Mirco Giacobbe. Inclusion in the directory signifies funded work, not a completed proof. [S16](https://aria.org.uk/opportunity-spaces/trust-everything-everywhere/safeguarded-ai/funded-projects).

### Beneficial AI Foundation — QAISI
An inter-university initiative on quantitative safety guarantees. The official page connects researchers at Berkeley, MIT, Montréal, Stanford, and CMU; named participants include Clark Barrett, Yoshua Bengio, Steve Omohundro, Bryan Parno, Stuart Russell, Dawn Song, and Max Tegmark. This is a research network and agenda, not a certified product. It is useful to ORI as a map of researchers and shared problems. [S17](https://www.beneficialaifoundation.org/qaisi), [S18](https://www.beneficialaifoundation.org/research).

### UC Berkeley — Sanjit Seshia, Scenic, and VerifAI
This academic line combines learning, explicit environment models, and deductive methods for cyber-physical systems. Scenic and VerifAI are available tools. The latter’s documentation describes simulation-guided falsification, systematic fuzz testing, counterexample search, and parameter synthesis. Searching for a counterexample does not prove that no counterexamples exist; the scenario model bounds the conclusions. [S19](https://people.eecs.berkeley.edu/~sseshia/), [S20](https://verifai.readthedocs.io/en/stable/), [S21](https://github.com/BerkeleyLearnVerify/VerifAI).

### Stanford / Hebrew University and collaborators — Marabou
An SMT-based tool for analyzing neural networks against formal properties. It can prove a specified property or find a counterexample within the model; this does not prove semantic correctness of arbitrary LLM answers. Marabou 2.0 was published at CAV 2024, with code, examples, and supported formats available. Account for computational complexity, supported operations, and computations that do not finish. [S22](https://github.com/NeuralNetworkVerification/Marabou), [S23](https://theory.stanford.edu/~barrett/pubs/WIZ%2B24-abstract.html).

### KeYmaera X and formally verified safety nets
A hybrid-systems verification research line involving André Platzer, Stefan Mitsch, and collaborators; the entire contemporary ecosystem should not be attributed to one university. A small trusted kernel checks proofs concerning control programs and continuous dynamics. Particularly relevant to separating models from actions is the FM 2021 paper on a safety net for a neural-network waypoint navigation controller: proposed control is separated from the safeguard. The guarantee depends on the dynamics model, initial state, measurements, and execution. [S24](https://keymaerax.org/), [S25](https://www.cs.cmu.edu/~smitsch/publications.html), [S26](https://www.cs.cmu.edu/~smitsch/pdf/waypoint.pdf).

### Harmonic — Aristotle
A commercial example of automating verification of software and hardware properties. The announcement dated 27 October 2026 concerns C and Verilog. Specification quality and assumptions still require scrutiny; vendor success stories are not an independent ORI audit. Important update: the current FAQ states that Lean-only projects are not presently verified and receive an unsupported-language notice; support is expected to return in the future. Do not recommend the service based on an outdated Lean-only description. [S27](https://www.harmonic.fun/news/aristotle-software-hardware-verification/), [S28](https://aristotle.harmonic.fun/docs/faq).

### RESI — Institute for Responsible Superintelligence
A nonprofit research institute working on formal safety definitions, explicit assumptions, control and delegation mechanisms, component composition, and impossibility results for guarantees. It closely matches ORI’s questions: what a weaker observer can verify about a stronger AI, and what happens to local guarantees when systems are combined. The institute explicitly notes that guarantees depend on assumptions and do not establish safety of an entire AI system. This is a research program, not a proven safe superintelligent system. [S29](https://resi.org/), [S30](https://resi.org/research/).

## 5. Comparative framework for the ORI page

| Family | What is evaluated | Most useful reference points | Principal gap |
|---|---|---|---|
| Non-agentic predictor | Whether instrumental goals emerge from training | LawZero | Moving from a conditional argument to implementation |
| AI control | Whether an adversarial agent can cause harm despite safeguards | Redwood, AISI | Transferability of evaluation to stronger systems |
| Operational monitoring | Coverage, detection, response time | DeepMind, OpenAI | Misses, infrastructure bypasses, latency |
| Behavior and control evaluation | How well a safety claim is substantiated | Apollo, METR | Limited access, evaluation awareness |
| Cryptographic verification | Who computed an answer and how | FlashProve | Does not establish meaning or answer safety |
| Bounded cognitive architecture | Component and information-flow boundaries | CoEm, historically | Lack of a verified current result |

## 6. Proposed ORI research series

The following are original proposals for future work, not completed experiments or results borrowed from these organizations.

### 1. Register of claims and assumptions
Create a machine-readable schema covering the claim, primary source, date, protected object, adversary, assumptions, proof or experiment, code, limitations, and replication status. Every guarantee must specify its boundaries: data distribution, available actions, trusted base, and world model. The result should let readers distinguish theorems, tests, and promises.

### 2. Comparing protocols on safe synthetic tasks
Compare no monitor, an independent monitor, deferral to a more restricted agent, and deterministic permission checks. Use isolated simulations of files, calendars, and email without real recipients or data. Metrics: usefulness, missed dangerous actions, false blocks, latency, and cost. The output is a reproducible benchmark, not a promotional “safety percentage.”

### 3. Separating proposals from actions
The AI only proposes a typed operation. A separate process checks permissions, recipient, limits, and whether consent remains current; a minimal executor carries out the action. Test races between checking and execution, duplicate delivery, stale permissions, and rollback. Strong claims are appropriate only for implemented and verified properties, not for the model’s “goodness.”

### 4. Uncertainty and abstention
Test calibration on ambiguous or changed facts, abstention thresholds, and sensitivity to error costs. Do not conflate a judge’s high confidence with the probability of actual safety. State how results depend on the dataset.

### 5. Monitor independence
Check that the agent does not control evaluation frequency, logs, or monitor permissions. Reconcile agent logs against separate telemetry. Conduct only authorized synthetic tests; do not test real external services or infrastructure without agreement.

### 6. Digital continuity without expanding authority
To connect with ORI’s digital continuity work: preserve fact provenance, corrections, consent versions, and access restrictions when transferring memory. Context and memory must not become indefinite permission to act. Study state recovery after failure and user revocation. This is engineering continuity of state, not proof of consciousness or continuity of personhood.

## 7. International extension: different mechanisms, not identical competitors

The map covers 23 organisations, programmes and research lines, not 23 independent companies. Teams and funding overlap. Coverage includes North America, the United Kingdom, continental Europe, Israel, China, Japan and Singapore. This is not a complete global catalogue; omission of a country or group does not imply an absence of research. Selection is based on accessible primary technical descriptions and relevance to AI verification or control, not brand recognition.

### China: Institute of Software, Chinese Academy of Sciences, TIS
Abstract interpretation, SMT, reachability and PAC assessments feature in DeepPAC, DeepInc, DeepCDCL and PRODeep. DeepInc reuses verification results after small network changes; DeepPAC uses probabilistic approximation. Tools and ISS autonomous-driving demonstrations are described, but a statistical PAC guarantee is not unconditional, and verifying a network property does not establish real-road safety. [S31](https://tis.ios.ac.cn/), [S32](https://tis.ios.ac.cn/iss/pages/verification/trustworthy_ai/), [S33](https://tis.ios.ac.cn/iss/pages/open_projects/neural_network_verification.html).

### Germany: DFKI, Neuro-Symbolic Verification
The IJCAI 2022 work by Xuan Xie, Kristian Kersting and Daniel Neider extends formal specifications with neural components to express semantic properties. A publication and implementation based on neural-network verifiers are available. The result concerns the encoded specification: errors in the semantic recognition component do not disappear because the remaining system is formally correct. [S34](https://www.dfki.de/en/web/research/projects-and-publications/publication/14069), [S35](https://arxiv.org/abs/2203.00938).

### Japan: AIST IPRI
Yusuke Kawamoto's 2025–2028 project studies mathematical verification of the adequacy of measures against ML risks; related work by Reynald Affeldt formalises physical and probabilistic systems in Rocq. Official aims and projects are confirmed, not an achieved general guarantee. The release of AI safety and evaluation materials in May 2026 likewise does not turn a research agenda into a proven safe model. [S36](https://www.ipri.aist.go.jp/en/projects/index.html), [S37](https://www.aist.go.jp/aist_j/press_release/pr2026/pr20260528/pr20260528.html).

### Singapore: NUS FOCS / KISP
An audit dated 1 November 2026 examines AI-generated memory-safety proofs by Anthropic/Theorem. The methodological question is whether the proven formal specification matches the claimed property. Absence of errors detected by AddressSanitizer is not equivalent to complete memory safety. This is an audit of a specific result, not a universal safeguard or a claim that all AI-generated proofs are wrong. [S38](https://focs-lab.comp.nus.edu.sg/), [S39](https://focs-lab.comp.nus.edu.sg/blog/memory-safety-audit/).

### Singapore: AI Verify Foundation / IMDA, Project Moonshot
An open toolkit for benchmark testing and red teaming LLMs and AI applications. This is an actual empirical assurance tool, not formal verification. It provides a complementary layer of reproducible assessments; passing a test suite does not establish the absence of untested failures. [S40](https://aiverifyfoundation.sg/tools/moonshot/), [S41](https://github.com/aiverify-foundation/moonshot).

## 8. How to extend the map

The next level is a dedicated examination of each approach's threat models, specifications and artefacts, not a longer list of logos. For each result, ORI should record the date, precise claim, assumptions, sections read, code availability and independent replication. Tests, theorems, probabilistic certificates, audits and promises of future development must remain distinct statuses.

The proposed experiments in section 6 have not yet been performed. Priorities are synthetic actions without real recipients or payments, reproducible metrics and separate permission checks. This review aims to select testable questions, not to declare universal safe AI.
