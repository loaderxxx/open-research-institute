# Eckert et al. (2025) — Capturing nematic order on tissue surfaces of arbitrary geometry

[Русский](study-04.md)

**Access.** Checked 24 October 2026: indexed abstract, approach, discussion and availability sections of the Nature Communications article. Code was not run and images were not reanalysed.

The authors measure orientational order on reconstructed tissue surfaces using local tangent planes. Demonstrations include cellular aggregates and zebrafish hearts. The approach preserves geometrical information that flat projections of volumetric images can lose; MATLAB code and data are listed as open. The principal contribution is a measurement method.

**ORI critical analysis.** Nematic order describes alignment of axes without necessarily distinguishing their directions. High order therefore cannot automatically be interpreted as coordinated movement, polarity or a particular force field. These are separate biological claims requiring additional observations. Geometrical agreement with a model should not replace evidence about the mechanism generating that geometry.

A future reproduction should distinguish imaging error, surface-reconstruction error and orientation-estimation error. All three may become stronger in the same region, creating an apparent relationship between curvature and organisation. Useful checks would vary resolution and smoothing and include artificial surfaces with known orientation fields. Counting defects cannot be separated from the scale at which the algorithm treats neighbouring features as distinct.

For ORI, the paper links cellular imaging with collective architecture and is particularly relevant to selecting tissue datasets. Statistical claims about biology should nevertheless be separated from demonstrations that a computational method works. The next step is to inspect available examples and test the stability of one geometrical association under alternative reconstruction settings while preserving physical image dimensions. Mechanical interpretation should follow that evaluation. Comparison with flat Cell Painting profiles also requires a clear account of which properties are shared between measurements and which are absent from one representation. This initial entry supplies that distinction; it does not establish that the published pipeline has already been reproduced or validated for a new tissue.

**Sources:** [article](https://doi.org/10.1038/s41467-025-62694-x); [archive identified by the authors](https://doi.org/10.5281/zenodo.15509350).
