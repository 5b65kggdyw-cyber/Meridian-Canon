# Home Screen — Provisional Build Specification v0.1

**Status:** Prototype contract for testing, NOT a Canon-approved implementation contract.  
**Source:** `working-drafts/MER-201-HOME-SCREEN-RECOVERY.md`, MER-001/002/010/013.

## Target and purpose

Mobile-first responsive web prototype for iPhone and desktop browsers. No login, server, live calendar integration or real AI in v0.1. Persist user-edited data in browser localStorage. Use local device date/time. Work without dependencies.

## UI and interactions

| Area | Requirement | Current prototype |
|---|---|---|
| Greeting | Morning/afternoon/evening greeting and date | Implemented |
| Habits | Compact icon/label row; tap to toggle; no punitive streak | Implemented |
| Three priorities | Exactly 3 editable/completeable rows | Implemented |
| Today's rhythm | Appointments visible in time order; add/remove locally | Implemented as editable schedule |
| Ashlar | One optional, non-coercive next-step suggestion | Deterministic placeholder; **not AI** |
| Momentum | Progress percentage hideable | Implemented |
| Recovery | 'Missed opportunities' neutral handling | Informational note only |
| Reflection | Quiet entry for brief evening note | Implemented |
| Daily modes | Contextually adapt greeting and hint | Implemented |
| Storage | Preserve day-specific changes on same browser | Implemented via localStorage |

## Non-goals for v0.1

Real Google/Apple Calendar sync; authentication; cloud storage; notifications; LLM inference; automated reminders; background intelligence; business modules; finances; analytics dashboards; shipping to the App Store.

## Data shape (prototype only)

- `priorities: [{ id, title, done }]` exactly three entries.
- `habits: [{ id, label, symbol, done }]`.
- `appointments: [{ id, time, title }]`.
- `reflection: string`.
- `showProgress: boolean`.
- State is scoped to local YYYY-MM-DD. Previous days persist locally for possible future recovery but are not analysed.

## Acceptance tests

1. Load on iPhone-sized screen without horizontal scrolling.
2. Edit all three priorities, toggle complete and see state survive reload.
3. Habit row remains calm with no shame messages or punitive streak resets.
4. Add an appointment, sort it chronologically and remove it.
5. Toggle progress display off; preference survives reload.
6. Evening reflection saves and loads after refresh.
7. The 'Ashlar' card is clearly labelled a prototype suggestion, not an active AI connection.
8. No network request is required; works after page load without third-party dependencies.
9. A brand-new date starts with fresh unchecked tasks/habits; previously entered dates remain stored locally.

## Decisions required before production

Storage and synchronisation strategy; identity/security; ownership of task data; exact schedule hierarchy; authentication; accessibility review; calendar permissions; Ashlar service boundary; notification strategy; offline behaviour; backup and data export; error handling.
