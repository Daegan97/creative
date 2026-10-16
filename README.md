# Portfolio site (GitHub Pages)

Static site: `index.html` (home), `slow-and-steady.html` and `ms-paint.html` (case studies), `site.css`, `work.json`, `assets/`.

## Swap in a new ad (no HTML editing)
1. Put the creative in `assets/`: a JPG poster (about 800px wide) and, for videos, an optional silent MP4 (540×960, under ~3 MB).
2. Add an item to `work.json`:
   `{ "title": "…", "format": "Video" or "Static", "spend": 12345, "poster": "assets/….jpg", "video": "assets/….mp4", "vertical": true, "angle": "one line" }`
3. Update `spend` on the others (Crew Live → your page → Lifetime) and the `updated` date.
4. The wall shows items with `spend >= minSpend` (now 500), biggest first. Add `"case": "page.html"` to show a Case study badge.

Ask Claude: "add [ad name] to my portfolio wall" and it will pull the spend, make the poster and update `work.json`.

## Publish
Repo `Daegan97/Daegan97.github.io` (or a project repo) with these files at the root; GitHub Pages serves `index.html`.
