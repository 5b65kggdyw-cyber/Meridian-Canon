# MERIDIAN — RECOVERED IDENTITY & HOME SCREEN DESIGN SOURCE
**Document ID:** MER-ID-001 (working reference; not a Canon publication)  
**Version:** 0.2.0 — founder-confirmed logo reference  
**Date:** 2026-11-15  
**Status:** MERIDIAN MARK FOUNDER-CONFIRMED (2026-11-15); OTHER DESIGN DECISIONS STILL UNDER REVIEW  
**Purpose:** One readable, durable source for Meridian/Ashlar identity, historic logo, UI design, and first mobile Home Screen rebuild. **This file is not a substitute for the constitutional Canon or founder approval.**

## 1. Source hierarchy and evidence
**Verified visual references (original user library assets):**
1. **MAP-001 — The Meridian Blueprint**, Founder's master architectural plan, approved by the founder 7 July 2026. Recovered image: `BA9F6B8C-46EA-4C32-A69E-E649CB430C7C.jpeg` (ChatGPT Library file ID `file_0000000037ec820d990a8f3cd0b54f17`). This is the controlling visual evidence for the **Meridian Mark** and philosophical architecture. A cropped reference of the **founder-confirmed original mark** is now committed at `assets/branding/meridian-mark-approved-reference.jpg` (compressed extraction from the historical source; **not original vector master**).
2. **Meridian Flourishing App Showcase.png**, recovered high-resolution four-screen concept image (ChatGPT Library file ID `file_00000000f8f081f48de3e90ef7634701`). Illustrates Meridian Home, Life Compass, Ashlar and Reflection, with original five-destination navigation. **Design reference, not evidence that its details are production-approved.** The actual image is **not yet committed as an asset to the repository**.
3. **Meridian_Canon_Stage_One_Publishing_Standard.pdf**, Founder's publishing standard (ChatGPT Library file ID `file_000000000f2871f4867d81395e9ecb2c`). Contains verified colour HEX codes, typography direction and editorial tone; primarily a publishing standard, so don't assume all document colours are mandatory screen colours.
4. **MFD-001_The_Meridian_Constitution_Founders_Edition.pdf**, Founder-approved constitutional text (ChatGPT Library file ID `file_000000008e4c71f49375f536b6af7f5c`).

**Verified repository authority:** `canon-publications/MER-001-MERIDIAN-FOUNDATIONAL-DOCTRINE.md`, `MER-002-MERIDIAN-SYSTEM-ARCHITECTURE.md`, `MER-010-ASHLAR-COGNITIVE-DOCTRINE.md`, `MER-013-MERIDIAN-APP-FOUNDATION.md`, `registers/MER-011-MASTER-ARCHITECTURAL-REGISTER.md`.

**Provisional implementation source:** `working-drafts/MER-201-HOME-SCREEN-RECOVERY.md` and `prototypes/home-screen/SPEC.md` on `feature/home-screen-recovery-mvp`. Not approved Canon. The prototype code has placeholders and may **not** override verified visual references.

**Recovery integrity:** The complete original editable `MAP-001` artwork, the original logo master vectors, and full MFD-004 Design Bible have **not been verified as editable originals**. Do not claim that a traced/reconstructed SVG is the master logo. Keep recovered facts distinct from implementation proposals.

## Approved Meridian Mark — embedded visual reference

![Founder-confirmed original Meridian Mark](../assets/branding/meridian-mark-approved-reference.jpg)

**Founder confirmation:** 2026-11-15. This is the correct logo. The image above is a compressed crop of the original MAP-001 blueprint artwork, not a newly designed logo. For implementation, use this exact design as the source of truth; seek a higher-resolution master before production deployment if needed.

