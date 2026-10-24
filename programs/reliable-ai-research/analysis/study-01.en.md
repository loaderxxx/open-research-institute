# Chen et al. — ScienceAgentBench

[Русская версия](study-01.md)

**Access and reading limits.** Checked the ICLR 2025 abstract. The full PDF did not load; code, tasks and independent reproduction were not examined.

**Research result.** The benchmark contains 102 tasks from 44 peer-reviewed publications across four disciplines, with nine domain experts involved in validation. Every task requires a self-contained Python program. The authors evaluate the program, its execution and cost. With three attempts, the best tested agent solved 32.4% independently and 34.3% with additional expert knowledge. These figures describe the particular models and procedures reported in the 2025 study.

**ORI critical analysis.** Standardising the output artefact makes evaluation more concrete: a promised analysis can be compared with executable code. Execution and scientific correctness nevertheless remain different criteria. A program can finish successfully while using the wrong sample, units or statistical procedure. Each output test therefore needs a clear account of what it actually verifies.

A task extracted from a published paper also differs from independently formulating a new question. The original researchers have already resolved some uncertainty: a domain has been chosen, data exist and a successful analysis is known. This does not diminish the benchmark’s value, but it limits transfer to open research. The solved-task percentage cannot be interpreted as the percentage of science that has been automated.

ORI should compare failures by stage: understanding the instruction, locating data, implementing the method and interpreting the result. The three attempts should remain visible in cost accounting and the definition of success rather than disappear behind the final percentage. A detailed follow-up needs to inspect testing rules and measures against leakage of published solutions. The study is valuable as a specific measurement instrument showing the gap between familiarity with scientific writing and successful execution of a bounded research operation.

**Verification sources:**

- https://proceedings.iclr.cc/paper_files/paper/2025/hash/f12b4df26344f3be803c06b555252efe-Abstract-Conference.html
