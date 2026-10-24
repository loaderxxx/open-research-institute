# ORI deployment record

[Русский](DEPLOYMENT.md)

<!-- ori-toc:start -->
## Contents

- [24 October 2026 — source links for every programme](#24-october-2026--source-links-for-every-programme)
- [24 October 2026 — thirteen research programmes release](#24-october-2026--thirteen-research-programmes-release)
- [24 October 2026 — bilingual Markdown release](#24-october-2026--bilingual-markdown-release)
- [7 October 2026 — historical release](#7-october-2026--historical-release)
<!-- ori-toc:end -->

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
