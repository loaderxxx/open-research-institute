# Evidence and Citation

<!-- ori-nav:start -->
[Русский](evidence-and-citations.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

How a long answer gets verified support

**Reading format:** Markdown. Russian source text: 3512 words. Prepared: 2026-09-23.

**Scope of Review:** Published research on attribution, factual accuracy, and search limitations.

The document was prepared using AI and internal editorial review. No external scientific review has been conducted. For the full bibliography and notes on reading depth, see [SOURCES.md](../SOURCES.en.md).

<!-- ori-toc:start -->
## Contents

- [1. Claim and source](#1-claim-and-source)
- [2. Completeness of citations](#2-completeness-of-citations)
- [3. Citation accuracy](#3-citation-accuracy)
- [4. ALCE and long answer](#4-alce-and-long-answer)
- [5. Manual audit of search engines](#5-manual-audit-of-search-engines)
- [6. Atomic fact](#6-atomic-fact)
- [7. Factual precision and coverage](#7-factual-precision-and-coverage)
- [8. Statements with numbers](#8-statements-with-numbers)
- [9. Causal inference](#9-causal-inference)
- [10. Negative results](#10-negative-results)
- [11. Primary text and retelling](#11-primary-text-and-retelling)
- [12. Omitting a caveat](#12-omitting-a-caveat)
- [13. Contradictory works](#13-contradictory-works)
- [14. Searching is not equal to reading](#14-searching-is-not-equal-to-reading)
- [15. Lies borrowed from the corpus](#15-lies-borrowed-from-the-corpus)
- [16. Evaluator of citation support](#16-evaluator-of-citation-support)
- [17. Transfer between languages](#17-transfer-between-languages)
- [18. Reproducible trace](#18-reproducible-trace)
- [19. An open standard of evidence](#19-an-open-standard-of-evidence)
- [20. Limits of open-ended inference](#20-limits-of-open-ended-inference)
<!-- ori-toc:end -->

## 1. Claim and source

A scientific claim links an object of study, an asserted property, and a degree of confidence. A source may support only some of these elements. For example, a published assessment may concern a specific set of questions, while a retelling quietly generalizes it to all fields of knowledge. Asking “is there a link?” is weaker than asking “what exactly does it support?” Substantive checking begins with the structure of the claim: who or what was studied, under what conditions, what result was observed, and which conditions limited the conclusion. This analytical breakdown is not a new experiment; it explains why a single clickable link may not support a complex claim.

ALCE links response text to submitted documents, and generative search audit asks whether a particular link supports an adjacent claim. The difference between having a URL and having evidence is fundamental: a document can be real and yet say something else.

Whether a source supports a claim can depend on context, caveats, and terminology in the article. Automated systems can also make mistakes when checking this relationship.

Which portion of the source actually supports the proposition? A long answer should evaluate the relationship between each significant thesis and the data, not just the reference list. If a phrase combines two studies, it is worth understanding the contribution of each separately. A compound link does not automatically validate the link between different results.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A04](https://aclanthology.org/2023.findings-emnlp.467/)

## 2. Completeness of citations

Completeness of citation concerns all essential statements of the answer. If three of the four sentences are well referenced, the fourth may contain the main conclusion and remain unsupported. The mere number of links per page says nothing about what parts of the text they cover. Numbers, comparisons, causal relationships, and statements of lack of effect are especially important to the reader. They can rely on different sources, even when they are in the same paragraph. Assessing completeness requires first seeing the statements themselves, and then checking the availability of relevant evidence for each.

The authors of the audit call completeness the situation when each verified statement has sufficient support in references. In the search engines studied, this criterion did not follow simply from the presence of citations. Multiple sentences next to one bullet require separate reading.

Completeness does not equal correctness of the entire answer: the source may support a fact that is irrelevant to the question. In addition, the concept of the unit being tested changes when dividing a complex paragraph.

Which parts of the phrase remain unsupported? It is this question that reveals otherwise invisible gaps in the seemingly documented text. The absence of a reference to the decisive thesis is usually more important than the presence of a dozen references to the introductory details. The address count does not replace the unsupported assertion count.

Section sources: [A04](https://aclanthology.org/2023.findings-emnlp.467/)

## 3. Citation accuracy

Citation accuracy asks whether the cited document specifically supports the adjacent statement. This article can talk about correlation in a limited sample, and the caption to it can declare a universal causal law. Coincidence of theme is not enough here. There is also a more subtle case: the source confirms the first half of the sentence, but says nothing about the second. The link looks appropriate on a quick glance, but is still misleading. Therefore, accuracy is assessed at the level of content connectivity, not just the existence of a URL, author name, or similar keywords.

An accurate citation means that the document being flagged actually supports the claim it appears next to. ALCE and manual audit evaluate this aspect separately from the quality of the final response. A link containing only similar keywords does not necessarily establish a causal or quantitative inference.

The same document may contain both a confirming and a refuting fragment; a careful analysis of the context is required. The automatic metric does not replace reading the ambiguous page.

Does the stated conclusion follow from the design and results of the work? Citation becomes evidence only when there is a clear correspondence between the field of study and the strength of the formulation. The check does not end with the matching of keywords: the document may deny what it is being cited for. The context of the phrase determines the actual support.

Section sources: [A04](https://aclanthology.org/2023.findings-emnlp.467/); [A03](https://aclanthology.org/2023.emnlp-main.398/)

## 4. ALCE and long answer

Answering with citations connects document searching and writing coherent text. Failure is possible at any of these stages: the required document is not found, the found document is not read, the citation is assigned to the wrong phrase, or a meaningful answer is cut off too early. Measuring language fluency alone will not detect these cases. Likewise, correct references to secondary facts do not compensate for the lack of answer to the question. The study of citation systems is important because it separates aspects of quality that are usually hidden behind the general assessment of “well written.” Its test tasks do not cover all scientific genres.

ALCE proposed a set of tasks and automated metrics for citation text, assessing response quality and attribution. The authors compared different ways of working with documents and found it difficult to simultaneously obtain information content and proper support.

Metrics are based on question sets, documents, and an assessment model; they do not claim that any link generated is true. Results are historically tied to proven systems.

How to combine the completeness of the explanation with the accuracy of each link? This is a research problem, not a feature that arises from adding footnotes automatically. Because search and response are assessed together, a good summary score does not isolate improvement in one stage. Causal inference requires narrower comparisons.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/)

## 5. Manual audit of search engines

Human auditing of a search response is possible because the reader can open the page and compare it with what is written. But such work is time-consuming, especially if there are several theses in one phrase. Assessing the completeness and accuracy of support gives different views of the failure: an unsupported sentence and an erroneous link are not equivalent. A real search engine also changes its results over time, so the result is determined by the time of verification and the set of questions. The strength of the audit is the specific reading of compliance; its boundary is a selected sample of systems and queries.

Liu and colleagues tested the answers of four then-current generative search services on questions of different origins. People rated whether the links covered and supported the claims. The study showed noticeable problems on both sides of verifiability.

Brands and versions of services have since changed, so specific shares cannot be passed off as current product valuations. Question selection and human judgment also limit generalization.

Will the output remain the same on new domains and updated interfaces? A historical audit proves the possibility of failure is not an eternal property of every search tool. When search results change, other documents may raise the same question. Audit time therefore refers to the evidentiary record and not simply to the calendar.

Section sources: [A04](https://aclanthology.org/2023.findings-emnlp.467/)

## 6. Atomic fact

A long biographical or scientific essay is rarely uniformly true or false. Small facts can be considered separately: position, year, title, place, number of participants. This allows you to see that fixing one part does not validate the neighboring ones. But partitioning also requires interpretation. A causal phrase may have several premises and one conclusion; if you tear it apart, it is the controversial connection that disappears. Therefore, the atomic factual assessment is clearer than the binary label, while maintaining dependence on the definition of the unit of analysis.

FActScore proposes to decompose a long generation into small factual units and estimate how many of them are supported by external knowledge. It helps to find a paragraph in which an exact date and a fictitious position appear next to each other.

The boundary between atoms is not always obvious: a causal phrase may contain a condition and a conclusion. Automatic confirmation search depends on the available database.

How to avoid losing meaning when breaking down a complex thesis? A measure of actual accuracy is useful when the units of inspection are transparent and a reliable source is available. The verifiability of an individual atom depends on the available knowledge base. The lack of evidence found does not always equal falsehood, especially for a new study.

An additional difficulty is that a sentence may combine a fact and an evaluative word. The source confirms the date of the event, but not necessarily a description of its significance. When splitting, it is necessary to maintain the distinction between observation and interpretation, otherwise a formally confirmed atom will create false confidence in the general phrase.

Section sources: [A09](https://aclanthology.org/2023.emnlp-main.741/)

## 7. Factual precision and coverage

The percentage of confirmed facts can easily be taken as the percentage of usefulness of the answer. However, a text consisting of two undisputed statements can get a good result and not answer the main question. Long text with lots of correct details can hide one crucial mistake. In both cases, the equal weight of the elements does not coincide with their significance for the reader. The actual share answers the question about the written units with the selected source, and the topic coverage answers the question about the missing material. These are different dimensions, and one does not automatically follow from the other.

A high proportion of confirmed atoms can be achieved by short and careful text that leaves out the key answer. FActScore measures the accuracy of the highlighted facts, not the overall quality of the answer or its usefulness. This shows the need to distinguish between the truth of what is written and the completeness of the topic.

Another long text may contain many correct minor details that obscure the decisive error. Equal weighting of atoms does not always reflect importance to the reader.

What facts are necessary for the conclusion? The score should be related to the question and not become a contextless percentage. It is the missing central circumstance that can make a short text useless if the factual accuracy of the remaining sentences is impeccable.

Section sources: [A09](https://aclanthology.org/2023.emnlp-main.741/)

## 8. Statements with numbers

The number looks rigorous, but without a denominator and a selection procedure, its meaning is unclear. The percentage of successful patches can be specific to a single agent, specific tasks, and test versions. If we rephrase it as the overall error rate of software AI, the object of the statement has already changed. Likewise, citation rates across multiple search engines do not translate into a feature of every response on the web. Precisely recording the number means not only the decimal places, but also the population, the moment of measurement and the nature of the excluded cases.

A number may be true for the sample studied but not true as a universal frequency. SWE-Bench+ reports problem percentages in audits of specific successful patches, while search engine audits are specific to products and queries from that period. The reported figure must retain its denominator.

Removing the sampling clause creates the appearance of precision when generalizing erroneously. Even the exact URL will not correct the extended meaning of the sentence.

What is the date, population, and unit of measurement for this percentage? Maintaining these conditions makes the statistics suitable for fair comparison. It is also worth distinguishing percentage points from relative change. Changing this form in the retelling changes the impression of effect size without changing the original data.

Section sources: [A05](https://arxiv.org/abs/2410.06992); [A04](https://aclanthology.org/2023.findings-emnlp.467/)

## 9. Causal inference

Causal inference requires more than the proximity of two events in an article. If the answers with links turned out to be of higher quality, one cannot, without a corresponding comparison, conclude that it was the addition of links that caused all the gain: the search, generation and selection of questions could differ. Descriptive correlation is useful, but its logical status is different. In a short Russian retelling, it is especially easy to lose the conditional word and write “proven”. For fair attribution, it is precisely the degree of confidence that follows from the design of the primary publication that should be preserved.

Research writing often turns a correlation into a causal statement. The citation precision metric asks whether a document sufficiently supports the stated thesis, and HELM reminds us to distinguish between scenarios and evaluation properties. The presence of an experimental result does not give the right to extend it to another system.

Even an experimental article may only support a given intervention and metric. A peer review does not replace primary data if the details are controversial.

How much of the output was directly observed? Citation accuracy involves the accuracy of the logical transition from result to sentence. The language of statistics limits the inference: correlation, control comparison, and randomized intervention support different strengths of the causal claim.

When retelling an experiment, the change in verb is crucial: “related,” “predicts,” and “causes” are not equivalent descriptions. Even the exact reference and number of participants does not make up for the incorrect logical strength of the conclusion. It should be taken from an actual comparison.

Section sources: [A04](https://aclanthology.org/2023.findings-emnlp.467/); [A07](https://arxiv.org/abs/2211.09110)

## 10. Negative results

The lack of an effect detected depends on the power of the study, the metric, and the mode studied. The phrase “the article found no improvement” is not the same as the phrase “there is no improvement.” In multi-agent problems, it is especially important what the team is compared to: a single agent, several independent attempts, or some other communication organization. Silence from a publication about a particular setting is not a negative outcome for it. The reader must distinguish between a measured zero, an uncertain estimate, and a question that the researchers did not ask at all.

Lost in the Middle found impairment on a range of long-context tasks, and a study of judge positional bias found the dependence of ratings on order. It’s easy to over-speak such results as “models don’t read the middle” or “judges are always biased.”

The authors studied specific systems and conditions; a counterexample on a different model does not invalidate the original observation. Date and version matter.

How to express the boundaries of an effect without losing its essence? A precise clause allows the negative result to be used as knowledge rather than as a slogan. Uncertainty is sometimes more honest than categorical denial. Especially when the work was not powered to detect a small effect in a new subgroup.

Insufficient statistical power and lack of a suitable control group pose various limitations. In the first case, it is not possible to reliably detect an effect of a given size; in the second, it is more difficult to establish causality. The general phrase “nothing shown” obscures this difference.

Section sources: [A08](https://aclanthology.org/2024.tacl-1.9/); [A13](https://aclanthology.org/2023.findings-emnlp.307/)

## 11. Primary text and retelling

Paraphrasing is needed to connect multiple studies and translate terms, but it adds its own layer of possible error. The author may indicate the exact title of the work and be mistaken about which version of the data was used. May keep the number and omit the limited subset clause. Checking the primary text is important precisely because a later retelling, even a conscientious one, is already an interpretation. When only an abstract is available, it is better to limit yourself to its general output than to feign knowledge of tables and methods that have not been read.

Testing a scientific claim benefits from reading descriptions of methods, tables, and author's limitations, not just the title or someone else's paraphrase. ALCE evaluates support in the submitted document, search audit reveals weakness in visible citations. These results provide motivation to differentiate reading depth.

Even a complete article may contain an error, and the abstract sometimes accurately conveys the main result. But confidence in fine methodological detail must correspond to how much of the work has actually been read.

Where exactly in the article is the supporting result located? An honest note of reading depth limits the strength of the statement and facilitates independent verification. A link to the primary publication allows you to notice where the reviewer’s own synthesis begins. This border should remain legible even in compact text.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A04](https://aclanthology.org/2023.findings-emnlp.467/)

## 12. Omitting a caveat

A clause often contains a condition on which the truth of the central result rests. The phrase “in selected mathematical problems” separates the observation from the statement about all research tasks. When shortening the text, this part seems unnecessary and disappears first. Then the link remains the same, but what is written no longer corresponds to it. Not every clause is equally significant; it is important to identify those that change the population, the measure of success, the time horizon, or the causal power of the outcome. The accuracy of the presentation is expressed in the preservation of boundaries, and not only in the preservation of a positive conclusion.

If a source is talking about a specific benchmark version, model, and problem set, removing those terms when paraphrasing changes the statement. So the SWE-Bench+ audit cannot be reduced to an eternal share of erroneous tests. In ALCE, such a loss of context may appear as a formally existing link.

The mistake is often not in the fictitious publication, but in the expansion of its scope. Automatic checking may miss implicit population substitution.

What words in a sentence make it wider than the source? Identifying implicit generalization is important for research integrity. Otherwise, the reader receives not a simplified conclusion of the article, but a new, stronger statement, for which the article itself is no longer responsible.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A05](https://arxiv.org/abs/2410.06992)

## 13. Contradictory works

Two publications may report different results because they studied different conditions, not because one is wrong. First you need to establish a match between the task, metric, time and object of assessment. If one experiment is about citation completeness and another is about the accuracy of assigned citations, their metrics may move in different directions. Mutual citation of works does not make them directly comparable. A genuine contradiction arises only when claims are incompatible under the same research setup. This requirement protects the literature from dramatization and allows the remaining empirical question to be more accurately stated.

Sources may differ because they evaluate different versions, populations, or metrics, or sometimes because one result has not been replicated. Research on position bias in automated judges shows that even study comparisons can depend on how results are presented.

Listing two URLs does not resolve the conflict. It is required to look at the conditions, definitions and quality of verification; If there is a lack of data, maintain uncertainty.

Which observations are inconsistent under the same conditions? Distinguishing between true contradiction and incomparability prevents false consensus. First, it's worth comparing keyword definitions. Equal “quality” could mean answer accuracy, citation support, or human preference.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A13](https://aclanthology.org/2023.findings-emnlp.307/)

## 14. Searching is not equal to reading

The search result consists of a title, excerpt and address; the full document may contain an exception, a table with a different subsample, or a subsequent correction. The search excerpt confirms the presence of a relevant page, but is usually not sufficient to provide detailed inference about the method. Even opening a page with an annotation does not mean that the applications have been read. The depth of reading is a property of a specific work with a source, and not a sign of the site’s prestige. By marking it, the review makes visible which proposals are based on a narrow accessible fragment, and which on a proven section of the study.

The system may find a relevant document, but not use an important part of it in the final response. Lost in the Middle experimentally showed the dependence of retrieval on position, and ALCE separately evaluates support in the cited material. Search success and synthesis success are different events.

The position-in-context test does not fully replicate the researcher's work with multiple files. But it refutes the naive assumption that the accessibility of the text guarantees that every line is accounted for.

How much of the material found influenced the conclusion? Access path and final attribution help distinguish between omission and misinterpretation. It is substantive honesty to list an annotation as an annotation. It leaves the reader the opportunity to deepen the examination later without false certainty.

Section sources: [A08](https://aclanthology.org/2024.tacl-1.9/); [A03](https://aclanthology.org/2023.emnlp-main.398/)

## 15. Lies borrowed from the corpus

Erroneous information can come not only from the imagination of the model, but also from the persistent repetition of human misconceptions. Questions specifically based on such myths reveal an imitation of a common false answer. This creates a special pitfall when assessing citations: finding a site where a popular error is repeated does not mean confirming it with primary research. We must distinguish between evidence that people say something and evidence that what they say is true. These goals require different sources.

TruthfulQA tests situations where a popular human answer to a question might be false. The model can confidently repeat a common mistake without making a new one. This is a different source of unreliability than incorrect extraction from a particular document.

The benchmark is specifically designed for such pitfalls and does not measure all types of scientific errors. Fidelity on it may coexist with citation problems.

Where does this seemingly obvious statement come from? Checking the primary evidence is useful even when the answer sounds familiar. In this case, the quotation on the page with the myth only confirms the existence of the myth. The truth of the statement remains the subject of separate evidence.

This imitation of human texts reminds us that external confirmation also requires an assessment of the quality of the source itself. Many pages may repeat one erroneous rumor; the arithmetic multiplicity of references does not constitute an independent verification.

Section sources: [A10](https://aclanthology.org/2022.acl-long.229/)

## 16. Evaluator of citation support

The evaluator who decides whether a document supports a proposal is himself part of the measurement chain. It may miss subtle changes in modality, misattribute two objects, or depend on the order in which options are presented. The automatic score allows you to scale the comparison, but its errors do not disappear because it returns a numerical score. Human assessment is also not unconditional: experts may differ when making complex attributions. A strong conclusion requires knowing how the standard was established in a particular study and what cases the judge was tested on.

The automated evaluator is able to compare answers and documents, but its own errors and positional bias affect the verdict. Research on attribution and positional bias examines different aspects of this issue. Using a judge does not make the resulting assessment an independent truth.

Human verification also has time and consistency limitations, so pitting a human against a model is too crude. The strength of the conclusion depends on the quality of the standard and the judge's proven failures.

How reproducible is the assessment when changing order and expert? The reported cases of discrepancy provide a more complete picture than a single average score. Reversing the order of two responses tests one judge's sensitivity, but not all attribution errors. Both exaggeration and dismissal of this observation should be avoided.

Section sources: [A13](https://aclanthology.org/2023.findings-emnlp.307/); [A06](https://arxiv.org/html/2406.07791v9)

## 17. Transfer between languages

Translation doesn't just replace words; it transfers output boundaries between languages. The English “may” can be carelessly rendered as “causes”, and “in our sample” can be completely omitted. Then the correctly specified link ceases to support the Russian sentence. In the opposite direction, a Russian-language clause may be opaque to an English-speaking automatic judge. The presence of successful metrics on the English corpus does not directly measure this problem. Therefore, the accuracy of the source translation relates to the content of the attribution, and not to the external design of the bibliography.

Citation assessments are often based on English-language questions and corpora. Transferring to a Russian-language answer requires maintaining the correspondence of meaning between the retelling and the original. Translation can imperceptibly strengthen the modality: “may” turn into “proven”.

The source link remains the correct URL string, but no longer confirms the enhanced Russian sentence. Automatic English language indicators do not provide a direct guarantee of translation quality.

What words convey the authors' level of confidence? Verification must read the original wording and its translation as a separate logical step. Modality clauses may be small words, but they are what separate a possible explanation from an established effect.

The translator is able to enhance not only the probability, but also the temporal scope: “not yet observed” turns into “does not exist.” Both sentences are superficially similar, but the second requires much stronger evidence.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A04](https://aclanthology.org/2023.findings-emnlp.467/)

## 18. Reproducible trace

Open queries and responses allow you to understand what information the model saw and what text it produced. But reproducibility also depends on the version of the model, the composition of the corpus, the search configuration and the time of accessing the changing page. A published trace is valuable as evidence of a particular run, not as a guarantee of an identical output years later. It also does not correct a weak test: it is possible to reproduce an incorrect assessment perfectly. Separating these levels helps to read transparency as an opportunity for verification rather than a confirmation of correctness by default.

HELM published queries and outputs for analysis, and ALCE published tasks and attribution assessment tools. Such a trace allows other researchers to see what exactly was fed to the model and received in response. Without it, the final percentage is difficult to explain.

Openness of the track does not in itself correct a weak standard or misinterpretation. Closed models can be updated, so an identical repetition is not guaranteed later.

Can the error be localized to the data, the response, or the judge? An accessible trace makes it easier to answer while maintaining reproducibility limits. The reproducible trace also helps to correct the description of one's own material. But it does not turn the run record into an independent replication of the result.

Section sources: [A07](https://arxiv.org/abs/2211.09110); [A03](https://aclanthology.org/2023.emnlp-main.398/)

## 19. An open standard of evidence

Strong research writing allows the reader to trace a particular claim to its source and understand which objections that source does not address. The number of URLs alone does not provide this. Precision of local citations, coverage of essential clauses, accuracy of atomic facts, and completeness of the answer are related but distinct properties. Publications offer metrics for parts of this picture; there is not yet a single automated score for all of them. The final assessment should therefore make the measured subject, scope limits, and possible evaluator errors visible.

Research on attribution and atomic precision shows that the probative value of a long answer is compound. You need verifiable statements, accessible source documents, exact correspondence, and proper inference constraints. Publications do not yet provide a single automatic metric for all this.

A formal check that is too strict may miss a meaningful explanation, while a formal check that is too soft may accept beautiful text with empty links. Each indicator measures only a certain part of quality.

What elements are accessible to an independent reader without trusting the author of the answer? It is the ability to trace a statement back to an appropriate source that makes a research text verifiable. Comparing the parts allows us to honestly say “this fact has been confirmed, there is no connection yet.” Such a sentence is more informative than a beautiful overall score.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A04](https://aclanthology.org/2023.findings-emnlp.467/); [A09](https://aclanthology.org/2023.emnlp-main.741/)

## 20. Limits of open-ended inference

The final text is capable of containing well-supported proposals and a controversial connection between them. For example, a source supports two separate observations but not an overall causal narrative. The link next to each fragment does not yet resolve the issue of connection. Attribution concerns not only the facts, but also the degree of their generalization. Published studies have suggested partial assessment tools; their results do not automatically certify all genres of scientific explanation. Therefore, the limit of available evidence is part of the substantive conclusion, and not a design defect.

Quotation and atomic precision scores show individual aspects of a long answer; one metric does not support the entire scientific conclusion.

The results depend on the language, document corpus, and reference.

What remains beyond the part that was tested? Readers need to see the gaps as well as the confirmed claims. Remaining uncertainty does not prevent reporting established facts. The review should identify which further claim is not yet supported by the works it has examined.

Split attribution allows you to correct a single error without erasing the good faith portions of a review. Such local correctability is more important than the appearance of an impeccable but opaque conclusion. It is especially useful to distinguish between honest recognition of a gap and misguided confidence that hides it behind a multitude of genuine but irrelevant references.

Section sources: [A03](https://aclanthology.org/2023.emnlp-main.398/); [A04](https://aclanthology.org/2023.findings-emnlp.467/); [A09](https://aclanthology.org/2023.emnlp-main.741/)
