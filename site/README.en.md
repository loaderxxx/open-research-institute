# ORI bilingual website

[Русский](README.md)

Published on 24 October with the owner’s authorization. See [the deployment record](DEPLOYMENT.en.md) for the verified commit, checks and current email-delivery mode.

<!-- ori-toc:start -->
## Contents

- [Run and verify](#run-and-verify)
- [Research requests](#research-requests)
- [Mail activation and release verification](#mail-activation-and-release-verification)
<!-- ori-toc:end -->

## Run and verify

From the repository root run `npm start`; open http://localhost:3000/en/ or http://localhost:3000/ru/. Run `npm test` for HTTP and mail-adapter tests. They use an injected fake mail provider and send no email. Run `npm run translations` to regenerate the public-document translation inventory. English is the default site language. The full review editions are tracked in `data/translation-status.json`; automated checks do not replace semantic review. Run `npm run format:docs` to rebuild linked contents and bilingual navigation; `npm run check:docs` validates local files and section anchors. `npm run check:translations` compares numbered review sections, paragraph counts, and source identifiers/URLs. These are structural checks, not a certification of semantic equivalence.

The server serves an explicit public-file allowlist, including catalogue-listed English and Russian Markdown files. It does not expose server source or configuration. Keep the full repository in the deployment build context: this version needs the catalogue and review files outside `site/`. If deploying to Railway, change the service root from `/site` to the repository root and use `npm start`, only after release authorization. Do not change the existing deployment merely to preview this work.

## Research requests

Recipient approved by the owner: **im@vladimiruzbek.com**, fixed server-side. Fields: topic (3–180 characters), question (10–6000), sender email, optional name (up to 120), and a hidden anti-spam field. Requests use `POST /api/research-requests` with JSON. The name, email and message are sent through the configured mail provider to the owner for consideration; submitting does not promise an investigation or response deadline. Do not ask visitors for sensitive information.

The prepared adapter uses the [Resend send-email API](https://resend.com/docs/api-reference/emails/send-email). No provider account was created, spending authorized, domain configured or mail sent. Configure `RESEND_API_KEY`, `MAIL_FROM` (an authorized, verified sender), and exact `SITE_ORIGIN` (scheme and host, no trailing slash) in the hosting secret settings. Never put secrets in Git or chat. The Node process must receive these environment variables; `.env.example` is documentation, not an automatically loaded configuration.

Without configuration, the website offers “Prepare email”: it builds a mailto link containing the entered topic and question, and the visitor sends it through their own email application. No POST is made in this mode. The API still returns 503 for direct unconfigured submissions. A 202 response in server mode means the provider accepted the message, not proof it reached the inbox. Provider errors return 502; failed submissions are not silently stored. The application logs neither message bodies nor API keys. `SITE_ORIGINS` supports a comma-separated allowlist when the site has multiple domains; it takes precedence over `SITE_ORIGIN`.

The server validates input, requires same-origin JSON, caps request sizes, applies a honeypot and limits requests. The in-memory limit is five attempts per socket IP per 15 minutes and resets on restart. Behind a reverse proxy visitors may share the same limit; forwarded IP headers are deliberately not trusted. Before public traffic, configure a trusted edge rate limit and verify proxy behavior. Multiple server instances do not share this counter. Identical accepted requests are deduplicated in memory for 15 minutes and use a stable provider idempotency key. No durable application inbox or retry queue is implemented.

## Mail activation and release verification

- Confirm configured sender and provider account with the owner.
- Verify delivery to the approved inbox, including Reply-To, with one explicitly authorized live test.
- Verify both languages, mobile layout, catalogue/document links, errors and anti-spam behavior on the target host.
- Review the English and Russian Markdown editions for semantic equivalence.
- Publication was authorized by the owner on 24 October 2026. Record each verified release and its commit separately.
