# Connectivity and memory

<!-- ori-nav:start -->
[Русский](connectomics-and-memory.md) · [Programme description](../README.en.md) · [Research library](../../../LIBRARY.en.md) · [Sources and reading depth](../SOURCES.en.md)
<!-- ori-nav:end -->

From electron microscopy to ensembles of memories

**Source length (Russian):** 3551 words. Prepared: 2026-09-23.

**Scope of Review:** Anatomical maps and causal experiments on flies, mice and human specimens.

The document was prepared using AI and internal editorial review. No external scientific review has been conducted. For the full bibliography and notes on reading depth, see [SOURCES.md](../SOURCES.en.md).

<!-- ori-toc:start -->
## Contents

- [1. A graph is not the same as a functioning brain](#1-a-graph-is-not-the-same-as-a-functioning-brain)
- [2. FlyWire: scale of the achievement](#2-flywire-scale-of-the-achievement)
- [3. Reconstruction errors](#3-reconstruction-errors)
- [4. Human cubic millimeter](#4-human-cubic-millimeter)
- [5. Mouse: structure and activity](#5-mouse-structure-and-activity)
- [6. Different timelines](#6-different-timelines)
- [7. Neurotransmitters and signs of neural communication](#7-neurotransmitters-and-signs-of-neural-communication)
- [8. Optical path of a fly](#8-optical-path-of-a-fly)
- [9. Whole-brain fly model](#9-whole-brain-fly-model)
- [10. Anatomical contact and strength](#10-anatomical-contact-and-strength)
- [11. Local memory interference](#11-local-memory-interference)
- [12. Artificially induced association](#12-artificially-induced-association)
- [13. Distributed engram complex](#13-distributed-engram-complex)
- [14. Memory after damage](#14-memory-after-damage)
- [15. Forgetting and retrieving](#15-forgetting-and-retrieving)
- [16. Plasticity and stability](#16-plasticity-and-stability)
- [17. Model identification](#17-model-identification)
- [18. Body condition and environment](#18-body-condition-and-environment)
- [19. Cross-species transfer](#19-cross-species-transfer)
- [20. Limits of the mind-uploading claim](#20-limits-of-the-mind-uploading-claim)
<!-- ori-toc:end -->

## 1. A graph is not the same as a functioning brain

In a network graph, vertices represent neurons, and edges represent detected contacts. This reduction allows us to look for network motifs, paths and communities that cannot be captured by the eye in millions of individual images. However, the same pair of cells can behave differently depending on the receptors and condition. The graph tells where interaction is possible, rather than the exact sequence of all future signals. Electron-microscopy reconstruction is informative precisely because it limits possible interactions, but geometry alone does not fix the state of the receptors and the direction of the current flow.

The FlyWire reconstruction describes the neurons and junctions of an adult Drosophila after tissue fixation. It allows you to look for signaling pathways and cell types, but does not record all neural activity while the fly was alive. Even the full set of graph edges leaves the values of connection strengths, delays and physiological states uninferred.

The graph is a powerful constraint for explanation, but unequal parameters may operate on the same anatomy. The model should be judged by new measurements, not by how impressive the number of contacts is.

Which properties of contact are stable over time, and which ones change with learning? The answer will determine what additional data is needed to predict a particular function. In the model of the future signal, not only the routes between cells are important, but also the initial conditions of each of them. They cannot be seen in fixed tissue with the required temporal precision.

Section sources: [I1](https://www.nature.com/articles/s41586-024-07558-y)

## 2. FlyWire: scale of the achievement

The completeness of FlyWire refers to a specific adult fruit fly brain. Researchers can test, for example, whether a previously unknown cell type connects sensory input and behavioral output. Such a resource also allows for correction of annotations and comparison with other animals of the same species. But even two flies with similar cell types may have different learning histories; reconstructing one specimen does not record the species’ shared memory. To check individual variation, independent samples processed by comparable methods are needed, otherwise the difference may also arise from the preparation of the material.

The authors reconstructed 139,255 neurons and approximately 54.5 million chemical synapses in the adult Drosophila brain using a combination of computational segmentation and expert validation. They provided annotations and an open resource for neural circuit hypotheses. This is the entire brain of an insect in an anatomical sense.

Completeness of anatomical coverage does not mean completeness of molecular and dynamic properties. The peripheral nervous system, body, individual history, and external environment are important to the behavior of a living animal.

Can predicted pathways be independently validated by interventions in different conditions? Even a successful answer will remain the result of a study of a fly, not of a human being. Cell type annotation turns a mass of images into a question of function. Repeated study of another animal will allow us to separate the stable pattern from the characteristics of this particular sample.

Section sources: [I1](https://www.nature.com/articles/s41586-024-07558-y)

## 3. Reconstruction errors

Millions of contacts require automatic volume parsing and subsequent proofreading. It is especially difficult to follow a thin process if it runs next to another or disappears behind an image defect. Therefore, the map is simultaneously the result of observation and complex interpretation. For a particular conclusion, it is important to know whether it depends on a well-validated thick pathway or on a controversial rare synapse. Assessment of map quality must include possible local errors, since one incorrectly fused branch can create an implausibly long path.

Electron microscopy segmentation separates intertwined processes, and contact classification assigns possible connections to them. In a large-scale array, breaks and erroneous merges are inevitable, so the authors apply verification and report quality properties. The human fragment and FlyWire illustrate both the scientific impact and the labor of verification.

The data user should not assume that every edge is certain. Local uncertainty is especially important when interpretation depends on a rare pathway or cell. Proofreading error and biological variation have different sources.

How does uncertainty in the map affect inferences about function? Publishing the raw image, annotations, and methods gives the community the opportunity to refine this conclusion. Proofreading helps to detect some errors, but does not provide grounds for considering each route to be equal in degree of confidence. This is especially important for rare long connections.

Section sources: [I1](https://www.nature.com/articles/s41586-024-07558-y); [I2](https://www.science.org/doi/10.1126/science.adk4858)

## 4. Human cubic millimeter

Unlike the insect sample, the human specimen is actual human cortical tissue, with its own local cell types and complex processes. But the surgical origin limits the biographical interpretation; the material is obtained for medical purposes and then processed as a research fragment. Local features can be compared with future samples, but they cannot be attributed to the owner's memory without functional registration. Particular care must be taken when reading a rare structure in one sample: it may be a characteristic feature of the tissue, an imaging error, or a true exception.

Shapson-Coe and colleagues took approximately 1.4 petabytes of images of the human cortex and reconstructed approximately a cubic millimeter of tissue with tens of thousands of cells and approximately 150 million synapses. The material was obtained surgically; the study reveals the complexity of the fine architecture of a particular fragment.

It is not a map of the patient's entire brain or a sequential record of his thoughts. The excised tissue is fixed, so the physiology has to be inferred from other data. Unusual local structures require testing on other samples.

How typical are the observed motifs across people, ages, and regions? The strength of the result lies in the detail of local anatomy, and not in the reading of individual consciousness. Human material does not have both a complete behavioral history and a synchronous record of the functioning of all the cells depicted. Therefore, personal conclusions from the local shape of the processes would be speculation.

Section sources: [I2](https://www.science.org/doi/10.1126/science.adk4858)

## 5. Mouse: structure and activity

The strength of MICrONS is in its sequence: first the experiment on a living animal, then the anatomy of the corresponding tissue. This connection allows one to ask, for example, whether cells with similar responses share common transmission pathways. In this case, the calcium signal reflects activity indirectly, and the reconstruction covers the selected area. This is a good basis for testable models of visual cortex, but it is not a serialization of all mouse brain states. Correlating activity and connectivity makes it possible to test correlations on selected cells, but does not cover all peripheral inputs and long-range outputs.

MICrONS first recorded the responses of the visual cortex of a living mouse to stimuli, then reconstructed the corresponding volume using electron-microscopy images. This pairing allows us to test whether functionally similar cells are linked by particular pathways. The work measured tens of thousands of active neurons and reconstructed hundreds of thousands of cells in volume.

Activity recording and anatomical identification do not cover all cells equally; the visual experiment does not provide complete mouse brain states. The number of reconstructed cells cannot be simply equated with the number of functionally measured ones.

What relationships hold up against other stimuli and the state of the animal? An open structural-functional connection makes such checks possible while remaining a local study. Likewise, the statistical relationship between response and contact does not make each particular connection a demonstrated cause of the observed visual feature.

Section sources: [I3](https://www.nature.com/articles/s41586-025-08790-w)

## 6. Different timelines

Different time scales create more than just a technical inconvenience. A synaptic contact may remain visible after its effectiveness changes, and the immediate response of the neuron depends on the previous excitation and the state of the body. The calcium indicator averages fast events in its own way. If a model claims to predict a pulse train, it needs to be evaluated on the appropriate time scale, not just on a similar average signal. Therefore, both recording duration and signal resolution are important for physiological statements, not just the spatial detail of the subsequent image.

Anatomy describes the relative stability of branching, physiology describes changing millisecond and slower processes. Calcium signals in MICrONS represent an indirect recording of activity, and the fly model approximates neural responses with selected dynamics. The comparison requires careful timing and selection of the observed quantity.

A good slow indicator match does not necessarily mean an accurate prediction of every impulse. The structure can be maintained when the network state changes; the opposite is also possible with plasticity.

How to test a model simultaneously for rapid and long-term changes? The issue of sufficient temporal detail cannot be resolved with one static snapshot. A mismatch in timescale could produce a striking match between averages if the order of specific signals is incorrect. This order is important for transmitting information.

Section sources: [I3](https://www.nature.com/articles/s41586-025-08790-w); [I4](https://www.nature.com/articles/s41586-024-07939-3)

## 7. Neurotransmitters and signs of neural communication

The labeling of the transmitter provides a biological clue about the cell’s signaling role, but the effect is also determined by the target cell's receptors. One classification does not guarantee the same effect on transmission in all conditions. Therefore, comparing the model with the intervention is especially valuable: it tests the functional consequence of the classification. In a large simulation, the choice of simplified rules is justified if the study is honest about which sensorimotor results they actually reproduce. The strength of the inference increases when the assumption about neurotransmitter action is tested on the appropriate target cell rather than inferred from the type name.

Shiu and colleagues' model used anatomical contacts and putative neurotransmitter identities to model Drosophila sensorimotor circuits. Lappalainen and colleagues also limited the network to the connectome, but the unknown functional parameters were refined by training. The two studies show the different roles of biological annotation.

The type of transmitter does not completely determine the effect of contact: the receptor, cellular state and context change the response. A crude model may predict some functions without detailed biophysics and fail at others.

Which physiological measurements best disambiguate parameters? The prediction result should be specific to the circuit and task being tested and not generalizable to all functions. The distinction between a cell's chemical label and its effect on its partner is particularly important in a network with multiple receptor types and modulation modes.

Section sources: [I8](https://www.nature.com/articles/s41586-024-07763-9); [I4](https://www.nature.com/articles/s41586-024-07939-3)

## 8. Optical path of a fly

In the fly visual system, predictions can be tested against numerous reported cell type responses. This makes the area a convenient testing ground for comparisons between computational and biological circuits. Learnable parameters help explain what the pattern of synaptic contacts does not tell you. If two settings explain the recordings used equally well, new stimuli or interventions are needed before treating either as the true physiology. To evaluate a new visual conditions, it is essential to separate in advance the recordings used during adjustment from independent test observations and interventions.

The connectome-constrained network for the fly visual system is compared with previously reported responses from many cell types. The authors optimized the model for visual processing and obtained agreement for the reactions studied. This is an example of how anatomy helps select model space.

The synaptic circuit was not the only input: simplified neurons and learning properties are essential. Consistency in the visual system does not represent all fly behaviors.

Which predictions will hold for a new set of stimuli or an intervention in a particular neuron? The verifiable functional model is stronger than the bare graph, but its evidentiary power remains limited. Such testing can reveal missing physiology even when the set of cells and pathways in the anatomical description has been correctly established.

Section sources: [I4](https://www.nature.com/articles/s41586-024-07939-3)

## 9. Whole-brain fly model

The model of integrating and generating impulses transforms the anatomical scheme of the fly into a system capable of responding over time. For behavioral tests, what matters is not a pretty animation but whether predicted pathways match the results of independent interventions. Feeding and grooming represent only part of an animal’s behavioral repertoire. The individual fly's experience, seasonal conditions, and bodily feedback remain beyond the scope of such demonstrations. Testing a causal chain requires comparison with animal behavior, not just consistency of signals within a working digital network.

Shiu and co-authors created an integrating firing model based on a large-scale connectome of the Drosophila central brain. In grooming and feeding tasks, they traced the possible path from sensory input to motor output and compared some of the results with experiments.

Model parameters and approximations leave many other mechanisms compatible with the same observations. Several sensorimotor tests do not establish that the simulation experiences an insect’s sensations or represents a particular animal after its experiences.

What happens when learning, sleeping and changing internal needs? These modes test the boundaries of the model and remind us of the role of the body and the environment. Sensor-to-action route prediction can be tested by interfering with a specific node; simply reproducing external movement gives a weaker test.

Section sources: [I8](https://www.nature.com/articles/s41586-024-07763-9)

## 10. Anatomical contact and strength

In the electron image, “connection strength” is not written on the synapse. The number of contacts can serve as an initial hypothesis because more transmission sites often mean more potential influence. But effective transmission changes with modulation, repeated stimulation, and changes in receptors. The study of such discrepancies turns anatomy into an experimental program; it does not require that a map be considered useless just because the map does not contain all the parameters. Individual parameters of release and receptor response can change without noticeable rearrangement of the contact shape on the anatomical map.

The number of visible contacts is sometimes used as an approximate indicator of the strength of the connection. But transmission also depends on the probability of release of the substance, receptors, modulation and previous activity. Working with a fly vision model required parameterization on top of anatomy precisely because the image does not contain all the physiology.

Correlating synapse number with functional weight may be useful in a certain circuit but misleading in another. The existence of exceptions does not invalidate the map; it asks a question about calibration.

What direct records, simultaneously with the ultrastructure, will clarify this correspondence? The answer will likely depend on the cell type, organism, and condition. Statements about functional strength should be limited by the method of measurement: the visibility of morphological contact and the amplitude of the response are not the same observation.

Section sources: [I1](https://www.nature.com/articles/s41586-024-07558-y); [I4](https://www.nature.com/articles/s41586-024-07939-3)

## 11. Local memory interference

The causal experiment using an engram tag is structured differently than viewing normal activity. The researchers select cells that were working at the time of training and later artificially activate them. Freezing after light establishes the ability of such an intervention to produce a measurable response under given conditions. It does not tell you exactly what images or feelings are available to the mouse or whether its internal episode matches a natural memory. Control groups and stimulation context determine how narrowly behavior can be attributed to the labeled ensemble rather than to the light.

In the experiment of Liu and colleagues, mouse hippocampal cells active during contextual fear learning received a light-sensitive label. Later, light activation induced freezing outside the original context. The move from correlation to causal intervention significantly strengthened the inference about the role of the labeled ensemble.

Freezing measures a specific response, and the label does not cover all components of the episode. Sufficient activation for a response under given conditions does not mean that every cell or the entire content of the memory is necessary.

Is it possible to separate context, affect and motor response? Such distinctions help to understand the causal architecture of memory without claiming digital transmission of memory. Optogenetic control sets an unusual pattern of excitation, so its result cannot be equated to spontaneous natural recall without verification.

Section sources: [I5](https://www.nature.com/articles/nature11028)

## 12. Artificially induced association

The experiment inducing a false association separates the two contexts in time. Cells associated with a safe environment are activated during unpleasant learning in another. Subsequent behavior in the first setting reflects the new connection. The main value of the experiment is its controlled comparison of contexts, not the “inserted file” metaphor. It shows the malleability of the association while simultaneously limiting the inference to a single animal species and fear task. The word “false” here refers to the discrepancy between the stimulus location and the context in which the later response occurs; it does not describe a verbal report.

Ramirez et al. activated cells tagged in one context while the mice underwent aversive learning in another. After this, the mice exhibited freezing in the first context, even though there was no shock. The experiment causally demonstrates the ability to change a behavioral association.

The name "false memory" describes the experimental structure, not the animal's verbal recognition. It cannot be concluded that the researchers read or wrote down a complex human episode.

How consistently does the representation change over subsequent trials? Plasticity complicates the idea of ​​memory as an immutable file at a fixed set of synapses. Comparing a safe context before and after training separates the initial perception of the environment from the learned fear response to it.

Section sources: [I9](https://pubmed.ncbi.nlm.nih.gov/23888038/)

## 13. Distributed engram complex

A trace of one contextual memory is sought not only where the historical discussion about the hippocampus began. Work on brain ensembles notes the distribution of cells in different regions and the individual effects of their interventions. The interaction of ensembles can change during consolidation and retrieval. The partial map does not say that all marked cells "store" the same picture; it provides the basis for new causal distinctions between domains. The mere coexistence of active ensembles does not prove that information is stored in the same format in each of the regions shown.

Roy and colleagues identified cells active in the formation of a single mouse context memory in many of the 247 regions studied. The result supports the idea of ​​a distributed system of interacting ensembles. The hippocampus appears to be part of a larger process, rather than a container for everything experienced.

The map is partial and depends on the molecular markers and measurement window. Detected activity does not by itself prove that each region stores the same piece of content.

How do connections between regions change during consolidation and retrieval? To talk about personal memory, it is necessary to take into account the dynamics of the system, not just the coordinates of marked cells. Identifying an ensemble does not mean explaining the distribution of roles between its parts; this requires interventions and measurement of interactions.

Section sources: [I10](https://www.nature.com/articles/s41467-022-29384-4)

## 14. Memory after damage

Surgeries in the medial temporal region illustrate the strength and limits of clinical causation. The lesion was not selected for the sake of pure experimentation, and the underlying disease and surgical decision varied between patients. Nevertheless, the consistent profile of impairment in new memory was informative. When interpreting, it is important to remember the stored early memories and skills: different types of memory do not add up to one store. Patients also varied by reason of surgery, reinforcing the need for careful comparison of preserved and impaired function.

Clinical work by Scoville and Milner compared patients undergoing bilateral medial temporal lobe surgery. The depth of impairment of new memory varied with the amount of damage; this became the basis for functional dissociation of memory. The clinical findings are directly relevant to humans and complements causal interventions in mice.

Historical surgeries involved multiple structures, and patients varied in diagnosis. One cannot mechanically transfer one clinical outcome to the ability of any hippocampus or to the philosophical identity of a person.

Which types of memory depend on which circuits and at what times? The question is more specific than the idea of ​​extracting “all memory” from one part of the brain. The case of unilateral damage in a historical study also helps avoid reducing the result to the simple formula “any tissue loss equals memory loss.”

Section sources: [I11](https://pubmed.ncbi.nlm.nih.gov/13406589/)

## 15. Forgetting and retrieving

The memory trace and the ability to recall it naturally are different. A mouse may not exhibit freezing in one environment, but artificial stimulation of a certain population will change behavior. But the intervention itself creates an unusual state, so the opposite conclusion about the full content of the “sleeping memory” does not follow. The long-term history of a person cannot be reconstructed from the absence or presence of one behavioral marker. The ability to elicit a response by an intervention depends on the stimulation mode chosen and should not override the entire natural process of forgetting.

In experiments with engrams, researchers separate the trace after training from the conditions of its natural recall. The success of artificial activation shows that the presence of a trace and access to it are not always the same. Distributed ensembles complicate this time difference.

These results do not imply that every forgotten event can be recovered by finding the right button. Behavior depends on subsequent experience and the state of the network; different stimulation methods may create different responses.

How to check for the presence of a trace, regardless of the method of its extraction? The question is important for memory archive models: the absence of a response does not equal the absence of all biological changes. Unsuccessful natural retrieval and successful artificial retrieval represent different conditions of trace access, so direct comparisons require caution.

Section sources: [I5](https://www.nature.com/articles/nature11028); [I10](https://www.nature.com/articles/s41467-022-29384-4)

## 16. Plasticity and stability

Stability of behavior sometimes masks changes in the tissues that support it. With repeated learning and retrieval, effective connections and cell involvement may change while the animal continues to recognize familiar environments. This forces us to examine memory retention as a dynamic process, not just a frozen contact list. Data on a specific mouse association do not provide a universal measure of “personal integrity.” Consequently, it is impossible to reconstruct a specific experience from a single fixed map without a model of changes, the duration of which is comparable to life.

Learning, retrieval and new association change the distribution of active cells and the relationships between them. Mouse interventions reveal the causal role of ensembles, and examination of multiple domains reveals the system-wide extent of the memory trace. The stability of a function can coexist with changes in its material embodiment.

This does not provide a universal law for how much change is permissible without losing a particular memory. Inferences about long-term personality would require a different set of observations than laboratory freezing.

Which changes are normal updates, and which amount to loss of information? Distinction is studied empirically by task, but the philosophical answer about identity does not follow from experience alone. Even a stored skill can rely on a changing ensemble. One snapshot does not show the sequence of such rearrangements over weeks or years.

Section sources: [I5](https://www.nature.com/articles/nature11028); [I9](https://pubmed.ncbi.nlm.nih.gov/23888038/); [I10](https://www.nature.com/articles/s41467-022-29384-4)

## 17. Model identification

A model becomes stronger when it risks making mistakes in novel conditions. If two network settings predict the old visual set equally, the researcher looks for a stimulus for which their outputs differ. This is a mechanism testing principle found in both connectomic and functional work. Moreover, a finite number of tests leaves a space of unidentified properties and does not confirm arbitrary conclusions about the whole organism. Testing on an independent set of signals is especially important where a large number of free parameters allow similarity to the original records.

Multiple network models can describe the recorded activity from the same stimulus set in the same way. A functional model of mouse visual cortex and a connectomic model of fly vision address different problems, but both face uncertainty about underlying mechanisms. A new stimulus or intervention can reveal differences.

Transferability testing only increases confidence in the model within the tested conditions. The absence of differences should not be considered evidence of complete equivalence of physical processes.

What observations cause models to make inconsistent predictions? Published comparisons are more important than a declaration that the chosen model “works like a brain” in general. Successful interpolation between familiar stimuli is particularly weak in discriminating between competing mechanisms; Indeed, novel conditions test them more strictly.

Section sources: [I4](https://www.nature.com/articles/s41586-024-07939-3); [I14](https://www.nature.com/articles/s41586-025-08829-y)

## 18. Body condition and environment

The vision and action of a living animal are built into cycles: movement changes input, internal state changes attention and need, consequences of action change the next choice. Laboratory simplification makes individual links measurable. It only becomes a problem when it is claimed that the same recordings have covered all relevant loops. To define the boundaries of the model, it is necessary to list the real inputs and outputs of experience, and not to assume a complete environment by default. Circular coupling of perception and movement can alter even simple visual responses; a fixed screen sets only part of such conditions.

Sensory inputs, movement, and hormonal and metabolic regulation alter neural activity. The fly model concentrates on individual inputs and outputs; MICrONS records responses from the visual cortex to given stimuli. No set covers all the loops of the body with the environment.

This is a boundary of the research field, not a flaw of research. Their specific goals allow for contextual limitations; the promise of full individual simulation would require evidence of a much wider scope.

Which loops are especially necessary for a given form of behavior? The question should be based on the function being tested instead of assuming a single universal parts list. Connections between an organism and its environment are not added automatically because the model contains many cells and operates over time.

Section sources: [I8](https://www.nature.com/articles/s41586-024-07763-9); [I3](https://www.nature.com/articles/s41586-025-08790-w)

## 19. Cross-species transfer

The generic word “brain” obscures biological differences. The fly, the mouse, and the human allow for different methods of dissection, recording, and verification. The image segmentation method may be transferable, but the inference about the functional significance of the circuit must be tested in the appropriate organism. It is especially dangerous to transfer the number of neurons or the structure of a sample into discussion of human autobiography: published articles do not build such a bridge. Similarities in sample preparation techniques do not make the cells, regions, or roles of those regions equivalent in different nervous systems.

The Drosophila provides an anatomically complete brain, the mouse a rare bundle of cortical activity and structure, and the human an extremely detailed local fragment. Methodological advances may transfer between studies, but quantitative and functional findings cannot be transferred directly across types and scales.

Cell types, architecture, life history and behavior vary. Even a similar connection motif does not mean identical meaning for human memory.

Which properties are consistently conserved when comparing independent samples and organisms? Comparative work reveals general principles without eliminating the need for human data on a human subject. In particular, the human tissue sample does not provide a direct functional analogue of the whole fly brain, despite the common electron microscopy technique.

Section sources: [I1](https://www.nature.com/articles/s41586-024-07558-y); [I2](https://www.science.org/doi/10.1126/science.adk4858); [I3](https://www.nature.com/articles/s41586-025-08790-w)

## 20. Limits of the mind-uploading claim

A loading inference would require determining what exactly is being loaded, proving the sufficiency of the recorded variables, and demonstrating compliance with the chosen retention criterion. The articles read pursue narrower goals and successfully answer some of them. Their careful formulations should not be turned into a hidden promise of immortality. At the same time, the absence of such a demonstration today does not experimentally prohibit any future approach. Any future transfer statement will have to identify the specific subject and separately show why its continuation follows from the measured function.

Neither FlyWire, nor the mouse engram experiments, nor the local human reconstruction demonstrates the transition of personal experience into computation. Their results: anatomical maps, causal reactions and functional predictions. These are significant steps in their respective scientific fields, but different steps.

Even perfectly predicted behavior leaves the question of what numerical identity means and how to establish first person. The data does not give the right to declare the prospect closed forever, but also does not make uploading an established fact.

What criteria can be checked without confusing the model with the object? A clear statement of the function being tested is a prerequisite for honest scientific reporting. The path from data to philosophical statement must be explicitly argued; the name of the simulation cannot serve as the missing evidentiary step.

Section sources: [I1](https://www.nature.com/articles/s41586-024-07558-y); [I4](https://www.nature.com/articles/s41586-024-07939-3); [I5](https://www.nature.com/articles/nature11028)
