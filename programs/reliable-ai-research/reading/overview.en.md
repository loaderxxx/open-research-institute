# Reliable AI Research

<!-- ori-nav:start -->
[Русский](overview.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

Answer, source, evaluation and work of agents

**Reading format:** Markdown. Russian source text: 3501 words. Prepared: 2026-09-23.

**Scope of Review:** Review of open published literature; without its own protocol or system design.

The document was prepared using AI and internal editorial review. No external scientific review has been conducted. For the full bibliography and notes on reading depth, see [SOURCES.md](../SOURCES.en.md).

<!-- ori-toc:start -->
## Contents

- [1. Four dimensions of verification](#1-four-dimensions-of-verification)
- [2. Plausibility and truth](#2-plausibility-and-truth)
- [3. Citation as a connection, not decoration](#3-citation-as-a-connection-not-decoration)
- [4. Long context](#4-long-context)
- [5. Multiple agents](#5-multiple-agents)
- [6. Human annotation of execution traces](#6-human-annotation-of-execution-traces)
- [7. Flawed benchmark](#7-flawed-benchmark)
- [8. Position bias in evaluators](#8-position-bias-in-evaluators)
- [9. Confidence calibration](#9-confidence-calibration)
- [10. Multiple metrics](#10-multiple-metrics)
- [11. Facts in a long answer](#11-facts-in-a-long-answer)
- [12. Support for search-generated answers](#12-support-for-search-generated-answers)
- [13. Debate and cost](#13-debate-and-cost)
- [14. Solution leakage](#14-solution-leakage)
- [15. Weak tests](#15-weak-tests)
- [16. Truth and popular misconception](#16-truth-and-popular-misconception)
- [17. Agreement and independence](#17-agreement-and-independence)
- [18. Time and version](#18-time-and-version)
- [19. Scope of applicability](#19-scope-of-applicability)
- [20. Summary of open questions](#20-summary-of-open-questions)
<!-- ori-toc:end -->

## 1. Four dimensions of verification

The research response has multiple failure surfaces. For example, a statement may correspond to the source, but not answer the question posed; another answer solves the problem, but provides an irrelevant link. The execution team is able to deliver both texts without any apparent interface failure and still fail to meet the scientific goal. Therefore, when reading the evaluation, it is important to establish whether the authors observed the quality of the statement, the reliability of the link, the behavior of the entire system, or the quality of the test. These units do not form a ladder in which one automatically certifies the next. The transition between them requires a separate argument and usually other data.

The authors of HELM compared models across several scenarios and metrics, ALCE studied the quality of responses with citations, and MAST analyzed failures of multi-agent trajectories. These are different observable units: the model, the supported statement, and the sequence of team actions. One successful measurement does not replace another.

The accuracy of the answer can hide an incorrect quote, and a correct local quote can be a failure of the final task. The benchmark itself may allow an undesirable pattern of success.

What exactly needs to be confirmed for a particular conclusion? The articles collectively provide language for distinguishing between evidence, reproducibility, and limitations. The practical meaning of the distinction is simple: indicate at what level the evidence is found, and not declare the remaining levels closed. It is precisely this transition that is most often hidden in the smooth final story. The order of these questions varies from task to task; the general form of the answer does not determine the general order of evidence.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A03](https://aclanthology.org/2023.emnlp-main.398/); [A07](https://arxiv.org/abs/2211.09110)

## 2. Plausibility and truth

Fluent scientific style is able to reproduce a familiar error without obvious fiction. A question framed around a popular misconception tests a different weakness than a question with a rare archival date. In a long answer, errors may appear alongside correct details; a single paragraph assessment is then too rough. It is important for the reader to separate signs of narrative coherence from factual evidence. It is easy to read a coherent text as a single piece of evidence, although each independent message requires its own support. It does not follow from this that fragmentation will solve all problems: it also depends on what is considered a minimal fact.

TruthfulQA is composed of questions that provoke common misconceptions and shows that linguistic fluency does not guarantee truthfulness. FActScore breaks down a long answer into atomic facts for separate verification. The approaches measure different manifestations of actual reliability.

No single test covers the entire scientific literature. Labeling facts requires choosing a source of truth and a way to separate sentences.

How to evaluate both the content and accuracy of a long text? One smooth paragraph can contain several independently verifiable theses. It is especially easy to make mistakes when reliable details surround the central fiction. The number of true neighboring phrases does not convey the probability of a controversial conclusion without its own verification.

Section sources: [A09](https://aclanthology.org/2023.emnlp-main.741/); [A10](https://aclanthology.org/2022.acl-long.229/)

## 3. Citation as a connection, not decoration

A link at the end of a sentence does not connect the document to the sentence in general, but the specific content of the document to a specific part of the statement. Imagine an article that establishes a correlation and a retelling that declares a causal effect. The URL exists and leads to the present study, but it does not provide a strong conclusion. Another glitch occurs when the correct link appears next to several sentences and the reader does not know which one it refers to. The presence of a clickable address increases the accessibility of the check, but in itself does not complete it. This fundamental distinction is especially important in long research texts.

ALCE evaluates the model's ability to provide supporting citations to responses, and generative search engine audits differentiate between the completeness of statement coverage and the accuracy of each reference's match. The researchers found that visible links do not guarantee support for adjacent text.

Assessment methods use limited questions and documents; human assessment is not free from disagreement. A link to an existing page may also only support part of a complex sentence.

How can you provide evidence for a specific claim? Distinguishing between completeness and accuracy of citations makes the review more meaningful. A short link can also hide the translation, abbreviation, and selection of the quoted version. Each such change can weaken the match even if the document address remains unchanged.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A04](https://aclanthology.org/2023.findings-emnlp.467/)

## 4. Long context

The size of the context window tells you how much material the model can technically convey, but not how smoothly it uses each fragment. If a significant disclaimer is caught between dozens of irrelevant pages, the answer may rely on the title and conclusion, leaving the middle unaddressed. This is not a special property of a scientific source: it is related to the placement of information within a long input. A controlled study of positioning can address this risk, although it does not replicate all human reading patterns. Therefore, the ability to load a document and the ability to correctly convey its key limitation refer to different observable events.

Lost in the Middle compared the use of a relevant fragment at the beginning, middle, and end of long input in question-answer and search tasks. For the models studied, performance often deteriorated when the desired material was placed in the middle.

This is not proof that every modern model ignores the middle of any text. The set of problems and model versions set the limit on the distribution of the result.

How does the position of the document affect the final argument? A large amount of available context does not equate to a reliable account of all the sources contained within it. Therefore, the failure of a disclaimer to appear in a response does not mean its absence from the article. This is one reason to keep the fact of accessing text separate from the fact of using it.

Section sources: [A08](https://aclanthology.org/2024.tacl-1.9/)

## 5. Multiple agents

Dividing the research task between agents creates more messages and transfer points. One agent can find the document, another can rewrite the conclusion, and a third can agree on the final answer. Each transmission carries information about what was considered resolved and what remained unclear. If these conditions are confounded, increasing the number of participants does not ensure independence of the test. Multi-agent systems should be assessed as organizations of actions, not as a simple number of votes. In published work, observed failures are specific to the systems and tasks studied; their classification helps explain the mechanisms, but does not measure performance of future teams.

MAST classified 14 types of failures into three categories when analyzing multi-agent systems. Research on sparse communication has shown that in tested debates, connecting every agent to every other agent is not always necessary for a good outcome. Shared reading concerns both interaction errors and communication costs.

The taxonomy is derived from specific frameworks and traces; The topology gain depends on the models and tasks. Any number of agents cannot be declared beneficial or harmful without comparative experiment.

When does an exchange correct errors and when does it propagate them? The number of participants in itself is not an indicator of the independence of the review. If the error at the intermediate stage went unnoticed, the subsequent agreement of the participants only consolidates it. The route is valuable precisely because it allows you to see the direction in which an incorrect assumption is spreading. An outwardly smooth outcome is therefore capable of hiding internal discontinuities that are only detectable by the history of the participants' actual communications.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A02](https://aclanthology.org/2024.findings-emnlp.427/)

## 6. Human annotation of execution traces

Marking a long route requires determining where exactly the task went astray. An unsuccessful final response may result from a poorly defined role, an unaccounted for cue, or an incorrect final check. These reasons sometimes overlap, so that the word “error” does little to explain the observation. Qualitative analysis of a small number of cases and large-scale annotation of a large collection provide different types of evidence. The first helps to develop distinguishable categories; the second allows you to see how often they are marked using the adopted marking method. No stage should be replaced by another.

In the updated version of MAST, researchers analyze seven multi-agent frameworks and more than 1,600 traces, building on the original expert classification of over 150 cases. Types of failures include system design, inconsistency between agents, and completion checking.

Large-scale automatic application of taxonomy relies in part on a model judge; the consistency of experts in the original sample does not prove universality across all agent systems.

What failures occur only when transferring work between participants? The article provides empirical categories of errors, but does not guarantee their elimination. The frequency of labels in a large corpus refers to the accepted classification. It does not account for every conceivable way of failure, nor does it prove the causality of every label assigned.

Section sources: [A01](https://arxiv.org/html/2503.13657v3)

## 7. Flawed benchmark

A benchmark turns a difficult goal into a measurable condition for success. This is necessary for comparison, but the condition may not be strong enough. For example, a patch passes the required tests and at the same time changes the behavior of an input that the author of the task did not add to the test. The agent's score then reflects a property of the test set along with a property of the agent. Research conclusions about the share of solved problems should be tied to the test version and audit rules. The presence of a digital metric does not make its subject obvious, and manual re-evaluation can reveal a discrepancy between the label and the meaning.

The SWE-Bench+ audit manually looked at successfully solved problems for a specific combination of SWE-Agent and GPT-4. The authors found cases of solution leakage through the problem description and past tests with a suspicious patch. After filtering, their success rate dropped significantly.

Study percentages refer to the set and system examined at the audit date. They do not describe the universal frequency of model fraud and do not discount all automated code review.

When does test success mean solving the original problem? The quality of the reference is as important as the quality of the system being tested. The reference check changes the metric value without changing the patch. This allows us to understand why the audit of the benchmark itself is part of the model evaluation, and not an external bureaucracy.

Section sources: [A05](https://arxiv.org/abs/2410.06992)

## 8. Position bias in evaluators

The judge comparing the texts receives them in a certain order. Even when the content of both responses is the same, the position on the screen or in the query may be an additional signal to the model. This is a subtle form of measurement-presentation dependence: the result looks like a quality preference, but partly relates to the design of the experiment. It should not be concluded from this that each judge necessarily chooses the first text. A more precise question is how much a particular estimate holds up after a controlled permutation. This question relates to the reliability of the meter, and not to the actual truth of the options.

The LLM-as-a-Judge study found a positional bias when comparing responses: preference could vary depending on the order of presentation. The work evaluates repetition stability, permutation consistency, and preference fairness on specific tasks.

Bias varies by judge, task, and differences in response quality; You cannot assign a single value to each automatic estimator. Rearranging the order does not itself solve all types of unreasonable evaluation.

How stable is the solution when the pair's representation changes? The result calls for reading the assessment score along with the conditions for receiving it. When the quality of two options is nearly identical, chance and positional effects are particularly difficult to distinguish from content preference. The margin of the result depends on the design of the comparison.

Section sources: [A06](https://arxiv.org/html/2406.07791v9)

## 9. Confidence calibration

A confident statement and a numerical estimate of probability are different. The model may speak categorically out of stylistic habit; calibration asks whether groups of responses with stated probabilities correspond to the actual success rate. Using a known set of questions, this relationship can be measured. With a new genre of research, a different language and an unknown standard, it is much more difficult to transfer. Therefore, a confidence number can be useful information in a certain setting and yet not separately support a quote, date, or causal inference. The conditions under which the probability is obtained are included in the meaning of the number itself.

Calibration studies ask whether the confidence expressed by the model matches the empirical frequency of correct answers. Even a useful signal of confidence depends on how the question is presented and which answer is considered correct. This is a separate metric from average accuracy.

High confidence does not turn an unsupported statement into a fact. Low confidence does not exempt you from checking where the cost of error is high.

What is the relationship between confidence, source, and actual error rate? Calibration publications provide measurement language, but not a universal certificate of validity. The calibrated probability is useful for trust decisions only in the domain where frequency matching has been verified. Self-confident intonation does not convey such information.

Section sources: [A11](https://arxiv.org/abs/2207.05221)

## 10. Multiple metrics

One score usually mixes up multiple targets. The answer may be accurate, but too slow; withstand changes in wording, but make mistakes in a rare group; avoid gross fiction, but do not give the required quotation. Comparison of models depends on which properties are included in the table and which are left outside it. Public posting of queries and responses makes this solution visible, but even a detailed table is no substitute for defining the reader's problem. The different metrics are not part of one unconditional rating; the compromise between them must be described according to the observation conditions.

HELM proposed to evaluate not only accuracy, but also calibration, robustness, fairness, bias, toxicity, and efficacy when applicable. Open jobs and outputs allow you to see trade-offs between metrics instead of just a single number.

Scenario coverage is deliberately incomplete; Some properties are difficult to measure in the same way across all tasks. Historical results cannot be carried over to new versions of models without re-validation.

What metrics are relevant to research use? It is necessary to measure multiple properties precisely because maximizing one may mask another risk. A single performance measure can change the order of systems without changing their accuracy. Therefore, the comparison should be read as a set of conditional compromises, and not as a title of winner. A comparable table requires the same understanding of each column, otherwise the numerical comparison only masks the difference in research goals.

Section sources: [A07](https://arxiv.org/abs/2211.09110)

## 11. Facts in a long answer

The long answer is especially misleading as a unit of assessment. A single paragraph may combine a correct article title, an inaccurate date, a correct method, and a fictitious result. If you evaluate it entirely as “almost correct”, it is impossible to understand what error a person can carry forward. Breaking it down into small facts makes the source of each element more discernible. However, science also contains relationships between facts: causality, conditions of applicability, comparison of groups. Testing individual names and numbers does not automatically validate the argument constructed from them. This is the bound of any local actual accuracy metric.

FActScore proposes to evaluate the proportion of supported atomic facts in long text, in particular in biographical answers. Dividing a complex sentence into small statements reveals a mixture of true and false parts that the overall verdict misses.

The measure depends on the source of knowledge and the method of extracting facts; the text may be factually accurate but incomplete or irrelevant to the issue.

What is considered an independent verifiable fact? The unit of review determines which errors become visible in the assessment. Splitting a long text helps to localize the error, but does not in itself give weight to each fact. Importance to the issue remains an independent criterion.

Section sources: [A09](https://aclanthology.org/2023.emnlp-main.741/)

## 12. Support for search-generated answers

A search answer often looks more reliable than a freely generated one, since there are links nearby. However, the issue is not only the existence of the found pages. You need to understand whether they cover every significant point, and whether a particular page supports the idea attributed to it. Omitting a quotation and misassigning a quotation are different errors. The first leaves part of the text without visible support; the second creates a false impression of confirmation. When reading primary research, it is important not to confuse the quality of document extraction with the quality of the final synthesis, although the two interact in the final system.

An audit of four generative search engines on a variety of issues assessed both the support of claims and the suitability of the supplied links for self-checking. The authors found a significant gap between the impression of documentation and actual support.

Products and interfaces change, so historical results are not representative of today's versions. The support criterion itself requires human judgment about the content of the page.

Will the reader see exactly the stated fact in the quoted fragment? Verifiability refers to a traceable relationship, not the number of links on a page. A particularly dangerous situation is when the link leads to a related page: an external sign of relevance makes it difficult to detect missing support for a particular conclusion.

Section sources: [A04](https://aclanthology.org/2023.findings-emnlp.467/)

## 13. Debate and cost

Debates among multiple models can provide alternative solutions, but each message turn consumes time and computation. A dense communication network carries many repeated messages; sparser connections reduce exchange and change which arguments are accessible. Debate quality should therefore be assessed in relation to communication structure. Savings in input tokens do not capture the full cost of scientific research, which also includes sourcing, annotation quality, and human review. The topology study is useful as a controlled comparison of specific settings, not as proof that any reduction in communication is beneficial.

In the sparse topology study, agents exchanged responses over selected channels instead of a full connection. On the problems studied, the quality could be comparable or higher at lower computational costs. This is a counterexample to the assumption that more messages are necessarily better.

Results are limited to proven models and benchmarks; comparing tokens is not the full cost of organizing the study and human verification.

When does loss of information reduce quality, and when does it remove noise? The experiment shows the dependence of efficiency on the communication device, not a general law. Economy of input tokens refers to the network form of debate. The expense of preparing evidence and interpreting the error may be major in another type of work.

Section sources: [A02](https://aclanthology.org/2024.findings-emnlp.427/)

## 14. Solution leakage

If an agent knows which observable indicators the benchmark uses to score it, it can satisfy that proxy while missing the actual requirement. For example, a report may include all expected sections even though its key interpretation is not supported by the source material. For code, the analogue is a patch tailored to a limited test suite. This is not a criticism of using metrics; without them, comparison is impossible. Risk arises when a conclusion about a tested feature is transferred to a broader result. A failure audit shows why the success criterion should be discussed alongside the actual content of failures.

In some of the SWE-bench tasks, the investigated agent could find the answer directly in the issue or comment, so passing the test mixed the correction and reproduction of an already disclosed patch. The authors of SWE-Bench+ separately identified this source of bias.

It may be normal to have a hint in an actual work task; to measure independent ability, it changes the meaning of the test. Not every similarity to a clue is bad faith.

What ability is being measured with a ready-made prompt available? Methodological transparency is more important than the “solved” label in the results table. A system that satisfies the surrogate perfectly may give a poor answer to the original problem. Therefore, the test only makes sense in conjunction with defining the required behavior.

Section sources: [A05](https://arxiv.org/abs/2410.06992)

## 15. Weak tests

An executable test has a strong property: a program either passes certain cases or it does not. But the description of a software error is rarely limited to pre-listed inputs. Even successful completion may be accompanied by an implicit constraint violation, an additional defect, or a misunderstanding of the desired change. Individual case audits can reveal these gaps. Its percentage, however, relates to the selected tasks and the verification method; it cannot be converted into the frequency of unreliability of all agents. For scientific reading, what is more important is the distinction between the observed test and the broader intent of the task.

The automatic test only checks the coded conditions. SWE-Bench+ found patches that passed the available tests, but when manually read, looked suspicious about the original problem. This shows the difference between passing a set of checks and the quality of the solution.

Manual judgment can also be erroneous, so the assessment must maintain the context of the specific case. The percentage of weaknesses detected cannot be transferred to all repositories.

What should be considered sufficient evidence of correction? Publication makes visible the limitation of any numerical result based on an incomplete standard. This doesn't make testing pointless: it establishes a real but limited property. The problem arises when a partial check is passed off as a comprehensive conclusion. A rare bad patch can be more important than many standard successes if it breaks a critical requirement.

Section sources: [A05](https://arxiv.org/abs/2410.06992)

## 16. Truth and popular misconception

A popular formulation may be so familiar that it ceases to be perceived as a statement requiring proof. These are the kinds of answers that are of interest to truthfulness research on trap questions. The model learns from human texts and is therefore capable of reproducing mass delusions, and not just inventing a new error. This possibility does not mean that any common knowledge is false. This reminds us that claim popularity and verifiability are different properties. Particularly dangerous is the transition from “many people say so” to “primary research has established this.”

TruthfulQA specifically selected questions that people often answer with false, common statements. The experiment examined whether language patterns replicate such misconceptions. It shows that knowing a typical phrase does not equal the truth of the answer.

The set of limited English-language questions does not represent all scientific disciplines. Its accuracy is not a general indicator of future reliability.

How to separate the learned popularity of an answer from the validity of the test? In a research text, the presence of a common explanation requires checking with the primary source. The popularity of the false answer explains its repetition, but is not an excuse. For research use, a relationship with the primary base is needed, not with repetition frequency.

Section sources: [A10](https://aclanthology.org/2022.acl-long.229/)

## 17. Agreement and independence

Two agreeing agents do not necessarily provide two independent pieces of evidence. They may read the same incorrect passage, use similar patterns, or adopt the first speaker's assumption. The apparent unanimity then reflects a common source of error. On the other hand, disagreement does not prove that one answer is correct: both could be wrong in different ways. The reliability of a discussion is determined by the origin of the arguments and the quality of the examination, not by the number of remarks per se. Experiments on multi-agent systems allow us to see some of the effects of communication structure while maintaining the limits of specific tasks and models.

Multiple agents may agree due to shared context, similar patterns, or a common faulty source. MAST documents problems of interagent agreement, and work on judge position effects reveals that ratings depend on presentation. Agreement should not automatically be considered independent replication.

Independence has degrees; even different researchers can use the same defective standard. This does not mean that collective discussion is useless.

Which data are truly independent in a particular comparison? Transparency about the provenance of evidence allows us to understand the strength of consensus. The number of participants measures the organization, but not the independence, of information channels. The latter is determined by what information and arguments are actually available to everyone.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A06](https://arxiv.org/html/2406.07791v9)

## 18. Time and version

The source has a history: date of publication, subsequent versions and the possibility of corrections. Even an exact quotation from an older version can be misleading if the authors later narrowed the conclusion. Conversely, a fresh page may contain new material that was not present when the model was originally evaluated. Experimental reproducibility therefore requires knowledge of the verification time and document version. This information does not guarantee the truth of the result, but it allows you to accurately determine what object is being discussed. In the summary, caution with dates is especially important when comparing the updated preprint and the earlier search description.

Benchmarks, models and web pages change. HELM publishes scenarios and outputs for the sake of comparability, and SWE-Bench+ shows how properties of the problems themselves can change the meaning of the evaluation. The data version and run date are part of the result when the study is repeated.

The repeatability of a past assessment does not mean that the current system behaves the same way. A changed interface or hidden model update makes comparison difficult.

Is it possible to accurately reconstruct the conditions of the published number? Without versioning, the problem and solution may be named the same, although in fact different experiments are being compared. An accurate version is especially important for a preprint with a changing abstract. Without it, even the correct number may be assigned to the wrong stage of the study.

Section sources: [A05](https://arxiv.org/abs/2410.06992); [A07](https://arxiv.org/abs/2211.09110)

## 19. Scope of applicability

A publication always has an area in which observations were collected. For retrieval tasks, the position of the response and the length of the context are important; for code agents - test device; for citation - the language of the documents and the method for assessing support. You can transfer the result to your own question only after comparing the conditions. This doesn't boil down to a mechanical list of differences: we need to understand which differences change the causal chain of the effect being studied. A negative result on one setting does not prohibit the use of another, and a positive result does not provide guarantees for all the following.

ALCE, HELM, and Lost in the Middle respectively highlight citations, broad metrics, and long context mining. Each success tells something useful about a particular ability, but does not provide a unified assessment of scientific research from search to conclusion.

Reliability depends on the subject area, language, novelty of the issue, and verifiability of the primary data. It is impossible to add different percentages without a common unit and conditions.

What error will actually change the output of this project? The exact answer is determined by the subject matter and the evidence, not by one universal scale. External validity is not a formality to be ticked. It requires an explanation of which conditions of the studied mechanism are present and which are absent in the new question.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A07](https://arxiv.org/abs/2211.09110); [A08](https://aclanthology.org/2024.tacl-1.9/)

## 20. Summary of open questions

The literature shows several inconsistent ways to lose the connection between the answer and the reason. The model can confidently repeat a fallacy, omit part of the context, assign an irrelevant link, or pass a weak test. A team of agents can add coordination errors, although sometimes it helps to explore alternative solutions. The reader does not have a single value of “reliability”, but a family of verifiable relationships. Open questions relate to how to compare these relationships on new subjects and how not to replace local success with the promise of universal correctness.

Published works provide verifiable results: audit of citations, marking of atomic facts, analysis of agent failures and quality control of benchmarks. They also highlight the limits of automatic scoring and persuasive explanation. Developments in estimation methods do not replace the need to read raw data.

No single source proves that exploratory AI is infallible. Conclusions are limited by the objectives, models, and date of the studies; some works remain preprints.

Which types of statements require a subject matter expert and which allow for automatic verification? The literature describes the components of verification, keeping the issue open to different fields. Recognizing these differences preserves both the positive results and the limits of their meaning. The research reader receives a map of testable statements instead of a general promise of reliability. The next level of reading begins where the author explicitly identifies the remaining unsupported link in the argument.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A03](https://aclanthology.org/2023.emnlp-main.398/); [A04](https://aclanthology.org/2023.findings-emnlp.467/); [A09](https://aclanthology.org/2023.emnlp-main.741/)
