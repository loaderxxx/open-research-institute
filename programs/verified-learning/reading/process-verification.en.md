# Verifying the Solution Process

<!-- ori-nav:start -->
[Русский](process-verification.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

Process supervision, evaluators and limits of evidence

**Reading format:** Markdown. Russian source text: 3688 words. Prepared: 2026-09-23.

**Scope of Review:** Public literature review of summary and step-by-step feedback, including counter-findings and open questions.

The document was prepared using AI and internal editorial review. No external scientific review has been conducted. For the full bibliography and notes on reading depth, see [SOURCES.md](../SOURCES.en.md).

<!-- ori-toc:start -->
## Contents

- [1. Answer, path and label](#1-answer-path-and-label)
- [2. Why generate multiple solutions](#2-why-generate-multiple-solutions)
- [3. Experiment with GSM8K](#3-experiment-with-gsm8k)
- [4. Outcome supervision](#4-outcome-supervision)
- [5. Process supervision](#5-process-supervision)
- [6. The cost of detailed annotation](#6-the-cost-of-detailed-annotation)
- [7. Local truth and utility](#7-local-truth-and-utility)
- [8. Automatic process feedback](#8-automatic-process-feedback)
- [9. Rationalization as training material](#9-rationalization-as-training-material)
- [10. Why self-criticism is not enough](#10-why-self-criticism-is-not-enough)
- [11. Response position as a hindrance](#11-response-position-as-a-hindrance)
- [12. Test as a partial oracle](#12-test-as-a-partial-oracle)
- [13. Comparability of experiments](#13-comparability-of-experiments)
- [14. Early step error](#14-early-step-error)
- [15. External source of truth](#15-external-source-of-truth)
- [16. Domain shift](#16-domain-shift)
- [17. Strong and weak versions of the statement](#17-strong-and-weak-versions-of-the-statement)
- [18. What objections remain](#18-what-objections-remain)
- [19. Questions for future publications](#19-questions-for-future-publications)
- [20. Final reading](#20-final-reading)
<!-- ori-toc:end -->

## 1. Answer, path and label

Any assessment of a decision presupposes what exactly is considered the subject of assessment. The end label may indicate a match between the numerical result and a known answer. The step flag tells whether a certain transition is allowed within the solution. The score for the entire text may reflect clarity, completeness, or the judge's preference. These signals are often mixed in speech, although they answer different questions.

Mathematical benchmarks are useful as a research platform precisely because some of the results can be verified quite unambiguously. If the model gets the number correct, this is the observed success on the given metric. But the number does not tell how it was obtained. If the sequence of steps contained an error, the occasional correct outcome does not make the explanation credible.

In another situation, all local transitions may look acceptable, but the problem is still not completely solved: a case is missed, a condition is misunderstood, or the answer is not written in the required form. Therefore, detailed process marking does not negate the verification of the final goal. Its advantage is that it adds other information, rather than magically eliminating all types of errors.

This book reads published works at three levels. First, the measured effects of choice and process evaluation are examined; it then discusses what changes with automatic tagging and model judges; finally, the boundaries of transference to open questions are highlighted. The studies described belong to their authors; No new learning experiences or own results are reported here.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050)

## 2. Why generate multiple solutions

A single answer confuses two abilities: to find a possible solution and to recognize the best one found. When the model generates multiple paths, it becomes clear whether the correct candidate is found among them. In the GSM8K work, a separate verifier was used to rank such completed solutions. The authors showed a significant improvement on the studied mathematical set.

Multiple sampling creates a ceiling and a load at the same time. If there is no correct answer, even perfect selection will not correct anything. If the candidates are numerous, distinguishing the one correct among many convincing errors may be more difficult than with two options. The computational cost of generating and ranking is part of the entire research setup.

Consistency between different paths, known as self-consistency, offers a different selection logic: it checks to which answer the set of generated explanations converges. The study reports improvement on a number of reasoning tasks. But a general answer may arise from a common false premise repeated across samples, so agreement cannot be considered an independent mathematical proof.

Both ideas show that the quality of the final response depends not only on the parameters of the generator. It depends on the distribution of options and the way they are compared. Selection at the inference stage, however, is not the same as long-term model training. We must distinguish between a better answer today and a change in the ability to find solutions after new training.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [VL15](https://arxiv.org/abs/2203.11171)

## 3. Experiment with GSM8K

Cobbe et al introduced a GSM8K set of thousands of arithmetic word problems and studied solution generation with a trained verifier. Since the correct outcome of a task is known, the rater can be trained to distinguish between true and incorrect completions. When outputting, it compares several options received by the generator and selects the highly rated one.

The authors report that this method improved test accuracy and scaled with additional data over the studied retraining alternative. With little data, the benefit was not as clear. This limitation is important: the generator-plus-estimator architecture itself does not provide benefit regardless of the size and quality of the training material.

The outcome estimator learns from the final result, so it is not required to reconstruct the proof step by step. It may recognize surface features of successful examples or stable response patterns. Without appropriate analysis, one should not claim that these features explain the experimental success; the point is the logical limit of what an outcome label can establish.

Transfer to another area requires a known outcome measure and comparable candidates. When searching for the causes of a historical event, there is no single number that can label all the answers. GSM8K demonstrates the real benefit of separate estimation on its distribution. It leaves open how to construct an equally reliable signal for problems on which even experts disagree.

Section sources: [S06](https://arxiv.org/abs/2110.14168)

## 4. Outcome supervision

Outcome supervision attaches feedback to the overall decision. Its strength lies in the clarity of the observed result: it is known whether the candidate solved a given problem according to the specified standard. For many arithmetic questions, this is cheaper than reading and evaluating each line. In addition, such a label is closer to the test metric if the final goal actually matches the correct answer.

The resulting label obscures the origin of success. If a path contains an incorrect transition but ends with a correct number, the training signal may be positive. If the error was caused by an early incorrect guess, the late negative mark does not indicate where exactly it originated. Two very different explanations may receive the same reward value.

This does not mean that the final assessment is devoid of content value. It checks the important property of the response and the GSM8K verifier uses it to make a selection. The question is whether this property is sufficient to make the selected explanations good material for further learning. The answer depends on the goal: choosing a number now or teaching the model robust reasoning.

The work of Lightman et al makes this fork explicit by comparison with the labeling of intermediate steps. Its data support a more detailed assessment based on a specific mathematical formulation. But the causal explanation of the advantage cannot be formulated more broadly than the comparisons allow: the quality of the labels, the training procedure, and the test set remain part of the result.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050)

## 5. Process supervision

Process supervision accompanies individual solution steps with assessments of their correctness. This description seems natural for mathematics: one moves from the initial conditions to the transformation, then to the next conclusion. If the error can be noticed on the spot, the model receives a more local signal than a simple “answer did not converge” after the entire solution.

In the Let's Verify Step by Step study, the authors compared process and outcome approaches on MATH. The process system showed the best result; the best verifier achieved 78 percent accuracy on a representative subset of the test. The authors also reported the benefits of active learning for making human annotation more efficient. This is a strong demonstration for this formulation, which should not be turned into a law of all problems.

What counts as a separate step is already a decision about the representation of the process. The calculation can be written in one line, or it can be expanded into five; The evaluator sees the boundaries specified by the text, but not all operations performed within the model. An error in an unstated assumption can make a locally correct transformation useless for the original problem.

However, the step mark provides the researcher with information that is not present in the binary outcome. It allows discussion of early deviation and further development of an erroneous path. The publication provides a basis for studying the process, leaving a separate question as to which subject areas this process can be defined and assessed with comparable clarity.

Section sources: [S07](https://arxiv.org/abs/2305.20050)

## 6. The cost of detailed annotation

The PRM800K corpus includes eight hundred thousand human evaluations of the individual mathematical steps used in the work of Lightman et al. Its scale shows not only the ambition of the experiment, but also the cost of a high-quality signal. Each example requires understanding the local transformation in the context of the entire problem; the simple number of correct final answers does not replace such work.

Human notes are not completely infallible. People may disagree on the implicit assumption, make calculation mistakes, or read the step boundary differently. This caution follows logically from the nature of the task; The above publication does not establish a universal frequency of human errors. Accurate inference about a particular set requires direct data from consistency and analysis of disagreement.

The article reports that active learning increased the effectiveness of process supervision. This means that the choice of examples to evaluate also influences the use of constrained labor, although we do not reproduce implementation details in this review. The general conclusion is limited by the published comparison: additional labels are useful not only in quantity, but also in where they are placed.

In an open subject area, costs take on a different character. Validating the literature review step may require reading the source, determining the version date, and understanding the statistical design. It is impossible to mechanically transfer the price of a mathematical annotation to such actions. The PRM800K study emphasizes the importance of content markup and at the same time its resource limit.

Section sources: [S07](https://arxiv.org/abs/2305.20050)

## 7. Local truth and utility

A step has at least two possible properties. First: the transition is correct relative to the previous premises. Second: it leads to a successful solution. These properties are related but different. A valid arithmetic substitution in a useless branch may be locally correct; a successful search direction sometimes begins with a heuristic guess that has yet to be substantiated.

Automated evaluators often use the available final outcome to judge the value of an intermediate piece. Therefore, the word "process" may indicate the position of a label within a solution without guaranteeing independent verification of the logical truth of the transition. When reading Math-Shepherd and PRM800K, it is important to establish how the labels are obtained, not just where they are applied.

Let's imagine a solution in which the first step is incorrect, but further continuation accidentally leads to the reference number. An automatic signal tied to the final success risks valuing the early fragment highly. This is an illustration of a possible failure, and not a statement that a particular published model failed in this way. To measure the phenomenon, a separate flag audit is required.

In contrast, a strict local rule may evaluate steps without regard to their usefulness for retrieval. The model then runs the risk of choosing error-free but ineffective paths. The two objectives of evaluation should not be confused in the same formulation of “good process”. The published results answer the practical question of accuracy, and the meaning of the mark also requires conceptual analysis.

Section sources: [S07](https://arxiv.org/abs/2305.20050); [VL13](https://arxiv.org/abs/2312.08935)

## 8. Automatic process feedback

Math-Shepherd offers learning notes for math steps automatically, bypassing the heavy reliance on manual annotations. The authors applied the estimator to multiple response ranking and incremental reward learning. According to their annotation, the accuracy of the studied open models on GSM8K and MATH improved. It is an experimental argument that a derived signal may be useful.

Benchmark utility does not, by itself, tell how well a mark matches the mathematician's estimate. An automatically generated signal and an expert local assessment have different epistemic natures. The first may be larger and cheaper, the second better expresses direct verification of a specific transition. Both can be wrong, but the nature of the error is determined by the source of the mark.

It is impossible to directly compare the figures of different publications as a competition of one algorithm with another. Generators, model sizes, candidate sets, training procedures and test conditions change. The substantive question here is rather about trade-off: how much human labor can be replaced while maintaining the connection of the appraiser with the actual correctness of the decision.

In this review, the new Math-Shepherd work is checked against the abstract and bibliography page, so we do not attribute detailed ablation results or label error rates to it. Public evidence supports the direction and the authors' reported performance of the task. To make a strong reliability comparison with the PRM800K, a deeper comparison of methods would be needed.

Section sources: [VL13](https://arxiv.org/abs/2312.08935); [S07](https://arxiv.org/abs/2305.20050)

## 9. Rationalization as training material

STaR and Distilling Step-by-Step treat explanation not only as an object of testing, but also as a teaching material. In the first case, the model generates rationalizations, and the filter based on the known correct answer helps select examples for the next iterations. In the second, the teacher model reports explanations along with labels to train the smaller model more parsimoniously.

The distillation study reports positive results on four NLP benchmarks. It follows that explanatory text can convey a useful statistical signal beyond the brief answer. But the phrase “helps learning” is weaker than the phrase “truly describes the progress of the solution.” The explanation may serve as a mnemonic support, contain important features of the task, or present a recognizable format.

The STaR filter uses the correct final answer. It can remove some unsuccessful examples, but it cannot distinguish a rationale that is correct by chance from one that is sound. Therefore, this approach should not be described as an independent test of each step. It explores the possibility of self-distillation with available answers, rather than addressing the whole question of the causal validity of explanations.

A productive difference emerges from these publications. You can ask whether the training text helps the model complete future tasks, and separately, whether this text deserves a person’s trust as an argument. Even if both answers are positive on some set, they are obtained by different types of evidence. Substituting one for the other would inflate the study's conclusion.

Section sources: [S08](https://arxiv.org/abs/2305.02301); [S09](https://arxiv.org/abs/2203.14465)

## 10. Why self-criticism is not enough

The cheapest form of verification seems simple: ask the same model to reread its solution and find the error. Huang et al.'s work examined internal self-correction without additional external information. They found that models often did not improve mathematical and logical reasoning in this way, and sometimes worsened an already correct answer.

Another primary preprint, available here by abstract, shares the ability to detect the location of a logical failure and correct it after pointing out. The authors report that the latter may be easier than the former. This clarifies the problem: a solver that can rewrite the wrong string still needs a reliable detector of which string to touch.

Internal criticism is not the same as checking with an external source. If a test, calculator, new documentation, or human marking is available to the second pass, the conditions have changed. Therefore, negative results about “self-correction” without feedback cannot be used against any re-testing. The new information that the appraiser has must be accurately named.

A psychologically confident second text can look more thoughtful than the first. Changing the style is not an observation of correctness. Published experiments show the importance of comparing original and revised responses on an independent metric rather than impression of form. Where there is no independent metric, uncertainty should be kept open.

Section sources: [VL14](https://arxiv.org/abs/2310.01798); [VL18](https://arxiv.org/abs/2311.08516)

## 11. Response position as a hindrance

When comparing two answers in pairs, the model judge sees the order in which they were presented. Shi et al.'s study systematically examined positional bias across multiple judges and tasks. The authors found that preference may depend on which text appears first; the effect varied with model, task, and competitor quality differences.

The point here is not that every judge always chooses the first option. A more precise statement: the form of presentation is a variable that can change the assessment. Even if the average agreement with a person is high on some test, stability when permuting options is a separate issue. It cannot be deduced from one beautiful demonstration of comparison of answers.

The evaluation of steps and the evaluation of two whole texts are different, but the general principle applies: the meaning of a label depends on the procedure for obtaining it. If the judge's preferences subsequently become a learning signal, the bias may influence which responses are rewarded. This article does not measure the specific size of the accumulated effect in the learning cycle.

There is also an important transfer boundary. Positional research does not disprove the PRM800K math result: it addresses a different type of assessment. It doesn't prove that a human reviewer is always better. Its role in the review is to remind that the automatic verifier is not a neutral measuring device in name only.

Section sources: [S04](https://arxiv.org/html/2406.07791v9)

## 12. Test as a partial oracle

Automated code testing produces an observable event: certain inputs execute as expected in the prepared environment. This is stronger than the model's mere opinion of the code. However, the set of tested cases is usually smaller than the set of possible program states. Passing the tests means success in a set of checks, but not complete proof of the correctness of the patch.

The SWE-Bench+ audit examined software assignments and identified examples where a fix that was successful under the previous criterion was problematic. Its figures relate to the specific audit procedure and system examined. They cannot be generalized to any code or any benchmark. But the fact itself demonstrates that error is possible on the side of the success meter.

If such a signal is used to select training examples, the model can learn the features of a solution that satisfies the incomplete test. This is a possible logic of displacement, not a separate experiment of this article about subsequent generations. It is especially difficult to notice the problem when success appears objective due to the presence of an executable test.

The mathematical reference answer and the software test share a limited area of ​​observation. The difference is that the code requires consideration of side effects, the environment, and the intent of the change. A review of a software example expands the understanding of verification: even a machine meter must be read along with what properties of the problem it actually covers.

Section sources: [S03](https://arxiv.org/abs/2410.06992)

## 13. Comparability of experiments

Articles about verifiers often give one general accuracy metric, but there are different conditions under it. The sets of problems, generators of candidate solutions, the number of attempts, the way the evaluator is trained, and the source of labels differ. Even the same MATH name does not guarantee identical subsets and output modes. Simply ranking published percentages would not be a reliable comparison of methods.

Generating multiple valid candidates is essential to the GSM8K approach; human annotations of process and their coverage are central to MATH process assessment; Math-Shepherd studies automatic generation of a derived process signal. Each experiment answers its own question. One must ask whether the comparison isolated the very factor to which the improvement is later attributed.

Sometimes an improvement at the selection stage is mistaken for an improvement in the generator's ability itself. But if the generator has not changed, but only the ranking of its output has changed, the internalization claim is not supported by this observation. Conversely, learning from step cues can influence the distribution of future decisions, and not just select the ready-made one from the old ones.

In this book, quantitative details of new work are limited to the available abstracts. Even where the exact success rate is given, it is tied to the performance reported by the authors. The reader wishing to compare methods for cost-effectiveness should refer to the complete tables and reproduced protocols of each publication.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050); [VL13](https://arxiv.org/abs/2312.08935)

## 14. Early step error

One advantage of step-by-step evaluation is the ability to see where a solution has gone off track. After the first incorrect conversion, subsequent rows may be internally consistent with the erroneous premise. The resulting negative label confuses this early cause with later effects. Local assessment potentially separates them.

However, the “first wrong step” is not always easy to localize. The problem condition could have been misunderstood even before the first recorded operation. Notation can subtly change the meaning, and in free text the error is sometimes spread across several sentences. Experimental success in mathematics does not eliminate this conceptual difficulty in other subjects.

An automatic evaluator using the perspective of further continuations may mark a step as bad because it is difficult to obtain the correct end after it, even if the local transformation itself is valid. This is not necessarily a defect for the task of finding an answer, but it is a different semantics of the label. One cannot draw a conclusion about the proven falsity of the transition only from a low reward.

When reading PRM800K, you should also remember that the meaningful human rating is tied to the recorded step. It does not observe all the hidden internal operations of the model. Therefore, the publication confirms the usefulness of step text as an object of feedback; it is not a direct observation of the generator's internal computational path.

Section sources: [S07](https://arxiv.org/abs/2305.20050); [VL13](https://arxiv.org/abs/2312.08935)

## 15. External source of truth

Self-correction takes on a special meaning when a new observation is added to the original text. For arithmetic, this can be a reference answer, for code - the result of execution, for a documentary question - the primary source. Such information is not necessarily perfect, but differs from re-generation on the same premises. Without this distinction, talk of “verification” remains too vague.

The work on the weakness of internal self-correction examines the case without external feedback. Therefore, this limited negative finding is compatible with positive results about GSM8K verifiers: the latter receive training labels associated with the correct answer. The apparent contradiction disappears after clarifying where the error information comes from.

The test result is also external to the textual confidence of the model, but the SWE-Bench+ audit shows its incompleteness. An external source may be strong on one part of the task and silent on another. The source of truth should be characterized by the property it covers: specific program inputs, a final mathematical answer, or direct evidence of a fact.

This gradation is not a new evaluation algorithm. It helps you avoid attributing the properties of one form of feedback to another. A verified calculation does not verify historical dating, and a match to a citation does not verify a mathematical transition. The variety of possible evidence is why transferring results from a benchmark requires its own rationale.

Section sources: [VL14](https://arxiv.org/abs/2310.01798); [S03](https://arxiv.org/abs/2410.06992); [S06](https://arxiv.org/abs/2110.14168)

## 16. Domain shift

In mathematics, the equal sign and the set of valid operations provide relatively explicit criteria for many steps. In inference, common sense, and text interpretation tasks, step boundaries depend on language and background assumptions. The positive result of PRM800K cannot be transferred by simply replacing the word “formula” with the word “argument”.

Distillation of step-by-step explanations on several NLP benchmarks shows that rationalization text can be useful beyond pure mathematics. But this study measures the learning of smaller models, not the independent truth of each teacher rationalization. The coincidence of the term “step-by-step” here does not eliminate the difference in goals and types of assessment.

In an open-ended research question, the author may draw a valid conclusion from weak data or an incorrect conclusion from a qualitative measurement. Marking a sentence requires seeing not only the transition grammar, but also the status of the source. Such a check can be less local than a sequence of calculations. The published mathematical figures do not contain measurements of its cost and quality.

It is useful to formulate the limit of transfer positively: work shows that detailed feedback can help in certain conditions, not that it is always sufficient. This preserves the value of the experiment and points in the direction of an open question: how to determine the object of local evidence in other areas where the right end is itself controversial.

Section sources: [S07](https://arxiv.org/abs/2305.20050); [S08](https://arxiv.org/abs/2305.02301); [VL13](https://arxiv.org/abs/2312.08935)

## 17. Strong and weak versions of the statement

A weak claim about process evaluation states that in some mathematical problems, information about the steps can improve choice or learning relative to the final label alone. The published MATH comparison supports it. A stronger version would be that any evaluator that produces labels within the text will recognize correct reasoning and improve reliability on any task. Its results are not established.

A similarly weak point about the GSM8K verifier is that it improves selection among the generated solutions under the conditions studied. The strong conclusion about the existence of a cheap general verifier for all sciences does not follow from the arithmetic formulation. Accurate distinction between versions protects research from overpromising without detracting from its actual outcome.

Automatic step annotations provide another pair of statements. Their practical usefulness for test accuracy is an empirical question addressed by Math-Shepherd. Whether such labels match human estimates of local truth is another matter. The answer to the first cannot be declared an answer to the second just because both metrics are labeled with the word “process”.

When new results diverge, objects and procedures should be compared first. Perhaps one article measured the final percentage of problems solved, another measured the ability to identify an intentionally introduced error. A contradiction arises only if they actually assert something incompatible about the same conditions. This way of reading helps preserve the complexity of public literature without false dramatization.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050); [VL13](https://arxiv.org/abs/2312.08935)

## 18. What objections remain

Research on positional bias shows that the model judge is able to respond to the location of responses. This does not mean that the assessment is completely unsuitable, but the question of its stability arises. If marking is used for training, the influence of random or systematic preference should be distinguished from the actual quality of the candidate. The relevant experience requires separate analysis.

Research on self-correction reminds us that criticism without a new cue can make a decision worse. This leads to an objection to using the word “verification” too loosely to re-dialogue the same model. Without independent observation, the critic's persuasive comment remains a hypothesis of correctness rather than an act of confirmation.

An audit of a software benchmark shows another danger: formally, an external test may be weaker than the requirement that it is supposed to check. This is not a mathematical experiment or a refutation of the PRM800K, but a meaningful counterexample to the assumption of the infallibility of a machine mark. The objection becomes especially significant when transferred to complex applied tasks.

Thus, critical publications limit the interpretation of positive works from different angles. They cannot be mechanically summed up into an overall error rate. A strong conclusion requires studies in comparable settings where cue quality and endpoints are measured independently. So far, the literature shows several mechanisms of success and several mechanisms of failure.

Section sources: [S04](https://arxiv.org/html/2406.07791v9); [VL14](https://arxiv.org/abs/2310.01798); [S03](https://arxiv.org/abs/2410.06992)

## 19. Questions for future publications

The first open question concerns the meaning of the label: does it reflect local correctness, prospects for success, or a person's preference for a clear explanation? These properties sometimes correlate, but are fundamentally different. A future publication that uses the word “step” should allow the reader to find out exactly what quantity is being measured.

The second issue is the cost of comparable reliability. Human annotations provide a direct signal, but are expensive and ambiguous; automatic ones are cheaper, but often rely on the final result. The Math-Shepherd and PRM800K data open up comparisons, but the reading depth available to us for new materials does not support a universal quantitative price per unit of reliability.

The third issue is related to error detection. If models can fix said failure more easily than they can find it themselves, the quality of the localization signal becomes critical. In open research text, an error may relate to a source, a generalization, or a missing premise. The mathematical step diagram does not provide a ready-made solution to this problem.

The fourth question is measurement outside the usual distribution. Accuracy on a given test reports an important but limited result. You need to know whether the connection between labels and quality remains the same when you change the wording, topic, and structure of the solution. Publications provide reasons to ask these questions; answers cannot yet be presented as a proven general ability of verifiers.

Section sources: [S07](https://arxiv.org/abs/2305.20050); [VL13](https://arxiv.org/abs/2312.08935); [VL18](https://arxiv.org/abs/2311.08516)

## 20. Final reading

The review of process verification relies on a clear result: a separate verifier helped select GSM8K responses, and process markup provided an advantage in the comparison studied on MATH. These results are compelling in their formulation, but are determined by the availability of reference answers, the composition of the tasks, and the way the assessments are prepared. The mere presence of intermediate marks does not constitute independent proof of each conclusion.

Automatic receipt of notes expands the research space; Math-Shepherd reports improvement on math tests without manually marking each step. At the same time, work on internal self-correction and model judges shows that the evaluator can make mistakes, and rethinking without new evidence is not necessarily helpful. It is important to see a specific source of feedback.

The difference between measured accuracy and broad reliability remains a major transfer limitation. Reviewer errors, incomplete tests, and implicit assumptions can survive the beautiful mark of success. Therefore, the published gain should be understood as evidence of the possibility of a certain improvement, and not as a complete answer to the question of the correctness of a complex research work.

The bibliographic register is separate from these pages and communicates the depth of available reading. Particular attention should be paid to the primary articles GSM8K and MATH, then compared with automatic flagging and counterexamples of self-correction. This reading leaves open the most difficult question: where to get sufficient external evidence to verify a step if the correct outcome is not yet known.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050); [VL13](https://arxiv.org/abs/2312.08935); [VL14](https://arxiv.org/abs/2310.01798)