## 2. Meridian — identity
**Name:** Meridian. **Intelligent steward:** Ashlar.  
**Canonical guiding line:** “Technology should disappear. Life should remain.” (Founder's Constitution.)  
**Blueprint line:** “Technology in faithful service of human flourishing.”  
**Purpose:** Strengthen human flourishing through faithful stewardship. The person is sovereign; technology supports judgement, autonomy and life beyond the screen.
**Identity:** Calm life navigation / personal growth operating system; not a high-pressure productivity tracker. Clarity, rhythm, direction, consistency, recovery and reflection over gamification or noise.
**Foundational principles:** Human First; Understanding Before Guidance; Formation Before Programming; Capability in Service of Wisdom; Stewardship Above All; Technology Should Disappear; Human Dignity Remains; Build for Decades; Reflection Before Refinement.
**Behavioural principles:** Identity before activity; consistency over intensity; momentum over perfection; recovery before judgement; Ashlar thinks *with*, never *for*, the person.

## 3. The Meridian Mark — primary corporate identity
**The founder confirmed this exact mark on 2026-11-15. The approved mark is NOT the starburst/asterisk `✺` in the live prototype.** MAP-001 contains the actual design:
- A **rough, textured left ashlar** (unworked stone / possibility).
- A **refined, straight-edged right ashlar** (shaping / formation).
- **One slim, uninterrupted vertical meridian line** passing across/between them (direction, purpose, truth, alignment).
- A restrained, architectural, roughly vertically oriented two-part stone silhouette; textured on left and controlled/geometric on right.
- Wordmark `M E R I D I A N` beneath in restrained, letter-spaced capitals.
- Approved story: “Rough by nature. Aligned by choice.”
- The Meridian Mark unites the Ashlar and the Meridian: a life is shaped and refined through alignment. The vertical line represents direction, purpose and truth.
- In historic illustrations the stone is grey/taupe, and the vertical stroke is muted brass/gold; otherwise deep charcoal/ivory are used.

**Usage:** Primary mark for product identity, app icon, loading screen and brand-critical surfaces; preserve whitespace and geometric integrity. No spinning starburst or generic compass substituted for the stone-and-meridian geometry. Do not present a rough crop, web-drawn approximation or unverified tracing as the approved vector original.

**Secondary/iconographic mark:** The August app showcase uses a **classical temple/pediment icon** in a gold-on-forest-green circular badge as a screen/header/navigation symbol. This is a recovered **interface illustration**, distinct from the approved *primary* stone Meridian Mark. Do not silently replace the main mark with the temple motif.

**Ashlar identifier:** The showcase uses a **minimal gold line portrait/head-and-shoulders inside a fine circular gold outline**, on deep forest green, labelled `ASHLAR` / `The Steward`. This is a verified screenshot motif; original dedicated vector artwork has not yet been recovered.

## 4. Colour system
### A. Exact, sourced Founder's publishing colours (HEX verified)
| Token | HEX | Historical role |
|---|---|---|
| Deep Charcoal | `#171A17` | Primary dark background |
| Warm Card | `#242820` | Dark cards/panels |
| Soft Cream | `#F3EBDD` | Primary text on dark |
| Muted Stone | `#B8AD9B` | Secondary text |
| Meridian Amber | `#C8A15A` | Guidance and emphasis |
| Sage Green | `#8C9B78` | Growth and balance |
| Warm Terracotta | `#A8644B` | Caution without alarm |

### B. Recovered app direction (visual, not exact sampled HEX)
The August showcase shows **warm ivory/paper backgrounds**, **deep forest-green typography and important surfaces**, **brass/gold hairlines and badges**, **subtle warm border/card tones**. Ashlar's page is predominantly **deep forest green** with gold and ivory. Exact app-screen greens and creams have **not yet been formalised into approved design tokens**. Use the historical HEX palette above where applicable, but treat new screen tokens as *proposed* until reviewed. Avoid imposing dark publishing covers on every app screen.

## 5. Typography and editorial voice
- Timeless refined **serif** for prominent headings; clean **humanist sans-serif** for functional labels, controls, metadata and small print.
- Spacious, restrained hierarchy; labels precise, never crowded; avoid oversized generic dashboard cards.
- Voice: warm, calm, honest, precise, enduring; avoid hype, corporate jargon, punishment, shame, manufactured urgency and gamification.
- Approved vocabulary includes: direction, alignment, rhythm, stewardship, reflection, purpose, preparation, return, renew, compass and workshop.
- Ashlar: at most one useful contextual observation on Home. Ashlar's guidance is optional, never controlling.

## 6. Recovered information architecture and navigation
Historical four-screen showcase: **Meridian Home**, **Life Compass**, **Ashlar — The Steward**, **Reflection**; footer also has **You**.
**Preferred five-place navigation for review:** `Meridian | Compass | Ashlar | Reflection | You`.
Each destination has a distinct purpose:
- Meridian: daily focus and rhythm.
- Compass: life areas, values and enduring direction.
- Ashlar: thoughtful two-way guidance (not placeholder AI masquerading as live).
- Reflection: experience, lessons and tomorrow.
- You: account/settings/preferences and personal data controls.
The live prototype's `Business | Projects | Profile` labels were placeholders and should not be mistaken for recovered navigation. Business is an *area of life* in Compass, not necessarily a top-level destination.

## 7. Home Screen — recovered visual intent and information order
**Purpose:** “Your day. Your focus. Your next step.” The user should orient in ~30 seconds.
The August showcase shows:
1. Compact header with temple-style icon at top left and a discreet notifications icon (but primary mark should govern production branding).
2. “Good morning, Luke.” plus short calm supportive subtitle.
3. **TODAY** + date/Calendar link.
4. **3 Most Important Actions** — exactly three concise, time-aware priorities, editable and completable.
5. **Next Appointment** — prominently preview the next calendar commitment.
6. **Daily Rhythm** — compact row of small named habits/routines with gentle indicators.
7. **Ashlar Insight** — exactly one concise optional observation and next step.
8. **Today's Alignment** — gentle progress/alignment indicator; should be hideable if used.
9. Fixed five-place navigation `Meridian | Compass | Ashlar | Reflection | You`.
The MER-201 recovery draft also preserves earlier alternative ordering (habits above priorities, schedule expanded); **final order is not yet Canon-approved**. The showcase above is the best *visual source baseline*, not an unchangeable production instruction.
**“Don't Leave Without”/missed opportunities**, full-day schedule, evening reflection access and two-minute actions appear in earlier architecture; integrate only after confirming how they fit without crowding the first screen.
**Night mode / wind-down:** adapt greeting and guidance to the time of day while retaining access to the full day; no forced mode.

## 8. Screen-by-screen visual guide
**Meridian Home:** pale paper background, deep green serif greeting, restrained gold icons and rules, compact lightly outlined ivory cards. Three priority rows and next appointment before habit chips. Ashlar observation understated, not a dominating AI chat panel.
**Life Compass:** large radial alignment wheel around `HUMAN FLOURISHING`; domains include Self, Family, Business, Home/Farm, Learning, Recreation and Finance (the actual illustration visibly shows these). Gentle focus-area detail below.
**Ashlar:** deep forest green immersive chat, gold line-avatar, restrained outline bubbles/cards, message input and explicit advice choices. Real intelligence is a later secured integration.
**Reflection:** warm ivory, reflective prompts (“What went well?”, “What created friction?”, “What did I learn?”, “What should change tomorrow?”), one Ashlar reflection observation, `Plan Tomorrow` action.

## 9. Build requirements for the iPhone GitHub Pages Home Screen
**Live testing branch:** `feature/home-screen-recovery-mvp`. **Published root:** `index.html` redirects to `prototypes/home-screen/index.html`.
- Build responsive for the user's iPhone first. Footer must respect safe-area inset and not obscure content.
- Make home-screen top content compact; don't bury three priorities under oversized empty habit tiles.
- Use **actual approved mark geometry** from MAP-001 reference. Until master vector is verified, explicitly tag any rebuilt SVG as **faithful vector reconstruction — provisional**.
- Restore five-place historical navigation and present only implemented destinations as interactive. For unbuilt destinations use visibly honest status, not dead links masquerading as functional.
- Preserve functioning editable priorities, habit toggles and local browser persistence from v0.1 until more robust architecture is approved.
- Never imply active calendar connection, AI intelligence, authentication or cross-device sync when absent.
- Do not publish source documents or personal user information into the public site unnecessarily. This repository and GitHub Pages site are public.
- Display behaviour and appearance must not be treated as Canon-approved before founder review and MER-011 registration.

## 10. Explicit open items / no inventions
1. Recover **editable master artwork** or extract clean approved identity from historical source; current images are recovered visual evidence, not vector originals.
2. Founder to confirm which logo usage is principal on iPhone header: stone Meridian Mark (controlling mark) vs temple as small secondary UI motif.
3. Formalise light/dark app colour tokens by sampled reference and accessibility tests.
4. Approve exact Home Screen hierarchy, full-day schedule treatment, “Don't Leave Without”, and morning/evening logic.
5. Confirm original formal Ashlar logo treatment beyond showcase avatar.
6. Promote verified decisions through editorial workflow; update MER-011 only when founder-approved.

## 11. Operating rule for future work
**Read this file, the referenced recovered visual assets and current Canon BEFORE modifying the app.** This is a central *working recovery brief*, not a replacement for sources. If two source documents conflict, surface that conflict rather than quietly rewriting original intent. Recover first; verify; refine; then implement. **Do not let a quick prototype become brand authority.**
