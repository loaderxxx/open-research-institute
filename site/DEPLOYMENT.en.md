# ORI deployment record

[Русский](DEPLOYMENT.md)

<!-- ori-toc:start -->
## Contents

- [24 October 2026 — bilingual analyses for all programme sources](#24-october-2026--bilingual-analyses-for-all-programme-sources)
- [24 October 2026 — source links for every programme](#24-october-2026--source-links-for-every-programme)
- [24 October 2026 — thirteen research programmes release](#24-october-2026--thirteen-research-programmes-release)
- [24 October 2026 — bilingual Markdown release](#24-october-2026--bilingual-markdown-release)
- [7 October 2026 — historical release](#7-october-2026--historical-release)
<!-- ori-toc:end -->

## 24 October 2026 — bilingual analyses for all programme sources

Verified Railway status: **SUCCESS**; service **Online**, one running replica and no pending changes. [Russian source catalogue](https://ori-lab.org/SOURCE_ANALYSES.md) and [English source catalogue](https://ori-lab.org/SOURCE_ANALYSES.en.md).

- Deployed commit: 128239b61a5c8c446f699482084e2a4ec48280ce; branch main; PR #1.
- Tested tree: 8d8940ca6f4cd7e3684110ded553cb2bfa4731bc; local and remote tree equality was verified before release.
- Deployment identifier: 83c1cfda-d190-4061-8876-9e95dff89b64.
- SUCCESS recorded on 24 October 2026 at 21:38:49 UTC.
- The service is pinned to this commit; the subsequent documentation record does not trigger another publication.

All 144 entries in the current literature maps now have initial Russian and English analyses: 39 book entries, 66 studies/resources and 39 researchers/teams. Cards expose a short explanation, an analysis link and the original source; every listed study is shown. The existing 21 thematic reviews remain intact.

Two extended bilingual texts were added: the fully read Locke chapter II.27 and selected sections of Veridical Data Science. Their scope is stated at the beginning; whole-book reading and a printed 20–30-page count are not asserted. Thirty book entries require full text, while seven further open books await close reading.

Before publication, 22 site tests passed together with checks of all 144 initial and two extended language pairs, 418 Markdown documents and 3,355 local links. All 209 language pairs are present. Internal editorial checks included content spot checks and a separate arithmetic review of hypothetical examples; this is not external scientific peer review.

After publication, 325 requests were checked on the primary domain: 292 analysis addresses, two catalogues, 26 programme pages and two libraries returned 200 with expected content; three unapproved internal addresses returned 404. There were no failures. Browser checks covered seven distinct pages: both catalogue languages, the AI programme and both extended readers in both languages; the source-card transition and language switching worked. Catalogue layout and the Russian VDS reader were visually inspected at the current desktop width. No new mobile-width check was performed.

## 24 October 2026 — source links for every programme

Verified Railway status: **SUCCESS**. Main address: [ori-lab.org/en/](https://ori-lab.org/en/); [source library](https://ori-lab.org/en/library/).

- Deployed commit: 9b305335f2e727afeac85cbb14cb27fa2473a4db; branch main.
- Deployment ID: ffbb6b59-c15e-4bfc-8aed-54d2e11d4738.
- Successful launch: 24 October 2026, 18:44 UTC (21:44 Moscow).
- The service is pinned to this commit; subsequent documentation records do not trigger another release.

All 13 programmes now have a visible Materials & sources section with direct external links and a full annotated literature map. Homepage and library cards show counts of books, studies and researchers. The maps contain 39 book recommendations, 66 publications and resources, and 39 researcher and team entries (summed across programmes; some sources recur). Each programme immediately shows three books, the first three studies and three researcher entries; the remaining materials are in the full collection. All 21 published reviews remain available.

Checks: all 21 automated tests passed; 124 Markdown documents and 2,013 local links passed validation; 62 language pairs are prepared. An independent live check made 56 requests: 26 programme pages with source sections, two libraries with 13 collections and 21 reviews each, and 28 map routes returned 200. Browser checks covered seven routes at widths of 1440 and 390 pixels, with no horizontal overflow or JavaScript errors; language switching retains the sources anchor, and the full map opens in the selected language. This release check confirms the presence of external links, but does not recheck the availability of every external website.

## 24 October 2026 — thirteen research programmes release

Status observed: **SUCCESS**; service **Online**, one running instance. Main URL: [ori-lab.org/ru/](https://ori-lab.org/ru/); [English edition](https://ori-lab.org/en/).

- Source repository: loaderxxx/open-research-institute; branch: main.
- Deployed commit: 277714c6347753e5857767ce7bc8ce78ece5b6e4.
- Railway deployment ID: 2d55275e-ea98-4e3f-b8bb-647e8d348cce.
- Successful startup: 24 October 2026, 16:51 UTC (19:51 Moscow time).
- The service is pinned to this commit. Later documentation records do not trigger another release.

The homepage presents 13 programmes in three areas. Six new programmes have bilingual descriptions and research questions in the repository; gathering research materials is their next stage. Methodology and protocols have a [dedicated page](https://ori-lab.org/en/methodology/). The library retains the previous 21 reviews.

Before release, 17 tests passed, 1,741 local links were checked and all 48 language pairs were present. Live browser checks covered 18 page and viewport combinations (1440, 1000 and 390 pixels), with no horizontal overflow. Language switching and business-programme form prefill were verified. The main, www and Railway domains respond successfully. Research requests remain in “Prepare email” mode; no real emails were sent during verification.

## 24 October 2026 — bilingual Markdown release

Status observed: **SUCCESS**. Public website: [ori-lab.org](https://ori-lab.org/en/); [Russian edition](https://ori-lab.org/ru/).

- Source repository: loaderxxx/open-research-institute; branch: main.
- Deployed commit: 5ade894afdced4fa6042492c82168af2a8d85cb6.
- Railway deployment ID: a3bfd1ed-1c70-4570-88ba-37336345fe83.
- Root directory: repository root; start command: npm start; health check: /en/.
- The service is pinned to the deployed commit. Later documentation commits do not automatically deploy.

The public library contains seven programmes and 21 complete reviews in English and Russian. All repository Markdown documents have language pairs: 41 pairs, 82 files. All 21 repository PDFs were removed; primary-source links remain intact. Documents have linked contents, programme descriptions, bibliographies and language navigation.

Verification: 14 HTTP/reader/mail-adapter tests passed; 1,613 local links and anchors resolved; all 21 review pairs have matching numbered sections, paragraph counts and source IDs/URLs. These checks and internal AI-assisted editorial review do not constitute external scientific peer review. The Russian review bodies match the previous source revision after whitespace and heading-format normalization.

Public checks: 78 document URLs returned readable HTML; 21 former PDF routes returned 404; English/Russian routes, www and Railway domain returned 200. Browser checks confirmed language switching and navigation from contents to a section.

Research requests currently use **Prepare email**: the visitor reviews and sends the prepared message in their email application to im@vladimiruzbek.com. Automatic server delivery is not configured or live-tested; no delivery-to-inbox claim is made.

## 7 October 2026 — historical release

Date: 2026-10-07

Status: DEPLOYED

Public URL: https://ori-website-production-c1c8.up.railway.app/
Railway project: Open Research Institute
Railway project ID: 897d4312-a3ce-4d9c-a2dd-217299c17f6c
Service: ori-website
Service ID: b3354820-1c67-4b74-883a-4c15d0799749
Environment: production
Deployment ID: 1fb99147-a5fc-4cae-9714-d6bc487274ff
Deployment status observed: SUCCESS

Public source repository: loaderxxx/open-research-institute
Deployment branch: work/chatgpt/20261007-ori-railway-site
Deployed commit: 89deca8578e365e3c26ea4bbe7e08e5bea9e806f
Root directory: /site

Notes:
- Railway could not access the private research-institute-core repository through its connected GitHub source authorization.
- To keep the private/public boundary intact, the public website was deployed from an isolated branch of the public repository.
- The live site contains the English 13-part web presentation, all seven programme routes, library/evidence links and collaboration section.
- A new QR card was generated separately against the final Railway URL and software-decoded successfully.
- No main-branch merge was performed.
