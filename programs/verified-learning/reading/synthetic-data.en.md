# Synthetic data and recursive learning

<!-- ori-nav:start -->
[Русский](synthetic-data.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

The benefits of case studies, the risk of loss of diversity and the conditions for sustainability

**Reading format:** Markdown. Russian source text: 3609 words. Prepared: 2026-09-23.

**Scope of Review:** A public review of research into synthetic material, model collapse, and counterexamples of its inevitability.

The document was prepared using AI and internal editorial review. No external scientific review has been conducted. For the full bibliography and notes on reading depth, see [SOURCES.md](../SOURCES.en.md).

<!-- ori-toc:start -->
## Contents

- [1. What does “synthetic” mean?](#1-what-does-synthetic-mean)
- [2. Positive case of phi-1](#2-positive-case-of-phi-1)
- [3. Explanations as a synthetic signal](#3-explanations-as-a-synthetic-signal)
- [4. What is model collapse](#4-what-is-model-collapse)
- [5. Why the tail of the distribution is important](#5-why-the-tail-of-the-distribution-is-important)
- [6. Replacement mode](#6-replacement-mode)
- [7. Accumulation mode](#7-accumulation-mode)
- [8. Limited sample](#8-limited-sample)
- [9. The Nature correction](#9-the-nature-correction)
- [10. Filter by answer](#10-filter-by-answer)
- [11. Tests and synthetic code](#11-tests-and-synthetic-code)
- [12. Reality as a source of renewal](#12-reality-as-a-source-of-renewal)
- [13. Average error and rare cases](#13-average-error-and-rare-cases)
- [14. Same text, different origin](#14-same-text-different-origin)
- [15. When articles really diverge](#15-when-articles-really-diverge)
- [16. Independence of verification](#16-independence-of-verification)
- [17. Questions about data quality](#17-questions-about-data-quality)
- [18. Strong and weak statements](#18-strong-and-weak-statements)
- [19. What else remains to be learned](#19-what-else-remains-to-be-learned)
- [20. Final reading](#20-final-reading)
<!-- ori-toc:end -->

## 1. What does “synthetic” mean?

Synthetic data here refers to training examples produced by a model rather than direct human recording or observation of the world. This origin imparts neither the truth of a single statement nor the diversity of a set. The model can write a useful exercise, reproduce a bug, explain a known solution, or fill a corpus with monotonous variations. The specific role of the material should be assessed.

One role is instructional exposition: the generated text explains the concept and provides a variety of tasks. The other is an addition to the existing body of observations. The third is the replacement of previous data with a new generation of texts. These situations differ in their sources of external information and statistical behavior; it is impossible to combine them into the thesis “synthetics helps” or “synthetics destroys models”.

The phi-1 study offers a positive example of carefully selected code training materials. Work on model collapse examines the risks of feeding model outputs back into training across successive generations. There is no obligatory contradiction between them: the data-generation conditions, proportion of original data, training objective, and evaluation differ. The following pages explore these differences.

We separate what the authors measured from what they interpreted. A publication about one architecture and problem set does not report the error rate of the entire Internet. The theoretical analysis of model collapse does not prove inevitable degradation in every learning cycle. The purpose of the review is to accurately describe the settings in which positive and negative outcomes were observed and to identify remaining issues.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413); [S12](https://arxiv.org/abs/2306.11644)

## 2. Positive case of phi-1

In the article “Textbooks Are All You Need,” the authors describe training a small language model for code on curated web data and synthetically generated educational texts and exercises. The selected material and the pedagogical form of the examples are considered together. The reported performance on code problems suggests that intelligently designed synthetic learning material is capable of contributing to successful learning.

However, publication is not a simple experiment where only one attribute “synthetic or not” is changed. The selection of input data, textbook generator, architecture, computational budget and evaluation methods form a complex formulation. Therefore, the effect of the entire system cannot be attributed to each synthetic page separately. The conclusion about the role of the data should remain at the level of the comparisons made.

The code challenge provides relatively clear ways to evaluate a solution, although the tests, as a separate audit of software benchmarks show, can be incomplete. A programming instructional text can be useful even in the absence of a direct human author for each exercise. But this is not permission to consider a model story about a new scientific fact as independent evidence of the fact.

An important research idea for the publication is that the quality and organization of the material are as important as the quantity. This is not a universal slogan, since the meaning of quality depends on the task. For exercises, clarity and a testable answer are important; for historical information - the reliability of the source; for rare cases - distribution coverage. The article demonstrates the possibility, not the only rule, for compiling corpora.

Section sources: [S12](https://arxiv.org/abs/2306.11644)

## 3. Explanations as a synthetic signal

In Distilling Step-by-Step, the larger model generates explanations and labels that help train smaller models. The authors report gains on four NLP benchmarks compared to the alternatives studied using less data. Here the synthetic text is not an absolute replacement for all observations: it serves as an additional structure for the available tasks.

STaR also returns the generated explanations to training, selecting cases based on the known correct answer. Such a filter connects the generated material with an external standard. But if the result coincided by chance, the intermediate rationalization may remain erroneous. The work examines the usefulness of iterative loops on its problems rather than proving the truth of every educational argument.

Both publications distinguish between the usefulness of information for a trained model and the truth of the form of its presentation. Rationalization can suggest essential features even when it is not a reliable report of the teacher's internal causal chain. You cannot automatically use test percentage improvement as evidence for each sentence in a set of explanations.

This circumstance does not make synthetic explanations useless. It asks two independent questions: whether this form of material helps the student and whether the person can be trusted to make meaningful statements in it. Measuring one quantity does not replace measuring another. The distinction becomes especially important when returning explanations to subsequent generations, where untested errors are likely to be copied.

Section sources: [S08](https://arxiv.org/abs/2305.02301); [S09](https://arxiv.org/abs/2203.14465)

## 4. What is model collapse

Shumailov et al. called model collapse the degradation of successive generations of models trained on data that increasingly includes products from previous generations. Their study focuses on the disappearance of underrepresented parts of the original distribution and changes in the quality of generation. This is a specific statistical mechanism, not a statement that every model will suddenly stop responding.

Let's imagine a language with rare dialect forms. The first model can reproduce them less often than they were encountered in reality. If the next model is trained primarily on its outputs, these forms will become even less accessible, despite the grammatical smoothness of mass phrases. The illustration conveys the idea of ​​losing the tail and is not a new empirical dimension of a particular language.

In 2025, Nature published an author's correction of the original article: in the theoretical intuition section, the parameter designations in one expression were replaced, and the online text was corrected. This is not a revocation notice. The presence of a correction must be taken into account when accurately quoting a mathematical section without turning it, without justification, into a statement that all results have been canceled.

The main boundary of the inference is the conditions for data generation. A scenario in which the previous array is replaced by model results is not equivalent to accumulating the original observations next to the synthetics. Later studies tested exactly this difference. Therefore, the explanation of collapse begins with the question of the mode of sampling rather than with a general label of the origin of the text.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [VL17](https://www.nature.com/articles/s41586-025-08905-3)

## 5. Why the tail of the distribution is important

The average success rate does not always reflect the persistence of rare events. If the model reproduces common cases well and hardly generates rare ones, the volume of the generated corpus can be large, but its diversity is still less than the diversity of the original observations. The next generation learns from the available material and cannot obtain from it examples that have systematically disappeared.

Losing rarity doesn't necessarily seem like obvious nonsense. Text can remain fluid, spelling-correct, and suitable for mass-produced tasks. The damage manifests itself in narrow themes, unusual combinations, and representations of less frequent groups. The collapse paper explores this possibility mathematically and empirically in given data models.

Here it is useful to distinguish example error from distribution error. A single generated sentence may be completely true, but many such sentences will not cover the original diversity. Conversely, a rare real-life example may contain its own factual error. Verifying the truth of each element and verifying the composition of the entire corpus are different tasks.

In practice, rarity is determined by the chosen area and metric. Rare syntax, unusual task, and rare social circumstance have different consequences. The publication gives a general mechanism for tail mass loss, but does not provide a ready-made map of exactly which groups will be disadvantaged in any particular hull. Such statements require direct evidence.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y)

## 6. Replacement mode

Recursive replacement means that a new generation of data displaces the original set the next time it is trained. In this setting, the models have less and less direct access to observations of the original distribution. The Nature paper analyzes this kind of degradation; a study by Gerstgrasser et al also observes a collapse when the original real data is replaced by synthetic outputs.

It is important to understand that successive loops create cumulative representation error. Each generation can reproduce rare forms a little worse, and the next one sees an already changed picture of the world. Even if individual lines are read well, the statistical memory of the source is reduced. The evidentiary status of this statement relates to the models and updating rules examined.

Substitution should not be confused with creating several proven exercises for the original textbook. As exercises are added, the primary examples may be retained; when replaced, they disappear from the next case. The same generator is capable of participating in both schemes, but the dynamics of the subsequent training are different due to the movement of the data.

Replacement mode serves as a useful warning, but does not literally describe all web-based learning. Actual corpora contain a mixture of human, machine, and republished material; the way to select this mixture can be complex. Direct transfer of the studied trajectory requires knowledge of the proportion and availability of the original observations, as well as the quality of the sampling procedure.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413)

## 7. Accumulation mode

Gerstgrasser and co-authors studied a different scenario: the original real data is stored, and materials from each subsequent generation are accumulated next to them. In the linguistic and other generative productions studied, this approach avoided the collapse observed with substitution. In the analytical simplified model, the authors obtained an upper bound for the error that does not grow endlessly with the number of iterations.

The counterexample is methodologically important. Two studies on synthetics may come to different conclusions because of different rules for constructing educational material, not because of incompatible data. The accumulation maintains the point of contact with the original distribution. This is an explanation of the mechanism within the work, not a proof that any practical implementation will automatically be equally robust.

Conservation has a material side: more and more data requires storage, selection and learning. The publication compares the selected modes; It is impossible to obtain a universal budget recipe for any model from it. Moreover, the robustness of the average test error does not equate to the truth of every new example generated or the persistence of any rare case in the final sample.

This is why the name “inevitable collapse” would be too strong. The work shows the possibility of avoiding the studied degradation at a specific accumulation. It also leaves questions about changing real-world data, volume limitations, heterogeneous synthetic quality, and distributions that are not covered by its experiments.

Section sources: [S11](https://arxiv.org/abs/2404.01413)

## 8. Limited sample

Kazdan et al added a third mode to the comparison. Real and synthetic data could be accumulated, but the next generation model was trained on a sample of limited size. According to the abstract of the study, in this case the test error degraded slowly and gradually, and not abruptly, as with a complete replacement. This is an intermediate trajectory between simple poles.

The reason for interest in a limited data volume is clear: an ever-growing corpus cannot be treated as a cost-free input for each new model. Even if the original observations are stored, the proportion of those observations in a particular training set may decrease. This describes the logical structure of this setup; the magnitude of the effect depends on the parameters of the experimental conditions studied.

The authors considered several types of tasks, including language training. This expands the scope of the evidence, but does not transform the work into a direct measurement of the entire network or all future corpora. Data selection, topic changes, and re-publication of model text may further change the distribution and will require independent research.

The third mode complicates the binary debate. The presence of the original body does not necessarily equate to its effective use, and the absence of explosive collapse does not necessarily mean the absence of slow deterioration. Publication makes it possible to more accurately ask how actual sampling preserves original information given limited resources.

Section sources: [VL16](https://arxiv.org/abs/2410.16713); [S11](https://arxiv.org/abs/2404.01413)

## 9. The Nature correction

The original collapse paper was published in Nature in 2024. The 2025 official notice refers to a specific entry in the “Theoretical intuition” section: instead of αi=γi=0, one should have read βi=γi=0. The publisher released corrected HTML and PDF versions. It is the precise content of the correction that is important to the reader of the theoretical argument.

The correction is not designated by the publisher as a retraction and does not claim cancellation of the underlying experiments. However, fair treatment of the source requires recording the existence of the altered version, rather than repeating the old entry from memory. A bibliographic reference to the original article and a separate correction note allow you to see the history of the text without dramatization.

In general, the status of publication is not limited to the year of first appearance. A subsequent version may clarify the method, correct the signature, or change the output; the nature of a particular change is determined by the notification itself. In our case, the full short notice has been read, so it is acceptable to report its contents. It is impossible to infer from this other undescribed errors in the article.

This example also teaches us not to hide correction in the general word “limitations.” The actual correction of the mathematical notation is a verifiable event. How broadly the article's findings generalize to other data regimes is a separate issue of external validity. The separation helps to discuss both the accuracy of the document and the scientific boundary of the result.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [VL17](https://www.nature.com/articles/s41586-025-08905-3)

## 10. Filter by answer

Synthetic examples often pass the filter of a known result. In STaR, a correct answer serves as a basis for saving the corresponding rationalization for later learning. In mathematical problems, such a filter filters out many clearly unsuccessful solutions. It adds an external signal that the uncontrolled generation of texts in the new corpus does not have.

But the tolerance criterion may be narrower than the desired quality of the example. If the two wrong steps are compensated, the final answer will match the standard; if the explanation omits an important transition, the conclusion may still be true. The end filter does not mark each step. This logical capability is important even when the improvement of a trained system is measured.

The work on GSM8K verifiers shows another way to use the final signal: it is not necessary to return the selected text to training, it can be applied when selecting an answer at the time of output. These setups have different consequences for subsequent generations. Ranking success today does not indicate whether new training on ranked texts will preserve the distribution of the original tasks.

An open question about filtering involves the quality of the reference itself. Where the answer is known and unambiguous, the signal is relatively strong. In tasks with uncertain outcomes, automatic labeling may involve measurement error or style preference. Therefore, it is impossible to transfer conclusions about the STaR filter to the complex area of ​​open facts without clarification.

Section sources: [S09](https://arxiv.org/abs/2203.14465); [S06](https://arxiv.org/abs/2110.14168)

## 11. Tests and synthetic code

For educational programming problems, the model can create a condition, an example solution, and tests. Such material is convenient for learning because execution of the program provides observable feedback. A positive phi-1 result shows the value of a specially prepared code corpus. But the quality of the answer and the quality of the tests remain independent characteristics of the created task.

The SWE-Bench+ audit concerns other software tasks, but demonstrates the fundamental limit of the test signal: a patch that successfully passes the tests is not always a correct fix. It is not possible to transfer a share of the problems of this audit directly to the synthetic phi-1 exercises. One can, however, keep in mind the general question: does the test cover exactly those properties of the code that the model wants to be trained on?

The opposite problem is also possible: a good software solution did not match the expected form of the answer and was excluded. Such cases require relevant data, which these sources do not measure universally. It is important here not to attribute infallibility to a filter just because it is executed by a computer.

Analysis of the code shows that synthetic data is evaluated along several axes: clarity of the condition, possibility of solution, correctness of the standard, completeness of verification, variety of tasks. The short label of origin does not replace any of these. Published research provides a basis for these questions, but not a single universal quality metric.

Section sources: [S12](https://arxiv.org/abs/2306.11644); [S03](https://arxiv.org/abs/2410.06992)

## 12. Reality as a source of renewal

The saved real corpus is valuable because it contains observations not derived from the behavior of the current model. With recursive replacement, this channel weakens; when accumulated, it remains available. The difference in collapse studies is largely due to how subsequent generations gain or lose access to the original information.

"Real" does not mean perfectly true. Human writing may be inaccurate, repeat the mistakes of others, or reflect a narrow sample. Works on data accumulation show the prevention of certain statistical degradation in their conditions, but do not claim that every human observation has high epistemic status. Origin is an important but incomplete feature.

There is also a time dimension. If the world changes, the stored archive may become outdated, while new real-life observations complete the picture. The published regimes in the papers discussed do not provide a universal answer about the balance of old, new and synthetic material in all changing areas. This question relates to external applicability, not refutation of laboratory results.

Therefore, it is better to replace the opposition “real versus artificial” with a precise description of the information channel: where the example came from, how it was selected and what it represents. The generated exercise can be useful for practice, and the new dimension can be useful for knowledge about the world. Both roles are important, but cannot be exchanged without checking the corresponding target.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413)

## 13. Average error and rare cases

Works on recursive data often estimate the average test error. This metric is necessary for comparing models, but can hide the distribution of losses. A rare problem type can degrade more than mass types and still have almost no impact on the overall score. The tail-loss theory makes this issue particularly pressing.

In the limited sample mode, late publication reports gradual deterioration. The extent to which it affects individual groups of examples depends on the composition of the set studied and the method of measurement. The abstract does not support a detailed map of all such groups, so we do not attribute to it any quantitative breakdown not provided there.

Presenting tail cases can be valuable even if their frequency is low. A rare scientific observation, an unusual language, or an extreme programming input may contain information that mass variation does not recover. This is a logical consequence of the concept of coverage, rather than a direct measurement of all the areas listed by the Nature article.

To evaluate a synthetic corpus, it is not enough to ask how many words are in it and how smoothly they are written. There needs to be clarity about which events it retains, which it enhances, and which it loses. Publications provide good reasons for such a question, but answers for a specific set are only possible by observing its composition and objectives.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [VL16](https://arxiv.org/abs/2410.16713)

## 14. Same text, different origin

Two identical-sounding explanations may have different evidentiary roles. One is compiled by a human after checking an external source; the model reproduced the other from memory. To the student, both may be clear, but the second does not add new evidence to the disputed fact. When relearning, mixing these texts without information about the origin makes it difficult to understand the information flow.

The opposite is also possible: a generated example may provide a successful exercise, but a human note may contain an error. Provenance therefore does not serve as a simple binary test of quality. It helps to understand how independent the evidence is and what types of verification are still needed. This is especially important when studying new or rare events.

Model collapse is concerned with generational statistics, whereas the creation of a phi-1 textbook is concerned with a specially organized task of teaching code. The same word “synthetic” covers different causal scenarios. The more accurately the source, filter and method of inclusion of the material are described, the lower the risk of false analogies between these publications.

Preserving a trace of provenance also makes scientific results easier to read: one can check whether an example is an independent observation or a reformulation of an earlier model. This is an analytical comment, not a statement about the hull audit we performed. It points out the limitation of any inference that knows only a finite amount of data and does not know its history.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [S12](https://arxiv.org/abs/2306.11644)

## 15. When articles really diverge

At first glance, the message about collapse and the message about the absence of collapse are incompatible. If read carefully, the first refers to a certain recursive substitution, the second compares it with the accumulation of original data, and the third introduces a limit on the size of the next sample. The difference in conditions resolves most of the apparent contradiction.

This does not mean that all numerical results must coincide after translation of terms. Architectures, distributions, and hyperparameters vary. The ability to maintain stability in one set of conditions does not prove it in all. Also, the observation of gradual degradation in a limited sample does not refute the analytical error limit under a different full accumulation regime.

It is important to distinguish “avoid explosive growth of errors” from “improve the model” and from “preserve every rare example.” The work on accumulation demonstrates the former in the scenario studied; its name should not become a statement about the other two properties. This preserves a meaningful counterexample to inevitability without drawing an overly optimistic conclusion.

The publications together paint a conventional picture: the movement of data between generations matters. The debate after them shifts to which modes are actually implemented in large heterogeneous corpora and how to measure quality beyond a few model settings. These questions remain a published research program and not a ready-made number for any future product.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413); [VL16](https://arxiv.org/abs/2410.16713)

## 16. Independence of verification

The same mechanism that produces an example sometimes helps to evaluate it. If a model writes a solution and then confidently declares it correct, both texts may share a false premise. When filtering on a known external response, the connection with the independent signal is stronger, but the process estimate may still remain incomplete. You need to understand where exactly in the chain new information appears.

A software test adds observation of execution, although a benchmark audit reminds you of coverage boundaries. Human marking of a step adds a different kind of evaluation, but depends on skill and context. The actual inputs in the collapse cycle provide a link to the previous distribution, but do not automatically correct every incorrect label.

The different types of independence cannot be summed up in the word “verified.” An independent source of fact, an independent test of behavior, and an independent sample of original cases protect against various errors. If you replace one with the other, the smooth external form of quality can be preserved while an important property degrades.

There is no general guarantee in the literature discussed that any synthetic corpus, after some filtering, will be equivalent to new observations of the world. There are specific positive findings and specific failure modes. The boundary between them passes through the task, the source of labels, and the rules for returning material to training.

Section sources: [S09](https://arxiv.org/abs/2203.14465); [S10](https://www.nature.com/articles/s41586-024-07566-y); [S03](https://arxiv.org/abs/2410.06992)

## 17. Questions about data quality

What does a "high-quality" synthetic example mean? A clear condition, a meaningful prompt, and a testable answer are valuable in a learning exercise. An explanation should make clear how the reasoning connects to the problem. The corpus for general world modeling has wide coverage and preservation of rare cases. A single numerical score may not express all of these strengths and weaknesses.

The article on phi-1 and the paper on distillation demonstrate the practical value of specially designed educational materials. But they do not provide a universal test of the validity of every proposal. The collapse paper shows that even plausible individual texts can form a poor distribution. Together, the sources support a multidimensional concept of quality.

An open question concerns when the assessment takes place. You can check text before inclusion in the set, monitor the distribution of the entire corpus, and evaluate the trained model on independent tasks. Each moment observes different properties. These activities are referred to here as distinct research questions and not as our own proven technology.

Another question is the dependence of the criterion on the future task. A set of exercises that are useful for teaching syntax may not help you find a bug in an unusual library. A rare form that is important to one community is invisible in the overall metric. Clarification of the purpose of the data is necessary before declaring synthetics good or bad.

Section sources: [S12](https://arxiv.org/abs/2306.11644); [S08](https://arxiv.org/abs/2305.02301); [S10](https://www.nature.com/articles/s41586-024-07566-y)

## 18. Strong and weak statements

A weak statement about collapse: with a certain recursive replacement of real material by model text, generative models can degrade, including the loss of rare events. The Nature paper and subsequent comparisons support this thesis. The strong statement “any synthetic example inevitably spoils any model” is incompatible with these data.

Weak accumulation statement: In the settings studied, storing real data next to synthetics prevented the type of collapse studied. The strong statement “any corpus with a non-zero share of the original data will remain flawless” does not follow from the publication. The limited size of the actual training sample already yields a different regime where gradual deterioration was observed.

A weak statement about positive synthetics: specially organized model explanations and exercises can help on studied benchmarks. The strong version of “there is no need to check them separately” has not been proven. The benefits of synthetics and the risk of recursion can be true at the same time, since they describe different ways of creating and using them.

Differentiating versions changes the tone of the discussion. Instead of arguing about the moral status of machine text, a series of testable questions arise about the preservation of original information, sample size, label quality, and purpose of the task. This is a more accurate interpretation of existing sources, and is not a claim to a new experimental result.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413); [VL16](https://arxiv.org/abs/2410.16713)

## 19. What else remains to be learned

Which data mode actually dominates when learning from a mixed web corpus? The researcher must know whether early observations are retained, how material is selected for each new model, and what proportion of the generated texts occupy. Public model experiments are useful, but without this information one cannot directly predict the behavior of a particular future system.

How to test rare cases if the average test error remains stable? Publications on tail loss and limited sampling show the importance of the issue. However, the appropriate list of rare events depends on the learning objective. You cannot simply pick a few unusual examples and claim that they represent all the unevenness of the world.

How do you differentiate between a useful exercise and an incorrect confident explanation? The ultimate test of answers, the external source, and the meaningful human assessment provide different levels of evidence. An audit of a software benchmark reminds us that the test being executed can also be incomplete. A common problem is not to attribute more coverage to a filter than it actually has.

Finally, what effects appear after many generations, when the real data also changes and the sample is limited? The three published modes provide starting comparisons, but not the complete landscape. The unresolved nature of these issues does not invalidate the discovered mechanisms. It defines the boundary between available knowledge and assumptions about large-scale future practice.

Section sources: [S11](https://arxiv.org/abs/2404.01413); [VL16](https://arxiv.org/abs/2410.16713); [S03](https://arxiv.org/abs/2410.06992)

## 20. Final reading

The positive history of synthetic educational texts is confirmed by specific experiments of phi-1, distillation and self-distillation of explanations. The warning about model collapse is confirmed by studies of recursive data replacement. The counterexample of accumulation and the intermediate case of limited sampling show that the trajectory is not determined by the single fact “the text was created by the model.”

Nature's correction should be read exactly: the designation in the theoretical section has been changed, the paper has not been retracted. The question of extending the results beyond the original models remains regardless of this edit. When referring to publications, it is important to note which works were studied from the abstract and which were selectively studied from the text; the bibliographic register reports the available depth.

Three properties remain different: the truth of a single example, its usefulness for learning, and the corpus's coverage of the diversity of background events. A synthetic material can have one without the other. The scientific literature is most persuasive where it explicitly states the property being measured and the mode being compared, rather than inferring all three from a single metric.

Primary publications provide the reader with a verifiable map: look to the original work on collapse and its correction, then to accumulation and limited sampling studies, and read the positive examples in light of the composition and purpose of the data. This order does not impose a single answer; it allows one to distinguish experimental results from open questions.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413); [S12](https://arxiv.org/abs/2306.11644); [VL16](https://arxiv.org/abs/2410.16713); [VL17](https://www.nature.com/articles/s41586-025-08905-3)
