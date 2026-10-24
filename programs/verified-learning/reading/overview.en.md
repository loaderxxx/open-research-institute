# Learning from Verified Results

<!-- ori-nav:start -->
[Русский](overview.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

What is known about generating, testing, and returning examples to training?

**Reading format:** Markdown. Russian source text: 3879 words. Prepared: 2026-09-23.

**Scope of Review:** Public review of published research; three layers: observed results, transfer boundaries and unresolved issues.

The document was prepared using AI and internal editorial review. No external scientific review has been conducted. For the full bibliography and notes on reading depth, see [SOURCES.md](../SOURCES.en.md).

<!-- ori-toc:start -->
## Contents

- [1. Why distinguish between training and testing](#1-why-distinguish-between-training-and-testing)
- [2. Answer as an observable quantity](#2-answer-as-an-observable-quantity)
- [3. Generating multiple candidates](#3-generating-multiple-candidates)
- [4. What does a separate verifier do?](#4-what-does-a-separate-verifier-do)
- [5. Why intermediate steps are important](#5-why-intermediate-steps-are-important)
- [6. Result and explanation](#6-result-and-explanation)
- [7. Automatic step annotations](#7-automatic-step-annotations)
- [8. Self-test and its limit](#8-self-test-and-its-limit)
- [9. The judge makes mistakes too](#9-the-judge-makes-mistakes-too)
- [10. Filter and data origin](#10-filter-and-data-origin)
- [11. Threat of model collapse](#11-threat-of-model-collapse)
- [12. Counterexample: data accumulation](#12-counterexample-data-accumulation)
- [13. Third mode: limited set](#13-third-mode-limited-set)
- [14. Productive synthetic data](#14-productive-synthetic-data)
- [15. A tested example is not the same as a tested corpus](#15-a-tested-example-is-not-the-same-as-a-tested-corpus)
- [16. Checking the program result](#16-checking-the-program-result)
- [17. Testing in open knowledge](#17-testing-in-open-knowledge)
- [18. What would be a strong rebuttal](#18-what-would-be-a-strong-rebuttal)
- [19. Unresolved issues](#19-unresolved-issues)
- [20. How to read the following books](#20-how-to-read-the-following-books)
<!-- ori-toc:end -->

## 1. Why distinguish between training and testing

A language model can provide many plausible answers, but the plausibility of the text does not equal the correctness of the solution. In works on mathematical reasoning, this difference is especially noticeable: the correct numerical result can be checked relatively clearly, while the progress of the calculations may contain errors that are accidentally compensated for by the next step. Therefore, the word "test" needs to indicate the subject: the final answer, each transition, or the origin of the training example.

Learning from validated results is usually thought of as an iterative cycle: the model produces candidates, some signal separates suitable responses, and the selected examples influence subsequent learning. The circle itself does not guarantee improvement. Its quality is limited by whether the signal is able to distinguish between substantive correctness and a match to a standard, a pleasant explanation, or passing an incomplete test.

We view published experiments as evidence for specific conditions and not as a universal recipe. GSM8K, MATH, programming problems, and generative modeling differ in how the truth is defined and how easy it is to measure the error. In this book, results are placed alongside limitations and counter-observations. The reader will be able to distinguish a demonstration of possibility from a proof of robust operation in an arbitrary open domain.

Three adjacent levels connect the story. At the first level, the correct result is selected from many attempts; on the second, they find out whether interim actions were justified; the third asks what happens when the texts produced by the model are returned to the training corpus. Each level has its own test object, and success at one does not replace evidence at the others.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050); [S10](https://www.nature.com/articles/s41586-024-07566-y)

## 2. Answer as an observable quantity

In a math problem, sometimes a single number or formula is enough to establish the final precision. This is a strong property of closed problems: the researcher can compare the solution with a known standard and calculate the proportion of correct outcomes. The works on GSM8K and MATH take advantage of exactly this, although the sets differ in complexity and design of solutions. It does not turn the model into an evidence-based system.

Let us imagine an answer obtained by incorrect reasoning, in which two errors cancel each other out. The end result metric will record success, but the person adopting the explanation will internalize the false transition. The opposite case is also possible: the rational path leads to a record that does not match the required format. Standard accuracy is important, but it measures the target event, not the entire educational value of the response.

This difference determines the reading of the experiments. When the verifier selects a candidate, the improvement in test accuracy indicates that the ranking helped in task allocation. It does not by itself tell whether each intermediate argument is correct, whether the method of verification is useful for historical research, or whether it will withstand changing sources. Here the transfer would be a new statement requiring separate verification.

The result can also be multidimensional. In code, tests capture some part of the program's behavior; in the text, fact checking depends on the documents and their quality; in free analysis there is no single standard. The further the problem is from the machine-verified answer, the more carefully you should interpret the word “true.” Measurement should not surreptitiously become the definition of all the essential properties of a job.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050)

## 3. Generating multiple candidates

In Cobbe et al.'s study, the model generated multiple solutions to mathematical problems, and a separate verifier ranked them by probability of correctness. This choice exploits the difference between the ability to sometimes find the answer and the ability to get it right the first time. If there is no correct candidate, the ranking is powerless; if the correct one is encountered, the quality of the choice becomes decisive.

Another approach, self-consistency, compares the results of different paths of reasoning and identifies a consistent outcome. It does not require a trained judge in the same form, but relies on the information content of a variety of samples. Most may share one incorrect assumption. Agreement shows the structure of the model's responses and in the tasks studied increased accuracy, but does not act as independent evidence of truth.

Increasing the number of attempts consumes calculations and changes the very formulation of the comparison. You cannot compare a single response from one system with hundreds of candidate responses from another, forgetting the cost of generation and selection. In GSM8K, work on verifiers demonstrates the usefulness of a separate evaluation function; economic and content advantage beyond the studied test does not automatically follow from this.

Observation opens up a useful research fork. The improvement may occur because the generator is already able to solve the question and needs a good selection, or because learning from the selected examples subsequently changes the generator. These two effects must be distinguished conceptually even when articles examine both. Otherwise, the computational selection procedure will be mistakenly taken for long-term knowledge acquisition.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [VL15](https://arxiv.org/abs/2203.11171)

## 4. What does a separate verifier do?

The verifier from Cobbe et al. is trained to evaluate the completed solution, and compares the candidates when making a conclusion. Its signal is associated with the final answer being tested. This is an interesting case of the division of labor between generation and evaluation: two processing modes of the same task may reveal different information. The authors report that, given sufficient data, this choice improved the accuracy of GSM8K.

The outcome boundary is as important as the improvement itself. The small training sample did not demonstrate the same benefit; the problem belongs to the arithmetic domain with a definite answer. A large number of generated trials and evaluator training resources are included in the demonstration conditions. They do not make the study weak, but they exclude the simple conclusion that any text can be checked cheaply.

The evaluator, who receives a label on the final answer, can learn to use incidental correlations: style, length, familiar patterns, or notation form. Even high accuracy on final answers does not show that the evaluator has reconstructed the mathematical proof. This is an analytical limitation of the formulation itself, and not an experimental observation about a specific exploit attributed to the authors. For other domains, the question of evaluation criteria is open.

When reading numbers, it is useful to ask how many correct solutions were in the candidate set. Then the ceiling of the verifier’s possible work is visible. If the evaluator is error-prone, increasing the number of attempts may increase the number of convincing false answers. The correct conceptual unit here is not a single confidence score, but a combination of a generator, a distribution of candidates, a criterion of correctness, and a selection procedure.

Section sources: [S06](https://arxiv.org/abs/2110.14168)

## 5. Why intermediate steps are important

Lightman et al compared two types of feedback on math problems. The final score tells whether the answer is correct. Process evaluation reports on the quality of intermediate steps. In the formulation studied, the process version was superior to the final version, and the best model solved 78 percent of the problems on a representative subset of the MATH test. This is the result of a certain comparison, and not a normative rule for all forms of learning.

The main advantage of a step as an object of analysis is the ability to notice an error before it disappears behind the correct end. However, the boundaries of the “step” are not always natural. One author writes several transformations on one line, another divides them into sentences. The correctness of a local transition may depend on unspoken premises that are difficult to see in a short label.

The study relied on large-scale human assessments; The PRM800K case has been published with 800,000 human annotations of individual steps. This reinforces the evidentiary status of the comparison in its own domain and reminds of the value of the signal. You cannot simply declare process supervision a “free” way to eliminate errors, without taking into account the labor of annotation and the qualifications of the evaluators.

When the field changes from algebra to meaningful literature review, the meaning of the process changes. The proof in the article, the quality of measurement, the correctness of interpretation and the admissibility of transfer are not decomposed into identical local actions. The article shows the possibility of winning from a more detailed signal. It does not provide a ready-made definition of the right step for open scientific research.

Section sources: [S07](https://arxiv.org/abs/2305.20050)

## 6. Result and explanation

The model can learn not only from a short answer label, but also from a detailed explanation. Hsieh et al.'s study used rationalizations from a larger model as an additional learning signal for a smaller one. Across four NLP benchmarks, the authors observed data savings and good results relative to the alternatives studied. This fact indicates that the explanation text is informative for the student, but does not certify the explanation as the true story of the inference.

STaR combines rationalization generation with a filter of known correct answers and retraining. When the original path does not produce the reference outcome, the model can construct an explanation taking into account the correct answer. This provides additional material for teaching reasoning. But the filter on the final response does not check whether all rationalization sentences correspond to the correct transitions.

Both works help us see the difference between usefulness and credibility. An incorrect explanation can sometimes act as a statistical clue and improve a test metric; a correct explanation may be too complex for a novice model. When evaluating a scientific claim, the educational usefulness of a text is not equal to the evidentiary strength of the causal relationships it contains.

Here the question remains about what exactly the smaller system learns: whether it transfers an understandable way of solving, remembers the problem markers, or reproduces the teacher's style. Published metrics limit the response space, but do not eliminate this distinction completely. Traces of reasoning should therefore be read as a separate object of evaluation rather than as a transparent window into the mechanism of the model.

Section sources: [S08](https://arxiv.org/abs/2305.02301); [S09](https://arxiv.org/abs/2203.14465)

## 7. Automatic step annotations

Human evaluation of each transition is expensive, so researchers try to obtain the process signal automatically. Math-Shepherd describes the construction of such labels for mathematical solutions and reports improvements in candidate ranking and model training. This is an independent line after demonstrating the effectiveness of the expensive PRM800K marking: it explores whether the number of examples can be expanded without comparable manual labor.

The automatic mark does not have to match the human verification. If the quality of the intermediate step is inferred from the further possibility of obtaining the correct end, the resulting information is again present in the label. The usefulness of such a signal for a particular benchmark may be real, but the name "process" does not by itself convey that a mathematician has verified each transformation.

These works should be compared according to the object of observation. In one case, people evaluate individual fragments of decisions; in another, the automatic method uses the properties of continuations. Therefore, the equal words “step” and “reward” hide different sources of knowledge. Cost, label noise, and robustness to distribution shifts should be discussed separately without attributing results to the paper that it did not measure.

Mathematics here serves as a convenient laboratory, since the final answers to many tasks are available. Where the outcome is unknown, automatic assessment of future success becomes more difficult and the transfer of a label to the quality of the current argument less certain. The open question is not only about markup savings, but also about the conditions under which a weak signal retains meaningful meaning.

Section sources: [S07](https://arxiv.org/abs/2305.20050); [VL13](https://arxiv.org/abs/2312.08935)

## 8. Self-test and its limit

If you ask a model to criticize its own answer without new evidence, it sounds plausible that a second pass will correct the first. Huang et al.'s work tested internal self-correction of reasoning specifically and found difficulty: sometimes the correction worsened the original answer. The clarification “without external feedback” is fundamental. The result does not negate the usefulness of the tool, reference, or proven calculation.

Related research on bug hunting distinguishes between detection and correction. That study found that models were worse at locating a logical error on their own than at correcting it after its location was pointed out. This distinction reminds us that the critic needs to localize the problem, not just permission to rewrite the text. Within the limits of reading the abstract, it is impossible to judge in detail the breadth of the result.

Repeating a request to the same system can increase the variety of wording and the impression of care. But it does not automatically create independent evidence. If the initial error is caused by a general incorrect premise, several passes may only restructure the narrative around it. Here it is appropriate to ask what new observation is introduced by the checking stage.

The open research question concerns the combination of internal criticism with an actual external cue. A calculation, experiment, document, or independent markup has different properties than another model text. The observation of weak self-correction should not be translated into a prohibition against reanalysis; it requires accurately naming the source of additional information and the limits of its reliability.

Section sources: [VL14](https://arxiv.org/abs/2310.01798); [VL18](https://arxiv.org/abs/2311.08516)

## 9. The judge makes mistakes too

A model comparing two responses appears to be a useful scalable estimator. However, Shi et al.'s study found that judgments depended on the order in which the options were presented; the magnitude and nature of the effect varied across judges, tasks, and differences in candidate quality. This positional bias relates to the estimation procedure itself, not just to shortcomings of the generator.

The other boundary is related to the standard. The SWE-Bench+ audit showed that passing tests on a software problem does not necessarily mean a correct fix. Here the test set acts as a real source of evidence, but its completeness is limited. The model judge and the software test are different, but both cases show the dependence of the final label on the testing device.

These results should not be lumped together into a single “verification quality” number. The positional effect was detected in comparisons of responses by model judges, and erroneous successful patches were detected in a specific software benchmark. Both are reminders of the need to investigate the errors of the meter itself. None prove that all automatic assessment is useless.

In a learning context, consequences can be cumulative. If an incomplete signal regularly misses a particular class of incorrect responses, the sampled examples will bias the next model. This is a logical risk of a closed loop, not a quantitative result of the above articles. To call it observable degradation requires separate comparisons of subsequent generations and control of conditions.

Section sources: [S04](https://arxiv.org/html/2406.07791v9); [S03](https://arxiv.org/abs/2410.06992)

## 10. Filter and data origin

After selection, a new question arises: what does the next training set consist of? Real documents, human decisions, and synthetic responses have different origins, although they may look the same in the file. The correctness of the final label on a particular example does not indicate to what extent the set represents rare cases and what structures the previous model did not systematically generate.

STaR illustrates a cycle in which the model creates explanations, a filter based on known answers leaves some of the material, then this material is used again for training. This is not the same as recursively replacing an entire corpus with raw model text. And yet, both plots require tracking what information into the new model comes from the outside, and what is inherited from the previous generation.

The work of Shumailov et al. explores model collapse under conditions of recursive contamination of training by generated data. Particular attention is paid to the loss of distribution tail events. A rare example may disappear not because the new example is patently erroneous, but because the generator rarely encounters or reproduces such a form of the original reality.

The general lesson here is conditional: the danger depends on the mode of handling the data. The response filter, the composition of the corpus, the retention of original observations, and the proportion of synthetic data can change the dynamics. More recent studies have specifically compared specific data-generation setups; therefore the word "synthetics" without describing origin, selection and mixing is not a sufficient explanation of either success or failure.

Section sources: [S09](https://arxiv.org/abs/2203.14465); [S10](https://www.nature.com/articles/s41586-024-07566-y)

## 11. Threat of model collapse

In the Nature article on recursively produced data, collapse refers to the degradation of successive generations of generative models when the results of previous models are included in the training sets of the next. Under the conditions under consideration, poorly represented areas of the original distribution suffer especially noticeably. This is not a metaphor about the sudden disappearance of all intelligence, but a name for a certain dynamic of statistical learning.

The important difference is between examples that the model cannot reproduce and examples that are easy to obtain again. If a rare form disappears from educational material, it is more difficult for the future generation to restore it using mass samples. Even smooth, grammatically correct new texts can reduce diversity compared to original observations. The apparent accuracy of individual responses then does not reflect the state of the distribution as a whole.

The publication has an official 2025 author correction. In the section on theoretical intuition, the original designation αi=γi=0 is replaced by βi=γi=0; online version has been corrected. This is a correction of the formula in the text, not a retraction notice. It must be mentioned for accurate attribution, without inventing a revision of all empirical conclusions without special verification.

The result should be read in conjunction with the data replacement assumptions. It warns about possible loss of information during certain recursion. It does not imply that any model text is toxic for learning, that quality can be determined by one sign of origin, or that the accumulation of initial data will never help.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [VL17](https://www.nature.com/articles/s41586-025-08905-3)

## 12. Counterexample: data accumulation

Gerstgrasser et al compared a scenario where synthetic data replaces old data with a scenario where it is accumulated next to the original real data. In the sequences of language and other generative models studied, substitution led to collapse, whereas accumulation kept the test error from doing so. The analytical model in the work also gives an error bounded from above for a certain accumulation regime.

This is a thoughtful response to the overly broad version of the synthetics warning. The results of the articles do not necessarily contradict each other: they differ in the rules for forming the next set. Saving real data maintains access to the original distribution even as new examples continue to arrive. But the practical effect depends on the size of the case, weights and properties of the problems, which the experiment does not exhaust.

The mere preservation of real material does not guarantee the correctness of every synthetic answer. Validating a single solution and maintaining distribution diversity solve different problems. It is possible to have well-selected examples, but it is not enough to cover rare cases; you can maintain coverage and still mislabel an important answer. Any of these shortcomings can interfere with further learning.

This counterexample establishes a discipline of inference: the words "inevitable collapse" are too strong in relation to the published conditions. Proving that a particular form of degradation can be avoided also does not mean that any scale of text production is safe. The essential question now is which premises of the tested regimes stand up to the changing reality of the body.

Section sources: [S11](https://arxiv.org/abs/2404.01413); [S10](https://www.nature.com/articles/s41586-024-07566-y)

## 13. Third mode: limited set

More recent work by Kazdan et al has expanded the comparison of data usage modes. In addition to complete replacement and accumulation of all generations, the authors considered a situation where real and synthetic data are accumulated, but the volume of the sample used for the next training is limited. In this mode, a slow degradation of the test error was observed instead of the explosive behavior of a complete replacement.

The three modes show why a crude dichotomy of “collapse or no collapse” is insufficient. If source material is stored but competes for limited space in each teaching with a plethora of new examples, its effective presence may be weakened. This reasoning is based on the setting of the work; exact dependencies should not be transferred to other architectures without appropriate checks.

The authors studied several model tasks, including language retraining. This breadth enhances interest in the mechanism, but does not turn the experiment into a measurement of the entire future network. Texts of different origins are included in the corpora unevenly; sorting, removing duplicates, and changing the target area further influence the distribution. These factors require their own observations.

That is why the issue of verified training cannot be reduced to a one-time verification of the candidate. The structure of the sequential sets determines what the model can learn at all. The publication leaves open how much raw material should be retained in the available sample and how to evaluate rare events that a conventional average metric might hide.

Section sources: [VL16](https://arxiv.org/abs/2410.16713); [S11](https://arxiv.org/abs/2404.01413)

## 14. Productive synthetic data

The story of phi-1 demonstrates a positive case for the use of synthetic educational material. The article "Textbooks Are All You Need" describes selected web data and model-generated training texts and exercises for training a small code model. The reported results show that a “model-generated” origin does not in itself mean that an example is useless.

But comparisons with alternatives require caution. The composition of the corpus, its selection, computing resources, architecture and measurement procedure acted together. A separate causal contribution of synthetic exercise alone cannot be inferred from the reported success of phi-1. Nor can it be assumed that a codebook and an open scientific archive have the same requirements for reliability.

The work on incremental distillation adds another positive example: teacher rationalizations help a smaller model on a range of NLP tasks. Here the synthetic text acts as a teaching signal on top of task examples, and not as a replacement for all observations of the world. The difference between such roles is important when compared with model collapse scenarios.

Useful synthetic material is often valuable as a special delivery form, reformulation or exercise opportunity. But its meaning depends on what the key statements are verified and what remains outside the generative experience of the teacher. An open question is how to preserve the benefits of instructional presentation without passing on undetected confident errors to the student.

Section sources: [S12](https://arxiv.org/abs/2306.11644); [S08](https://arxiv.org/abs/2305.02301)

## 15. A tested example is not the same as a tested corpus

Imagine a set in which every solution to an arithmetic problem has a correct outcome. This is a strong local property. But if a set contains almost only standard problems, it will not represent rare types of formulations and errors. Training can improve conventional test accuracy while reducing sensitivity to cases that are almost absent from the data.

The opposite example: a wide range of real texts cover unusual situations, but in some notes the authors made mistakes or missed premises. Preserving the original corpus prevents some loss of distribution, but does not replace the assessment of the truth of each particular record. Works on data accumulation and verifiers answer different parts of this problem.

The average metric can hide the redistribution of quality. If mass tasks become a little easier, and rare ones become much more difficult, the final figure sometimes grows. Therefore, evidence of improvement in one set must be read in the context of what groups of examples it contains. This is a general statistical observation and not a statement about the unmeasured outcome of any one article.

Three dimensions—local correctness, cross-situation coverage, and data provenance—need to be kept in mind simultaneously. It is not necessary to combine them into a single score. Distinguishing them allows us to more accurately explain why carefully selected material can have gaps, and synthetic origin does not in itself determine the damage.

Section sources: [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413); [S12](https://arxiv.org/abs/2306.11644)

## 16. Checking the program result

Programming seems to be an almost ideal area for automated testing: a test runs the code and reports success or error. But the test only observes selected instances of behavior. The SWE-Bench+ audit analyzed the fixes that were successful according to the benchmark criteria and identified problems with some of these patches. The practical meaning of the observation: the execution signal is useful, but the wording “passed the tests” is narrower than “corrected the defect”.

In the training cycle, incomplete tests introduce a selection bias. If many candidates are able to satisfy a visible set of tests, but differ on unexplored inputs, the filter may generalize incorrectly. This risk is conceptual and does not give the right to declare error rates for all repositories for one audit of a particular benchmark.

The mathematical label of the reference answer also limits the object of verification, but the program situation shows the boundary clearly: the correctness of the patch is related to the intent of the task, the environment and side effects. Triggering alone does not explain the causal meaning of the change. Therefore, sources of evidence need to be distinguished even within areas that are usually called formally verifiable.

The open problem is to relate the observed test behavior to the broader requirement that the person was trying to formulate. The benchmark article demonstrates that error can occur not only in the model, but also in the measure of its success. This finding is useful for reading other work that is not a direct experiment on mathematical process supervision.

Section sources: [S03](https://arxiv.org/abs/2410.06992)

## 17. Testing in open knowledge

An open-ended research question is different from problems with a known answer. Sources may differ, dating and definitions may change, and new evidence may change the conclusion. Even correct arithmetic will not save the argument if the original quote refers to another study. Here, “verification” means comparing a specific statement with the material, and not just a numerical match.

The model judge is able to evaluate clarity or compare alternative texts, but the positional bias makes the result dependent on the form of presentation. Self-criticism without new evidence can also reproduce a common faulty source. A code test is useful but incomplete regarding requirements. These published restrictions amount to a warning about signal heterogeneity, not a ban on automation.

Even a primary scientific source reports results limited by its design. Generalization to another country, language or architecture is an additional step of interpretation. It may be reasonable, but it should not be hidden under a link to the article. When the text explicitly distinguishes measurement from conjecture, the reader sees where the empirical support ends.

The limit of the current review also lies in the depth of reading: some of the selected new sources are checked using annotations, and for some, the source registry records selective reading of sections. This is a sufficient basis for a careful mapping of the issue, but not for reproducing the tables, the exact effects of all ablations, or a detailed re-evaluation of the authors' statistics.

Section sources: [S03](https://arxiv.org/abs/2410.06992); [S04](https://arxiv.org/html/2406.07791v9); [VL14](https://arxiv.org/abs/2310.01798)

## 18. What would be a strong rebuttal

Any hypothesis about learning from proven material must allow for counter-observations. For the valuer benefit thesis, such an observation would be the lack of improvement at comparable cost on new tasks or the systematic selection of beautiful but incorrect solutions. The already published limitation of small data from the verifier shows that winning does not occur unconditionally.

For the thesis about the advantage of evaluating steps, a significant counterweight would be a problem where intermediate marks are ambiguous, expensive, or less related to the final quality than the final result. The MATH article is not required to respond to all such cases. Recognizing a possible limitation preserves the specific conclusion without unwarranted generalization.

For the thesis about the inevitable degradation of recursive synthetics, a strong objection is already provided by the regime of accumulation of real data, demonstrated by Gerstgrasser and co-authors. A later comparison of limited sets shows intermediate dynamics. The debate should be about conditions and measurements, not about the binary quality of any machine-produced texts.

It is useful for the reader to ask not only “is there support to be found?” but also “what result would change my conclusion?” This setup does not represent a new research procedure or experiment performed; it helps to read published data honestly. It is especially important where a pleasant overall story easily replaces a narrow measured effect.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050); [S11](https://arxiv.org/abs/2404.01413)

## 19. Unresolved issues

How much of the improvement from the test persists when changing areas? In mathematics, a known answer facilitates learning and assessment. For documentary analysis, the correct result is sometimes established only after interpretation of heterogeneous evidence. Research on GSM8K and MATH does not close this gap. Published direct comparisons on other tasks are needed before a comparable effect can be claimed.

How to combine low cost and meaningful intermediate step marking? Human ratings from PRM800K are informative but expensive. Automatic derivative signals are scaled, but may inherit the blind spots of the resulting standard. The boundary between a truly tested step and a predicted path's promise remains a central question of interpretation.

How does quality change if the original data is only partially preserved, the sample size is constant, and new texts of varying quality arrive unevenly? The substitution, full accumulation, and limited sampling experiments show three regimes but do not exhaust the variety of possible mixtures. The average error says especially little about the rare cases for which the original diversity may be important.

Finally, who checks the inspector? The model judge depends on the presentation, the software test does not cover everything, and the human assessment is also limited by competence and time. Publications highlight particular failures; There is no general guarantee of error-free selection. The unresolved nature of this issue should be stated openly, instead of hiding it behind the word “verified.”

Section sources: [S07](https://arxiv.org/abs/2305.20050); [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413); [VL16](https://arxiv.org/abs/2410.16713)

## 20. How to read the following books

The first adjacent book examines in detail the final and process supervision: how a signal for choosing a solution arises, what mathematical experiments show, and why an automatic mark is not identical to human verification. The second examines synthetic data, its usefulness, the risks of recursion, and the dependence of the collapse model on the rules for preserving the original material.

These topics should not be read as successive stages of one must-have technology. The selection of candidates is possible without subsequent training, and synthetic educational texts can be used outside the self-generation cycle. A common frame is only useful if it does not blur significant differences in objectives, metrics, and sources of knowledge.

The register separately indicates the depth of work with each source. A selective reading of an article should not sound like a complete review of all its tables; the abstract supports a broad description of the research question but not detailed technical conclusions. You can use the links to access the original publications and check for updated versions or corrections.

The robust outcome of this map is modest and insightful: compelling examples have been published of the utility of selection and detailed labeling in specific mathematical problems; warnings about errors in the meter and the recursive corpus have also been published; conditions under which the predicted collapse is not observed have been published. Future answers depend on which properties of the result, process, and data can be independently established.

Section sources: [S06](https://arxiv.org/abs/2110.14168); [S07](https://arxiv.org/abs/2305.20050); [S10](https://www.nature.com/articles/s41586-024-07566-y); [S11](https://arxiv.org/abs/2404.01413)
