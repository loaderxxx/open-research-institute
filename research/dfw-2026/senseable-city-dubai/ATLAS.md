# Evidence atlas: accessible routes, thermal exposure and city sensing

**EN** · [Русский](ATLAS.ru.md)

[Study overview](README.md) · [Proposed evaluation](RESEARCH-DESIGN.md)

## How evidence was checked

We revisited the named primary publications from the Claude handoff and followed the Dubai paper's source for behavior assumptions. We checked the publisher abstract and the lab-hosted full paper on shade routing, including its network construction, indoor validation, findings and limitations. This supersedes the archive's earlier full-text access gap. The review is targeted, not a systematic review or independent reproduction.

| Evidence | Method and comparison | Supported result | Boundary |
| --- | --- | --- | --- |
| [Wen et al., 2025](https://senseable.mit.edu/papers/pdf/20250911_Wen-etal_WalkingSmart_CEUS.pdf) · journal full text | Uses outdoor and indoor pedestrian graphs, time-dependent shade and a comparison between shortest and modeled optimal shaded routes around four Dubai stations. Checks selected indoor entry-to-entry connections on site. | In the outdoor-network model, shade-oriented routes are on average about 1.3% longer and their modeled sunlit share is 8.8 percentage points lower; the Indoor Contribution Index shows indoor gains differ by station. | That is not measured walker heat or actual route adoption. Indoor observations are not a full audit by opening hour or accessibility profile. |
| [Melnikov et al., 2022](https://dr.ntu.edu.sg/server/api/core/bitstreams/6d2beaa1-9b0b-4e82-a379-813d317e7b7d/content) · journal full text | Experimental route selections in Singapore trade a shorter path against greater shade. Models discriminate between building and tree shade. | The study gives a measured behavioral basis for testing unequal shade weights rather than using a uniform value. | A Singapore estimate is not a measured Dubai preference; the participant context and available route choices influence the result. |
| [Orsi et al., street design preprint](https://arxiv.org/abs/2507.04434) · original study | Milan telemetry, matched 30/50 km/h street segments, and a before/after analysis of selected limit changes; comparison cities in the preprint. | Design and observed driving speeds are associated; the matched comparison is more informative than treating a posted limit as actual street conditions. | Matching is not random assignment. Do not treat preprint comparisons as confirmed parts of the final journal version, or use Milan estimates as Dubai intervention effects. |
| [Hu et al., 2026](https://senseable.mit.edu/papers/pdf/2020402_Hu-etal_UbiquitousData-Driven_NatureSustainability.pdf) · journal full text | Combines traffic video, origin–destination estimates and an emissions model. Examines how altering inputs changes estimates and applies the method to New York pricing. | Model outputs are sensitive to inputs such as fleet composition and speed variation. | Neither modeled emissions nor before/after changes directly measure air quality or prove the policy's long-term causal effect. Restricted inputs limit reproduction. |
| [Liu et al., 2025](https://senseable.mit.edu/papers/pdf/20250331_Liu-etal_Fiber-Optics_NatureCommunications.pdf) · journal full text | Uses telecommunications fiber to map urban vibration in San José. Compares a local seismic-power time series with environmental noise at one sampled reference location. | Existing infrastructure can provide a useful proxy without a conventional dense seismic array. | A local association is not a calibration across all sites or activity classes. Fiber layout and source properties constrain observation. |
| [Harnessing street shade to mitigate heat stress, 2025](https://pubmed.ncbi.nlm.nih.gov/39674147/) · primary abstract | In-situ Singapore comparison of street shade and local thermal conditions. | Provides an example of measuring thermal conditions separately from computing the shaded fraction of a route. | This is not evidence that a pedestrian chose or completed a given Dubai route. |

## Cross-check: indoor paths and exposure

Wen et al. report comparisons with and without indoor paths. They do not simply assume every mapped passage works: Section 2.2.2 describes on-site checks of entrances and connections. Their sample includes four catchments (Salah Al Din, Emirates Towers, Sobha and The Gardens); the Indoor Contribution Index is shown for three stations with accessible indoor paths. The paper treats typical daytime availability as plausible for included malls and complexes, rather than reporting a route-by-route, hour-specific availability audit. Thus the proposed next step is narrower than redoing their indoor-versus-outdoor comparison: evaluate how the route ranking changes under a verified schedule of doors, crosswalks and mobility constraints.

A 1.3% distance penalty corresponds to 13 m on a 1 km baseline. The abstract uses percentage shorthand for the sun-exposure difference. [Table A.1](https://senseable.mit.edu/papers/pdf/20250911_Wen-etal_WalkingSmart_CEUS.pdf#page=22) reports the **share of outdoor route length** in direct sun: shortest-to-shade-oriented station means are 58.10% to 45.71%, 36.02% to 28.88%, 51.97% to 42.69%, and 35.41% to 28.86%. Their mean paired decrease is 8.84 percentage points (about 8.8 pp), not an 8.8% relative reduction or measured time in the sun. The two averages do not guarantee a gain on any particular trip. We should preserve trip-level distributions and instances where no recommendation can be verified.

## Cross-analysis: validate the last link to the decision

| Layer | Unverified assumption | Direct check |
| --- | --- | --- |
| Network geometry | A listed passage connects entrances in practice. | On-site or operator verification of the end-to-end connection. |
| Temporal access | A connected passage is open at the recommendation time. | Public opening-hours records and date-stamped spot checks. |
| Environmental proxy | Shade predicts the heat burden that matters. | Separate shade estimates from permitted site microclimate measurements. |
| Decision outcome | Pedestrians prefer the route and can follow it. | A distinct, consented user study if needed later; not inferred from graph output. |

The common lesson across traffic telemetry, modeled emissions and fiber sensing is not that more sensors suffice. It is that a proxy must be checked where the decision actually happens. Aggregate traffic sensing does not authorize tracking people or imply that more private data is required for this next test.
