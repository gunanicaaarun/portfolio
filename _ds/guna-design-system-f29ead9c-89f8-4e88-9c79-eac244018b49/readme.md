# Guna Design System

A design system for **Guna's** personal product portfolio and writing site. Friendly but neat: warm lavender grounds, an editorial serif for headlines, a clean sans for everything else, and a small set of hand-drawn marks used once per region.

## Sources

No codebase, Figma file, brand kit, or logo was supplied. The brief was:

- Two screenshots of **aliabdaal.com** (`uploads/Screenshot 2026-09-20 at 6.05.57 PM.png`, `uploads/Screenshot 2026-09-20 at 6.06.02 PM.png`), supplied as *inspiration only* — the user has no rights to that brand. Nothing was copied from them: no colours, no logo, no illustrations, no copy. What was taken is structural: a warm non-white page ground, oversized serif headlines, one hand-drawn mark per heading, large soft-cornered cards carrying an accent tint, and a pill primary button.
- A written brief: lavender shades (not too dark), friendly but neat and professional, very few doodles.
- Form answers: brand name "Guna's design", a product **portfolio website** plus **blog / article pages**, page ground `#F7F5FC`, serif headline + clean sans body, doodles limited to underlines, circles and arrows.

Everything else in this system was authored from scratch.

**There is no logo.** Wherever a mark would go, the word *Guna* is set in Newsreader 600. See `guidelines/brand-wordmark.html`.

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | Root entry — `@import` list only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css` |
| `components/core/` | Button, IconButton, Card, Badge, Tag, Avatar, TextLink, Doodle, Icon |
| `components/forms/` | Input, Textarea, Select, Checkbox, Radio, Switch |
| `components/feedback/` | Callout, Toast, Tooltip, Dialog |
| `components/navigation/` | NavBar, Tabs |
| `ui_kits/portfolio/` | Home, case study, about + contact (`index.html` is the clickable kit) |
| `ui_kits/blog/` | Writing index, article reading view |
| `guidelines/` | 19 specimen cards: colours, type, spacing, brand |
| `assets/doodles/` | The eight hand-drawn marks as standalone SVGs |
| `SKILL.md` | Agent-skill wrapper for use outside this project |

### Components

Core — **Button**, **IconButton**, **Card**, **Badge**, **Tag**, **Avatar**, **TextLink**, **Doodle**, **Icon**.
Forms — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**.
Feedback — **Callout**, **Toast**, **Tooltip**, **Dialog**.
Navigation — **NavBar**, **Tabs**.

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage example, variants).

**Intentional additions** — no source defined a component inventory, so the standard set above was authored. Two are brand-specific rather than generic:
- **Doodle** — the hand-drawn marks are a brand motif, so they need a component rather than pasted SVG.
- **Icon** — a wrapper over a curated Lucide subset, so icons can't drift in size or stroke weight.

---

## Content fundamentals

**Voice.** First person singular, present tense, no throat-clearing. The site is one person talking, not a company. "I design software that gets out of the way." Never "we deliver bespoke digital experiences."

**Address.** *I* for the author, *you* for the reader, and only where it's natural. Avoid "we" unless describing an actual team in a case study — inside case studies "we" is correct and used freely ("we spent the first six weeks not designing").

**Sentence shape.** Plain declaratives, varied length, one idea each. A paragraph is two to four sentences. Specific numbers over adjectives: "nine taps to two", "eleven planning sessions", "retention rose 31%" — not "dramatically improved".

**Understatement is the house style.** The strongest claims are delivered flattest. "The habit tracker never came back. Nobody has asked for it." Dry closing lines are welcome; exclamation marks are not.

**Casing.** Sentence case everywhere — headlines, buttons, labels, nav. The only uppercase is the tracked-out eyebrow (`Case study — 2025`). Title Case is never used.

**Headlines.** Short and concrete, six words or fewer where possible, often with one word marked by a doodle: "Selected work", "How I can help", "Notes on making *smaller things*". Questions are allowed and read as friendly ("What's this about?").

**Buttons and labels.** Verb-first and specific: "See the work", "Read the case study", "Send", "Subscribe". Never "Submit", "Learn more", "Click here".

**Microcopy.** Helpful and brief, sets expectations honestly: "A sentence is plenty.", "One email, first Tuesday.", "I'll reply within a couple of days." Hints explain *why* a field exists, not what it is.

**Errors.** Plain, non-blaming, no error codes in the UI: "That doesn't look like a URL." "Couldn't send that — try again in a moment."

**Punctuation.** Em dashes sparingly, one per paragraph at most. Serial commas. Numerals for anything countable ("6 min read", "2025"). British spelling.

**Emoji: never.** Not in headings, not in buttons, not in the newsletter. The warmth comes from the doodles and the lavender, not from glyphs. Unicode symbols are not used as icons either — every icon is a Lucide glyph via `Icon`.

---

## Visual foundations

**Colour.** One lavender ramp (`--lav-50` → `--lav-900`) does almost everything. The light end carries surfaces; `--lav-600`/`700` carry actions and links; `800`/`900` appear only in text on tinted grounds. Four companion accents — butter, sky, sage, blush — exist at 200/400/600 for card tints, illustration fills and status. **One accent tone per surface**, and never as a page ground. Neutrals are warm-leaning and never pure black; darkest ink is `#241F31`. No gradients anywhere.

