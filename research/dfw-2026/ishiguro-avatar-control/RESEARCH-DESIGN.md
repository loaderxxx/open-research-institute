# Research design: identify origin, mediation and authority

[Study introduction](README.md) · [Evidence atlas](ATLAS.md)

**Status: proposed, not run.**

Prepare a sandbox service kiosk with authorized fictional scripted media and no external actions. Fix the same avatar, room layout, voice presentation and semantic task across conditions. Randomize or counterbalance scenario order and compare a single recurring mode cue with a two-layer cue for **speaker/source** and **current decision authority**. Both conditions give accurate disclosures; do not test deceptive impersonation.

Construct separate cases: live operator, operator recording, software-generated dialogue, and live human speech with software-generated gestures. Cross these with no transition, transition during exchange and ambiguous connectivity. Stop on connectivity loss; do not silently switch to autonomous execution.

## Outcomes

1. **Origin recognition:** classify the current utterance; present uncertainty as a valid option.
2. **Authority recognition:** identify who can authorize the next action and how to reach that person.
3. **Intervention:** at a scripted correction point, measure successful pause or handoff and time to acknowledgment.
4. **Secondary:** task accuracy and burden, broken out from recognition or intervention.

Log utterance origin, mediation flags, rule changes, current authority and timestamp, with a separate interface-facing record. Report confusion matrices rather than accuracy alone: mistaking replay for live interaction differs from misreading AI gestures as evidence of autonomy. Detect cases where mode is understood but action still fails. A later adult-participant study requires review and preregistration; public deployments and minors are out of scope.
