# Project memory

## Product intent & audience

- Japanese-language web UI built with Vite + React.
- Contains a top menu/navigation and guide/instruction text (案内文) shown to users.

## Brand personality & voice

- Tone: polite, apologetic when acknowledging issues, direct in progress reports.
- Communication language: Japanese.

## Visual design & UX direction

- Text consistency is an active concern: font size, weight, and line height should be unified across top menu labels and expanded menu items.
- Prior fixes addressed guide text sizing but missed inconsistencies in the top menu — always check both guide text and menu text when normalizing typography.
- Preference: same size, same weight, same line height for menu items (closed and open states).

## Decisions, constraints & rationale

- Build verification is performed after each styling change (build must pass before reporting done).
- Iterative UI polish: user reports remaining inconsistencies by location (e.g., "TOP"); assistant inspects and unifies settings.

## Open questions & assumptions

- Assumption: "TOP" refers to the top navigation menu area, not a route or page named Top.
- No global `.bolt/prompt` provided; styling standards are inferred from user feedback each turn.
- Unknown: whether there are other UI areas with text-size inconsistencies beyond top menu and guide text.