**Type.** Newsreader (serif) for display sizes 24px and up; Plus Jakarta Sans for 19px and below plus all UI; JetBrains Mono for dates, counts and versions only. Display type is 600 weight with `-0.022em` tracking at the largest sizes. Body is 17/1.65 over a 66-character measure; leads are 21/1.55 over 44 characters. Minimum size in UI is 13px.

**Spacing.** A 4-based scale from 4 to 128. Sections are 96px apart (56px tight), card padding is 28px (40px for large cards), heading→body is 16px, eyebrow→heading is 12px. Page max-width 1200px with 64px gutters; prose columns 720px.

**Backgrounds.** Flat colour, always. The page is `--lav-50`; cards are white or one accent tint. No photography behind text, no full-bleed imagery, no repeating patterns, no textures, no grain, no noise overlays. The inverse ink panel (`#241F31`) is the one high-contrast moment per page — used for the newsletter block.

**Imagery.** Nothing was supplied, so every image in the kits is a `Placeholder` block. When real imagery arrives it should be warm, naturally lit and lightly desaturated — never cool, never black and white, never heavily filtered. Corner radius `--radius-media` (16px); portraits go to `--radius-2xl` (36px).

**Doodles.** Eight marks in `assets/doodles/`: underline, double underline, circle, curved arrow, straight arrow, squiggle, star, bracket. Rules: one mark per screen region, never two touching, never over body copy, never inside a button or a control. Stroke is 3px-ish, `--doodle-primary` (lav-400) or `--doodle-accent` (butter-400). They mark a single word in a heading or point at one thing.

**Corners.** 6 / 10 / 14 / 20 / 28 / 36 plus the pill. Cards 20, panels and dialogs 28, inputs and selects 12, media 16, buttons and tags always pill.

**Borders.** Hairline `#E7E3F0` for dividers and card outlines; `#D5D0E0` for control borders; `#B7A4E7` for a focused control. 1px everywhere. No coloured left-border accent bars — tinted fills do that job.

**Shadows.** Five steps, all lavender-tinted `rgba(58,48,85,…)`, never neutral grey. Cards rest at `--shadow-sm` and lift to `--shadow-md`; dialogs use `--shadow-xl`. Inner shadows are not used except the optional `--shadow-inset` highlight. Elevation is carried by shadow, never by a heavier border.

**Transparency and blur.** Only two places: the dialog scrim (`rgba(36,31,49,0.34)` + 10px backdrop blur) and the white overlay inside accent cards (`rgba(255,255,255,.55)`) that lets a media block sit on a tint. Text is never set at reduced opacity — muted text uses a token colour instead.

**Animation.** Short and unshowy. 140ms for hover and focus, 220ms for cards and toggles, 380ms for panels, 600ms for route changes. Standard easing is `cubic-bezier(.22,.61,.36,1)`; soft-out `(.16,1,.3,1)` for travel (switch knob); the one overshoot curve `(.34,1.4,.64,1)` is reserved for a doodle or badge appearing. No bounces on layout, no parallax, no scroll-jacking, no looping ambient motion.

**Hover.** Buttons darken by one ramp step — never lighten, never change the label colour. Cards lift 2px and deepen one shadow step. Links deepen the underline from lav-300 to lav-500 and darken the text; a trailing arrow slides 2px right. Ghost controls take a `--lav-50`/`--ink-100` wash.

**Press.** Darken one further step, drop the shadow, scale to 0.98. No ripples.

**Focus.** `--ring-focus` — a 3px lav-400 halo at 45% — on every interactive element. Focus is never removed.

**Layout.** Left-aligned, single 1200px column, generous whitespace. Content grids are 2-up on the portfolio and 3-up for the "how I can help" row. Nothing is fixed or sticky — the header scrolls away with the page. The footer is a hairline rule and two short columns.

**Density.** Low. When in doubt, remove a row rather than tighten the leading.

---

## Iconography

- **Lucide** ([lucide.dev](https://lucide.dev), ISC) is the icon set. No icon system was supplied with the brief, so Lucide was chosen as the closest match to the brand's even-weight, round-capped line style — **flagging this as a substitution.**
- Glyph path data for a curated 26-icon subset is inlined in `components/core/Icon.jsx` so the system has no runtime CDN dependency. Names: arrowRight, arrowUpRight, arrowLeft, chevronDown, chevronRight, check, x, plus, minus, search, mail, menu, externalLink, clock, calendar, bookmark, star, heart, user, fileText, layers, sparkles, play, github, linkedin, quote.
- Always use `<Icon name="…" />`; never paste raw SVG into a screen. To add a glyph, copy its path from Lucide into `GLYPHS` — same 24px grid, 2px stroke, round caps and joins.
- Sizes: 16 inline with text, 20 default and in buttons, 24 in nav and section headers. `strokeWidth` stays at 2 below 32px, 1.5 above.
- Icons inherit `currentColor`. They are never filled, never multicoloured, never given their own accent colour.
- **Doodles are not icons.** They live in `assets/doodles/` and go through the `Doodle` component, which follows different rules (see Visual foundations).
- **No emoji, ever.** No unicode symbols standing in for icons either — arrows are `Icon`, not `→`.

---

## Substitutions to confirm

- **Fonts.** No binaries were supplied. Newsreader, Plus Jakarta Sans and JetBrains Mono are loaded from Google Fonts in `tokens/fonts.css`. Swap in licensed files and replace that `@import` with real `@font-face` rules if the brand has its own faces.
- **Icons.** Lucide, as above.
- **Imagery.** All stubbed with `Placeholder`.
