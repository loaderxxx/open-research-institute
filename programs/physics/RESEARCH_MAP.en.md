# Starter literature map: physics of information

[Русская версия](RESEARCH_MAP.md) · [Programme README](README.en.md)

**Checked 24 October 2026.** This is a starter annotated map covering thermodynamics of computation, self-organisation and quantum information. It is not a systematic review. Metadata, abstracts and available excerpts were checked; availability of a full text does not by itself mean it was read. Links point to publishers, DOIs, open repositories or institutional pages.

<!-- ori-toc:start -->
## Contents

- [Books to begin with](#books-to-begin-with)
- [Research and open resources](#research-and-open-resources)
- [Historical landmarks](#historical-landmarks)
- [Researchers and groups with recent work](#researchers-and-groups-with-recent-work)
- [Current directions and open questions](#current-directions-and-open-questions)
- [Access clarification — 25 October 2026](#access-clarification--25-october-2026)
<!-- ori-toc:end -->

## Books to begin with

1. **Sebastian Deffner and Steve Campbell, _Quantum Thermodynamics: An Introduction to the Thermodynamics of Quantum Information_ (2019).** [UMBC group bibliography](https://quthermo.umbc.edu/publications/books/) · [IOP book record by ISBN](https://iopscience.iop.org/book/978-1-64327-658-8). Connects thermodynamics, work extraction and quantum information processing. The bibliography and metadata are open; the book is sold, and full text may require purchase or library access.
2. **Michael A. Nielsen and Isaac L. Chuang, _Quantum Computation and Quantum Information_ (2010, 10th anniversary edition).** [Cambridge University Press](https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE). A core text on qubits, quantum channels and error correction, directly useful for the programme’s question about noise. Page and description are open; full text is paid.
3. **James P. Sethna, _Statistical Mechanics: Entropy, Order Parameters, and Complexity_ (2nd ed., 2021).** [Author page with PDF](https://sethna.lassp.cornell.edu/StatMech/) · [Oxford University Press](https://academic.oup.com/book/44296). Covers entropy, computational statistical mechanics, self-organisation and transitions. The author openly hosts the second-edition PDF; access refers to that posted version.

## Research and open resources

1. **Rolf Landauer (1961), “Irreversibility and Heat Generation in the Computing Process”.** [Original publication, IBM Journal of Research and Development, DOI](https://doi.org/10.1147/rd.53.0183). The classic proposal that logically irreversible erasure of a bit has a minimum heat cost. The full text is openly available from IBM. It is a theoretical paper, not an experimental test.
2. **Antoine Bérut et al. (2012), “Experimental verification of Landauer’s principle linking information and thermodynamics”.** [Nature, DOI](https://www.nature.com/articles/nature10872). An experiment with one colloidal particle in a double-well potential found that mean heat during sufficiently slow erasure approaches the Landauer bound. The abstract is accessible; publisher full text may require access. The test concerns a specific memory model and protocol.
3. **A. Rupe and J. P. Crutchfield (2024), “On principles of emergent organization”.** [Physics Reports, DOI](https://doi.org/10.1016/j.physrep.2024.04.001). This review discusses why no general principles of self-organisation are widely accepted and examines intrinsic computation and evolution operators as ways to describe structure in complex dynamics. Open access, full text available. It is a review and theoretical framework, not a single experimentally established theory.
4. **Shintaro Minagawa et al. (2025), “Universal validity of the second law of information thermodynamics”.** [npj Quantum Information, DOI](https://www.nature.com/articles/s41534-024-00922-w). Develops a generalised law for measurement, feedback and memory erasure in Maxwell-demon protocols. Open article. The result is theoretical; its scope depends on the protocol model and definitions of work and entropy.
5. **Aosai Zhang, Haipeng Xie, Yu Gao et al. (online 2025; issue 2026), “Demonstrating quantum error mitigation on logical qubits”.** [Nature Communications, DOI](https://www.nature.com/articles/s41467-025-67768-4). Experimentally applies zero-noise extrapolation to error-correction circuits on superconducting processors to reduce residual logical errors. Published online on 24 December 2025 and included in volume 17 (2026); full text is open. This is a demonstration on specific codes and devices, not evidence of a scalable fault-tolerant quantum computer.

## Historical landmarks

- **1948 — Claude Shannon, mathematical theory of communication.** [Archived Bell System Technical Journal paper](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf). Quantified information entropy and communication channels; it is a theory of message transmission, not by itself a physical theory of information.
- **1961 — Landauer’s principle.** [Original IBM paper, DOI](https://doi.org/10.1147/rd.53.0183). Connected logical irreversibility in computation to heat dissipation; experimental verification came much later.
- **1982 — Richard Feynman, “Simulating Physics with Computers”.** [International Journal of Theoretical Physics, DOI](https://doi.org/10.1007/BF02650179). Argued that quantum systems could be efficiently simulated by quantum computers; this was an early research programme, not a finished universal algorithm.

## Researchers and groups with recent work

- **John Preskill — Caltech, Institute for Quantum Information and Matter.** [Institutional profile](https://preskill.caltech.edu/) · [specific 2025 paper](https://www.nature.com/articles/s41567-025-03025-1). Huang, Preskill and Soleimanifar propose a protocol that theoretically certifies almost all target multi-qubit states with O(n²) single-qubit measurements; numerical demonstrations reach 120 qubits. This confirms 2025 activity, but is not an experimental hardware test.
- **Shintaro Minagawa and Francesco Buscemi — Minagawa: Aix-Marseille Université, Laboratoire d'Informatique et des Systèmes; Buscemi: Nagoya University.** [Minagawa profile](https://shintarominagawa.github.io/) · [Buscemi institutional profile](https://pub.i.nagoya-u.ac.jp/research/Pid%3D325_jhc_data.html) · [joint 2025 paper](https://www.nature.com/articles/s41534-024-00922-w). Their paper on the universal validity of the information-thermodynamics second law sharpens theoretical bounds for feedback and erasure. The article is open; it does not claim an empirical test.
- **Carlos Gershenson — State University of New York at Binghamton, School of Systems Science and Industrial Engineering.** [Current institutional profile](https://www.binghamton.edu/ssie/people/profile.html?id=cgg) · [2025 paper](https://www.nature.com/articles/s44260-025-00031-5). His open essay organises the questions “what is self-organisation, how does it arise, and why study it?” across physical and biological systems. UNAM was his previous position (2008–2023); the paper lists both Binghamton and UNAM affiliations. This is a conceptual review by its author, not a consensus definition.

## Current directions and open questions

In 2024–2025, two lines stand out: developing computable general descriptions of self-organisation and extending information-thermodynamics theory to real measurement protocols; in quantum computing, researchers are testing methods that reduce logical errors on particular hardware. Key dates are the Rupe–Crutchfield review (2024), Minagawa et al.’s theoretical paper and the logical-qubit experiment (2025). As of 24 October 2026, these sources confirm active work through 2025; they do not establish a later universal physical theory of self-organisation.

Open questions include how to compare different definitions of “structure” and self-organisation, how to account for measurement and memory-reset costs away from equilibrium, and what error-correction resources will preserve logical advantage as systems scale. Theoretical lower bounds should be distinguished from engineering estimates and small-device demonstrations.

**Suggested next reading:** start with Sethna on entropy and statistical mechanics, then read Landauer → Bérut et al. for the erasure-cost argument and test, followed by the Rupe–Crutchfield review and a comparison with Minagawa et al. and the logical-qubit experiment.

**Verified primary links:** [Sethna/OUP](https://academic.oup.com/book/44296), [Nielsen–Chuang/Cambridge](https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE), [Landauer original/IBM](https://doi.org/10.1147/rd.53.0183), [Bérut et al./Nature](https://www.nature.com/articles/nature10872), [Rupe–Crutchfield/Physics Reports](https://doi.org/10.1016/j.physrep.2024.04.001), [Minagawa et al./npj QI](https://www.nature.com/articles/s41534-024-00922-w), [Zhang et al./Nature Communications](https://www.nature.com/articles/s41467-025-67768-4), [Huang–Preskill–Soleimanifar/Nature Physics](https://www.nature.com/articles/s41567-025-03025-1).

## Access clarification — 25 October 2026

An [open author version on arXiv](https://arxiv.org/abs/1907.01596) was found for Deffner and Campbell. It is a prepublication version of the teaching text; a full comparison with the published edition has not been completed. Close reading remains pending.
