# Site: theAIFolks.com

The public publishing platform for Two Hills Lab's domain reports.

Status: ☑ Brainstorm (grilled thesis) ☑ Design ☑ Build (live on GitHub Pages, /docs — custom-domain DNS + form service still pending, see DEPLOY.md)

**Hosting decision:** GitHub Pages — static output only. No server-side rendering, no backend, no database. Implications for later Build phase: the site must be a static site generator (Jekyll has native GitHub Pages support; Astro/11ty/Hugo work via GitHub Actions) or plain static HTML. Email capture (see design spec §7) needs a third-party static-friendly form service (e.g. Buttondown, ConvertKit, Formspree) — GitHub Pages cannot run capture logic itself.

- `01-brainstorm/grill-me-log.md` — the grill session that resolved reference class, audience, trust mechanic, and access model
- `design-brief.md` — synthesized brief handed to the design agent
- `design/` — design agent output (architecture, visual direction, mockup) — populated once the design pass completes

This is planning/design work for a platform that doesn't have a codebase yet — separate from `domains/` (the content pipeline) and `publishing/checklist.md` (the pre-publish evidence gate for article content itself).
