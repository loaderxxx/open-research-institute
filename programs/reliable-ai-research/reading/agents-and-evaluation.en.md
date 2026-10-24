# Agents and evaluation of research systems

<!-- ori-nav:start -->
[Русский](agents-and-evaluation.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

Failure traces, communication and benchmark boundaries

**Reading format:** Markdown. Russian source text: 3684 words. Prepared: 2026-09-23.

**Scope:** A public review of published research on multi-agent systems and their evaluation; it does not propose an original system design.

The document was prepared using AI and internal editorial review. No external scientific review has been conducted. For the full bibliography and notes on reading depth, see [SOURCES.md](../SOURCES.en.md).

<!-- ori-toc:start -->
## Contents

- [1. Agent as a unit of analysis](#1-agent-as-a-unit-of-analysis)
- [2. From source traces to taxonomy](#2-from-source-traces-to-taxonomy)
- [3. Scale and source of annotations](#3-scale-and-source-of-annotations)
- [4. System design](#4-system-design)
- [5. Coordination failures among agents](#5-coordination-failures-among-agents)
- [6. Check and stop](#6-check-and-stop)
- [7. Intervention cases](#7-intervention-cases)
- [8. Dispute as a form of communication](#8-dispute-as-a-form-of-communication)
- [9. Independence and error propagation](#9-independence-and-error-propagation)
- [10. Comparison with a simple baseline](#10-comparison-with-a-simple-baseline)
- [11. Execution trace and final metric](#11-execution-trace-and-final-metric)
- [12. Agent in a software task](#12-agent-in-a-software-task)
- [13. Outcome evaluator](#13-outcome-evaluator)
- [14. Benchmark properties](#14-benchmark-properties)
- [15. Task and its surrogate](#15-task-and-its-surrogate)
- [16. Time and system versions](#16-time-and-system-versions)
- [17. Limitations of the laboratory role](#17-limitations-of-the-laboratory-role)
- [18. Failure as a source of knowledge](#18-failure-as-a-source-of-knowledge)
- [19. Unresolved comparisons](#19-unresolved-comparisons)
- [20. Limits of the published evidence](#20-limits-of-the-published-evidence)
<!-- ori-toc:end -->

## 1. Agent as a unit of analysis

The word “agent” here does not mean a person with an independent will, but a program participant who is given a role, available context and actions. This is important for interpreting the multi-agent result. Several participants can work through one model and exchange its assumptions; different roles do not automatically create independent knowledge. If the team received an incorrect result, it is necessary to distinguish between an error in understanding the problem, a loss of state, and a weak check of the finished answer. Analysis of the message sequence reveals some of these differences that are not apparent from the final phrase alone.

MAST defines an agent through directions, conversation state, and interaction with the environment; a multi-agent system coordinates several such participants. The work examines performance trajectories, not just final responses.

Behavior depends on the specific orchestration and models. Analysis of published systems does not measure all possible team configurations.

Where does the failure occur between the task and the result? The execution trace makes it possible to see where information was transferred and where a check was missed. The designation "agent" is useful only in conjunction with a description of the observed actions. Otherwise, the human metaphor quietly replaces analysis of the software process.

Similar roles can interact according to different rules. One team configuration transmits all messages to everyone, another limits the exchange; one accepts the result after voting, another depends on the final agent. Therefore, a role title in the prompt tells almost nothing about the actual information path. That path must be kept in mind when interpreting success or failure.

Section sources: [A01](https://arxiv.org/html/2503.13657v3)

## 2. From source traces to taxonomy

The taxonomy emerges from reading the cases rather than falling from the definition of the model. Researchers discuss recurring failure patterns and pin them down into categories that can then be used to mark new trajectories. This creates a common language, but the boundaries of the categories remain an analytical choice. For example, a missed control could be a consequence of an incorrectly assigned role and a lack of information between participants. When counting cases, it is important to understand whether the annotation allows multiple labels and which task was generally considered unsuccessful. The number of failure modes does not mean that other types cannot exist in the future.

In MAST, an initial qualitative analysis of more than 150 traces provided the basis for 14 failure modes in three groups. The authors recruited expert annotators and separately scaled up the annotation.

The taxonomy grew from selected systems and does not claim to cover all possible future errors. The smaller expert-reviewed sample and the larger annotated dataset were not labeled in the same way.

How to read the number of categories? This is a working description of observed cases, not a natural constant. A new category may be needed for future systems. This is the normal limit of an empirical taxonomy built on a finite set of traces.

A single episode may contain several plausible reasons. If an incorrect answer involves both a loss of context and a lack of final verification, the classifier needs to determine the meaning of both labels. Public taxonomy makes it possible to discuss such disagreements, but does not turn borderline cases into unambiguous facts of nature.

Section sources: [A01](https://arxiv.org/html/2503.13657v3)

## 3. Scale and source of annotations

A large dataset of traces gives an impression of precision, but the labels in a large collection depend on how they were obtained. Expert development of categories and automated assignment of labels are different stages of evidence. High agreement with human annotators on the validated set builds confidence in the annotation method, but does not prove that each entry is correct or that the method transfers to another architecture. It is especially important not to cite an old preprint abstract when the current version has changed the number of systems and the amount of data. The version date refers to the content of the scientific claim, not just the formatting of the bibliography.

The current version of MAST describes 1,642 annotated traces from seven multi-agent systems. Large-scale annotations were produced by an LLM judge and checked against expert annotations.

Annotation is not an independent re-execution of tasks. Agreement between raters does not ensure that their overall interpretation is correct.

What does failure rate mean? It refers to the data and rules of a given markup. Therefore, 1642 records expand the coverage of the observation, but do not make each label a manual expert opinion. The origin of the markup is mandatory for interpretation.

The number of expert traces from which failure names are derived should not be confused with the number of all annotated traces. The former support meaningful definitions of categories, the latter support the distribution of labels across the studied array. These are two outputs with different acquisition procedures and different transfer restrictions.

Section sources: [A01](https://arxiv.org/html/2503.13657v3)

## 4. System design

Suppose the model can solve the problem, but its role instruction prevents it from accessing the document it found or requires it to finish before checking. The resulting failure cannot then be explained solely by a lack of subject knowledge. System design includes assignment of responsibilities, conversational memory, and termination cues. In practice, these components interact: poor task formulation can amplify a model's weaknesses. Analysis of specific traces shows a range of such situations, although one observation does not allow the contribution of each factor to be separated precisely. Classification should therefore be read as an explanatory tool, not as a complete causal decomposition.

One major group of MAST failure modes concerns role assignment, termination conditions, and state persistence. A failure may occur before the agent's substantive reasoning begins.

Prompt and coordination interact with the model; a single case does not highlight the contribution of each cause.

Can the failure be attributed to the model's knowledge? Sometimes the problem is the task it was assigned or when it was stopped. When a failure arises from the system's coordination rules, changing the model will not necessarily correct it. This is not a universal claim, but a possible explanation for a particular case.

One can imagine a completely accurate subject answer that no one on the team delivered to the final file because the message was lost. In this case, a low system score is compatible with the sufficient knowledge of some participant. This is an illustration of the difference between a component capability and a collaborative process capability, rather than a new measured case.

Section sources: [A01](https://arxiv.org/html/2503.13657v3)

## 5. Coordination failures among agents

When one message passes a search result to another agent, it carries both explicit content and an implicit indication of confidence. If the second participant accepts the unverified fragment as an established fact, the error grows in the final synthesis. If the first agent's objection never reaches the agent writing the final answer, the number of specialists in the diagram does not reflect how their work was actually used. The communication trace makes this discrepancy visible. But observing message text is not the same as knowing the internal reason for a choice. The distinction between behavior and inaccessible intention must be maintained.

The second group in MAST consists of coordination failures: a message is ignored, a participant does not ask for clarification, or the context of the overall task is lost. The final text may appear coherent despite such a break.

The trace captures the observed messages, but not all of the model's internal motivations. Categories can intersect in one episode.

Is having an expert on the team enough? Their evidence must be included in the final argument. Message transmission may also drop a caveat about the source's reliability. The receiving agent then inherits the content and may mistakenly treat it as more authoritative.

Coordination is especially important when one participant has the disclaimer and the other writes the conclusion. Losing the brief word "maybe" can turn a valid interpretation into a categorical statement. The resulting error is then meaningful, but appears on the information boundary between parts of the work.

Section sources: [A01](https://arxiv.org/html/2503.13657v3)

## 6. Check and stop

The last stage seems simple: check the answer and stop. But this is where different ideas of success can diverge. The agent considers the task complete after filling out the template; the user expected the disputed fact to be confirmed by the primary article. The formal test marks the file as correct even though its content is wrong. The taxonomy of agent failures shows that control and completion are themselves subjects of study. It does not provide a universal scientific peer-review process. This limitation matters: having a “verifier” role is not the same as independent verification.

The third group of MAST concerns task verification and completion. The agent may stop prematurely, fail to check the response it receives, or accept an incorrect test result.

The same external sign of success can hide the defect of the standard; classification does not solve all questions about the quality of the control task.

What was checked before finishing? The role title "verifier" does not guarantee that the source material was actually read. The final check must correspond to the purpose of the task; checking the completeness of the file and checking the validity of the research give different results.

Sometimes a team stops working after the first visible success, although contradictory documents still remain. In other cases, it continues to repeat the same actions pointlessly. Both situations are related to termination rules, but require different explanations. A single negative result does not indicate exactly what dynamics were observed.

Section sources: [A01](https://arxiv.org/html/2503.13657v3)

## 7. Intervention cases

Local changes in team organization can improve the measured task: for example, a different member makes the final decision or clarification of review responsibilities. But such a change can help because it corrects a common failure of the selected system. Transfer to another set of tasks does not follow from a case without new data. The positive result of the case and the limitations of its scope are compatible. You need to be especially careful when the roles, model and testing rules change simultaneously: then the numerical difference is not an assessment of one abstract property of agent systems.

The MAST authors provide case studies of changes in the organization of the two systems and note improvements in some measured results. Their own analysis considers simple edits to be insufficient for overall reliability.

Local improvement cannot be transferred to every agent product; the comparison applies to selected tasks and configurations.

What does the case prove? In a certain environment, the structure of a system can have observable meaning. One successful case study is not a substitute for comparative assessment of a variety of conditions. It shows why the team's structure is worth studying.

The intervention example is valuable because it links failure classification to a measured change in behavior of a specific system. It does not establish a causal law for all agent teams. Even a similar failure label may conceal a different context and a different mode of interaction. The reader needs to keep the result dependent on the design of the case.

Section sources: [A01](https://arxiv.org/html/2503.13657v3)

## 8. Dispute as a form of communication

You can think of debate as a network of channels rather than an endless general chat. A dense network allows each argument to be heard quickly, but causes similar content to be repeated many times. A sparse network reduces the number of messages and changes the order in which ideas are propagated. Topology research tests precisely this aspect with its own models and problems. It does not establish that silence is always useful: isolation can suppress critical objections. The interesting finding is more limited - the number of communication links is a real factor in quality and cost, and maximum connectivity is not the obvious norm.

Research on sparse communication compares debate topologies of multiple agents. In the tested tasks, reducing connections gave comparable or better performance and reduced the consumption of input tokens.

The experiments concern selected models and problems; tokens do not cover the entire cost of research work.

Does everyone need to hear everyone? The publication shows that bond density is an experimental variable. The compared cost in the article has a precise definition. When expanding to another job, its composition may change radically.

If a task requires an immediate response, message savings can be significant. If a task requires multi-day verification of sources, the percentage of input tokens is only one component of the resources. The same empirical results remain true in their table, but their practical meaning changes with the determination of the total cost.

Section sources: [A02](https://aclanthology.org/2024.findings-emnlp.427/)

## 9. Independence and error propagation

If everyone in a discussion reads the same wrong source, their agreement will only be strong on the surface. In another situation, limited communication may preserve the independence of initial decisions, but leave one agent without the necessary clarification. Both mechanisms are conceivable, and their relationship depends on the task. Works on topology and coordination failures help name the opposite sides of information exchange; they do not provide a universal optimum for any science. What should be judged is the provenance of the arguments, the ability to detect disagreement, and the quality of the final review, not the beautiful transcript of the argument.

Communication may convey a useful objection, but may propagate an incorrect premise. Many messages do not mean many independent sources of knowledge.

The topology paper measures debate metrics rather than the full causal history of each error.

How should agreement be interpreted? Its evidential strength depends on the origin of the arguments and the form of exchange. Agreement after an exchange of messages cannot be considered an independent replication. A common channel can simultaneously increase awareness and spread confusion.

One network can spread a valid counterargument faster, while another can maintain a diversity of assumptions. The optimum of these qualities is not defined by the term “sparse” or “complete” connection. The study of bounded topologies is valuable because it translates verbal intuition about communication into a comparable property of systems.

Section sources: [A02](https://aclanthology.org/2024.findings-emnlp.427/); [A01](https://arxiv.org/html/2503.13657v3)

## 10. Comparison with a simple baseline

More participants usually means additional model calls, messages, and the ability to diagnose a failure. But the increase in success rate only makes sense in relation to an alternative with a comparable budget. Perhaps several independent attempts by one agent would have produced the same effect; perhaps the special role added fundamentally different control. Publications on individual benchmarks examine parts of this comparison. The term “multi-agent” alone does not establish an advantage over a single-agent system without setting up an alternative, determining the cost and the same criterion for success.

A complex command must be understood in relation to an alternative on the same task. MAST is motivated by the fact that the payoff of multi-agent systems is not always large against simple base cases.

Not every basis has the same computational budget, and the quality of individual tasks varies.

What's the cost of the extra complexity? The final success rate without comparison conditions does not answer. Without a simple basis, it is unclear what coordination added beyond the additional number of trials. This question relates to the causal interpretation of advantage.

The success of a simple baseline also does not necessarily mean that the team is useless in all tasks. It shows that a specific advantage in a particular comparison has not been established. Other tasks may depend differently on the division of labor. Negative and positive outputs equally require a set of conditions to be specified.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A02](https://aclanthology.org/2024.findings-emnlp.427/)

## 11. Execution trace and final metric

The total score is useful for an overview table, but does not show well when an error has occurred in a long chain. The trail adds a sequence of requests, responses, and transitions between participants. It may discover that an important document was found and then ignored, or that an incorrect conclusion appeared before the search. At the same time, reading the trace itself requires classification and can become a source of new errors for the evaluator. Transparency of the material provides an opportunity to challenge an interpretation, rather than automatically making it correct.

HELM emphasizes the transparency of queries and responses in model evaluation; MAST reads sequential agent traces. A single success number and a process record provide different information.

An open trail does not make a weak reference strong, and a long trail requires interpretation.

Where is the cause of the error visible? The sequence of actions helps explain the failure if the classification is justified. The trace reveals visible transitions, but the invisible knowledge of the model is not directly extracted from it. The explanation is always tied to the observed record.

In a long trace, an error may have an early cause and a late manifestation. The first agent missed the document, the third made an unproven conclusion, the last answered confidently. Classification based on the location of the visible failure and classification based on the suspected underlying cause may diverge. This limits too straightforward reading of the annotated sequence.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A07](https://arxiv.org/abs/2211.09110)

## 12. Agent in a software task

A software fix is convenient because it can be run. However, a software test only observes selected inputs, and the task may also require compatibility, exceptions, and side effects. A patch that passes the existing checks sometimes violates what the request was created for. This makes the benchmark audit meaningfully important for assessing the agent: the error can lie both in actions by the agent and in the definition of success. Testing one combination of an agent system and benchmark, one cannot infer the total proportion of incorrect corrections in all programming.

SWE-Bench+ audits the evaluation of code fixes and shows that passing the prescribed tests may be at odds with the substantive success of the patch.

A specific audit does not provide the overall failure rate of all code agents.

What does resolved mean? The meaning depends on the tests, the environment, and the meaning of the task. The executability of the code makes the test a strong indication of the tested inputs. Beyond these inputs, its evidentiary value is limited.

The test cases may have been chosen before the patch and did not include the edge input that the new implementation breaks. Passing the former set provides true evidence about the given cases, but does not make the new implementation equivalent to the expected behavior across the entire input domain. This logical limit is also useful outside of programming.

Section sources: [A05](https://arxiv.org/abs/2410.06992); [A01](https://arxiv.org/html/2503.13657v3)

## 13. Outcome evaluator

Large-scale trace analysis practically requires an assistant for classification, but the model judge can himself depend on the form of presentation. The positional bias paper measures this relationship in paired scores; it is not a direct translation of the MAST agent set. Its significance here is methodological: automation of assessment requires knowledge of the properties of the appraiser. Peer review of a portion of the data, label agreement, and robustness to query modification answer different questions. The absence of an ideal judge does not render scale marking useless, but it does limit the power of its numbers.

MAST scaled the annotation with the model estimator; a separate study of judges found positional bias in answer comparisons. These are different applications of a judge.

The positional effect is not a direct estimate of the MAST annotator; its value cannot be substituted into someone else’s table.

Who measures the meter? Agreement with experts and robustness to representation are separate issues. The size of bias from one judge study cannot be transferred to another application. You need to check your own marking procedure.

Agreement between the model estimator and the people on the sampled set shows comparability where comparisons were made. Systematic error outside this set may go undetected. It is therefore reasonable to read a large tagged collection as the result of an evaluative procedure rather than as a direct record of the reasons for failure without an intermediary.

Section sources: [A06](https://arxiv.org/html/2406.07791v9); [A01](https://arxiv.org/html/2503.13657v3)

## 14. Benchmark properties

A wide comparison table makes visible the qualities that precision alone hides: stability, calibration, efficiency and other properties. But even many indicators can rely on a weak individual task. In code, an insufficient test can incorrectly declare a patch successful, no matter how many other metrics are included in the report. In the opposite direction, a deep audit of one task does not inform the breadth of the model’s behavior in other scenarios. The two forms of evaluation criticism are complementary conceptually: the scope and validity of a particular standard require separate consideration.

HELM compares different scenarios and metrics, while SWE-Bench+ examines the shortcomings of programming benchmarks. Together they show two sides of the assessment: broad coverage and the quality of the local benchmark.

A broad list of metrics does not correct a specific bad test, and auditing a single test does not cover all risks.

What properties are actually observable? The answer is determined by the dialing device and the selected level of analysis. Coverage and validity vary: a broad list of jobs can hide local defects, but a deep audit of a single job does not provide breadth.

The quality of the assessment is also determined by what is considered a task. One benchmark requires obtaining a numerical answer, the other requires fixing the program without a side defect. Different requirements do not add up to one axis of complexity. Many indicators are useful when the user can understand which requirement matches their question.

Section sources: [A07](https://arxiv.org/abs/2211.09110); [A05](https://arxiv.org/abs/2410.06992)

## 15. Task and its surrogate

The agent has a practical goal, and the benchmark has an observable proxy for it. A proxy is needed because every future consequence of a programmatic change or scientific text cannot be directly measured. The gap between them creates space for false success. The model doesn't have to be intentionally "fucking": it can simply optimize what's available in the context. Task audits reveal real instances of discrepancies. When transferring conclusions, you should name which property the test tested and which properties the requirement left out.

The agent optimizes the available termination flag. If the validation is limited, it may receive a positive label without fulfilling the user's broader intent.

The described mechanism is analytically possible; Published audits measure only their objectives and cases.

What is the difference between goal and criterion? The surrogate must be read as partial evidence, even if it is automated. A success label should communicate the object of measurement rather than promise all properties of the result. This is especially important when automatically ranking systems.

The surrogate can miss not only the result error, but also the rationale error. A scientific proposal with a real reference may attribute a conclusion to the article that it does not make. The formal sign of the presence of an address is fulfilled, but the research goal is violated. This is a parallel to weak code testing, not a direct result of the code article.

Section sources: [A05](https://arxiv.org/abs/2410.06992); [A01](https://arxiv.org/html/2503.13657v3)

## 16. Time and system versions

A table from one version of an article may become outdated after the corpus is expanded and the method is refined. The current MAST v3 contains more systems and traces than the earlier preprint descriptions. Likewise, the software test and model API change, sometimes without obvious trace in the summary. The success number is therefore related to a snapshot in time: specific instructions, environment and publication. The version check is not a cosmetic bibliography. It preserves the topic of conversation and prevents the old measurement from being passed off as the result of a new state of the system.

A multi-agent system includes a model, its instructions, tools and a test environment; changing one element changes the comparison object. MAST v3 itself differs from the earlier description of the number of systems.

Late update of the article does not mean automatic replication of the old experiment on new models.

How to record the output item? The date and version are part of the interpretation of the published result. An old number quoted without a version may be accurate for its time but incorrect for the current publication. Both parts of the message are significant.

The change of version affects not only the size of the corps. The emergence of new systems may change the frequency of tags and the nature of known failures. Therefore, you should refer to the current content and not automatically transfer the early interest to the updated description. Publication history is part of scientific accuracy.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A07](https://arxiv.org/abs/2211.09110)

## 17. Limitations of the laboratory role

An open-label study may require reconciliation of ambiguous evidence, whereas a benchmark offers a clear answer label. In such a transfer, not only the difficulty of the task changes, but also the criterion of what is considered a completed test. The mathematical agent is able to correctly name the number and does not need to attribute the source; a research text needs exactly this. Multi-agent articles demonstrate behavior in their tests. To talk about another area, it is necessary to establish which of the measured mechanisms are preserved when the goal and standard are changed.

In mathematical and programming tasks, the final result is often easier to formalize than an open-ended research conclusion. Works on agent systems study their control conditions.

Observations do not establish the quality of scientific argumentation in areas without a clear answer.

How far to move the output? It is necessary to separately consider the differences between the standard, documents and responsibility for interpretation. Translation into a scientific review requires checking sources, caveats, and controversial interpretations. These properties are not automatically represented in answer calculation problems.

A textual review may also not have a single reference solution: different schools of interpretation diverge from the same sources. This makes it difficult to transfer the automatic success label from numerical or software test problems. Substantive testing must distinguish between the fact of the source, the quality of the argument, and the right to a cautious conclusion.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A02](https://aclanthology.org/2024.findings-emnlp.427/)

## 18. Failure as a source of knowledge

A bad case communicates the possibility of a particular failure, and a large labeled array helps to estimate its distribution in the selected environment. These two conclusions are different. A manual patch audit can show that a successful test does not always mean a fix; it doesn't measure every repository. A taxonomy of agent traces can identify a repeatable type of failure; it does not guarantee the same frequency in the new system. When reading, it is useful to first name the mechanism, then ask separately how often it was observed and by what counting procedure.

An error audit provides information hidden by the average success rate. Trace taxonomy explains failure modes, and manual patch inspection reveals benchmark weaknesses.

Both approaches depend on the cases chosen and the competence of the annotators; a single episode does not determine the base rate.

What exactly is being generalized? The mechanism of failure and its prevalence are different statements. The mechanism found in one audit is useful for asking questions. Its share in another population cannot be obtained by simple recalculation.

The taxonomy helps you see the type of failure even when its occurrence is unknown in a new location. Auditing a test helps you question the label of success even with a good average percentage. These advantages do not require exaggerating the representativeness of individual publications. They act as concrete evidence of possible mechanisms.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A05](https://arxiv.org/abs/2410.06992)

## 19. Unresolved comparisons

It is difficult to compare team organization when the pattern, number of attempts, and coordination rules change simultaneously. A positive finding from a sparse-communication debate does not mean that it will hold under a different objective. And the MAST classification helps explain failures, but does not itself measure the gains of a particular future architecture. An incomplete code test adds uncertainty to the very outcome of the comparison. These limitations leave open the question of when the additional coordination is worth the inherent complexity. It should be answered only within the explicitly stated conditions of the published studies.

It remains open when additional communication helps more than independent attempts, and how to check the final result with a weak standard. Publications provide individual comparisons.

Data from different models and tasks cannot be combined into a single function of cost and accuracy.

What result would change the conclusion? The comparison should be about a specific property, not the overall magic of the team. The absence of a universal comparison does not cancel the particular results. It only prohibits the presentation of heterogeneous observations as one proven order of systems.

It remains important to compare the quality of one well-tested attempt with a group of rapid but superficially consistent attempts. Current publications do not address this issue for all research problems. Its formulation shows why the number of agents and the number of messages are not sufficient indicators of quality.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A02](https://aclanthology.org/2024.findings-emnlp.427/); [A05](https://arxiv.org/abs/2410.06992)

## 20. Limits of the published evidence

What the reader takes away from the literature is not a ready-made organizational chart, but a precise understanding of the power of testimony. The traces tell us about the observed sequences and failure modes; the debate shows the influence of communication topology in the tasks studied; Broad evaluation reveals the trade-offs of metrics. All this is limited to specific systems, tasks and markup methods. If the final research conclusion is not supported by primary documents, the number of agents cannot fill that gap. If the test is weak, a high success rate will also not certify that the task has been completed. This is a boundary that is worth keeping in the overall conclusion.

MAST shows the variety of failures observed; work on sparse debate - the role of communication topology; HELM - the need for multiple metrics and a transparent footprint.

None of this work proves the universal reliability of automatic research organization.

What is left for the reader? Clarify the unit of analysis, control target, and source of each number. A good summary of the review names not only the published effect, but also what it did not measure. This is what preserves the possibility of further verification.

None of the dimensions frees the final statement from its connection with the subject source. Even a perfectly organized team can make mistakes if everyone on the team reads the wrong document or incorrectly transfers its conclusion to another case. This is an independent boundary of agential assessment, visible only when reading the content of the answer.

Section sources: [A01](https://arxiv.org/html/2503.13657v3); [A02](https://aclanthology.org/2024.findings-emnlp.427/); [A07](https://arxiv.org/abs/2211.09110)
