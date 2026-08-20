# Deploying theAIFolks.com (Two Hills Lab)

The site is plain static HTML/CSS/JS in `/docs` — no build step, no dependencies, no
GitHub Actions. GitHub Pages serves the folder as-is.

## 0. Preview locally (before anything else)

```
cd docs && python3 -m http.server 8000
```

Open http://localhost:8000. Everything — navigation, evidence-log filters, the
problems-index filter — works from the local server. It also works opened as plain
`file://` pages, except directory links (`problems/`), which need a server.

## 1. Enable GitHub Pages from /docs

1. Commit and push this repository to GitHub (default branch).
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment**: Source = **Deploy from a branch**;
   Branch = your default branch, Folder = **/docs**. Save.
4. Wait for the first deploy (a minute or two). The site appears at
   `https://<username>.github.io/<repo>/`.

Notes:
- `docs/.nojekyll` is committed so Pages serves the files verbatim instead of running
  them through Jekyll. Keep it.
- **Base-path caveat:** every internal link in the site is *relative* (`../`,
  `problems/`, `assets/…`), so the site works identically at the project path
  (`https://<user>.github.io/<repo>/`) and at the custom-domain root
  (`https://www.theaifolks.com/`). Keep it that way — do not introduce
  absolute paths starting with `/`, or the project-path preview will break.
  The only absolute URLs in the source are the two share links (LinkedIn / copy-link),
  which intentionally point at `https://www.theaifolks.com/…` — they become correct
  once the custom domain is live.

## 2. Custom domain: www.theAIFolks.com

`docs/CNAME` is already committed containing `www.theaifolks.com` (Pages requires the
file; lowercase is conventional — domains are case-insensitive).

1. At your DNS provider for `theaifolks.com`, create:
   - **CNAME record**: host `www` → `<username>.github.io.`
   - For the apex `theaifolks.com` → either your provider's ALIAS/ANAME to
     `<username>.github.io`, or the four GitHub Pages A records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (and optionally AAAA: `2606:50c0:8000::153` … `:8003::153`).
2. On GitHub: **Settings → Pages → Custom domain** → enter `www.theaifolks.com` → Save.
   GitHub verifies DNS; once verified, check **Enforce HTTPS** (may take up to a day
   for the certificate).
3. With both records set, `theaifolks.com` redirects to `www.theaifolks.com`.

If GitHub ever reports the CNAME file conflicting with the Pages setting, the setting
wins — re-saving the custom domain rewrites `docs/CNAME`.

## 3. Email capture: create the form and replace the placeholder

Every subscribe/notify form currently posts to a placeholder:

```
action="https://formspree.io/f/TODO-replace-with-real-form-id"
```

1. Create a free account at https://formspree.io (or any static-friendly form service —
   Buttondown and ConvertKit also work; only the `action` URL changes).
2. Create one form; note its endpoint, e.g. `https://formspree.io/f/abcd1234`.
   One form is enough — every submission carries a hidden `context` field
   (`home-subscribe`, `notify-fashion`, `notify-real-estate`, `end-of-article`, …)
   so you can tell placements apart in the dashboard.
3. Replace the placeholder in all files at once:

   ```
   grep -rl 'TODO-replace-with-real-form-id' docs/ | xargs sed -i '' 's/TODO-replace-with-real-form-id/abcd1234/g'
   ```

   Files containing forms: `docs/index.html` (6 forms), `docs/about.html`,
   `docs/domains/fashion/index.html`, `docs/domains/fashion/report.html`.
4. Submit one test email from the live site and confirm it arrives.

## 4. Pre-publish checklist (before calling Fashion "Published")

The Fashion article is content-complete but has **not** passed final editorial
sign-off. It ships labeled "Preview — final review pending" everywhere. When sign-off
happens:

- [x] Final editorial review of `docs/domains/fashion/report.html` against
      `domains/fashion/03-article/draft.md` (and the repo's `publishing/checklist.md`).
      Done 2026-08 — user sign-off; checklist pass recorded in session log.
- [x] Remove the preview banner — done 2026-08.
- [x] Update status wording to "Published" + date (report byline, fan-out card,
      home card, summary kicker, status chips) — done 2026-08.
- [ ] Re-run the sanity greps: `grep -ri 'theafolks' docs/` (must be empty — that's
      the old misspelling), `grep -r 'TODO-replace' docs/` (must be empty).
- [ ] Confirm the evidence log still matches `domains/fashion/00-research/sources.md`
      (80 rows). If sources.md changed, regenerate the two embedded tables with the
      generator script (see below).

## 5. Updating the evidence log later

The 80-row table embedded in `report.html` and `research.html` is generated from
`domains/fashion/00-research/sources.md` — one source of truth. If sources.md
changes: restore the `<!--EVIDENCE_ROWS-->` placeholder inside the two
`<tbody data-evidence-rows>` elements (delete the generated `<tr>` rows), then re-run
the generator script (`gen_evidence.py`, kept in the build session's scratchpad —
or re-create it: it parses the numbered tables of sources.md and emits one `<tr
id="src-N" data-tier="…">` per source plus group-header rows).

## 6. What deployment does NOT include

- No analytics, no cookies, no external CDNs, webfonts, or third-party JS — the only
  external endpoint is the form service you configure in step 3.
- No paywall, no accounts, no comments — by design (see `site/design/architecture.md` §10).
