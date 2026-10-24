# ORI bilingual website — local implementation

[Русский](README.md)

Status: prepared locally, not deployed. The historical production record is in DEPLOYMENT.md and does not describe this revision.

## Run and verify

From the repository root run `npm start`; open http://localhost:3000/en/ or http://localhost:3000/ru/. Run `npm test` for HTTP and mail-adapter tests. They use an injected fake mail provider and send no email. Run `npm run translations` to regenerate the public-document translation inventory. English is the default site language. A translated catalogue does not mean the linked full reviews are translated.

The server serves an explicit public-file allowlist, including catalogue-listed PDFs and Markdown files. It does not expose server source or configuration. Keep the full repository in the deployment build context: this version needs the catalogue and review files outside `site/`. If deploying to Railway, change the service root from `/site` to the repository root and use `npm start`, only after release authorization. Do not change the existing deployment merely to preview this work.

## Research requests

Recipient approved by the owner: **im@vladimiruzbek.com**, fixed server-side. Fields: topic (3–180 characters), question (10–6000), sender email, optional name (up to 120), and a hidden anti-spam field. Requests use `POST /api/research-requests` with JSON. The name, email and message are sent through the configured mail provider to the owner for consideration; submitting does not promise an investigation or response deadline. Do not ask visitors for sensitive information.

The prepared adapter uses the [Resend send-email API](https://resend.com/docs/api-reference/emails/send-email). No provider account was created, spending authorized, domain configured or mail sent. Configure `RESEND_API_KEY`, `MAIL_FROM` (an authorized, verified sender), and exact `SITE_ORIGIN` (scheme and host, no trailing slash) in the hosting secret settings. Never put secrets in Git or chat. The Node process must receive these environment variables; `.env.example` is documentation, not an automatically loaded configuration.

Without configuration, valid submissions return 503 and visitors can use the visible direct email link. A 202 response means the provider accepted the message, not proof it reached the inbox. Provider errors return 502; failed submissions are not silently stored. The application logs neither message bodies nor API keys.

The server validates input, requires same-origin JSON, caps request sizes, applies a honeypot and limits requests. The in-memory limit is five attempts per socket IP per 15 minutes and resets on restart. Behind a reverse proxy visitors may share the same limit; forwarded IP headers are deliberately not trusted. Before public traffic, configure a trusted edge rate limit and verify proxy behavior. Multiple server instances do not share this counter. Identical accepted requests are deduplicated in memory for 15 minutes and use a stable provider idempotency key. No durable application inbox or retry queue is implemented.

## Release checks still required

- Confirm configured sender and provider account with the owner.
- Verify delivery to the approved inbox, including Reply-To, with one explicitly authorized live test.
- Verify both languages, mobile layout, catalogue/document links, errors and anti-spam behavior on the target host.
- Complete and review the missing full translations and downloadable presentation editions before describing the entire corpus as bilingual.
- Obtain authorization covering publication/deployment. Existing production remains unchanged.
