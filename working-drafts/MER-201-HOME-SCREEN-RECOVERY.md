# MER-201 — Home Screen Architecture (Recovery Draft)

**Status:** WORKING RECOVERY — NOT CANON APPROVED  
**Domain:** Experience  
**Family:** Home Screen Architecture  
**Architectural level:** Level 2  
**Version:** 0.1.0-recovery  
**Date:** 2026-11-15  
**Depends on:** MER-001, MER-002, MER-010, MER-013  
**Proposed next artifact:** MER-202 Experience Domain Implementation Contract

## Provenance and caution

This is **not** represented as a verbatim recovery of the original MER-201 publication. The original file is absent from `main`. It synthesises (a) verified repo documents, principally MER-001/002/010/013, and (b) recovered 6–7 July and 10 August 2026 design decisions from previous user conversations. Original legacy draft, complete historical copy, and ZIP contents still require verification. Draft must be reviewed before promotion and MER-011 registration.

## Recovered intent

The Home Screen is Meridian's calm daily threshold: within approximately 30 seconds the user can see what matters and choose the next realistic action. It should feel premium, wholesome, simple, and non-punitive. The Home Screen presents information owned by tasks, calendars, habits and planning; it does not become their source of truth.

## Recovered constraints

- Exactly three prominent focus-priority slots; tasks can be checked and edited.
- Habits are compact icons with gentle progress, no shame, punishment, excessive gamification or aggressive streaks.
- Today's calendar and time-sensitive commitments remain visible; original user direction includes full-day schedule.
- Greeting adapts to time of day; morning, afternoon, evening and recovery contexts are relevant.
- Ashlar provides at most one concise, contextual, optional suggestion; silence is better than irrelevant guidance.
- Progress percentage is optional and hideable.
- Missed opportunities should support recovery, not imply failure.
- Visual direction: quiet layout, warm typography, green accents, soft white/slate/deep charcoal, controlled whitespace.
- Do not crowd Home with financial widgets, business dashboards, charts, noisy gamification or multiple AI cards.
- Two-minute actions and steady progress should feel possible.

## Known source tension (resolve in product review)

Earlier drafts vary in display order. One source prioritises Greeting → Ashlar suggestion → Three priorities → Don't Leave Without → Today's Rhythm → Habits → Reflection. Another user-approved draft places Habits → Three priorities → Schedule → Coach beneath the greeting. Preserve this as an unresolved ordering choice, not a fabricated settled rule. The prototype uses **Habits then Three Priorities**, with appointment and suggestion nearby, because this aligns with the explicit statement that habits/progress are essential.

## Ownership boundaries

- Home: summary and interaction surface.
- Tasks: task records and completion.
- Calendar: appointment records.
- Habits: routines and daily completion.
- Ashlar: optional interpreted guidance, not autonomous decision-making.
- Reflection: separate entry point, quieter outside the evening.

## Recovery decisions pending

1. Confirm final visual order and whether schedule appears as expanded full-day or preview.
2. Verify legacy original MER-201 and MER-100/101–106 against historical source materials.
3. Approve the recovered publication; only then publish to Canon and update MER-011.
4. Convert validated behaviour into MER-202 implementation contract.

## Traceability

See `prototypes/home-screen/SPEC.md` for an explicitly **provisional** build specification and test coverage. The prototype must not silently become Canon authority.
