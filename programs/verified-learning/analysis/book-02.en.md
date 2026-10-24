# Sugiyama and colleagues — Machine Learning from Weak Supervision

[Русская версия](book-02.md)

**Access and reading limits.** Checked the MIT Press description and listed problem classes. The complete book was not read.

**Source content.** The book treats weak supervision through empirical risk minimisation. The publisher lists learning from positive and unlabelled examples, mixed label sets, complementary and partial labels, and class-prior estimation. The general problem is to learn from incomplete observations rather than assume that every example has an exact target label. This is classification theory and algorithms; connecting it with verification of long reasoning traces requires a separate argument.

**ORI critical analysis.** The programme benefits from treating a verifier output as a particular kind of observation rather than unconditional truth. “No error found” differs from confirmed correctness, and absence of a positive label does not necessarily make an example negative. Mixing these cases during training can reinforce systematic bias even with abundant data.

The mechanism producing a label is especially important. Errors from a random annotator and errors from a model whose judgments depend on solution style create different learning problems. A correction justified under one mechanism may fail under another. Before using a formula, researchers should identify assumptions about missingness, noise and class proportions and ask whether the available data can test them.

Synthetic explanations introduce a further issue: the generator and evaluator may be dependent. Shared errors can make agreement look like label quality. A practical ORI output is a description of each labelling channel, an independent control sample and an analysis of errors made invisible by selection. The book supplies language for this investigation without turning every inaccurate evaluation into a useful training signal. Detailed consistency conditions and limitations of particular theorems still require the complete text. Its role is to make assumptions explicit enough to examine, not to excuse weak evidence merely because it has been called supervision.

**Verification sources:**

- https://mitpress.mit.edu/9780262370561/machine-learning-from-weak-supervision/
